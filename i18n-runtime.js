/* i18n-Laufzeit: Sprachen-Registry, Nachladen + Cache (Service Worker cached jede erfolgreiche GET-Antwort
   automatisch, siehe sw.js), Fallback (fehlt ein Text -> Deutsch). Deutsch bleibt Quelle in data.js/quick.js/
   kontrolle.js/phasen.js/land-texte.js/lokal.js/laender.js/app.js (T.de). Russisch bleibt inline in denselben
   Dateien (o.ru / _ru-Suffix / {de,ru}-Paare) - Entscheidung siehe tools/I18N.md.
   Neue Sprachen (app/lang/<code>.js, von tools/i18n_build.js erzeugt) melden sich an über:
     window.RB.i18n[code] = { meta: {name, native, dir}, t: { "<id>": "<Text>", ... } }
   ID-Schema (siehe tools/i18n_extract.js): "<Modul>.<Schlüssel>.<Feld>[.<Index>]", z. B. "T.install",
   "quick.fahrer-anhalten.why", "data.situations.festnahme.doo.3", "lokal.notdienst_fallback".
   Muss NACH data.js (setzt window.RB komplett neu) und VOR laender.js/lokal.js/app.js geladen werden. */
(function () {
  "use strict";
  window.RB = window.RB || {};
  window.RB.i18n = window.RB.i18n || {};   // code -> {meta:{name,native,dir}, t:{id:text}}
  window.RB.i18nMissing = {};              // code -> {id:true,...} zur Laufzeit gesammelt (Tests/Debug)

  var manifestPromise = null;
  // app/lang/manifest.json: Katalog aller Sprachen, für die eine app/lang/<code>.js existiert (von i18n_build.js gepflegt).
  function loadManifest() {
    if (manifestPromise) return manifestPromise;
    manifestPromise = fetch("lang/manifest.json", { cache: "force-cache" })
      .then(function (r) { return r.ok ? r.json() : { codes: [] }; })
      .catch(function () { return { codes: [] }; });
    return manifestPromise;
  }
  window.RB.i18nManifest = loadManifest;

  var loading = {}; // code -> [callback,...] während ein <script> lädt
  // Lädt app/lang/<code>.js einmal nach (Script-Tag, damit der Service Worker die Antwort wie jede andere Datei cached);
  // ruft cb(true) wenn das Paket danach verfügbar ist, sonst cb(false) (z. B. offline + noch nie geladen).
  function ensureLoaded(code, cb) {
    if (!code || code === "de" || code === "ru") { cb(true); return; }
    if (window.RB.i18n[code]) { cb(true); return; }
    if (loading[code]) { loading[code].push(cb); return; }
    loading[code] = [cb];
    var done = function (ok) { var cbs = loading[code] || []; delete loading[code]; cbs.forEach(function (f) { f(ok); }); };
    var s = document.createElement("script");
    s.src = "lang/" + encodeURIComponent(code) + ".js";
    s.onload = function () { done(!!window.RB.i18n[code]); };
    s.onerror = function () { done(false); };
    document.head.appendChild(s);
  }
  window.RB.i18nEnsureLoaded = ensureLoaded;

  // Generischer Text-Lookup per stabiler ID; null = fehlt im Paket (Aufrufer fällt auf Deutsch zurück).
  function get(code, id) {
    var p = window.RB.i18n[code];
    var v = p && p.t && p.t[id];
    if (v == null) { (window.RB.i18nMissing[code] = window.RB.i18nMissing[code] || {})[id] = true; return null; }
    return v;
  }
  window.RB.i18nGet = get;

  // Lr(lang, de, ru, id): einheitlicher Fallback für alle Module (app.js/laender.js/lokal.js).
  // lang "ru" -> ru (falls vorhanden), sonst de; lang "de" -> de; jede andere Sprache -> Paket per ID, sonst de.
  function Lr(lang, de, ru, id) {
    if (lang === "ru") return ru != null ? ru : de;
    if (lang && lang !== "de" && id) { var v = get(lang, id); if (v != null) return v; }
    return de;
  }
  window.RB.i18nLr = Lr;
})();
