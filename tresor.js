/* Tresor: Während die Kamera läuft, geht jede Sekunde der Aufnahme verschlüsselt ins Netz.
   Nimmt jemand das Handy weg oder löscht darauf, bleibt alles, was bis dahin hochgeladen war.
   - Die Aufnahme wird dafür NICHT angehalten: MediaRecorder liefert ohnehin jede Sekunde ein Stück (app.js),
     dieselben Stücke gehen hier zusätzlich in eine Warteschlange und werden der Reihe nach hochgeladen.
   - Schlüssel und Tresor-Nummer entstehen nur aus dem Abholcode (16 Zeichen). Der Server sieht Zufalls-IDs und
     verschlüsselte Bytes. Einen Löschweg gibt es nicht; der Server löscht selbst nach 7 Tagen.
   - Abholen geht auf jedem Handy mit dem Code (Ansicht #tresor). */
(function () {
  "use strict";
  var LS_CODE = "rb-tresor-code-v1", LS_URL = "rb-tresor-url";
  var DEFAULT_URL = "https://ruhig-bleiben-tresor.ruhig-bleiben-tresor.workers.dev"; // Cloudflare Worker + R2 (EU), siehe ../tresor/README.md
  var ABC = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"; // Crockford: ohne I, L, O, U – nichts zum Verwechseln
  var MAX_PART = 3.5 * 1024 * 1024, GAP_MS = 1500; // unter dem Server-Limit von 4 MB; höchstens ein Upload alle 1,5 s (Server bremst ab 60/min)
  var enc = new TextEncoder(), dec = new TextDecoder();

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }
  (function () { var m = /[?&]tresor=([^&#]+)/.exec(location.search); if (m) lsSet(LS_URL, decodeURIComponent(m[1]) === "0" ? null : decodeURIComponent(m[1])); })();
  function baseUrl() { return (lsGet(LS_URL) || DEFAULT_URL).replace(/\/+$/, ""); }
  function ok() { return !!(baseUrl() && window.crypto && crypto.subtle && window.fetch); }

  function newCode() {
    var b = new Uint8Array(16), s = ""; crypto.getRandomValues(b);
    for (var i = 0; i < 16; i++) s += ABC[b[i] & 31];
    return fmt(s);
  }
  function norm(s) {
    s = String(s || "").toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1").replace(/[^0-9A-Z]/g, "");
    if (s.length !== 16) return null;
    for (var i = 0; i < 16; i++) if (ABC.indexOf(s[i]) < 0) return null;
    return s;
  }
  function fmt(s) { s = norm(s) || s; return s.slice(0, 4) + "-" + s.slice(4, 8) + "-" + s.slice(8, 12) + "-" + s.slice(12, 16); }
  function hex(buf) { return Array.prototype.map.call(new Uint8Array(buf), function (x) { return x.toString(16).padStart(2, "0"); }).join(""); }
  function randHex(n) { var b = new Uint8Array(n); crypto.getRandomValues(b); return hex(b); }
  function idx6(n) { return String(n).padStart(6, "0"); }

  // Aus dem Code: Tresor-Nummer (öffentlich im Pfad) und AES-Schlüssel (verlässt das Handy nie).
  var keyCache = {};
  function keys(code) {
    var c = norm(code);
    if (!c) return Promise.reject(new Error("code"));
    if (keyCache[c]) return keyCache[c];
    var salt = enc.encode("ruhig-bleiben-tresor-v1");
    keyCache[c] = crypto.subtle.importKey("raw", enc.encode(c), "HKDF", false, ["deriveBits", "deriveKey"]).then(function (base) {
      return Promise.all([
        crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt: salt, info: enc.encode("vault-id") }, base, 128),
        crypto.subtle.deriveKey({ name: "HKDF", hash: "SHA-256", salt: salt, info: enc.encode("vault-key") }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"])
      ]);
    }).then(function (r) { return { vault: hex(r[0]), key: r[1] }; });
    keyCache[c].catch(function () { delete keyCache[c]; });
    return keyCache[c];
  }
  // Pfad als Zusatzdaten: Ein Stück lässt sich nicht unbemerkt an eine andere Stelle schieben.
  function seal(k, rec, i, bytes) {
    var iv = new Uint8Array(12); crypto.getRandomValues(iv);
    return crypto.subtle.encrypt({ name: "AES-GCM", iv: iv, additionalData: enc.encode(rec + "/" + idx6(i)) }, k.key, bytes).then(function (ct) {
      var out = new Uint8Array(12 + ct.byteLength); out.set(iv, 0); out.set(new Uint8Array(ct), 12); return out;
    });
  }
  function open(k, rec, i, buf) {
    var b = new Uint8Array(buf);
    return crypto.subtle.decrypt({ name: "AES-GCM", iv: b.slice(0, 12), additionalData: enc.encode(rec + "/" + idx6(i)) }, k.key, b.slice(12));
  }
  function put(k, rec, i, body) {
    return fetch(baseUrl() + "/v1/" + k.vault + "/" + rec + "/" + idx6(i), { method: "PUT", body: body, headers: { "Content-Type": "application/octet-stream" }, cache: "no-store" })
      .then(function (res) { return res.status; });
  }

  /* Eine laufende Aufnahme. push() nimmt jedes Sekunden-Stück, die Pumpe lädt streng der Reihe nach hoch.
     Scheitert ein Upload (kein Netz), bleibt das Stück in der Warteschlange und wird mit wachsender Pause erneut versucht. */
  function begin(meta, onChange) {
    var code = lsGet(LS_CODE);
    if (!ok() || !norm(code)) return null;
    var s = { rec: randHex(8), queue: [], idx: 0, busy: false, inflight: null, fails: 0, timer: null, ended: false,
      secRecorded: 0, secSafe: 0, lastOk: 0, lastTry: 0, lastErr: "", k: null };
    var manifest = enc.encode(JSON.stringify({ v: 1, started: meta.started.toISOString(), type: meta.type || "", withAudio: !!meta.withAudio, consentAt: meta.consentAt ? meta.consentAt.toISOString() : null }));
    s.queue.push({ manifest: true, data: manifest, n: 0 });
    function changed() { if (onChange) try { onChange(state()); } catch (e) {} }
    function state() {
      return { secRecorded: s.secRecorded, secSafe: s.secSafe, waiting: s.queue.length, fails: s.fails, lastOk: s.lastOk, ended: s.ended,
        done: s.ended && !s.queue.length && !s.busy, error: s.lastErr };
    }
    function later() {
      clearTimeout(s.timer);
      s.timer = setTimeout(pump, Math.min(10000, 1000 * Math.pow(2, Math.max(0, s.fails - 1))));
    }
    function pump() {
      if (s.busy || !s.queue.length) return;
      var wait = s.lastTry + GAP_MS - Date.now();
      if (wait > 0 && !s.fails) { clearTimeout(s.timer); s.timer = setTimeout(pump, wait); return; }
      s.busy = true; clearTimeout(s.timer); s.lastTry = Date.now();
      // Einmal gebildetes Paket bleibt bis zum Erfolg gleich: Kam ein Upload an, aber die Antwort nicht,
      // erkennt der Server die Wiederholung an der gleichen Größe – so gibt es keine doppelten Stücke im Video.
      if (!s.inflight) {
        var batch = [], n = 0, size = 0, first = s.queue[0];
        if (first.manifest) batch = [first];
        else for (var i = 0; i < s.queue.length && !s.queue[i].manifest; i++) {
          if (batch.length && size + s.queue[i].data.size > MAX_PART) break;
          batch.push(s.queue[i]); size += s.queue[i].data.size; n += s.queue[i].n;
        }
        s.inflight = { count: batch.length, n: n,
          bytes: first.manifest ? Promise.resolve(first.data) : new Blob(batch.map(function (x) { return x.data; })).arrayBuffer() };
      }
      var f = s.inflight, i0 = s.idx;
      (s.k ? Promise.resolve(s.k) : keys(code).then(function (k) { s.k = k; return k; }))
        .then(function (k) { return f.bytes.then(function (b) { return seal(k, s.rec, i0, b); }).then(function (body) { return put(k, s.rec, i0, body); }); })
        .then(function (status) {
          s.busy = false;
          if (status === 200 || status === 201) {
            s.queue.splice(0, f.count); s.inflight = null; s.idx++; s.secSafe += f.n; s.fails = 0; s.lastOk = Date.now(); s.lastErr = "";
            changed(); if (s.queue.length) pump();
          } else if (status === 409) { s.idx++; changed(); pump(); } // Stelle fremd belegt: dasselbe Paket unter der nächsten Nummer
          else { s.fails++; s.lastErr = "http " + status; changed(); later(); }
        }, function (e) { s.busy = false; s.fails++; s.lastErr = (e && e.message) || "netz"; changed(); later(); });
    }
    function onOnline() { s.fails = 0; pump(); }
    window.addEventListener("online", onOnline);
    pump();
    return {
      rec: s.rec,
      push: function (blob, seconds) { if (!blob || !blob.size) return; s.queue.push({ data: blob, n: seconds == null ? 1 : seconds }); s.secRecorded += seconds == null ? 1 : seconds; changed(); pump(); },
      end: function () { s.ended = true; changed(); pump(); },
      state: state,
      stop: function () { clearTimeout(s.timer); window.removeEventListener("online", onOnline); }
    };
  }

  /* Abholen: alle Aufnahmen eines Codes auflisten, Manifest entschlüsseln. */
  function list(code) {
    return keys(code).then(function (k) {
      return fetch(baseUrl() + "/v1/" + k.vault + "/list", { cache: "no-store" }).then(function (res) {
        if (!res.ok) throw new Error("http " + res.status);
        return res.json();
      }).then(function (j) {
        var by = {};
        (j.items || []).forEach(function (it) {
          var m = /^([0-9a-f]{16})\/(\d{6})$/.exec(it.k); if (!m) return;
          var r = by[m[1]] || (by[m[1]] = { rec: m[1], parts: [], bytes: 0, last: "" });
          r.parts.push(+m[2]); r.bytes += it.s; if (it.t > r.last) r.last = it.t;
        });
        var recs = Object.keys(by).map(function (id) { var r = by[id]; r.parts.sort(function (a, b) { return a - b; }); return r; });
        return Promise.all(recs.map(function (r) {
          if (r.parts[0] !== 0) return r;
          return get(k, r.rec, 0).then(function (buf) { return open(k, r.rec, 0, buf); })
            .then(function (plain) { r.meta = JSON.parse(dec.decode(plain)); return r; }, function () { return r; });
        })).then(function (rs) {
          return rs.filter(function (r) { return r.meta; }).sort(function (a, b) { return a.meta.started < b.meta.started ? 1 : -1; });
        });
      });
    });
  }
  function get(k, rec, i) {
    return fetch(baseUrl() + "/v1/" + k.vault + "/" + rec + "/" + idx6(i), { cache: "no-store" }).then(function (res) {
      if (!res.ok) throw new Error("http " + res.status);
      return res.arrayBuffer();
    });
  }
  // Alle Stücke holen, entschlüsseln, aneinanderhängen = die Videodatei. Stücke, die sich nicht entschlüsseln lassen, fehlen im Ergebnis (skipped).
  function fetchRec(code, r, onProgress) {
    return keys(code).then(function (k) {
      var out = [], skipped = 0, done = 0, data = r.parts.filter(function (p) { return p > 0; });
      return data.reduce(function (p, i) {
        return p.then(function () {
          return get(k, r.rec, i).then(function (buf) { return open(k, r.rec, i, buf); })
            .then(function (plain) { out.push(plain); }, function () { skipped++; })
            .then(function () { done++; if (onProgress) onProgress(done, data.length); });
        });
      }, Promise.resolve()).then(function () {
        return { blob: new Blob(out, { type: (r.meta && r.meta.type) || "video/mp4" }), skipped: skipped, parts: data.length };
      });
    });
  }

  window.RBTresor = {
    available: ok, url: baseUrl, newCode: newCode, norm: norm, fmt: fmt,
    getCode: function () { var c = lsGet(LS_CODE); return norm(c) ? fmt(c) : ""; },
    setCode: function (c) { lsSet(LS_CODE, c ? norm(c) : null); },
    begin: begin, list: list, fetchRec: fetchRec
  };
})();
