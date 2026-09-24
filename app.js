(function () {
  "use strict";
  var D = window.RB;
  var $ = function (id) { return document.getElementById(id); };
  var LS_PROTO = "rb-protokoll-v1", LS_LANG = "rb-lang-v1";

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function pad(n) { return String(n).padStart(2, "0"); }
  function fmtDate(d) { return pad(d.getDate()) + "." + pad(d.getMonth() + 1) + "." + d.getFullYear(); }
  function fmtTime(d) { return pad(d.getHours()) + ":" + pad(d.getMinutes()); }
  function isoDate(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function flash(el, text) { el.textContent = text; clearTimeout(el._t); el._t = setTimeout(function () { el.textContent = ""; }, 3500); }

  /* ---------- Views ---------- */
  var views = ["jetzt", "fragen", "aufnahme", "danach", "wissen", "situation"];
  function show(name) {
    views.forEach(function (v) { $("v-" + v).hidden = v !== name; });
    var tab = name === "situation" ? "jetzt" : name;
    [].forEach.call(document.querySelectorAll(".tabs a"), function (a) {
      if (a.getAttribute("data-tab") === tab) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
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
  function keepAwake() { try { if (navigator.wakeLock) navigator.wakeLock.request("screen").then(function (l) { wakeLock = l; }).catch(function () {}); } catch (e) {} }
  function releaseAwake() { try { if (wakeLock) { wakeLock.release(); wakeLock = null; } } catch (e) {} }
  function openBig(de, ru, from) { $("big-de").textContent = de; $("big-ru").textContent = ru || ""; $("big").hidden = false; lastFocus = from; $("big-close").focus(); keepAwake(); }
  function closeBig() { $("big").hidden = true; if (!recState) releaseAwake(); if (lastFocus) lastFocus.focus(); }
  $("big-close").addEventListener("click", closeBig);
  $("big").addEventListener("click", function (e) { if (e.target.id === "big" || e.target.id === "big-de" || e.target.id === "big-ru") closeBig(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !$("big").hidden) closeBig(); });
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
        '<article class="ans' + (i === 0 ? " top" : "") + '">' + inner +
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
  var activeRec = null;
  function listen(onText, onEnd, onErr) {
    if (!SR) { onErr("Spracheingabe gibt es in diesem Browser nicht. Auf dem iPhone Safari nutzen, sonst tippen."); return null; }
    try {
      var r = new SR(); r.lang = lang; r.interimResults = true; r.continuous = false; r.maxAlternatives = 1;
      var finalText = "";
      r.onresult = function (ev) {
        var interim = "";
        for (var i = ev.resultIndex; i < ev.results.length; i++) {
          if (ev.results[i].isFinal) finalText += ev.results[i][0].transcript; else interim += ev.results[i][0].transcript;
        }
        onText(finalText, interim);
      };
      r.onerror = function (ev) { onErr(ev.error === "not-allowed" ? "Mikrofon ist nicht erlaubt. In den Einstellungen für Safari freigeben." : "Spracheingabe unterbrochen (" + ev.error + ")."); };
      r.onend = function () { activeRec = null; onEnd(finalText); };
      r.start(); activeRec = r; return r;
    } catch (e) { onErr("Spracheingabe konnte nicht starten."); return null; }
  }
  function stopListening() { if (activeRec) { try { activeRec.stop(); } catch (e) {} } }

  $("mic").addEventListener("click", function () {
    var mic = $("mic"), err = $("ask-err");
    if (activeRec) { stopListening(); return; }
    err.hidden = true;
    var r = listen(function (fin, interim) { $("transcript").textContent = (fin + " " + interim).trim(); },
      function (fin) {
        mic.setAttribute("aria-pressed", "false"); $("mic-label").textContent = "Tippen und fragen";
        var q = fin || $("transcript").textContent;
        if (q) { $("ask-input").value = q; renderAnswers(q); }
      },
      function (msg) { err.textContent = msg; err.hidden = false; mic.setAttribute("aria-pressed", "false"); $("mic-label").textContent = "Tippen und fragen"; });
    if (r) { mic.setAttribute("aria-pressed", "true"); $("mic-label").textContent = "Ich höre … tippen zum Stoppen"; $("transcript").textContent = ""; }
  });
  $("ask-form").addEventListener("submit", function (e) {
    e.preventDefault(); var q = $("ask-input").value.trim();
    if (!q) { $("ask-err").textContent = "Gib zuerst eine Frage ein."; $("ask-err").hidden = false; return; }
    $("ask-err").hidden = true; $("transcript").textContent = q; renderAnswers(q);
  });
  $("ask-input").addEventListener("input", function () { $("ask-err").hidden = true; });

  /* ---------- Recording ---------- */
  var recState = null, recordings = [], pendingAct = null;
  function pickMime() {
    var c = ["video/mp4;codecs=avc1", "video/mp4", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"];
    if (!window.MediaRecorder || !MediaRecorder.isTypeSupported) return "";
    for (var i = 0; i < c.length; i++) if (MediaRecorder.isTypeSupported(c[i])) return c[i];
    return "";
  }
  function recError(msg) { var e = $("rec-err"); e.textContent = msg; e.hidden = !msg; }
  function setRecUI(stage) {
    $("rec-start").hidden = stage !== "start"; $("consent-step").hidden = stage !== "consent"; $("rec-live").hidden = stage !== "live";
  }
  function startRecording(withAudio, consentAt) {
    recError("");
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
      recError("Aufnehmen geht hier nicht. Die Seite muss über https laufen, auf dem iPhone in Safari."); setRecUI("start"); return;
    }
    navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 720 } }, audio: !!withAudio })
      .then(function (stream) {
        var mime = pickMime(), rec;
        try { rec = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream); } catch (e) { rec = new MediaRecorder(stream); }
        var chunks = [], started = new Date();
        rec.ondataavailable = function (ev) { if (ev.data && ev.data.size) chunks.push(ev.data); };
        rec.onstop = function () { finishRecording(chunks, rec.mimeType || mime || "video/mp4", started, withAudio, consentAt, stream); };
        var v = $("preview"); v.srcObject = stream; v.muted = true; var p = v.play(); if (p && p.catch) p.catch(function () {});
        rec.start(1000);
        recState = { rec: rec, started: started, timer: setInterval(tick, 500) };
        $("rec-mode").textContent = withAudio ? "Mit Ton (Einwilligung " + fmtTime(consentAt) + ")" : "Ohne Ton";
        tick(); setRecUI("live"); keepAwake();
      })
      .catch(function (e) {
        setRecUI("start");
        recError(e && e.name === "NotAllowedError" ? "Kamera ist nicht erlaubt. In den Einstellungen für Safari freigeben." : "Kamera konnte nicht starten (" + (e && e.name || "Fehler") + ").");
      });
  }
  function tick() {
    if (!recState) return;
    var s = Math.floor((Date.now() - recState.started.getTime()) / 1000);
    $("rec-time").textContent = pad(Math.floor(s / 60)) + ":" + pad(s % 60);
  }
  function stopRecording() { if (recState && recState.rec.state !== "inactive") recState.rec.stop(); }
  function finishRecording(chunks, mime, started, withAudio, consentAt, stream) {
    clearInterval(recState && recState.timer); recState = null; releaseAwake();
    stream.getTracks().forEach(function (t) { t.stop(); }); $("preview").srcObject = null;
    var type = mime.split(";")[0], ext = type.indexOf("mp4") > -1 ? "mp4" : "webm";
    var blob = new Blob(chunks, { type: type }), ended = new Date();
    var dur = Math.max(1, Math.round((ended - started) / 1000));
    var name = "kontrolle_" + isoDate(started) + "_" + pad(started.getHours()) + "-" + pad(started.getMinutes()) + "-" + pad(started.getSeconds()) + (withAudio ? "_mit-ton" : "_ohne-ton") + "." + ext;
    var item = { blob: blob, url: URL.createObjectURL(blob), name: name, started: started, dur: dur, withAudio: withAudio, consentAt: consentAt, hash: "" };
    recordings.unshift(item); setRecUI("start"); renderRecs();
    if (window.crypto && crypto.subtle) {
      blob.arrayBuffer().then(function (buf) { return crypto.subtle.digest("SHA-256", buf); }).then(function (h) {
        item.hash = Array.prototype.map.call(new Uint8Array(h), function (b) { return b.toString(16).padStart(2, "0"); }).join(""); renderRecs();
      }).catch(function () {});
    }
  }
  function recLine(r) {
    return fmtDate(r.started) + " " + fmtTime(r.started) + " Uhr, " + r.dur + " s, " + (r.withAudio ? "mit Ton, Einwilligung um " + fmtTime(r.consentAt) : "ohne Ton") +
      (r.hash ? ", SHA-256 " + r.hash : "") + ", Datei " + r.name;
  }
  function renderRecs() {
    $("rec-list").innerHTML = recordings.map(function (r, i) {
      return '<div class="rec-item"><video src="' + r.url + '" controls playsinline preload="metadata"></video>' +
        '<p class="rec-meta">' + esc(fmtDate(r.started) + " · " + fmtTime(r.started) + " Uhr · " + r.dur + " s · " + (r.withAudio ? "mit Ton, Einwilligung " + fmtTime(r.consentAt) : "ohne Ton")) + "</p>" +
        '<p class="hash">SHA-256: ' + (r.hash ? esc(r.hash) : "wird berechnet …") + "</p>" +
        '<div class="actions"><button class="btn primary" type="button" data-share="' + i + '">Sichern</button>' +
        '<a class="btn" href="' + r.url + '" download="' + esc(r.name) + '">Laden</a>' +
        '<button class="btn" type="button" data-proto="' + i + '">Ins Protokoll</button></div></div>';
    }).join("");
  }
  $("rec-list").addEventListener("click", function (e) {
    var s = e.target.closest("[data-share]"), p = e.target.closest("[data-proto]");
    if (s) {
      var r = recordings[+s.getAttribute("data-share")], file = new File([r.blob], r.name, { type: r.blob.type });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: r.name, text: "SHA-256: " + r.hash }).catch(function () {});
      } else { var a = document.createElement("a"); a.href = r.url; a.download = r.name; document.body.appendChild(a); a.click(); a.remove(); }
    }
    if (p) {
      var rr = recordings[+p.getAttribute("data-proto")], f = $("p-aufnahmen");
      f.value = (f.value ? f.value + "\n" : "") + recLine(rr); saveProto(); p.textContent = "Übernommen";
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
    if (location.hash === "#aufnahme" && pendingAct === "consent") setRecUI("consent");
    if (location.hash === "#aufnahme" && pendingAct === "film" && !recState) startRecording(false, null);
    pendingAct = null;
  });

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
    var blob = new Blob([protoText()], { type: "text/plain;charset=utf-8" }), a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "gedaechtnisprotokoll_" + $("p-datum").value + ".txt"; document.body.appendChild(a); a.click(); a.remove();
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
      f.value = (f.value ? f.value + "\n" : "") + "Standort " + la + ", " + lo + " (±" + Math.round(pos.coords.accuracy) + " m) https://maps.apple.com/?ll=" + la + "," + lo;
      b.textContent = "Standort einfügen"; saveProto();
    }, function () { b.textContent = "Standort einfügen"; flash($("p-msg"), "Standort nicht erlaubt oder nicht gefunden"); }, { enableHighAccuracy: true, timeout: 12000 });
  });
  [].forEach.call(document.querySelectorAll(".dict"), function (b) {
    b.addEventListener("click", function () {
      if (activeRec) { stopListening(); return; }
      var f = $(b.getAttribute("data-for")), base = f.value;
      var r = listen(function (fin, interim) { f.value = (base ? base + " " : "") + (fin + " " + interim).trim(); },
        function (fin) { b.setAttribute("aria-pressed", "false"); b.textContent = "Diktieren"; if (fin) f.value = (base ? base + " " : "") + fin.trim(); saveProto(); },
        function (msg) { b.setAttribute("aria-pressed", "false"); b.textContent = "Diktieren"; flash($("p-msg"), msg); });
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
  function renderWissen(q) {
    var nq = norm(q || ""), words = nq ? nq.split(" ").map(function (w) { return w.length > 6 ? w.slice(0, w.length - 2) : w; }) : [];
    var list = D.cards.filter(function (c) {
      if (!words.length) return true;
      var hay = norm(c.title + " " + c.text + " " + c.kw.join(" "));
      return words.every(function (w) { return hay.indexOf(w) > -1; });
    });
    $("w-list").innerHTML = list.map(function (c) { return '<article class="w-card">' + cardHTML(c) + "</article>"; }).join("");
    $("w-empty").hidden = list.length > 0;
  }
  $("w-q").addEventListener("input", function () { renderWissen($("w-q").value); });

  /* ---------- Start ---------- */
  buildCorpus(); renderGrid(); syncSeg(); loadProto(); renderDeadlines(); renderLetters(); renderWissen(""); route();
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
})();
