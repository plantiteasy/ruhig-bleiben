/* Inhalte des Prototyps. Stand und Quellen: Recherche_2026-09-24.md (Projektordner). */
window.RB = {
  stand: "24.09.2026",
  region: "Baden-Württemberg",

  situations: [
    {
      id: "personalien", title: "Personenkontrolle", sub: "Ausweis und Personalien", tone: "must", toneLabel: "Pflicht",
      say: [
        ["Hier sind meine Personalien. Zur Sache sage ich nichts.", "Вот мои данные. По делу ничего не скажу."],
        ["Aus welchem Grund werde ich kontrolliert?", "По какой причине меня проверяют?"]
      ],
      doo: [
        "Personalien angeben: Name, Geburtsdatum und -ort, Anschrift, Staatsangehörigkeit, Familienstand, Beruf.",
        "Ausweis zeigen, wenn du ihn dabeihast. Als Ausländer Pass oder Aufenthaltstitel vorzeigen – deshalb immer mitführen.",
        "Nach Name und Dienststelle fragen, Kennzeichen des Streifenwagens merken."
      ],
      dont: [
        "Keine Angaben zur Sache – Schweigen ist dein Recht.",
        "Nicht weggehen, solange die Kontrolle läuft.",
        "Nicht beleidigen, keine Gesten."
      ],
      note: "Weigerung bei den Personalien: Bußgeld bis 1.000 €. Ausweis dabei und nicht gezeigt: bis 3.000 €. Lässt sich die Identität nicht klären, darf die Polizei dich festhalten und zur Wache bringen.",
      law: "§ 111 OWiG · § 32 PAuswG · § 47a AufenthG · § 27 PolG BW · § 163b StPO",
      actions: ["film", "protokoll"],
      kw: ["personalien", "ausweis", "kontroll", "pass", "adress", "name angeb", "паспорт", "документ", "данные", "провер", "назвать имя", "имя"]
    },
    {
      id: "verkehr", title: "Verkehrskontrolle", sub: "Auto, Roller, E-Scooter", tone: "must", toneLabel: "Pflicht",
      say: [
        ["Hier sind mein Führerschein und mein Fahrzeugschein.", "Вот мои права и техпаспорт."],
        ["Ist dieser Test freiwillig?", "Этот тест добровольный?"]
      ],
      doo: [
        "Führerschein und Zulassungsbescheinigung Teil I zeigen – die digitale Version in der i-Kfz-App zählt auch.",
        "Auf Verlangen Warndreieck, Verbandkasten und Warnweste zeigen.",
        "Aussteigen, wenn die Polizei es für die Kontrolle verlangt."
      ],
      dont: [
        "Keine Angaben dazu, ob und was du getrunken hast – das ist eine Aussage zur Sache.",
        "Einer Durchsuchung des Fahrzeugs nicht zustimmen, sie aber auch nicht behindern."
      ],
      law: "§ 36 Abs. 5 StVO · § 4 Abs. 2 FeV · § 13 Abs. 6 FZV · § 31b StVZO",
      actions: ["situation:test", "protokoll"],
      kw: ["verkehr", "auto", "fahr", "führerschein", "fahrzeugschein", "roller", "scooter", "машин", "авто", "права", "техпаспорт", "самокат", "скутер", "за рул", "аптечк"]
    },
    {
      id: "test", title: "Alkohol- oder Drogentest", sub: "Pusten, Urin, Koordination", tone: "right", toneLabel: "Freiwillig",
      say: [
        ["Ist dieser Test freiwillig?", "Этот тест добровольный?"],
        ["Ich mache keine Angaben zur Sache.", "Я не даю показаний по делу."]
      ],
      doo: [
        "Alle Tests mit deiner Mitwirkung sind freiwillig: Vortest, Atemalkohol auf der Wache, Urin, Schweiß, Koordinationstests. Die Polizei muss darauf nicht hinweisen.",
        "Bei Verdacht kann eine Blutprobe angeordnet werden, auch ohne Richter – notfalls mit Zwang.",
        "Grenzen: ab 0,5 ‰ Bußgeld, ab 1,1 ‰ Straftat, mit Ausfallerscheinungen schon ab 0,3 ‰ – auch auf dem E-Scooter. THC: 3,5 ng/ml. Probezeit und unter 21: 0,0 ‰."
      ],
      dont: [
        "Die Blutprobe nicht körperlich verhindern – das ist Widerstand."
      ],
      law: "§ 81a StPO · § 24a, § 24c StVG · § 316 StGB · § 1 eKFV",
      actions: ["protokoll"],
      kw: ["alkohol", "pusten", "drogen", "test", "blut", "promill", "thc", "urin", "trunken", "алко", "пил", "выпил", "дунуть", "наркот", "тест", "кровь", "трав", "промил"]
    },
    {
      id: "durchsuchung", title: "Durchsuchung", sub: "Person, Tasche, Auto, Wohnung", tone: "can", toneLabel: "Nicht zustimmen",
      say: [
        ["Ich stimme der Durchsuchung nicht zu. Ich leiste keinen Widerstand.", "Я не согласен на обыск. Я не сопротивляюсь."],
        ["Ich möchte den Durchsuchungsbeschluss sehen.", "Покажите постановление об обыске."],
        ["Bitte geben Sie mir ein Verzeichnis der beschlagnahmten Gegenstände.", "Дайте, пожалуйста, список изъятого."]
      ],
      doo: [
        "Widerspruch laut und ruhig sagen – das zählt später.",
        "Wohnung: grundsätzlich nur mit richterlichem Beschluss, sonst nur bei Gefahr im Verzug. Du darfst dabei sein.",
        "Verzeichnis und Bescheinigung gibt es nur auf Verlangen – also verlangen.",
        "Stuttgart: In der Waffenverbotszone der Innenstadt darf freitags, samstags und vor Feiertagen von 18 bis 8 Uhr ohne Verdacht durchsucht werden."
      ],
      dont: [
        "Nicht festhalten, wegziehen oder schubsen: Widerstand bis 3 Jahre, tätlicher Angriff 3 Monate bis 5 Jahre."
      ],
      law: "§§ 34–36 PolG BW · §§ 102, 105–107 StPO · Art. 13 GG · § 42c WaffG · §§ 113, 114 StGB",
      actions: ["film", "protokoll"],
      kw: ["durchsuch", "tasche", "rucksack", "abtast", "wohnung", "beschluss", "обыск", "досмотр", "сумк", "карман", "рюкзак", "квартир", "ордер"]
    },
    {
      id: "handy", title: "Handy oder Video löschen", sub: "Löschen, Beschlagnahme, Entsperren", tone: "right", toneLabel: "Nicht löschen",
      say: [
        ["Ich lösche nichts. Ich widerspreche der Beschlagnahme und bitte um eine Bescheinigung.", "Я ничего не удаляю. Возражаю против изъятия и прошу документ."],
        ["Meinen Code gebe ich nicht heraus.", "Код я не сообщаю."]
      ],
      doo: [
        "Nichts löschen. Eine besondere Befugnis, das Löschen anzuordnen, hat die Polizei nicht.",
        "Nimmt die Polizei das Handy als Beweismittel mit: nicht festhalten, Widerspruch sagen, Bescheinigung verlangen. Nach deinem Widerspruch soll sie binnen 3 Tagen die Bestätigung durch ein Gericht beantragen.",
        "Vorher Biometrie sperren: iPhone – Seitentaste und Lauter-Taste 2 Sekunden halten, danach ist der Code nötig."
      ],
      dont: [
        "Den PIN nicht nennen – das musst du nicht.",
        "Aber wissen: Den Finger dürfen sie mit Zwang auflegen (BGH 2025, bei richterlich angeordneter Durchsuchung)."
      ],
      law: "§§ 94, 98 StPO · § 38 PolG BW · BGH 2 StR 232/24",
      actions: ["film", "protokoll"],
      kw: ["handy", "lösch", "video lösch", "beschlagnahm", "sicherstell", "pin", "code", "entsperr", "finger", "face id", "телефон", "удал", "стер", "изъ", "забрал", "пин", "код", "пароль", "разблок", "палец"]
    },
    {
      id: "freund", title: "Freund wird kontrolliert", sub: "Du bist Zeuge, jemand wird mitgenommen", tone: "right", toneLabel: "Filmen erlaubt",
      say: [
        ["Ich bin Zeuge und filme ohne Ton.", "Я свидетель и снимаю без звука."],
        ["Zu welchem Revier bringen Sie ihn beziehungsweise sie?", "В какой участок вы его или её везёте?"]
      ],
      doo: [
        "Abstand halten, Video ohne Ton aufnehmen und sofort sichern.",
        "Kennzeichen, Uhrzeit, Namen und Dienststelle notieren.",
        "Die Aufnahme bleibt bei dir als freiem Zeugen – gib dein Handy nicht der Person mit, die mitgenommen wird.",
        "Noch am selben Tag schreibt jeder ein eigenes Gedächtnisprotokoll."
      ],
      dont: [
        "Nicht einmischen, nicht kommentieren, nicht anfassen.",
        "Keinen Ton ohne Einwilligung aufnehmen, nichts veröffentlichen."
      ],
      law: "BVerfG 1 BvR 2501/13 · § 114c StPO · § 201 StGB · § 33 KUG",
      actions: ["film", "protokoll"],
      kw: ["freund", "freundin", "zeuge", "mitgenommen", "revier", "друг", "подруг", "свидетел", "увоз", "забира", "участок", "рядом"]
    },
    {
      id: "festnahme", title: "Festnahme oder Wache", sub: "Du wirst mitgenommen", tone: "right", toneLabel: "Deine Rechte",
      say: [
        ["Ich möchte einen Anwalt sprechen und meine Angehörigen benachrichtigen.", "Хочу поговорить с адвокатом и сообщить родным."],
        ["Ich brauche einen Dolmetscher für Russisch.", "Мне нужен переводчик с русского."],
        ["Ich mache keine Angaben zur Sache.", "Я не даю показаний по делу."]
      ],
      doo: [
        "Ruhig bleiben, keinen Widerstand leisten.",
        "Anwalt verlangen und Angehörige benachrichtigen lassen – das ist dein Recht. Der Dolmetscher ist kostenlos.",
        "Nach einer Festnahme musst du spätestens am Tag danach einem Richter vorgeführt werden. Nur zur Identitätsfeststellung nach StPO: höchstens 12 Stunden."
      ],
      dont: [
        "Nichts unterschreiben, was du nicht verstehst.",
        "Nicht „nur kurz erklären“ – jede Erklärung ist eine Aussage."
      ],
      law: "Art. 104 GG · §§ 114b, 114c, 128, 163c StPO · § 187 GVG · § 33 PolG BW",
      actions: ["protokoll"],
      kw: ["festnahm", "festgenommen", "verhaft", "wache", "revier", "anwalt", "dolmetsch", "zelle", "задерж", "арест", "участок", "адвокат", "переводчик", "родн", "позвонить"]
    },
    {
      id: "filmen", title: "Ich will filmen", sub: "Video, Ton, Einwilligung", tone: "warn", toneLabel: "Ohne Ton",
      say: [
        ["Ich filme ohne Ton zur Beweissicherung und behindere Sie nicht.", "Снимаю без звука для доказательств и вам не мешаю."],
        ["Ich möchte unser Gespräch zur Dokumentation aufnehmen. Sind Sie einverstanden?", "Хочу записать наш разговор для документации. Вы согласны?"]
      ],
      doo: [
        "Video ohne Ton ist erlaubt, solange du nicht störst – Abstand halten.",
        "Ton nur mit Einwilligung aller, die sprechen. Zu Beginn der Aufnahme die Einwilligung noch einmal bestätigen lassen.",
        "Sofort sichern: an dich selbst oder in deine Cloud schicken."
      ],
      dont: [
        "Keinen Ton heimlich aufnehmen – umstritten nach § 201 StGB, das Handy kann beschlagnahmt werden.",
        "Keine Gesichter veröffentlichen und keine Daten von Beamten verbreiten."
      ],
      law: "BVerfG 1 BvR 2501/13 · VG Berlin 1 K 334/23 · § 201 StGB · § 33 KUG · § 126a StGB",
      actions: ["film", "consent"],
      kw: ["film", "video", "kamera", "aufnahm", "aufnehm", "ton", "einwillig", "сним", "съем", "видео", "камер", "запис", "звук", "соглас"]
    }
  ],

  cards: [
    {
      id: "k-ausweis", title: "Muss ich meinen Ausweis dabeihaben?", tone: "warn", toneLabel: "Kommt drauf an",
      text: "Deutsche müssen einen Ausweis besitzen, aber nicht mitführen. Ausländer müssen Pass oder Aufenthaltstitel auf Verlangen der Polizei vorzeigen – praktisch heißt das: immer dabeihaben. Auf Baustellen gilt wegen Zollkontrollen eine Mitführungspflicht. Hast du den Ausweis dabei, musst du ihn zeigen.",
      law: "§ 1, § 32 PAuswG · § 47a, § 98 AufenthG · § 2a SchwarzArbG",
      kw: ["ausweis dabei", "mitführ", "pass", "aufenthalt", "baustell", "паспорт", "носить", "с собой", "внж", "стройк", "документ"]
    },
    {
      id: "k-fragen", title: "Muss ich Fragen beantworten?", tone: "right", toneLabel: "Nein",
      text: "Zur Sache darfst du schweigen – als Beschuldigter und als Zeuge. Zur Polizei musst du als Zeuge nur, wenn die Staatsanwaltschaft die Vorladung angeordnet hat. Die Personalien musst du trotzdem angeben.",
      say: [["Ich mache keine Angaben zur Sache. Ich möchte zuerst mit einem Anwalt sprechen.", "Я не даю показаний по делу. Сначала хочу поговорить с адвокатом."]],
      law: "§§ 55, 136, 163 Abs. 3 StPO",
      kw: ["frag", "antwort", "schweig", "aussag", "zeug", "vorlad", "вопрос", "отвеч", "молч", "показан", "свидетел", "повестк"]
    },
    {
      id: "k-grund", title: "Darf die Polizei ohne Grund kontrollieren?", tone: "can", toneLabel: "Teilweise",
      text: "In BW in bestimmten Fällen ja: an „gefährlichen Orten“, bei Veranstaltungen, im öffentlichen Verkehr, an Kontrollstellen und in der Stuttgarter Waffenverbotszone. Menschen nach Hautfarbe oder Herkunft auszuwählen ist rechtswidrig. Nach dem Grund fragen darfst du immer.",
      say: [["Aus welchem Grund werde ich kontrolliert?", "По какой причине меня проверяют?"]],
      law: "§ 27 PolG BW · § 42c WaffG · OVG NRW 5 A 294/16",
      kw: ["ohne grund", "grundlos", "anlass", "hautfarb", "herkunft", "racial", "без причин", "просто так", "без повод", "цвет кож", "расизм", "почему остановил"]
    },
    {
      id: "k-paragraf", title: "Muss der Polizist Grund oder Paragrafen nennen?", tone: "right", toneLabel: "Grund: ja",
      text: "Den Paragrafen nicht. Bei einer strafrechtlichen Kontrolle muss er sagen, welche Straftat dir vorgeworfen wird. Bei einer polizeirechtlichen Kontrolle kannst du eine schriftliche Bestätigung der Maßnahme verlangen – dann muss sie begründet werden.",
      say: [
        ["Welche Straftat wird mir vorgeworfen?", "В каком преступлении меня подозревают?"],
        ["Ich bitte um eine schriftliche Bestätigung dieser Maßnahme.", "Прошу письменное подтверждение этой меры."]
      ],
      law: "§§ 163a Abs. 4, 163b StPO · OLG Hamm 2 ORs 5/25 · § 37 Abs. 2, § 39 LVwVfG",
      kw: ["paragraf", "paragraph", "rechtsgrundlag", "vorwurf", "vorgeworfen", "straftat", "параграф", "статья", "основан", "подозрева", "в чем"]
    },
    {
      id: "k-name", title: "Wie erfahre ich Name und Nummer des Polizisten?", tone: "right", toneLabel: "Fragen",
      text: "Eine Nummer tragen in BW nur geschlossene Einheiten der Bereitschaftspolizei. Nach Vorgabe des Innenministeriums zeigen Beamte auf Verlangen ihren Dienstausweis und nennen Name und Dienststelle – Ausnahmen gibt es. Notiere immer Kennzeichen und Uhrzeit.",
      say: [["Bitte zeigen Sie mir Ihren Dienstausweis und nennen Sie mir Ihren Namen und Ihre Dienststelle.", "Покажите удостоверение и назовите имя и участок."]],
      law: "§ 55 Abs. 5 LBG BW · Vorgabe IM BW zum Dienstausweis",
      kw: ["dienstnummer", "dienstausweis", "name des polizist", "nummer", "kennzeich", "имя полицейск", "номер", "жетон", "значок", "удостоверен", "кто он"]
    },
    {
      id: "k-filmen", title: "Darf ich die Polizei filmen?", tone: "right", toneLabel: "Video: ja",
      text: "Video ohne Ton im öffentlichen Raum: ja, wenn du nicht störst. Ton: umstritten – manche Gerichte sehen eine Straftat nach § 201 StGB, andere nicht, wenn Umstehende mithören können; der BGH hat nicht entschieden. Veröffentlichen nur mit unkenntlichen Gesichtern.",
      say: [["Ich filme ohne Ton zur Beweissicherung und behindere Sie nicht.", "Снимаю без звука для доказательств и вам не мешаю."]],
      law: "BVerfG 1 BvR 2501/13 · VG Berlin 1 K 334/23 · § 201 StGB · § 33 KUG",
      kw: ["film", "video", "kamera", "aufnahm", "aufnehm", "ton", "сним", "съем", "видео", "камер", "запис", "звук"]
    },
    {
      id: "k-tabu", title: "Was darf ich auf keinen Fall sagen oder tun?", tone: "no", toneLabel: "Tabu",
      text: "Beleidigung ist eine Straftat: Mittelfinger, „Schwein“, „Arschloch“. „Bulle“ allein ist nicht immer strafbar, Duzen auch nicht – wer aber nach der Bitte weiter duzt, riskiert es. Schubsen oder Losreißen ist Widerstand, ein tätlicher Angriff kostet 3 Monate bis 5 Jahre. Sag „Sie“, kurz und ruhig.",
      law: "§§ 185, 194 Abs. 3 StGB · §§ 113, 114 StGB · OLG Hamburg 1 ORs 13/25",
      kw: ["beleidig", "schimpf", "mittelfing", "duz", "bulle", "widerstand", "оскорб", "мат", "палец", "ругат", "на ты", "сопротивл", "нельзя говорить"]
    },
    {
      id: "k-wohnung", title: "Polizei an der Wohnungstür", tone: "right", toneLabel: "Beschluss nötig",
      text: "Grundsätzlich nur mit richterlichem Beschluss, sonst nur bei Gefahr im Verzug. Du darfst anwesend sein. Nachts von 21 bis 6 Uhr nur in Ausnahmefällen. Ein Verzeichnis der mitgenommenen Sachen gibt es nur auf Verlangen.",
      say: [["Ich möchte den Durchsuchungsbeschluss sehen.", "Покажите постановление об обыске."]],
      law: "Art. 13 GG · §§ 105–107 StPO · § 36 PolG BW",
      kw: ["wohnung", "tür", "haus", "durchsuchungsbeschluss", "nachts", "квартир", "дом", "двер", "ордер", "постановлен"]
    },
    {
      id: "k-bodycam", title: "Bodycam-Aufnahme sichern", tone: "warn", toneLabel: "4 Wochen",
      text: "Bodycam-Aufnahmen werden spätestens nach 4 Wochen gelöscht, außer sie werden als Beweis gebraucht. Deshalb sofort schriftlich beim Polizeipräsidium Stuttgart die Sicherung beantragen – die Vorlage findest du unter „Danach“.",
      law: "§ 44 Abs. 5–11, § 75 Abs. 5 PolG BW",
      kw: ["bodycam", "körperkamera", "kamera der polizei", "sichern", "бодикам", "камера полиц", "нательн", "сохран"]
    },
    {
      id: "k-beschwerde", title: "Wo kann ich mich beschweren?", tone: "warn", toneLabel: "3 Monate",
      text: "Kostenlos: die Bürgerbeauftragte des Landes BW, zugleich Polizeibeauftragte – innerhalb von 3 Monaten, aber nicht parallel zu einem Straf- oder Gerichtsverfahren. Dienstaufsichtsbeschwerde schriftlich an das Polizeipräsidium Stuttgart. Eine Strafanzeige gegen Beamte ist ein eigener Weg. Die Reihenfolge ist wichtig – erst mit einem Anwalt sprechen.",
      law: "buergerbeauftragte-bw.de · PP Stuttgart, Hahnemannstraße 1 · § 340 StGB",
      kw: ["beschwer", "anzeig", "bürgerbeauftrag", "melden", "жалоб", "пожалов", "заявлен", "куда писать"]
    },
    {
      id: "k-geld", title: "Bekomme ich Schadensersatz?", tone: "can", toneLabel: "Wenig",
      text: "Nicht wie in den USA. Beispiele: 3.000 € für eine unverhältnismäßige Zwangsmaßnahme (LG Berlin II, 2025), 75 € pro Tag bei ungerechtfertigter Freiheitsentziehung. Realistisches Ziel: gerichtlich feststellen lassen, dass die Maßnahme rechtswidrig war. Kostenrisiko bei einer Niederlage grob 1.600 € – eine Schätzung.",
      law: "§ 839 BGB · Art. 34 GG · § 7 StrEG · LG Berlin II 26 O 17/23",
      kw: ["schadensersatz", "schmerzensgeld", "entschädig", "klag", "geld", "деньг", "компенсац", "отсуд", "иск", "суд"]
    },
    {
      id: "k-messer", title: "Messer in Stuttgart", tone: "no", toneLabel: "Verboten",
      text: "Waffenverbotszone Innenstadt, unter anderem Hauptbahnhof, Schlossgarten und Rathaus: freitags, samstags und vor Feiertagen von 18 bis 8 Uhr sind alle Messer verboten, Kontrollen ohne Verdacht, Bußgeld bis 10.000 €. In Bussen und Bahnen in BW gilt seit 2025 ein Messerverbot mit Stichproben. Ausnahmen für Werkzeug im Beruf sind noch nicht geklärt – bis dahin nicht mitführen.",
      law: "Verordnung Waffenverbotszone Stuttgart · §§ 42, 42c WaffG",
      kw: ["messer", "waffe", "cutter", "werkzeug", "verbotszone", "stadtbahn", "bus", "нож", "оруж", "зона", "автобус", "штутгарт", "карман"]
    },
    {
      id: "k-dauer", title: "Wie lange darf mich die Polizei festhalten?", tone: "right", toneLabel: "Grenzen",
      text: "Zur Identitätsfeststellung nach StPO höchstens 12 Stunden. Polizeilicher Gewahrsam in BW ohne Richter nur bis zum Ende des nächsten Tages, mit Richter höchstens 2 Wochen. Nach einer Festnahme spätestens am Tag danach zum Richter.",
      law: "§ 163c StPO · § 33 PolG BW · Art. 104 GG · § 128 StPO",
      kw: ["wie lange", "festhalt", "stunden", "gewahrsam", "сколько", "держать", "часов", "задерж"]
    }
  ],

  letters: {
    bodycam: {
      title: "Bodycam-Aufnahmen sichern lassen",
      to: "stuttgart.pp@polizei.bwl.de",
      hint: "Sofort schicken: Aufnahmen werden spätestens nach 4 Wochen gelöscht.",
      body: "Sehr geehrte Damen und Herren,\n\nam {datum} gegen {zeit} Uhr wurde ich in {ort} von Beamten Ihres Präsidiums kontrolliert ({beamte}).\n\nIch bitte Sie, alle Bodycam-Aufnahmen dieses Einsatzes zu sichern und nicht zu löschen, da ich sie als Beweismittel benötige (§ 44 Abs. 10, § 75 Abs. 5 PolG BW). Bitte bestätigen Sie mir die Sicherung schriftlich.\n\nMit freundlichen Grüßen\n{name}"
    },
    beschwerde: {
      title: "Dienstaufsichtsbeschwerde",
      to: "Polizeipräsidium Stuttgart, Hahnemannstraße 1, 70191 Stuttgart",
      hint: "Vorher mit einem Anwalt sprechen: Eine Beschwerde kann laufende Verfahren beeinflussen.",
      body: "Sehr geehrte Damen und Herren,\n\nhiermit erhebe ich Dienstaufsichtsbeschwerde gegen die Beamten, die mich am {datum} gegen {zeit} Uhr in {ort} kontrolliert haben ({beamte}).\n\nSachverhalt:\n{ablauf}\n\nIch bitte um Prüfung des Verhaltens der Beamten und um schriftliche Mitteilung des Ergebnisses.\n\nMit freundlichen Grüßen\n{name}"
    }
  },

  consent: {
    de: "Ich möchte unser Gespräch zur Dokumentation aufnehmen. Sind Sie einverstanden?",
    ru: "Хочу записать наш разговор для документации. Вы согласны?"
  }
};
