(function () {
  "use strict";
  var D = window.RB;
  var $ = function (id) { return document.getElementById(id); };
  var LS_PROTO = "rb-protokoll-v1", LS_LANG = "rb-lang-v1";
  var UA = navigator.userAgent || "";
  var IS_ANDROID = /Android/i.test(UA);
  var IS_IOS = /iPhone|iPad|iPod/i.test(UA) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function pad(n) { return String(n).padStart(2, "0"); }
  function fmtDate(d) { return pad(d.getDate()) + "." + pad(d.getMonth() + 1) + "." + d.getFullYear(); }
  function fmtTime(d) { return pad(d.getHours()) + ":" + pad(d.getMinutes()); }
  function isoDate(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function flash(el, text, ms) { el.textContent = text; clearTimeout(el._t); el._t = setTimeout(function () { el.textContent = ""; }, ms || 3500); }
  function mb(n) { var m = (n || 0) / 1048576; return (m < 10 ? m.toFixed(1).replace(".", ",") : String(Math.round(m))) + " MB"; }
  function permHelp(what) {
    if (IS_ANDROID) return what + " ist blockiert. In Chrome: Menü ⋮ › Einstellungen › Website-Einstellungen › " + what + " – diese Seite erlauben.";
    if (IS_IOS) return what + " ist blockiert. Einstellungen › Apps › Safari › " + what + " – auf „Fragen“ oder „Erlauben“ stellen.";
    return what + " ist blockiert. In den Website-Einstellungen des Browsers erlauben.";
  }

  /* ---------- Views ---------- */
  var views = ["jetzt", "fragen", "aufnahme", "danach", "wissen", "situation"], currentView = "jetzt";
  function show(name) {
    currentView = name;
    views.forEach(function (v) { $("v-" + v).hidden = v !== name; });
    var tab = name === "situation" ? "jetzt" : name;
    [].forEach.call(document.querySelectorAll(".tabs a"), function (a) {
      if (a.getAttribute("data-tab") === tab) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    updateRecFloat();
    window.scrollTo(0, 0);
  }
  function route() {
    var h = (location.hash || "#jetzt").slice(1);
    if (h.indexOf("s/") === 0) { var s = findSituation(h.slice(2)); if (s) { renderSituation(s); show("situation"); return; } }
    show(views.indexOf(h) > -1 && h !== "situation" ? h : "jetzt");
  }
  window.addEventListener("hashchange", route);

  /* ---------- Situations ---------- */
  function findSituation(id) { for (var i = 0; i < D.situations.length; i++) if (D.situations[i].id === id) return D.situations[i]; return null; }
  function renderGrid() {
    $("sit-grid").innerHTML = D.situations.map(function (s) {
      return '<button class="sit" type="button" data-id="' + s.id + '"><span class="sit-t">' + esc(s.title) + '</span><span class="sit-s">' + esc(s.sub) +
        '</span><span class="pill ' + s.tone + '">' + esc(s.toneLabel) + "</span></button>";
    }).join("");
    [].forEach.call(document.querySelectorAll(".sit"), function (b) {
      b.addEventListener("click", function () { location.hash = "#s/" + b.getAttribute("data-id"); });
    });
  }
  function sayButtons(list) {
    return (list || []).map(function (p) {
      return '<button class="say-b" type="button" data-de="' + esc(p[0]) + '" data-ru="' + esc(p[1] || "") + '"><span class="say-de">' + esc(p[0]) +
        '</span><span class="say-ru">' + esc(p[1] || "") + '</span><span class="say-tap">Groß anzeigen</span></button>';
    }).join("");
  }
  function actionButtons(actions) {
    return (actions || []).map(function (a) {
      if (a === "film") return '<a class="btn primary" href="#aufnahme" data-act="film">Video ohne Ton</a>';
      if (a === "consent") return '<a class="btn" href="#aufnahme" data-act="consent">Mit Einwilligung aufnehmen</a>';
      if (a === "protokoll") return '<a class="btn" href="#danach">Protokoll danach</a>';
      if (a.indexOf("situation:") === 0) { var t = findSituation(a.slice(10)); return t ? '<a class="btn" href="#s/' + t.id + '">' + esc(t.title) + "</a>" : ""; }
      return "";
    }).join("");
  }
  function situationHTML(s, compact) {
    return '<div class="s-head"><h' + (compact ? "3" : "1") + ">" + esc(s.title) + "</h" + (compact ? "3" : "1") + '><span class="pill ' + s.tone + '">' + esc(s.toneLabel) + "</span></div>" +
      '<div class="block"><p class="block-t say">Sag</p>' + sayButtons(s.say) + "</div>" +
      '<div class="block"><p class="block-t do">Tu</p><ul class="pts">' + s.doo.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="block"><p class="block-t dont">Lass</p><ul class="pts">' + s.dont.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
      (s.note ? '<p class="note">' + esc(s.note) + "</p>" : "") +
      '<p class="law">' + esc(s.law) + "</p>" +
      '<div class="s-actions">' + actionButtons(s.actions) + "</div>";
  }
  function renderSituation(s) { $("sit-body").innerHTML = '<div class="view" style="padding:0">' + situationHTML(s, false) + "</div>"; }
  $("sit-back").addEventListener("click", function () { location.hash = "#jetzt"; });

  /* ---------- Big phrase screen ---------- */
  var lastFocus = null, wakeLock = null;
  function keepAwake() {
    try {
      if (!navigator.wakeLock || wakeLock) return;
      navigator.wakeLock.request("screen").then(function (l) {
        wakeLock = l;
        l.addEventListener("release", function () { if (wakeLock === l) wakeLock = null; });
      }).catch(function () {});
    } catch (e) {}
  }
  function releaseAwake() { try { if (wakeLock) { var l = wakeLock; wakeLock = null; l.release(); } } catch (e) {} }
  function needAwake() { return !!(recState && recState.rec) || !$("big").hidden; }
  function openBig(de, ru, from) {
    $("big-de").textContent = de; $("big-ru").textContent = ru || ""; $("big").hidden = false; lastFocus = from; $("big-close").focus(); keepAwake();
    // Eigener Verlaufseintrag: Die Zurück-Taste von Android schließt das Großbild statt die Seite zu verlassen.
    try { history.pushState({ rbBig: 1 }, ""); } catch (e) {}
  }
  function hideBig() { $("big").hidden = true; if (!needAwake()) releaseAwake(); if (lastFocus) { try { lastFocus.focus({ preventScroll: true }); } catch (e) {} } }
  function closeBig() { if ($("big").hidden) return; if (history.state && history.state.rbBig) history.back(); else hideBig(); }
  window.addEventListener("popstate", function () { if (!$("big").hidden) hideBig(); });
  $("big-close").addEventListener("click", closeBig);
  $("big").addEventListener("click", function (e) { if (e.target.id === "big" || e.target.id === "big-de" || e.target.id === "big-ru") closeBig(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeBig(); });
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".say-b");
    if (b) openBig(b.getAttribute("data-de"), b.getAttribute("data-ru"), b);
    var a = e.target.closest && e.target.closest("[data-act]");
    if (a) pendingAct = a.getAttribute("data-act");
  });

  /* ---------- Matching ---------- */
  function norm(s) {
    return String(s || "").toLowerCase().replace(/ё/g, "е").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .replace(/[^a-z0-9а-я ]+/g, " ").replace(/\s+/g, " ").trim();
  }
  var corpus = [];
  function buildCorpus() {
    D.situations.forEach(function (s) { corpus.push({ kind: "s", item: s, kw: s.kw.map(norm), title: norm(s.title + " " + s.sub) }); });
    D.cards.forEach(function (c) { corpus.push({ kind: "c", item: c, kw: c.kw.map(norm), title: norm(c.title) }); });
  }
  function match(q) {
    var nq = " " + norm(q) + " ";
    if (nq.trim().length < 2) return [];
    var stop = ["darf", "muss", "kann", "mich", "mein", "meine", "polizei", "wird", "werden", "eine", "einen", "nicht", "можно", "меня", "если", "нужно", "надо", "полиция", "полицию", "полиции"];
    var words = nq.trim().split(" ").filter(function (w) { return w.length > 3 && stop.indexOf(w) < 0; }).map(function (w) { return w.length > 6 ? w.slice(0, w.length - 2) : w; });
    return corpus.map(function (e) {
      var sc = 0;
      e.kw.forEach(function (k) { if (k && nq.indexOf(" " + k) > -1) sc += k.length >= 6 ? 3 : 2; });
      words.forEach(function (w) { if (e.title.indexOf(w) > -1) sc += 1; });
      return { e: e, sc: sc };
    }).filter(function (r) { return r.sc > 0; }).sort(function (a, b) { return b.sc - a.sc; }).slice(0, 3);
  }
  function cardHTML(c) {
    return '<div class="w-head"><h3>' + esc(c.title) + '</h3><span class="pill ' + c.tone + '">' + esc(c.toneLabel) + "</span></div>" +
      "<p>" + esc(c.text) + "</p>" + (c.say ? sayButtons(c.say) : "") + '<p class="law">' + esc(c.law) + "</p>";
  }
  function speakText(e) {
    var it = e.item;
    if (e.kind === "s") return it.title + ". Sag: " + it.say[0][0] + " " + it.doo[0];
    return it.title + " " + it.text;
  }
  function renderAnswers(q) {
    var res = match(q), box = $("answers");
    if (!res.length) { box.innerHTML = '<p class="err">Dazu habe ich noch keine Karte. Versuch: filmen, Ausweis, Test, Handy, Durchsuchung, Anwalt.</p>'; return; }
    box.innerHTML = res.map(function (r, i) {
      var inner = r.e.kind === "s" ? situationHTML(r.e.item, true) : cardHTML(r.e.item);
      return (i === 1 ? '<p class="alt-t">Passt vielleicht auch:</p>' : "") +
        '<article class="ans' + (i === 0 ? " top" : "") + '" data-id="' + esc(r.e.item.id) + '">' + inner +
        (i === 0 ? '<div class="ans-row"><button class="btn" type="button" id="speak">Vorlesen</button></div>' : "") + "</article>";
    }).join("");
    var sp = $("speak");
    if (sp) sp.addEventListener("click", function () {
      if (!("speechSynthesis" in window)) { sp.textContent = "Vorlesen nicht verfügbar"; return; }
      if (speechSynthesis.speaking) { speechSynthesis.cancel(); sp.textContent = "Vorlesen"; return; }
      var u = new SpeechSynthesisUtterance(speakText(res[0].e)); u.lang = "de-DE"; u.rate = 1;
      u.onend = function () { sp.textContent = "Vorlesen"; };
      speechSynthesis.speak(u); sp.textContent = "Stopp";
    });
  }

  /* ---------- Speech recognition ---------- */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var lang = lsGet(LS_LANG) || "de-DE";
  function syncSeg() {
    [].forEach.call(document.querySelectorAll(".seg-b"), function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false"); });
  }
  [].forEach.call(document.querySelectorAll(".seg-b"), function (b) {
    b.addEventListener("click", function () { lang = b.getAttribute("data-lang"); lsSet(LS_LANG, lang); syncSeg(); });
  });
  function srError(code) {
    if (code === "not-allowed") return permHelp("Mikrofon");
    if (code === "service-not-allowed") return IS_IOS ? "Spracheingabe ist gesperrt: Einstellungen › Allgemein › Tastatur › Diktierfunktion einschalten. Oder die Frage tippen." : "Spracheingabe ist in diesem Browser gesperrt. Tippe die Frage.";
    if (code === "network") return "Spracheingabe braucht Internet. Tippe die Frage – die Antworten kommen auch offline.";
    if (code === "no-speech") return "Nichts gehört. Noch einmal tippen und kurz fragen.";
    if (code === "audio-capture") return "Kein Mikrofon gefunden.";
    if (code === "aborted") return "";
    return "Spracheingabe unterbrochen (" + code + ").";
  }
  /* Das Mikrofon hört zu, bis erneut getippt wird oder 5 Sekunden Stille sind. Android beendet die Erkennung
     bei jeder Pause selbst – dann wird sie sofort neu gestartet und der Text weiter gesammelt. */
  var SILENCE_MS = 5000, activeListen = null;
  function mergeText(a, b) {
    a = (a || "").trim(); b = (b || "").trim();
    if (!b) return a;
    if (!a) return b;
    if (b.indexOf(a) === 0) return b; // Android liefert manchmal den ganzen Satz noch einmal
    if (a.slice(-b.length) === b) return a; // doppelt gelieferte Teile nicht zweimal anhängen
    return a + " " + b;
  }
  function listen(onText, onEnd, onErr) {
    if (!SR) { onErr("Spracheingabe gibt es in diesem Browser nicht. Nutze Chrome (Android) oder Safari (iPhone) – oder tippe die Frage."); return null; }
    var ctl = { stopped: false, done: false, text: "", err: "", lastSpeech: Date.now(), rec: null, timer: null };
    function finish() {
      if (ctl.done) return;
      ctl.done = true; clearInterval(ctl.timer); if (activeListen === ctl) activeListen = null;
      if (ctl.err) onErr(ctl.err);
      onEnd(ctl.text);
    }
    function startOne() {
      var r = new SR(), seg = "";
      r.lang = lang; r.interimResults = true; r.continuous = true; r.maxAlternatives = 1;
      r.onresult = function (ev) {
        var fin = "", interim = "";
        for (var i = 0; i < ev.results.length; i++) {
          var t = ev.results[i][0].transcript;
          if (ev.results[i].isFinal) fin = mergeText(fin, t); else interim += t;
        }
        seg = fin; ctl.lastSpeech = Date.now();
        onText(mergeText(ctl.text, seg), interim.trim());
      };
      r.onspeechstart = function () { ctl.lastSpeech = Date.now(); };
      r.onerror = function (ev) {
        if (ev.error === "no-speech" || ev.error === "aborted") return; // Pause – das regelt die 5-Sekunden-Grenze
        ctl.stopped = true; ctl.err = srError(ev.error);
      };
      r.onend = function () {
        ctl.text = mergeText(ctl.text, seg); seg = "";
        if (!ctl.stopped && Date.now() - ctl.lastSpeech < SILENCE_MS) {
          try { startOne(); return; } catch (e) {}
        }
        finish();
      };
      ctl.rec = r; r.start();
    }
    ctl.stop = function () {
      if (ctl.stopped) return;
      ctl.stopped = true;
      try { ctl.rec.stop(); } catch (e) { finish(); }
    };
    ctl.timer = setInterval(function () { if (Date.now() - ctl.lastSpeech >= SILENCE_MS) ctl.stop(); }, 250);
    try { startOne(); } catch (e) { clearInterval(ctl.timer); onErr("Spracheingabe konnte nicht starten."); return null; }
    activeListen = ctl;
    return ctl;
  }
  function stopListening() { if (activeListen) activeListen.stop(); }

  $("mic").addEventListener("click", function () {
    var mic = $("mic"), err = $("ask-err");
    if (activeListen) { stopListening(); return; }
    err.hidden = true;
    var r = listen(function (fin, interim) { $("transcript").textContent = (fin + " " + interim).trim(); },
      function (fin) {
        mic.setAttribute("aria-pressed", "false"); $("mic-label").textContent = "Tippen und fragen";
        var q = fin || $("transcript").textContent;
        if (q) { $("ask-input").value = q; renderAnswers(q); }
      },
      function (msg) { err.textContent = msg; err.hidden = !msg; mic.setAttribute("aria-pressed", "false"); $("mic-label").textContent = "Tippen und fragen"; });
    if (r) { mic.setAttribute("aria-pressed", "true"); $("mic-label").textContent = "Ich höre … tippen zum Stoppen"; $("transcript").textContent = ""; }
  });
  $("ask-form").addEventListener("submit", function (e) {
    e.preventDefault(); var q = $("ask-input").value.trim();
    if (!q) { $("ask-err").textContent = "Gib zuerst eine Frage ein."; $("ask-err").hidden = false; return; }
    $("ask-err").hidden = true; $("transcript").textContent = q; renderAnswers(q);
  });
  $("ask-input").addEventListener("input", function () { $("ask-err").hidden = true; });

  /* ---------- Aufnahmen auf dem Gerät (IndexedDB) ----------
     Jede Sekunde landet ein Stück der Aufnahme in "chunks". Stürzt die App ab oder wird sie geschlossen,
     setzt loadRecs() die Stücke beim nächsten Start wieder zu einer Datei zusammen. */
  var dbP = null, storageOK = true;
  function db() {
    if (!dbP) {
      dbP = new Promise(function (res, rej) {
        if (!window.indexedDB) { rej(new Error("IndexedDB fehlt")); return; }
        var r = indexedDB.open("rb-aufnahmen", 1);
        r.onupgradeneeded = function () {
          var d = r.result;
          if (!d.objectStoreNames.contains("recs")) d.createObjectStore("recs", { keyPath: "id" });
          if (!d.objectStoreNames.contains("chunks")) d.createObjectStore("chunks", { keyPath: "k" });
        };
        r.onsuccess = function () { res(r.result); };
        r.onerror = function () { rej(r.error); };
      });
      dbP.catch(function () { dbP = null; });
    }
    return dbP;
  }
  function tx(stores, mode, fn) {
    return db().then(function (d) {
      return new Promise(function (res, rej) {
        var t = d.transaction(stores, mode), out, req = fn(t);
        if (req) req.onsuccess = function () { out = req.result; };
        t.oncomplete = function () { res(out); };
        t.onerror = function () { rej(t.error); };
        t.onabort = function () { rej(t.error); };
      });
    });
  }
  function chunkRange(id) { return IDBKeyRange.bound([id, 0], [id, Infinity]); }
  function putRec(r) {
    var o = {}; Object.keys(r).forEach(function (k) { if (k !== "url") o[k] = r[k]; });
    return tx("recs", "readwrite", function (t) { t.objectStore("recs").put(o); });
  }
  function putChunk(id, seq, data) { return tx("chunks", "readwrite", function (t) { t.objectStore("chunks").put({ k: [id, seq], data: data }); }); }
  function getChunks(id) { return tx("chunks", "readonly", function (t) { return t.objectStore("chunks").getAll(chunkRange(id)); }); }
  function delChunks(id) { return tx("chunks", "readwrite", function (t) { t.objectStore("chunks").delete(chunkRange(id)); }); }
  function allRecs() { return tx("recs", "readonly", function (t) { return t.objectStore("recs").getAll(); }); }
  function delRec(id) { return tx(["recs", "chunks"], "readwrite", function (t) { t.objectStore("recs").delete(id); t.objectStore("chunks").delete(chunkRange(id)); }); }
  function storageFail() {
    if (!storageOK) return;
    storageOK = false;
    recError("Speichern auf dem Gerät klappt nicht (Speicher voll oder privater Modus). Die Aufnahme läuft weiter – nach dem Stopp sofort „Sichern“.");
  }
  function hashBlob(blob) {
    if (!window.crypto || !crypto.subtle || !blob.arrayBuffer) return Promise.reject(new Error("kein SHA-256"));
    return blob.arrayBuffer().then(function (buf) { return crypto.subtle.digest("SHA-256", buf); }).then(function (h) {
      return Array.prototype.map.call(new Uint8Array(h), function (b) { return b.toString(16).padStart(2, "0"); }).join("");
    });
  }

  /* ---------- Recording ---------- */
  var recState = null, recordings = [], pendingAct = null;
  function pickMime(withAudio) {
    var c = withAudio
      ? ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4", "video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm"]
      : ["video/mp4;codecs=avc1", "video/mp4", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
    if (!window.MediaRecorder || !MediaRecorder.isTypeSupported) return "";
    for (var i = 0; i < c.length; i++) if (MediaRecorder.isTypeSupported(c[i])) return c[i];
    return "";
  }
  function baseType(m) { return String(m || "").split(";")[0] || "video/mp4"; }
  function fileName(r) {
    var s = r.started, ext = /webm/.test(r.type) ? "webm" : /quicktime/.test(r.type) ? "mov" : "mp4";
    return "kontrolle_" + isoDate(s) + "_" + pad(s.getHours()) + "-" + pad(s.getMinutes()) + "-" + pad(s.getSeconds()) +
      (r.withAudio ? "_mit-ton" : "_ohne-ton") + (r.status === "recovered" ? "_wiederhergestellt" : "") + "." + ext;
  }
  function recError(msg) { var e = $("rec-err"); e.textContent = msg || ""; e.hidden = !msg; }
  function setRecUI(stage) {
    $("rec-start").hidden = stage !== "start"; $("consent-step").hidden = stage !== "consent"; $("rec-live").hidden = stage !== "live";
  }
  function camError(e, withAudio) {
    var n = e && e.name;
    if (n === "NotAllowedError" || n === "SecurityError") return permHelp(withAudio ? "Kamera oder Mikrofon" : "Kamera");
    if (n === "NotFoundError" || n === "OverconstrainedError") return "Keine passende Kamera gefunden.";
    if (n === "NotReadableError" || n === "AbortError") return "Die Kamera ist belegt. Andere Kamera-Apps schließen und noch einmal tippen.";
    return "Kamera konnte nicht starten (" + (n || "Fehler") + ").";
  }
  function startRecording(withAudio, consentAt) {
    if (recState) return;
    recError("");
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
      recError("Aufnehmen geht in diesem Browser nicht. Nutze Chrome (Android) oder Safari (iPhone), die Seite muss über https laufen."); setRecUI("start"); return;
    }
    recState = { pending: true };
    navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 720 } }, audio: !!withAudio })
      .then(function (stream) {
        // Ein Schlüsselbild pro Sekunde: Chrome schreibt MP4 sonst erst beim Stopp – bei einem Absturz wäre alles weg.
        var mime = pickMime(withAudio), opts = { videoBitsPerSecond: 2500000, videoKeyFrameIntervalDuration: 1000 }, rec, seq = 0, chunks = [];
        if (mime) opts.mimeType = mime;
        try { rec = new MediaRecorder(stream, opts); } catch (e) { rec = new MediaRecorder(stream); }
        var started = new Date();
        var r = { id: "r" + started.getTime(), started: started, ended: null, dur: 0, withAudio: !!withAudio, consentAt: consentAt || null,
          type: "", name: "", hash: "", size: 0, status: "recording" };
        rec.ondataavailable = function (ev) {
          if (!ev.data || !ev.data.size) return;
          chunks.push(ev.data); r.size += ev.data.size;
          if (storageOK) putChunk(r.id, seq++, ev.data).catch(storageFail);
        };
        rec.onstop = function () { finishRecording(r, chunks, stream); };
        try { rec.start(1000); } catch (e) { stream.getTracks().forEach(function (t) { t.stop(); }); throw e; }
        r.type = baseType(rec.mimeType || mime); r.name = fileName(r);
        recState = { rec: rec, r: r, timer: setInterval(tick, 500) };
        stream.getVideoTracks().forEach(function (t) { t.addEventListener("ended", stopRecording); });
        var v = $("preview"); v.srcObject = stream; v.muted = true; var p = v.play(); if (p && p.catch) p.catch(function () {});
        if (storageOK) putRec(r).catch(storageFail);
        else recError("Dieses Gerät speichert Aufnahmen nicht dauerhaft. Nach dem Stopp sofort „Sichern“.");
        if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
        $("rec-mode").textContent = withAudio ? "Mit Ton (Einwilligung " + fmtTime(consentAt) + ")" : "Ohne Ton";
        tick(); setRecUI("live"); keepAwake(); updateRecFloat();
      })
      .catch(function (e) { recState = null; setRecUI("start"); recError(camError(e, withAudio)); });
  }
  function tick() {
    if (!recState || !recState.r) return;
    var s = Math.floor((Date.now() - recState.r.started.getTime()) / 1000), t = pad(Math.floor(s / 60)) + ":" + pad(s % 60);
    $("rec-time").textContent = t; $("rec-float-time").textContent = t;
  }
  function updateRecFloat() {
    var on = !!(recState && recState.rec);
    $("rec-float").hidden = !on || currentView === "aufnahme";
    document.body.classList.toggle("rec-on", on);
  }
  function stopRecording() { if (recState && recState.rec && recState.rec.state !== "inactive") { try { recState.rec.stop(); } catch (e) {} } }
  function saveFinal(r) {
    if (!storageOK) return Promise.resolve();
    // Erst die fertige Datei speichern, dann die Einzelstücke löschen – so geht bei einem Absturz dazwischen nichts verloren.
    return putRec(r).then(function () { return delChunks(r.id); }).catch(storageFail);
  }
  function finishRecording(r, chunks, stream) {
    if (recState && recState.r === r) { clearInterval(recState.timer); recState = null; }
    stream.getTracks().forEach(function (t) { t.stop(); }); $("preview").srcObject = null;
    if (!needAwake()) releaseAwake();
    updateRecFloat(); setRecUI("start");
    if (!chunks.length) { recError("Die Aufnahme ist leer. Bitte noch einmal starten."); delRec(r.id).catch(function () {}); return; }
    var blob = new Blob(chunks, { type: r.type }), ended = new Date();
    r.ended = ended; r.dur = Math.max(1, Math.round((ended - r.started) / 1000)); r.size = blob.size; r.blob = blob; r.status = "done";
    recordings.unshift(r); renderRecs();
    hashBlob(blob).then(function (h) { r.hash = h; }, function () { r.noHash = true; })
      .then(function () { renderRecs(); return saveFinal(r); });
  }
  function recover(r) {
    return getChunks(r.id).then(function (rows) {
      if (!rows || !rows.length) return delRec(r.id);
      var blob = new Blob(rows.map(function (x) { return x.data; }), { type: r.type || "video/webm" });
      r.blob = blob; r.size = blob.size; r.status = "recovered"; r.approx = true;
      r.dur = rows.length; r.ended = new Date(r.started.getTime() + rows.length * 1000); r.name = fileName(r);
      recordings.push(r); recordings.sort(function (a, b) { return b.started - a.started; }); renderRecs();
      return hashBlob(blob).then(function (h) { r.hash = h; }, function () { r.noHash = true; })
        .then(function () { renderRecs(); return saveFinal(r); });
    }).catch(function () {});
  }
  function loadRecs() {
    allRecs().then(function (list) {
      list = (list || []).sort(function (a, b) { return b.started - a.started; });
      recordings = list.filter(function (x) { return x.status !== "recording"; });
      renderRecs();
      list.filter(function (x) { return x.status === "recording"; }).forEach(recover);
    }).catch(function () { storageOK = false; });
  }
  function recMeta(r) {
    return fmtDate(r.started) + " · " + fmtTime(r.started) + " Uhr · " + (r.approx ? "ca. " : "") + r.dur + " s · " + mb(r.size) + " · " +
      (r.withAudio ? "mit Ton, Einwilligung " + fmtTime(r.consentAt) : "ohne Ton");
  }
  function recLine(r) {
    return fmtDate(r.started) + " " + fmtTime(r.started) + " Uhr, " + (r.approx ? "ca. " : "") + r.dur + " s, " +
      (r.withAudio ? "mit Ton, Einwilligung um " + fmtTime(r.consentAt) : "ohne Ton") +
      (r.status === "recovered" ? ", unterbrochen und wiederhergestellt" : "") + (r.hash ? ", SHA-256 " + r.hash : "") + ", Datei " + r.name;
  }
  function renderRecs() {
    var box = $("rec-list");
    if (!recordings.length) { box.innerHTML = ""; return; }
    var total = 0; recordings.forEach(function (r) { total += r.size || 0; });
    box.innerHTML = '<h2>Auf diesem Gerät</h2><p class="hint">' + recordings.length + (recordings.length === 1 ? " Aufnahme" : " Aufnahmen") + ", " + mb(total) +
      ". „Sichern“ schickt die Datei an dich selbst (Telegram, WhatsApp, Mail) oder in Google Drive.</p>" +
      recordings.map(function (r) {
        if (!r.url && r.blob) r.url = URL.createObjectURL(r.blob);
        return '<div class="rec-item" data-id="' + esc(r.id) + '">' +
          (r.status === "recovered" ? '<p class="rec-flag">Wiederhergestellt – die Aufnahme wurde unterbrochen</p>' : "") +
          '<video src="' + r.url + '" controls playsinline preload="metadata"></video>' +
          '<p class="rec-meta">' + esc(recMeta(r)) + "</p>" +
          '<p class="hash">SHA-256: ' + (r.hash ? esc(r.hash) : r.noHash ? "nicht berechnet (Datei zu groß)" : "wird berechnet …") + "</p>" +
          '<div class="actions"><button class="btn primary" type="button" data-share>Sichern</button>' +
          '<button class="btn" type="button" data-dl>Laden</button>' +
          '<button class="btn" type="button" data-proto>Ins Protokoll</button>' +
          '<button class="btn ghost" type="button" data-del>Löschen</button></div></div>';
      }).join("");
  }
  function recById(id) { for (var i = 0; i < recordings.length; i++) if (recordings[i].id === id) return recordings[i]; return null; }
  function downloadURL(url, name) { var a = document.createElement("a"); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); }
  $("rec-list").addEventListener("click", function (e) {
    var b = e.target.closest("button"), item = e.target.closest(".rec-item");
    var r = b && item ? recById(item.getAttribute("data-id")) : null;
    if (!r) return;
    if (b.hasAttribute("data-share")) {
      var file = new File([r.blob], r.name, { type: r.type });
      if (navigator.canShare && navigator.canShare({ files: [file] })) navigator.share({ files: [file], title: r.name, text: r.hash ? "SHA-256: " + r.hash : r.name }).catch(function () {});
      else downloadURL(r.url, r.name);
    } else if (b.hasAttribute("data-dl")) {
      downloadURL(r.url, r.name);
    } else if (b.hasAttribute("data-proto")) {
      var f = $("p-aufnahmen"); f.value = (f.value ? f.value + "\n" : "") + recLine(r); saveProto(); b.textContent = "Übernommen";
    } else if (b.hasAttribute("data-del")) {
      if (!b._armed) {
        b._armed = true; b.textContent = "Wirklich löschen?"; b.classList.add("armed");
        setTimeout(function () { b._armed = false; b.textContent = "Löschen"; b.classList.remove("armed"); }, 4000);
        return;
      }
      delRec(r.id).catch(function () {});
      if (r.url) URL.revokeObjectURL(r.url);
      recordings = recordings.filter(function (x) { return x !== r; }); renderRecs();
    }
  });
  $("rec-silent").addEventListener("click", function () { startRecording(false, null); });
  $("rec-consent").addEventListener("click", function () { setRecUI("consent"); });
  $("consent-yes").addEventListener("click", function () { startRecording(true, new Date()); });
  $("consent-no").addEventListener("click", function () { startRecording(false, null); });
  $("consent-cancel").addEventListener("click", function () { setRecUI("start"); });
  $("rec-stop").addEventListener("click", stopRecording);
  $("consent-de").textContent = D.consent.de; $("consent-ru").textContent = D.consent.ru;
  window.addEventListener("hashchange", function () {
    if (location.hash === "#aufnahme" && pendingAct === "consent" && !recState) setRecUI("consent");
    if (location.hash === "#aufnahme" && pendingAct === "film" && !recState) startRecording(false, null);
    pendingAct = null;
  });
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") { if (needAwake()) keepAwake(); return; }
    // App geht in den Hintergrund: den Rest sofort speichern, bevor das Handy die Kamera stoppt.
    if (recState && recState.rec && recState.rec.state === "recording") { try { recState.rec.requestData(); } catch (e) {} }
  });
  window.addEventListener("beforeunload", function (e) { if (recState && recState.rec) { e.preventDefault(); e.returnValue = ""; } });

  /* ---------- Protocol ---------- */
  var fields = ["datum", "zeit", "ort", "beamte", "ablauf", "zitate", "zeugen", "aufnahmen", "schaden", "name"];
  function protoData() { var o = {}; fields.forEach(function (f) { o[f] = $("p-" + f).value; }); return o; }
  function saveProto() { lsSet(LS_PROTO, JSON.stringify(protoData())); renderDeadlines(); renderLetters(); }
  function loadProto() {
    var raw = lsGet(LS_PROTO), o = null;
    try { o = raw ? JSON.parse(raw) : null; } catch (e) { o = null; }
    var now = new Date();
    fields.forEach(function (f) { $("p-" + f).value = o && o[f] ? o[f] : ""; });
    if (!$("p-datum").value) $("p-datum").value = isoDate(now);
    if (!$("p-zeit").value) $("p-zeit").value = fmtTime(now);
  }
  var saveT;
  $("proto").addEventListener("input", function () { clearTimeout(saveT); saveT = setTimeout(saveProto, 300); });
  function protoDateObj() { var v = $("p-datum").value; if (!v) return new Date(); var p = v.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function protoText() {
    var o = protoData();
    return "GEDÄCHTNISPROTOKOLL\nErstellt am: " + fmtDate(new Date()) + ", " + fmtTime(new Date()) + " Uhr\n\n" +
      "Vorfall am: " + fmtDate(protoDateObj()) + (o.zeit ? ", " + o.zeit + " Uhr" : "") + "\n" +
      "Ort: " + (o.ort || "-") + "\n\nBeteiligte Beamte und Fahrzeuge:\n" + (o.beamte || "-") +
      "\n\nAblauf:\n" + (o.ablauf || "-") + "\n\nWörtliche Aussagen:\n" + (o.zitate || "-") +
      "\n\nZeugen:\n" + (o.zeugen || "-") + "\n\nAufnahmen:\n" + (o.aufnahmen || "-") +
      "\n\nVerletzungen und Schäden:\n" + (o.schaden || "-") + (o.name ? "\n\nVerfasst von: " + o.name : "") + "\n";
  }
  function copyText(text, msgEl) {
    try {
      navigator.clipboard.writeText(text).then(function () { flash(msgEl, "Kopiert"); }, function () { flash(msgEl, "Kopieren ging nicht – bitte „Teilen“ nutzen"); });
    } catch (e) { flash(msgEl, "Kopieren ging nicht – bitte „Teilen“ nutzen"); }
  }
  function shareText(title, text, msgEl) {
    if (navigator.share) navigator.share({ title: title, text: text }).catch(function () {}); else copyText(text, msgEl);
  }
  $("p-copy").addEventListener("click", function () { copyText(protoText(), $("p-msg")); });
  $("p-share").addEventListener("click", function () { shareText("Gedächtnisprotokoll", protoText(), $("p-msg")); });
  $("p-file").addEventListener("click", function () {
    var blob = new Blob([protoText()], { type: "text/plain;charset=utf-8" });
    downloadURL(URL.createObjectURL(blob), "gedaechtnisprotokoll_" + $("p-datum").value + ".txt");
  });
  var clearArmed = false;
  $("p-clear").addEventListener("click", function () {
    var b = $("p-clear");
    if (!clearArmed) { clearArmed = true; b.textContent = "Wirklich leeren?"; setTimeout(function () { clearArmed = false; b.textContent = "Neues Protokoll"; }, 4000); return; }
    clearArmed = false; b.textContent = "Neues Protokoll";
    var keepName = $("p-name").value; lsSet(LS_PROTO, ""); loadProto(); $("p-name").value = keepName; saveProto(); flash($("p-msg"), "Neues Protokoll angelegt");
  });
  $("p-gps").addEventListener("click", function () {
    var b = $("p-gps");
    if (!navigator.geolocation) { flash($("p-msg"), "Standort ist hier nicht verfügbar"); return; }
    b.textContent = "Suche …";
    navigator.geolocation.getCurrentPosition(function (pos) {
      var la = pos.coords.latitude.toFixed(5), lo = pos.coords.longitude.toFixed(5), f = $("p-ort");
      f.value = (f.value ? f.value + "\n" : "") + "Standort " + la + ", " + lo + " (±" + Math.round(pos.coords.accuracy) + " m) https://www.openstreetmap.org/?mlat=" + la + "&mlon=" + lo + "#map=18/" + la + "/" + lo;
      b.textContent = "Standort einfügen"; saveProto();
    }, function (err) {
      b.textContent = "Standort einfügen";
      if (err && err.code === 1) flash($("p-msg"), permHelp("Standort"), 9000); else flash($("p-msg"), "Standort nicht gefunden. Draußen noch einmal versuchen.");
    }, { enableHighAccuracy: true, timeout: 12000 });
  });
  [].forEach.call(document.querySelectorAll(".dict"), function (b) {
    b.addEventListener("click", function () {
      if (activeListen) { stopListening(); return; }
      var f = $(b.getAttribute("data-for")), base = f.value;
      var r = listen(function (fin, interim) { f.value = (base ? base + " " : "") + (fin + " " + interim).trim(); },
        function (fin) { b.setAttribute("aria-pressed", "false"); b.textContent = "Diktieren"; if (fin) f.value = (base ? base + " " : "") + fin.trim(); saveProto(); },
        function (msg) { b.setAttribute("aria-pressed", "false"); b.textContent = "Diktieren"; if (msg) flash($("p-msg"), msg, 9000); });
      if (r) { b.setAttribute("aria-pressed", "true"); b.textContent = "Stopp"; }
    });
  });

  /* ---------- Deadlines & letters ---------- */
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function addMonths(d, n) { var x = new Date(d); var day = x.getDate(); x.setDate(1); x.setMonth(x.getMonth() + n); var last = new Date(x.getFullYear(), x.getMonth() + 1, 0).getDate(); x.setDate(Math.min(day, last)); return x; }
  function daysLeft(d) { var t = new Date(); t.setHours(0, 0, 0, 0); var x = new Date(d); x.setHours(0, 0, 0, 0); return Math.round((x - t) / 86400000); }
  function leftText(n) { return n < 0 ? "abgelaufen" : n === 0 ? "heute" : "noch " + n + (n === 1 ? " Tag" : " Tage"); }
  function renderDeadlines() {
    var d = protoDateObj(), bc = addDays(d, 28), bb = addMonths(d, 3);
    var items = [
      ["Gedächtnisprotokoll", "am selben Tag – " + fmtDate(d)],
      ["Bodycam-Sicherung beantragen", "sofort; gelöscht wird spätestens am " + fmtDate(bc) + " (" + leftText(daysLeft(bc)) + ")"],
      ["Bürgerbeauftragte BW", "bis " + fmtDate(bb) + " (" + leftText(daysLeft(bb)) + "), nicht parallel zu einem Straf- oder Gerichtsverfahren"],
      ["Anwalt", "vor jeder Beschwerde oder Anzeige sprechen"]
    ];
    $("deadlines").innerHTML = items.map(function (x) { return '<li class="dl"><span class="dl-t">' + esc(x[0]) + '</span><span class="dl-d">' + esc(x[1]) + "</span></li>"; }).join("");
  }
  function fillLetter(body) {
    var o = protoData();
    var map = { datum: fmtDate(protoDateObj()), zeit: o.zeit || "[Uhrzeit]", ort: (o.ort || "[Ort]").split("\n")[0],
      beamte: o.beamte ? o.beamte.replace(/\n/g, "; ") : "Beamte und Kennzeichen unbekannt", ablauf: o.ablauf || "[kurze Schilderung]", name: o.name || "[Name, Anschrift]" };
    return body.replace(/\{(\w+)\}/g, function (m, k) { return map[k] != null ? map[k] : m; });
  }
  function renderLetters() {
    var L = D.letters;
    $("letters").innerHTML = Object.keys(L).map(function (k) {
      var l = L[k], text = fillLetter(l.body), isMail = l.to.indexOf("@") > -1;
      var mail = isMail ? "mailto:" + l.to + "?subject=" + encodeURIComponent(l.title) + "&body=" + encodeURIComponent(text) : "";
      return '<div class="letter"><h3>' + esc(l.title) + '</h3><p class="hint">' + esc(l.hint) + '</p><p>An: <span class="to">' + esc(l.to) + "</span></p>" +
        "<pre>" + esc(text) + '</pre><div class="actions"><button class="btn primary" type="button" data-copy="' + k + '">Kopieren</button>' +
        (isMail ? '<a class="btn" href="' + mail + '">In Mail öffnen</a>' : "") +
        '<button class="btn" type="button" data-sharel="' + k + '">Teilen</button></div><p class="hint" data-msg="' + k + '" aria-live="polite"></p></div>';
    }).join("");
  }
  $("letters").addEventListener("click", function (e) {
    var c = e.target.closest("[data-copy]"), s = e.target.closest("[data-sharel]");
    var k = c ? c.getAttribute("data-copy") : s ? s.getAttribute("data-sharel") : null;
    if (!k) return;
    var text = fillLetter(D.letters[k].body), msg = document.querySelector('[data-msg="' + k + '"]');
    if (c) copyText(text, msg); else shareText(D.letters[k].title, text, msg);
  });

  /* ---------- Wissen ---------- */
  var wCat = "";
  function renderCats() {
    var used = {};
    D.cards.forEach(function (c) { used[c.cat] = (used[c.cat] || 0) + 1; });
    $("w-cats").innerHTML = '<button type="button" class="chip" data-cat="" aria-pressed="' + (wCat === "") + '">Alle</button>' +
      D.cats.filter(function (c) { return used[c[0]]; }).map(function (c) {
        return '<button type="button" class="chip" data-cat="' + c[0] + '" aria-pressed="' + (wCat === c[0]) + '">' + esc(c[1]) + "</button>";
      }).join("");
  }
  function renderWissen(q) {
    var nq = norm(q || ""), words = nq ? nq.split(" ").map(function (w) { return w.length > 6 ? w.slice(0, w.length - 2) : w; }) : [];
    var list = D.cards.filter(function (c) {
      if (wCat && c.cat !== wCat) return false;
      if (!words.length) return true;
      var hay = norm(c.title + " " + c.text + " " + c.kw.join(" "));
      return words.every(function (w) { return hay.indexOf(w) > -1; });
    });
    $("w-list").innerHTML = list.map(function (c) { return '<article class="w-card" data-id="' + esc(c.id) + '">' + cardHTML(c) + "</article>"; }).join("");
    $("w-empty").hidden = list.length > 0;
  }
  $("w-q").addEventListener("input", function () {
    // Wer tippt, sucht in allen Themen – sonst findet „Messer“ unter „Verkehr“ nichts.
    if ($("w-q").value.trim() && wCat) { wCat = ""; renderCats(); }
    renderWissen($("w-q").value);
  });
  $("w-cats").addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    wCat = b.getAttribute("data-cat"); $("w-q").value = ""; renderCats(); renderWissen("");
  });

  /* ---------- Installieren ---------- */
  var installEv = null;
  function isStandalone() { return (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true; }
  function syncInstall() {
    [].forEach.call(document.querySelectorAll("[data-install]"), function (b) { b.hidden = !installEv || isStandalone(); });
    $("install-help").innerHTML = isStandalone() ? "<strong>Installiert.</strong> Situationen und Wissen funktionieren auch ohne Internet." :
      IS_IOS ? "<strong>Auf den Home-Bildschirm:</strong> In Safari „Teilen“ und dann „Zum Home-Bildschirm“. Danach funktionieren Situationen und Wissen auch ohne Internet." :
      IS_ANDROID ? "<strong>Als App installieren:</strong> In Chrome oben rechts ⋮ und dann „App installieren“ oder „Zum Startbildschirm hinzufügen“. Danach funktionieren Situationen und Wissen auch ohne Internet." :
      "<strong>Als App aufs Handy:</strong> Android – in Chrome ⋮ und „App installieren“. iPhone – in Safari „Teilen“ und „Zum Home-Bildschirm“.";
  }
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); installEv = e; syncInstall(); });
  window.addEventListener("appinstalled", function () { installEv = null; syncInstall(); });
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-install]");
    if (!b || !installEv) return;
    var ev = installEv; installEv = null; syncInstall();
    try { var p = ev.prompt(); if (p && p.catch) p.catch(function () {}); } catch (x) {}
  });

  /* ---------- Start ---------- */
  buildCorpus(); renderGrid(); syncSeg(); loadProto(); renderDeadlines(); renderLetters(); renderCats(); renderWissen(""); syncInstall(); route(); loadRecs();
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    var hadController = !!navigator.serviceWorker.controller;
    // Neue Version direkt nach dem Öffnen: einmal neu laden, damit geänderte Inhalte sofort gelten.
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (hadController && !recState && performance.now() < 15000) location.reload();
    });
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
})();
