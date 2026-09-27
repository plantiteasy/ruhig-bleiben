/* „Sagen"-Modus (nur Rolle Fahrer): statt 10 Knöpfen 7 Phasen einer Kontrolle, je Phase ein kurzer deutscher Satz
   zum Vorspielen (vorab erzeugte Audiodatei, Männer- oder Frauenstimme) und Anzeigen.
   Quelle: Probe_Taschenanwalt/daten.json + saetze.json (Prototyp „Anwalt in der Tasche"), 1:1 übernommen.
   ziel/tipp/nicht gab es dort nur auf Russisch – die deutsche Fassung ist eine kurze, sinngemäße Übersetzung,
   keine neue Rechtsaussage. detail = erste Antwort-ID aus den „details" des Prototyps (siehe quick.js/kontrolle.js).
   Noch nicht anwaltlich geprüft. */
window.RB = window.RB || {};
window.RB.phasen = {
  saetze: {
    "s-start": { de: "Guten Tag. Ich spreche wenig Deutsch, mein Handy spricht für mich.", ru: "Добрый день. Я плохо говорю по-немецки, за меня говорит телефон." },
    "s-video": { de: "Zur Info: Mein Handy filmt offen, nur Bild, ohne Ton.", ru: "Для информации: телефон снимает открыто, только картинка, без звука." },
    "s-handy": { de: "Ich greife jetzt langsam zu meinem Handy.", ru: "Я сейчас медленно беру телефон." },
    "s-papiere": { de: "Bitte sehr, hier sind Führerschein und Fahrzeugschein.", ru: "Пожалуйста, вот права и техпаспорт." },
    "s-warn": { de: "Die Sachen liegen griffbereit. Ich reiche sie Ihnen durchs Fenster.", ru: "Вещи под рукой. Передам их вам через окно." },
    "s-aussteigen": { de: "Ich steige aus. Zur Sache sage ich nichts.", ru: "Я выхожу. По существу ничего не скажу." },
    "s-zursache": { de: "Meine Personalien gebe ich an. Zur Sache sage ich nichts.", ru: "Свои данные назову. По существу ничего не скажу." },
    "s-test": { de: "Einem freiwilligen Test stimme ich nicht zu.", ru: "На добровольный тест не соглашаюсь." },
    "s-anordnung": { de: "Ist das eine Anordnung?", ru: "Это распоряжение?" },
    "s-durchsuchung": { de: "Einer Durchsuchung stimme ich nicht zu. Widerstand leiste ich nicht.", ru: "На обыск не соглашаюсь. Сопротивления не оказываю." },
    "s-grundlage": { de: "Auf welcher Rechtsgrundlage, bitte?", ru: "На каком правовом основании, пожалуйста?" },
    "s-widerspruch": { de: "Ich widerspreche, leiste aber keinen Widerstand. Bitte vermerken Sie das.", ru: "Я возражаю, но не сопротивляюсь. Пожалуйста, занесите это в протокол." },
    "s-ende": { de: "Ist die Kontrolle für mich beendet?", ru: "Проверка для меня закончена?" }
  },
  fahrer: [
    { k: "start", de: "Anhalten", ru: "Остановка",
      ziel_de: "Ruhe zeigen und die Sprachbarriere entschärfen.", ziel_ru: "Показать спокойствие и снять языковой барьер.",
      main: "s-start", extra: ["s-video", "s-handy"],
      tipp_de: "Licht im Auto an, Fenster runter, Hände ans Lenkrad. Langsam sprechen.", tipp_ru: "Свет в салоне, окно открыть, руки на руле. Говорить медленно.",
      nicht_de: "Nicht ohne Vorwarnung ins Handschuhfach oder in die Tasche greifen.", nicht_ru: "Не тянуться к бардачку или сумке без предупреждения.",
      detail: "aufnahme-nehmen-sie-auf" },
    { k: "papiere", de: "Papiere", ru: "Документы",
      ziel_de: "Die Pflicht knapp erfüllen, nichts Zusätzliches sagen.", ziel_ru: "Быстро выполнить обязанность, ничего лишнего.",
      main: "s-papiere", extra: ["s-warn"],
      tipp_de: "Führerschein und Fahrzeugschein ruhig und ohne Worte übergeben. Paragrafen sind hier nicht nötig.", tipp_ru: "Права и техпаспорт отдать молча и спокойно. Параграфы тут не нужны.",
      nicht_de: "Beim Übergeben keine Paragrafen zitieren – klingt auswendig gelernt.", nicht_ru: "Не цитировать параграфы при передаче документов: звучит заучено.",
      detail: "fahrer-papiere" },
    { k: "fragen", de: "Fragen", ru: "Вопросы",
      ziel_de: "Die eigenen Daten nennen, zur Sache schweigen.", ziel_ru: "Назвать данные, по существу молчать.",
      main: "s-zursache", extra: ["s-aussteigen"],
      tipp_de: "Erst die Daten, dann diesen Satz. Höflich, ohne Erklärungen.", tipp_ru: "Сначала данные, потом эта фраза. Вежливо, без объяснений.",
      nicht_de: "„Nur ein Glas“, „vor zwei Stunden“ – der häufigste Fehler.", nicht_ru: "«Только один бокал», «часа два назад» — самая частая ошибка.",
      detail: "fahrer-fragen" },
    { k: "tests", de: "Tests", ru: "Тесты",
      ziel_de: "Den freiwilligen Test ablehnen, ohne zu streiten.", ziel_ru: "Отказаться от добровольного теста без спора.",
      main: "s-test", extra: ["s-anordnung"],
      tipp_de: "Bei Bestehen fragen, ob es eine Anordnung ist.", tipp_ru: "Если настаивают — спросить, распоряжение ли это.",
      nicht_de: "Nicht zustimmen, „damit es schneller vorbei ist“.", nicht_ru: "Не соглашаться «чтобы быстрее закончилось».",
      detail: "fahrer-pusten" },
    { k: "durchsuchung", de: "Durchsuchung", ru: "Обыск",
      ziel_de: "Nicht zustimmen und keinen Widerstand leisten.", ziel_ru: "Не согласиться и не сопротивляться.",
      main: "s-durchsuchung", extra: ["s-grundlage"],
      tipp_de: "Hände sichtbar halten, nichts anfassen, nicht behindern.", tipp_ru: "Руки видны, ничего не трогать, не мешать.",
      nicht_de: "Tür, Kofferraum oder Tasche nicht festhalten.", nicht_ru: "Не держать дверь, багажник или сумку.",
      detail: "fahrer-kofferraum" },
    { k: "massnahme", de: "Zwang", ru: "Принуждение",
      ziel_de: "Für das Protokoll widersprechen, körperlich aber mitmachen.", ziel_ru: "Возразить для протокола, физически подчиниться.",
      main: "s-widerspruch", extra: ["s-grundlage"],
      tipp_de: "Blutprobe, Handy-Beschlagnahme, Wache: mit Worten widersprechen, nicht mit dem Körper.", tipp_ru: "Кровь, изъятие телефона, участок: возражать словами, не телом.",
      nicht_de: "Nicht losreißen oder weglaufen – aus einer Ordnungswidrigkeit wird sonst eine Straftat.", nicht_ru: "Не вырываться и не убегать — из штрафа станет уголовное дело.",
      detail: "fahrer-blut" },
    { k: "ende", de: "Ende", ru: "Конец",
      ziel_de: "Höflich nachfragen, ob alles beendet ist.", ziel_ru: "Вежливо уточнить, что всё закончено.",
      main: "s-ende", extra: [],
      tipp_de: "Nach der Kontrolle das Video mit „Jetzt sichern“ speichern.", tipp_ru: "После проверки сохрани видео кнопкой «Jetzt sichern».",
      nicht_de: "Nicht fragen „bin ich verhaftet?“ – klingt dramatisch.", nicht_ru: "Не спрашивать «я арестован?» — звучит драматично.",
      detail: "fahrer-kontrolle-beendet" }
  ],
  immer: ["s-start", "s-zursache"]
};
