/* Lokale (ortsbezogene) Daten fuer "Ruhig bleiben": Anwaltsnotdienste je Stadt, Beschwerdestellen und
   Polizeipraesidien je Bundesland. NUR Eintraege mit geprueft:true werden in der App gezeigt.
   Quelle: lokal-daten_2026-09-29.json (Recherche-Agent, 29.09.2026), Format dort dokumentiert.
   Interne Recherche-Felder ("hinweis", "korrektur") bleiben bewusst draussen; "src" bleibt als Beleg.
   Fehlt fuer das aktuelle Land ein geprueft:true-Eintrag, gilt der bundesweite Fallback unten
   (§ 136 Abs. 1 S. 3 StPO + DAV-Notdienstuebersicht). Noch nicht anwaltlich geprueft. */
window.RB = window.RB || {};
window.RB.lokal = {
  notdienst: [
    { stadt: "Stuttgart", land: "BW", lat: 48.78, lon: 9.18, tel: "0711 998 899 66", tel_e164: "+4971199889966", traeger: "AnwaltVerein Stuttgart e.V. & Pflichtverteidigerbüro e.V.", src: "https://anwaltverein-stuttgart.de/de/buergerservice", geprueft: true, zeiten: "24 h, 7 Tage/Woche" },
    { stadt: "Karlsruhe", land: "BW", lat: 49.01, lon: 8.4, tel: "0800 24hANWALT (0800 244269258)", tel_e164: "+49800244269258", traeger: "Anwaltsverein Karlsruhe e.V.", src: "https://anwaltsverein-karlsruhe.de/de/buergerservice/strafverteidiger-notdienst", geprueft: false, zeiten: "24 h, 7 Tage/Woche (ungeprüft)" },
    { stadt: "Mannheim", land: "BW", lat: 49.49, lon: 8.47, tel: "0172 6205555", tel_e164: "+491726205555", traeger: "Mannheimer Anwaltsverein e.V.", src: "https://mannheimer-anwaltsverein.de/de/anwaltsnotdienst", geprueft: true, zeiten: "rund um die Uhr, 365 Tage/Jahr" },
    { stadt: "Freiburg", land: "BW", lat: 47.99, lon: 7.85, tel: "0172 7451940", tel_e164: "+491727451940", traeger: "Freiburger Anwaltverein e.V. (Zuordnung unsicher)", src: "https://www.freiburger-anwaltverein.de/de/", geprueft: false, zeiten: "unbekannt (ungeprüft)" },
    { stadt: "Heidelberg", land: "BW", lat: 49.41, lon: 8.69, tel: "0152 55310798", tel_e164: "+4915255310798", traeger: "Anwaltsverein Heidelberg e.V.", src: "https://www.anwaltsverein-heidelberg.de/de/buergerinformation/notdienst", geprueft: true, zeiten: "nicht explizit genannt, als Notrufnummer geführt (vermutlich 24 h)" },
    { stadt: "Ulm", land: "BW", lat: 48.4, lon: 9.99, tel: "0170 5131226", tel_e164: "+491705131226", traeger: "Anwaltverein Ulm e.V.", src: "https://anwaltverein-ulm.de/de/", geprueft: true, zeiten: "24 h (Ulm/Neu-Ulm)" },
    { stadt: "München", land: "BY", lat: 48.14, lon: 11.58, tel: "0171 1260099", tel_e164: "+491711260099", traeger: "Münchener Anwaltverein e.V. / Initiative der Bayerischen Strafverteidigerinnen und Strafverteidiger e.V. / Rechtsanwaltskammer München", src: "https://www.rak-muenchen.de/mandanten/weitere-informationen/informationsstellen/", geprueft: false, zeiten: "Mo-Do 18-8 Uhr, Fr 18 Uhr - Mo 8 Uhr (ungeprüft)" },
    { stadt: "Nürnberg-Fürth", land: "BY", lat: 49.45, lon: 11.08, tel: "0172 8270770", tel_e164: "+491728270770", traeger: "Nürnberg-Fürther Anwaltverein e.V.", src: "https://nuernberg-fuerther.anwaltverein.de/de/strafverteidigernotdienst", geprueft: true, zeiten: "Mo-Fr 18-8 Uhr, Wochenende Fr 18 Uhr - Mo 8 Uhr" },
    { stadt: "Augsburg", land: "BY", lat: 48.37, lon: 10.9, tel: "0172 8228558", tel_e164: "+491728228558", traeger: "Augsburger Anwaltverein e.V.", src: "http://www.augsburger-anwaltverein.de/buergerservice/strafverteidigernotdienst/", geprueft: false, zeiten: "nur Wochenende/Feiertage (ungeprüft)" },
    { stadt: "Berlin", land: "BE", lat: 52.52, lon: 13.4, tel: "0172 3255553", tel_e164: "+491723255553", traeger: "Vereinigung Berliner Strafverteidiger*innen e.V.", src: "https://strafverteidiger-berlin.de/notdienst/", geprueft: true, zeiten: "rund um die Uhr, inkl. Wochenende" },
    { stadt: "Bremen", land: "HB", lat: 53.08, lon: 8.8, tel: "0172 4264476", tel_e164: "+491724264476", traeger: "Bremischer Anwaltsverein", src: "https://www.anwaltsverein-bremen.de/index.php/buergerservice/anwaltsnotdienst", geprueft: true, zeiten: "Mo-Fr 18-8 Uhr, Wochenende Fr 18 Uhr - Mo 8 Uhr, Feiertage 18-8 Uhr" },
    { stadt: "Hamburg", land: "HH", lat: 53.55, lon: 9.99, tel: "0171 6105949", tel_e164: "+491716105949", traeger: "Hamburger Arbeitsgemeinschaft der Strafverteidigerinnen und Strafverteidiger e.V.", src: "https://www.strafverteidiger-hamburg.net/index.php?id=notdienst", geprueft: true, zeiten: "täglich 0-24 Uhr" },
    { stadt: "Frankfurt am Main", land: "HE", lat: 50.11, lon: 8.68, tel: "0172 6906903", tel_e164: "+491726906903", traeger: "Frankfurter Anwaltsverein e.V. & Vereinigung der Hessischen Strafverteidiger e.V.", src: "https://www.frankfurter-anwaltsverein.de/buergerservice/anwaltsnotdienst/", geprueft: true, zeiten: "24 Stunden täglich, 365 Tage/Jahr" },
    { stadt: "Rostock/Stralsund", land: "MV", lat: 54.09, lon: 12.13, tel: "0171 3533583", tel_e164: "+491713533583", traeger: "Strafverteidigerinnen- und Strafverteidigerverein Mecklenburg-Vorpommern e.V. (Zuordnung unsicher)", src: "unbekannt (ungeprüft)", geprueft: false, zeiten: "rund um die Uhr (ungeprüft)" },
    { stadt: "Braunschweig", land: "NI", lat: 52.27, lon: 10.52, tel: "0531 1233555", tel_e164: "+495311233555", traeger: "Rechtsanwaltskammer Braunschweig (übernahm den Dienst vom Braunschweiger Anwaltsverein)", src: "https://www.anwaltsverein-bs.de/de/strafverteidigernotdienst", geprueft: true, zeiten: "rund um die Uhr, außerhalb der üblichen Bürozeiten" },
    { stadt: "Oldenburg", land: "NI", lat: 53.14, lon: 8.21, tel: "0171 9750096", tel_e164: "+491719750096", traeger: "Oldenburger Anwalts- und Notarverein e.V.", src: "https://www.anwaltsverein-oldenburg.de/mandantenservice/anwaltsnotdienst/", geprueft: true, zeiten: "Mo-Fr 18-8 Uhr, Wochenende rund um die Uhr" },
    { stadt: "Düsseldorf", land: "NW", lat: 51.23, lon: 6.77, tel: "0172 2011022", tel_e164: "+491722011022", traeger: "Düsseldorfer Anwaltverein", src: "https://www.anwaltvereinduesseldorf.de/fuer-buerger/notdienst", geprueft: true, zeiten: "rund um die Uhr" },
    { stadt: "Köln", land: "NW", lat: 50.94, lon: 6.96, tel: "0221 426382", tel_e164: "+49221426382", traeger: "Kölner Anwaltverein e.V.", src: "https://www.koelner-anwaltverein.de/buergerservice/telefonnotdienst-in-strafsachen/", geprueft: true, zeiten: "24 h, auch am Wochenende" },
    { stadt: "Dortmund", land: "NW", lat: 51.51, lon: 7.47, tel: "0160 98228866", tel_e164: "+4916098228866", traeger: "Anwalt- und Notarverein Dortmund e.V. (ANoDo)", src: "https://anodo.de/index.php/service-downloads/notdienst-fuer-strafsachen/", geprueft: true, zeiten: "durchgehend, 24 h, 7 Tage/Woche" },
    { stadt: "Essen", land: "NW", lat: 51.46, lon: 7.01, tel: "0800 8838830", tel_e164: "+498008838830", traeger: "Essener Anwalt- und Notarverein e.V. (EANV)", src: "https://www.anwaltverein-essen.de/verteidiger-notdienst", geprueft: true, zeiten: "täglich ab 18 Uhr, 7 Tage/Woche" },
    { stadt: "Bonn", land: "NW", lat: 50.74, lon: 7.1, tel: "0171 5709096", tel_e164: "+491715709096", traeger: "BonnerAnwaltVerein", src: "https://bonner-anwaltverein.de/de/fuer-buerger/strafverteidigernotdienst", geprueft: true, zeiten: "rund um die Uhr" },
    { stadt: "Saarbrücken", land: "SL", lat: 49.23, lon: 7.0, tel: "0172 6806275", tel_e164: "+491726806275", traeger: "Saarländischer Anwaltverein e.V.", src: "https://saaranwalt.de/fuer-buergerinnen/strafrechtlicher-notdienst/", geprueft: true, zeiten: "rund um die Uhr" },
    { stadt: "Dresden", land: "SN", lat: 51.05, lon: 13.74, tel: "0172 7955559", tel_e164: "+491727955559", traeger: "Strafverteidigervereinigung Sachsen", src: "https://www.strafverteidiger-sachsen.de/anwaltsnotdienst/", geprueft: true, zeiten: "24 h, auch Wochenende/Feiertage" },
    { stadt: "Chemnitz", land: "SN", lat: 50.83, lon: 12.92, tel: "0172 7923427", tel_e164: "+491727923427", traeger: "Strafverteidigervereinigung Sachsen", src: "https://www.strafverteidiger-sachsen.de/anwaltsnotdienst/", geprueft: true, zeiten: "24 h, auch Wochenende/Feiertage" },
    { stadt: "Leipzig", land: "SN", lat: 51.34, lon: 12.37, tel: "0172 3641041", tel_e164: "+491723641041", traeger: "Leipziger Strafverteidiger e.V.", src: "https://www.leipziger-strafverteidiger.de/", geprueft: true, zeiten: "24 h, auch Wochenende/Feiertage" },
    { stadt: "Magdeburg", land: "ST", lat: 52.13, lon: 11.64, tel: "0170 6556158", tel_e164: "+491706556158", traeger: "Magdeburger Anwaltverein e.V.", src: "https://magdeburgeranwaltverein.de/verein", geprueft: true, zeiten: "rund um die Uhr (seit 01.01.2000)" },
    { stadt: "Halle (Saale)", land: "ST", lat: 51.48, lon: 11.97, tel: "0172 3787008", tel_e164: "+491723787008", traeger: "Strafverteidigervereinigung Sachsen (auch Sachsen-Anhalt)", src: "https://www.strafverteidiger-sachsen.de/anwaltsnotdienst/", geprueft: true, zeiten: "24 h, auch Wochenende/Feiertage" },
    { stadt: "Kiel", land: "SH", lat: 54.32, lon: 10.14, tel: "0172 5147979", tel_e164: "+491725147979", traeger: "Schleswig-Holsteinische Strafverteidiger Vereinigung e.V.", src: "https://www.strafverteidiger-sh.de/index.php/notdienste", geprueft: true, zeiten: "rund um die Uhr" },
    { stadt: "Lübeck", land: "SH", lat: 53.87, lon: 10.68, tel: "0171 6562575", tel_e164: "+491716562575", traeger: "Schleswig-Holsteinische Strafverteidiger Vereinigung e.V.", src: "https://www.strafverteidiger-sh.de/index.php/notdienste", geprueft: true, zeiten: "rund um die Uhr" },
    { stadt: "Erfurt", land: "TH", lat: 50.98, lon: 11.03, tel: "0361 65319796", tel_e164: "+4936165319796", traeger: "Erfurter Anwaltverein e.V. (Zuordnung unsicher)", src: "https://www.erfurter-anwaltverein.de/de/", geprueft: false, zeiten: "unbekannt (ungeprüft)" }
  ],

  // Bundesweite Auffang-Quelle, wenn im aktuellen Land kein geprueft:true-Notdienst bekannt ist.
  notdienst_fallback: {
    law: "§ 136 Abs. 1 S. 3 StPO",
    de: "Verlange, dass die Polizei dir hilft, einen Anwalt oder den anwaltlichen Notdienst zu erreichen (§ 136 Abs. 1 S. 3 StPO).",
    ru: "Требуй, чтобы полиция помогла тебе связаться с адвокатом или с дежурной адвокатской службой (§ 136 Abs. 1 S. 3 StPO).",
    name: "AG Strafrecht des Deutschen Anwaltvereins (DAV) – bundesweite Notdienst-Übersicht",
    url: "https://www.ag-strafrecht.de/notdienst",
    src: "https://www.ag-strafrecht.de/notdienst",
    geprueft: true
  },

  beschwerde: {
    BW: { geprueft: true, name: "Bürgerbeauftragte des Landes Baden-Württemberg, zugleich Polizeibeauftragte", url: "https://www.buergerbeauftragte-bw.de", grundlage: "Gesetz über die Bürgerbeauftragte des Landes Baden-Württemberg (BürgBG BW), beschlossen 17.02.2016, in Kraft 24.02.2016; Zuständigkeit für die Landespolizei seit 2016 (§§ 15 ff.)", frist: "3 Monate nach Abschluss der polizeilichen Maßnahme bzw. dem beanstandeten Vorfall", src: "https://www.buergerbeauftragte-bw.de/informationen/rechtsgrundlage" },
    BY: { geprueft: true, name: "Keine unabhängige Polizeibeauftragte. Beschwerden laufen über das jeweilige Polizeipräsidium bzw. das Bayerische Staatsministerium des Innern (Dienstaufsichtsbeschwerde)", url: "https://www.polizei.bayern.de/kontakt/index.html", grundlage: "Art. 12 BayPOG (Rechtsbehelfe); kein eigenes Polizeibeauftragten-Gesetz", frist: null },
    BE: { geprueft: true, name: "Bürger- und Polizeibeauftragter des Landes Berlin (aktuell Alexander Oerke)", url: "https://www.berlin.de/buerger-polizeibeauftragter/", grundlage: "Gesetz über die Einführung eines Bürgerbeauftragten des Landes Berlin und eines Beauftragten für die Polizei des Landes Berlin, beschlossen 19.11.2020, in Kraft seit 16.12.2020", frist: null },
    BB: { geprueft: true, name: "Beauftragte für Polizeiangelegenheiten des Landes Brandenburg (aktuell Inka Gossmann-Reetz)", url: "https://polb.brandenburg.de/de/", grundlage: "Brandenburgisches Polizeibeauftragtengesetz (BbgPBG), beschlossen 16.12.2022, verkündet 19.12.2022; Amt seit 2023 besetzt", frist: null },
    HB: { geprueft: true, name: "Polizei- und Feuerwehrbeauftragte für die Freie Hansestadt Bremen (aktuell Sermin Riedel)", url: "https://www.bremische-buergerschaft.de/index.php?id=760", grundlage: "Amt seit 01.03.2022, angesiedelt bei der Bremischen Bürgerschaft", frist: null },
    HH: { geprueft: true, name: "Keine unabhängige Polizeibeauftragte. Beschwerdestelle der Polizei Hamburg (Beschwerdemanagement und Disziplinarangelegenheiten, BMDA)", url: "https://www.polizei.hamburg/anerkennungen-beschwerden-789958", grundlage: "innerbehördliche Beschwerdestelle beim Polizeipräsidium, kein Gesetz über eine unabhängige Instanz", frist: null },
    // HE: Amt gesetzlich vorgesehen, aber seit Einrichtung Ende 2020 unbesetzt (Stand Recherche 2026) - siehe beschwerdeInfo() unten: wird bewusst NICHT als Anlaufstelle angezeigt.
    HE: { geprueft: true, name: "Bürger- und Polizeibeauftragte(r) Hessen – gesetzlich verankert, Stelle seit Einrichtung Ende 2020 unbesetzt (Stand 2026)", url: "https://hessischer-landtag.de/", grundlage: "Gesetz Ende 2020 verabschiedet, Amt beim Hessischen Landtag angesiedelt; Besetzung mehrfach gescheitert", frist: null },
    MV: { geprueft: true, name: "Bürgerbeauftragte des Landes Mecklenburg-Vorpommern, zugleich Beauftragte für die Landespolizei", url: "https://www.buergerbeauftragter-mv.de/beauftragter-fuer-die-landespolizei/", grundlage: "Petitions- und Bürgerbeauftragtengesetz M-V; kombiniertes Amt seit April 2021", frist: null },
    NI: { geprueft: true, name: "Keine unabhängige Polizeibeauftragte. Beschwerdestelle für Bürgerinnen und Bürger und Polizei im Niedersächsischen Ministerium für Inneres und Sport", url: "https://www.mi.niedersachsen.de/startseite/service/beschwerdestelle_fur_burgerinnen_und_burger_und_polizei/", grundlage: "ministeriumsinternes Qualitäts- und Beschwerdemanagement, kein eigenständiges Gesetz", frist: null },
    NW: { geprueft: true, name: "Keine unabhängige Polizeibeauftragte. Beschwerden über die Internetwache der Polizei NRW bzw. direkt bei der zuständigen Kreispolizeibehörde", url: "https://internetwache.polizei.nrw", grundlage: "innerbehördliches Beschwerdemanagement je Kreispolizeibehörde, kein Landesgesetz über eine unabhängige Instanz", frist: null },
    RP: { geprueft: true, name: "Bürgerbeauftragter des Landes Rheinland-Pfalz, zugleich Beauftragter für die Landespolizei", url: "https://landtag-rlp.de/de/parlament/buergerbeauftragte-und-petitio.htm", grundlage: "Landesgesetz über den Bürgerbeauftragten des Landes Rheinland-Pfalz (03.05.1974); Zuständigkeit für die Landespolizei seit 18.07.2014", frist: null },
    SL: { geprueft: true, name: "Keine unabhängige Polizeibeauftragte. Ministerium für Inneres, Bau und Sport des Saarlandes / Onlinewache Saar (Lob & Beschwerde)", url: "https://www.saarland.de/polizei/DE/home/online-wache-saar", grundlage: "kein eigenes Gesetz; Beschwerden laufen über das Innenministerium bzw. die Landespolizeidirektion", frist: null },
    SN: { geprueft: true, name: "Unabhängige zentrale Vertrauens- und Beschwerdestelle für die Polizei Sachsen", url: "https://www.sk.sachsen.de/beschwerdestelle-fuer-die-polizei-5038.html", grundlage: "eingerichtet 2016 im Sächsischen Staatsministerium des Innern, seit 01.06.2019 bei der Sächsischen Staatskanzlei angesiedelt", frist: null },
    ST: { geprueft: true, name: "Zentrale Beschwerdestelle für den Geschäftsbereich des Ministeriums für Inneres und Sport Sachsen-Anhalt", url: "https://zentralebeschwerdestelle.sachsen-anhalt.de", grundlage: "ministeriumsinternes Beschwerdemanagement, keine gesetzlich verankerte unabhängige Instanz", frist: null },
    SH: { geprueft: true, name: "Beauftragte für die Landespolizei Schleswig-Holstein", url: "https://www.landtag.ltsh.de/beauftragte/bb-polizei/angebot/", grundlage: "beim Schleswig-Holsteinischen Landtag angesiedelt", frist: "der beanstandete Sachverhalt darf nicht länger als 12 Monate zurückliegen" },
    TH: { geprueft: true, name: "Keine unabhängige Polizeibeauftragte. Polizeivertrauensstelle beim Thüringer Ministerium für Inneres und Kommunales (ministeriumsintern)", url: "https://innen.thueringen.de/wir/polizeivertrauensstelle", grundlage: "ministeriumsintern; Vorstoß für eine unabhängige Stelle (Stand Recherche noch nicht umgesetzt)", frist: null },
    // Nicht laendergebunden - nur als Zusatz-Hinweis bei der Bundespolizei (Bahnhof, Zug, Flughafen), siehe bpolHinweis() in app.js.
    BPOL: { geprueft: true, name: "Polizeibeauftragter des Bundes beim Deutschen Bundestag", url: "https://www.bundestag.de/polizeibeauftragter", grundlage: "Polizeibeauftragtengesetz (PolBeauftrG), in Kraft seit 05.03.2024. Zuständig für Bundespolizei, BKA und Polizei beim Deutschen Bundestag.", frist: null }
  },

  praesidien: {
    BW: { geprueft: true, url: "https://www.polizei-bw.de/dienststellenfinder/" },
    BY: { geprueft: true, url: "https://www.polizei.bayern.de/wir-ueber-uns/organisation/dienststellen/" },
    BE: { geprueft: true, url: "https://www.berlin.de/polizei/dienststellen/" },
    BB: { geprueft: true, url: "https://polizei.brandenburg.de/liste/dienststellen-der-polizei-brandenburg/60738" },
    HB: { geprueft: true, url: "https://www.polizei.bremen.de/ueber-uns/weitere-dienststellen-60538" },
    HH: { geprueft: true, url: "https://www.polizei.hamburg/ihre-polizei/polizeikommissariate" },
    HE: { geprueft: true, url: "https://www.polizei.hessen.de/polizeipraesidien" },
    MV: { geprueft: true, url: "https://www.polizei.mvnet.de/" },
    NI: { geprueft: true, url: "https://www.polizei-nds.de/dienststellen/" },
    NW: { geprueft: true, url: "https://internetwache.polizei.nrw" },
    RP: { geprueft: true, url: "https://www.polizei.rlp.de/die-polizei/dienststellen" },
    SL: { geprueft: true, url: "https://www.saarland.de/polizei/DE/service/kontakt" },
    SN: { geprueft: true, url: "https://www.polizei.sachsen.de/de/uebersichtskarten.htm" },
    ST: { geprueft: true, url: "https://polizei.sachsen-anhalt.de/das-sind-wir" },
    SH: { geprueft: true, url: "https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/POLIZEI/DasSindWir/PDen" },
    TH: { geprueft: true, url: "https://www.polizei.thueringen.de/" }
  }
};

/* ---------- Logik: naechster Notdienst, Land-Fallbacks, Satz-Bausteine (Aufruf aus app.js) ---------- */
(function () {
  "use strict";

  function haversineKm(lat1, lon1, lat2, lon2) {
    var R = 6371, rad = Math.PI / 180;
    var dLat = (lat2 - lat1) * rad, dLon = (lon2 - lon1) * rad;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.asin(Math.sqrt(a));
  }
  function fuerLand(land) {
    return (window.RB.lokal.notdienst || []).filter(function (e) { return e && e.land === land && e.geprueft === true; });
  }
  // coords: {lat, lon} oder null/undefined (nur mit Standort-Erlaubnis vorhanden, siehe app.js currentCoords()).
  function notdienstInfo(land, coords) {
    var list = fuerLand(land);
    if (!list.length) return { mode: "fallback" };
    if (coords && isFinite(coords.lat) && isFinite(coords.lon)) {
      var best = null, bestD = Infinity;
      list.forEach(function (e) {
        var d = haversineKm(coords.lat, coords.lon, e.lat, e.lon);
        if (d < bestD) { bestD = d; best = e; }
      });
      return { mode: "nearest", entry: best };
    }
    // Ohne Standort: Reihenfolge wie in den Daten (erster Eintrag je Land = Landeshauptstadt/Hauptstandort, z. B. BW: Stuttgart) - keine willkürliche alphabetische Sortierung.
    return { mode: "liste", items: list.slice(0, 3), entry: list[0] };
  }
  function hauptEntry(info) { return info.mode === "nearest" ? info.entry : info.items ? info.items[0] : null; }
  // Heutiger Stuttgart/BW-Standardeintrag: Texte bleiben dafuer Wort fuer Wort wie vor lokal.js (kein Umbau des Bestandstexts).
  function istStandard(e) { return !!e && e.land === "BW" && e.stadt === "Stuttgart" && e.tel === "0711 998 899 66"; }
  // Kurzes Zeiten-Etikett fuer Saetze: "rund um die Uhr" nur wenn wirklich 24/7, sonst kurzer Hinweis (z. B. Nuernberg, Bremen, Oldenburg, Essen: nur abends/Wochenende).
  function istRundUmDieUhr(raw) {
    var s = String(raw || "").toLowerCase();
    if (/mo-fr|mo-do|ab 18 uhr|18-8 uhr|nur wochenende/.test(s)) return false;
    return /rund um die uhr|24\s*h|24 stunden|0-24|durchgehend/.test(s);
  }
  function zeitenKurz(e, lang) {
    if (istRundUmDieUhr(e && e.zeiten)) return lang === "ru" ? "круглосуточно" : "rund um die Uhr";
    return lang === "ru" ? "только вечером/выходные" : "nur abends/Wochenende";
  }
  function stadtSatzteil(e, lang) { return lang === "ru" ? "город " + e.stadt : e.stadt; }
  // Eine anzeigbare Zeile "Stadt, Zeiten: Nummer (Traeger)".
  function zeile(e, lang) { return stadtSatzteil(e, lang) + ", " + zeitenKurz(e, lang) + ": " + e.tel + (e.traeger ? " (" + e.traeger + ")" : ""); }

  function fallbackSatz(lang) { return lang === "ru" ? window.RB.lokal.notdienst_fallback.ru : window.RB.lokal.notdienst_fallback.de; }

  // Tipp-Zeile fuer festnahme.doo (ein Listenpunkt, ersetzt die BW-Zeile "Anwaltsnotdienst Stuttgart ...").
  function tippZeile(info, lang) {
    if (info.mode === "fallback") return fallbackSatz(lang);
    var e = hauptEntry(info);
    if (istStandard(e)) return lang === "ru" ? "Дежурный адвокат в Штутгарте, круглосуточно: 0711 998 899 66." : "Anwaltsnotdienst Stuttgart, rund um die Uhr: 0711 998 899 66.";
    var items = info.mode === "nearest" ? [e] : info.items;
    var pref = lang === "ru" ? "Дежурный адвокат: " : "Anwaltsnotdienst: ";
    return pref + items.map(function (x) { return zeile(x, lang); }).join("; ") + ".";
  }

  // Volltext fuer die Karte "Sofort einen Anwalt" (k-notdienst).
  function textK(info, lang) {
    var recht = lang === "ru"
      ? " Полиция обязана помочь тебе связаться с адвокатом. Можно попросить назначить защитника; самое позднее перед судьёй по аресту его назначат. Если тебя осудят, расходы обычно платишь сам."
      : " Die Polizei muss dir helfen, einen Anwalt zu erreichen. Einen Pflichtverteidiger kannst du beantragen; spätestens vor dem Haftrichter bekommst du einen. Wirst du verurteilt, trägst du die Kosten meist selbst.";
    if (info.mode === "fallback") return fallbackSatz(lang) + recht;
    var e = hauptEntry(info);
    if (istStandard(e)) {
      return (lang === "ru"
        ? "Дежурные адвокаты по уголовным делам в Штутгарте, круглосуточно: 0711 998 899 66 (AnwaltVerein Stuttgart)."
        : "Anwaltlicher Notdienst für Strafsachen in Stuttgart, rund um die Uhr: 0711 998 899 66 (AnwaltVerein Stuttgart).") + recht;
    }
    var items = info.mode === "nearest" ? [e] : info.items;
    var lead = lang === "ru" ? "Дежурные адвокаты по уголовным делам: " : "Anwaltlicher Notdienst für Strafsachen: ";
    return lead + items.map(function (x) { return zeile(x, lang); }).join("; ") + "." + recht;
  }

  // Sag-Satz fuer k-notdienst - ohne bekannte Nummer entfaellt der Nummer-Teil (Fallback-Satz stattdessen).
  function sagSatz(info, lang) {
    var basis = lang === "ru" ? "Я хочу сразу адвоката." : "Ich will sofort einen Anwalt.";
    if (info.mode === "fallback") return basis + " " + fallbackSatz(lang);
    var e = hauptEntry(info);
    return basis + " " + (lang === "ru" ? "Позвоните, пожалуйста, в дежурную адвокатскую службу: " + e.tel + "." : "Bitte rufen Sie den Anwaltlichen Notdienst an: " + e.tel + ".");
  }

  function stadtLabel(info, lang) {
    if (info.mode === "fallback") return null;
    var e = hauptEntry(info);
    if (lang === "ru" && istStandard(e)) return "Штутгарт"; // Bestandstext nutzt die deklinierte/kurze Form, nicht "Stuttgart"
    return e.stadt;
  }
  function titel(info, lang) {
    if (info.mode === "fallback") return lang === "ru" ? "Срочно адвокат" : "Sofort einen Anwalt";
    var e = hauptEntry(info);
    if (istStandard(e)) return lang === "ru" ? "Срочно адвокат — дежурная служба Штутгарта" : "Sofort einen Anwalt – Notdienst Stuttgart";
    return (lang === "ru" ? "Срочно адвокат" : "Sofort einen Anwalt") + " (" + stadtLabel(info, lang) + ")";
  }
  function toneLabel(info, lang) {
    if (info.mode === "fallback") return lang === "ru" ? "Твоё право" : "Dein Recht";
    return lang === "ru" ? "Круглосуточно" : "Rund um die Uhr";
  }
  function telE164(info) { if (info.mode === "fallback") return null; var e = hauptEntry(info); return e.tel_e164 || null; }
  // Kurztext fuer die Kontrolle-Hinweiszeile (kontrolle.js hinweis.filme): BW-Standard bleibt "0711 998 899 66" ohne Stadt-Praefix.
  function kurzText(info) {
    if (info.mode === "fallback") return null;
    var e = hauptEntry(info);
    return istStandard(e) ? e.tel : (e.stadt + ": " + e.tel);
  }
  // Anzeigename fuer den "Anrufen"-Knopf (act_notdienst): BW-Standard bleibt "Stuttgart" bzw. "Штутгарт".
  function knopfStadt(info, lang) { return stadtLabel(info, lang); }
  function lawSuffix(info) {
    if (info.mode === "fallback") return null;
    var e = hauptEntry(info);
    if (istStandard(e)) return "anwaltverein-stuttgart.de";
    try { return e.src ? String(e.src).replace(/^https?:\/\//, "").replace(/\/.*$/, "") : null; } catch (x) { return null; }
  }

  // Beschwerdestelle: HE hat das Amt zwar gesetzlich, aber es ist unbesetzt (siehe Recherche) - deshalb bewusst NICHT
  // als Anlaufstelle liefern, dann greift in app.js die neutrale Formulierung.
  function beschwerdeInfo(land) {
    if (land === "HE") return null;
    var b = window.RB.lokal.beschwerde && window.RB.lokal.beschwerde[land];
    return (b && b.geprueft) ? b : null;
  }
  function praesidiumInfo(land) {
    var p = window.RB.lokal.praesidien && window.RB.lokal.praesidien[land];
    return (p && p.geprueft) ? p : null;
  }
  // Frist in Monate, nur wenn im Datensatz eine feste Zahl steht (aktuell BW 3, SH 12) - sonst null (keine Fristzahl erfinden).
  function beschwerdeFristMonate(b) {
    if (!b || !b.frist) return null;
    var m = /(\d+)\s*Monate/.exec(b.frist);
    return m ? parseInt(m[1], 10) : null;
  }
  function bpolHinweis(lang) {
    var b = window.RB.lokal.beschwerde && window.RB.lokal.beschwerde.BPOL;
    if (!b || !b.geprueft) return "";
    return lang === "ru"
      ? "При федеральной полиции (вокзал, поезд, аэропорт): " + b.name + "."
      : "Bei der Bundespolizei (Bahnhof, Zug, Flughafen): " + b.name + ".";
  }

  window.RB.lokal.notdienstInfo = notdienstInfo;
  window.RB.lokal.notdienstTippZeile = tippZeile;
  window.RB.lokal.notdienstTextK = textK;
  window.RB.lokal.notdienstSagSatz = sagSatz;
  window.RB.lokal.notdienstTitel = titel;
  window.RB.lokal.notdienstToneLabel = toneLabel;
  window.RB.lokal.notdienstTelE164 = telE164;
  window.RB.lokal.notdienstKurzText = kurzText;
  window.RB.lokal.notdienstKnopfStadt = knopfStadt;
  window.RB.lokal.notdienstLawSuffix = lawSuffix;
  window.RB.lokal.beschwerdeInfo = beschwerdeInfo;
  window.RB.lokal.beschwerdeFristMonate = beschwerdeFristMonate;
  window.RB.lokal.praesidiumInfo = praesidiumInfo;
  window.RB.lokal.bpolHinweis = bpolHinweis;

  // Generalisiert BW/Stuttgart-spezifische Waffenverbotszonen-Formulierungen fuer andere Laender (nur weglassen/verallgemeinern,
  // keine neuen Rechtsaussagen). Sicher als globaler Ersatz: die Wortfolgen kommen nur in diesem einen Zusammenhang vor.
  function wvzGeneric(text) {
    if (!text) return text;
    return String(text)
      .replace(/ Die Stuttgarter Zone \(Teile von Neuer Vorstadt, Hauptbahnhof, Oberem Schlossgarten und Rathaus\) beruht auf § 42 Abs\. 5 WaffG; Waffen und Messer sind dort freitags und samstags von 18 bis 8 Uhr und vor Feiertagen verboten, Verstoß bis 10\.000 € \(§§ 1, 4 WMVZ VO\)\./, "")
      .replace(/ Зона в Штутгарте \(части Neue Vorstadt, главного вокзала, Oberer Schlossgarten и ратуши\) основана на § 42 Abs\. 5 WaffG; оружие и ножи там запрещены по пятницам и субботам с 18 до 8 часов и накануне праздников, штраф до 10 000 € \(§§ 1, 4 WMVZ VO\)\./, "")
      .replace(/in der Stuttgarter Waffenverbotszone/g, "in einer Waffenverbotszone")
      .replace(/в зоне запрета оружия в Штутгарте/g, "в зоне запрета оружия");
  }
  window.RB.lokal.wvzGeneric = wvzGeneric;
})();
