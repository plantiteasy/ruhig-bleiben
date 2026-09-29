var CACHE = "rb-v38";
var FILES = ["./", "index.html", "styles.css", "data.js", "quick.js", "kontrolle.js", "phasen.js", "tresor.js", "app.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png",
  "audio/s-anordnung_b.mp3", "audio/s-anordnung_c.mp3", "audio/s-aussteigen_b.mp3", "audio/s-aussteigen_c.mp3", "audio/s-durchsuchung_b.mp3", "audio/s-durchsuchung_c.mp3",
  "audio/s-ende_b.mp3", "audio/s-ende_c.mp3", "audio/s-grundlage_b.mp3", "audio/s-grundlage_c.mp3", "audio/s-handy_b.mp3", "audio/s-handy_c.mp3",
  "audio/s-papiere_b.mp3", "audio/s-papiere_c.mp3", "audio/s-start_b.mp3", "audio/s-start_c.mp3", "audio/s-test_b.mp3", "audio/s-test_c.mp3",
  "audio/s-video_b.mp3", "audio/s-video_c.mp3", "audio/s-warn_b.mp3", "audio/s-warn_c.mp3", "audio/s-widerspruch_b.mp3", "audio/s-widerspruch_c.mp3",
  "audio/s-zursache_b.mp3", "audio/s-zursache_c.mp3", "audio/s-festgehalten_b.mp3", "audio/s-festgehalten_c.mp3", "audio/s-grund_b.mp3", "audio/s-grund_c.mp3", "audio/s-handy-nein_b.mp3", "audio/s-handy-nein_c.mp3", "audio/s-mitfahrer_b.mp3", "audio/s-mitfahrer_c.mp3", "audio/s-pass_b.mp3", "audio/s-pass_c.mp3", "audio/s-personalien_b.mp3", "audio/s-personalien_c.mp3", "audio/s-rahmen_b.mp3", "audio/s-rahmen_c.mp3", "audio/s-unterschrift_b.mp3", "audio/s-unterschrift_c.mp3", "audio/s-verwarnung_b.mp3", "audio/s-verwarnung_c.mp3", "audio/s-wache_b.mp3", "audio/s-wache_c.mp3", "audio/s-zeuge_b.mp3", "audio/s-zeuge_c.mp3",
  "audio/cop-fahrer-start.mp3", "audio/cop-fahrer-papiere.mp3", "audio/cop-fahrer-fragen.mp3", "audio/cop-fahrer-tests.mp3", "audio/cop-fahrer-durchsuchung.mp3", "audio/cop-fahrer-massnahme.mp3", "audio/cop-fahrer-ende.mp3",
  "audio/cop-beifahrer-start.mp3", "audio/cop-beifahrer-ausweis.mp3", "audio/cop-beifahrer-fragen.mp3", "audio/cop-beifahrer-durchsuchung.mp3", "audio/cop-beifahrer-massnahme.mp3", "audio/cop-beifahrer-ende.mp3",
  "audio/cop-fuss-start.mp3", "audio/cop-fuss-ausweis.mp3", "audio/cop-fuss-grund.mp3", "audio/cop-fuss-durchsuchung.mp3", "audio/cop-fuss-massnahme.mp3", "audio/cop-fuss-ende.mp3",
  "audio/cop-rad-start.mp3", "audio/cop-rad-ausweis.mp3", "audio/cop-rad-fragen.mp3", "audio/cop-rad-tests.mp3", "audio/cop-rad-massnahme.mp3", "audio/cop-rad-ende.mp3"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return c.addAll(FILES.map(function (u) { return new Request(u, { cache: "reload" }); }));
  }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
// Erst aus dem Speicher antworten, im Hintergrund aktualisieren: Die App öffnet sofort, auch bei schlechtem Netz.
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(req).then(function (res) { if (res && res.ok && res.type === "basic") c.put(req, res.clone()); return res; });
      if (hit) { e.waitUntil(net.catch(function () {})); return hit; }
      return net.catch(function (err) { if (req.mode === "navigate") return c.match("./"); throw err; });
    });
  }));
});
