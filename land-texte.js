/* Landesspezifische Inhalts-Texte (Bodycam-Fristen, Platzverweis-Bußgeld, Gewahrsam-Fristen, Schleierfahndung u.a.),
   je Antwort-ID und Land. Wird separat gepflegt (eigener Agent/eigene Recherche, außerhalb dieser Datei-Verantwortung).
   Form: { "<quickId>": { "<LAND>": { de: "…", ru: "…", norm: "…", src: "…", geprueft: true|false } } }
   Von app/laender.js (ersetzeNormen/landTextEintrag/brauchtZahlenHinweis) und app.js (Anzeige "In <Land> anders:")
   gelesen. Noch leer – wird befüllt, sobald die Recherche pro Land vorliegt. */
window.RB = window.RB || {};
window.RB.landTexte = {};
