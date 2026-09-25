/* Inhalte des Prototyps. Stand und Quellen: Recherche_2026-09-24.md (Projektordner). */
window.RB = {
  stand: "25.09.2026",
  region: "Baden-Württemberg",

  groups: [["auto", "Auto, Scooter, Unfall"], ["weg", "Unterwegs und bei der Arbeit"], ["handy", "Handy, Zeugen, Festnahme"]],

  situations: [

    {
      id: "verkehr", group: "auto", title: "Verkehrs\u00ADkontrolle", sub: "Auto, Transporter, Motorrad", tone: "must", toneLabel: "Pflicht",
      say: [
        ["Hier sind mein Führerschein und mein Fahrzeugschein.", "Вот мои права и техпаспорт."],
        ["Zur Sache sage ich nichts. Freiwilligen Tests stimme ich nicht zu.", "По делу ничего не скажу. На добровольные тесты не соглашаюсь."],
        ["Einer Durchsuchung stimme ich nicht zu.", "На обыск не соглашаюсь."]
      ],
      doo: [
        "Motor aus, Fenster runter, Hände sichtbar lassen – keine Pflicht, aber es entspannt die Lage.",
        "Führerschein und Fahrzeugschein im Original zeigen. Der digitale Fahrzeugschein in der i‑Kfz‑App zählt, ein Foto nicht.",
        "Personalien angeben. Aussteigen, wenn die Polizei es für die Kontrolle verlangt.",
        "Warndreieck, Verbandkasten und Warnweste holst du selbst heraus und zeigst sie. In den Kofferraum schauen darf die Polizei, ohne Verdacht aber nichts durchsuchen."
      ],
      dont: [
        "Keine Angaben zu Fahrziel, Alkohol, Drogen oder Medikamenten – auch nicht „nur ein Bier“.",
        "Keine freiwilligen Tests: Pusten, Urin, Wischtest, Pupillentest mit der Taschenlampe, Übungen wie Finger-Nase.",
        "Nicht wegfahren, die Tür nicht verriegeln, nichts unterschreiben, was du nicht verstehst."
      ],
      note: "Papiere vergessen: 10 € je Dokument. Aussteigen verweigern: 20 €. Haltezeichen ignorieren: 70 € und 1 Punkt.",
      law: "§ 36 Abs. 5 StVO · § 4 Abs. 2 FeV · § 13 Abs. 6 FZV · § 31b StVZO · § 111 OWiG",
      actions: ["situation:papiere", "situation:test", "situation:auto", "film"],
      kw: ["~verkehrskontroll", "~angehalten", "~anhalten", "fahrzeugschein", "aussteig", "warndreieck", "verbandkasten", "warnweste", "~auto", "~fahr", "wohin", "fahrziel", "woher",
        "~остановил", "тормознул", "гаишник", "гаи", "~машин", "~авто", "техпаспорт", "выйти из машин", "выйти из авто", "аптечк", "~знак", "~за рул", "куда ед", "откуда", "куда направля"]
    },
    {
      id: "papiere", group: "auto", title: "Führerschein und Papiere", sub: "Vergessen, ausländisch, abgenommen", tone: "must", toneLabel: "Original zeigen",
      say: [
        ["Meinen Führerschein habe ich nicht dabei. Bitte prüfen Sie meine Daten im Register.", "Прав с собой нет. Проверьте, пожалуйста, мои данные в реестре."],
        ["Ich habe Schutzstatus nach § 24. Mein ukrainischer Führerschein gilt nach der EU-Verordnung 2022/1280.", "У меня статус защиты по § 24. Мои украинские права действуют по регламенту ЕС 2022/1280."],
        ["Ich gebe den Führerschein nicht freiwillig heraus und widerspreche der Beschlagnahme.", "Права добровольно не отдаю и возражаю против изъятия."]
      ],
      doo: [
        "Führerschein und Fahrzeugschein im Original zeigen; der digitale Fahrzeugschein der i‑Kfz‑App zählt. Vergessen kostet 10 € je Papier – keine Straftat. Bekommst du ein Formular: den Führerschein fristgerecht auf einer Polizeiwache vorzeigen, sonst ermittelt die Staatsanwaltschaft.",
        "Führerschein aus einem Nicht-EU-Land wie Russland oder Kasachstan: gilt nur 6 Monate ab deinem Wohnsitz in Deutschland. Danach ermittelt die Polizei wegen Fahrens ohne Fahrerlaubnis – rechtzeitig umschreiben lassen.",
        "Ukraine mit Schutzstatus nach § 24: Der Führerschein gilt ohne Übersetzung, solange der Schutz gilt – derzeit bis 04.03.2027. Die EU-Verordnung 2022/1280 ausgedruckt mitnehmen. Seit 18.08.2026 kannst du ihn ohne Prüfung umschreiben lassen.",
        "Nimmt die Polizei den Führerschein mit: widersprechen, Bescheinigung verlangen, danach nicht mehr selbst fahren."
      ],
      dont: [
        "Nicht mit abgelaufenem ausländischem Führerschein weiterfahren – auch wenn er im Heimatland gilt.",
        "Keine Kopie oder kein Foto als Ersatz anbieten und nichts zum Vorwurf erklären."
      ],
      note: "Fahren trotz mitgenommenem Führerschein ist eine eigene Straftat. Wer in einen anderen Aufenthaltstitel wechselt, hat mit dem ukrainischen Führerschein wieder nur 6 Monate.",
      law: "§ 4 FeV · § 29 FeV · § 21 StVG · §§ 94, 98, 111a StPO · EU-VO 2022/1280",
      actions: ["protokoll"],
      kw: ["~fuehrerschein", "fahrerlaubnis", "papiere", "vergessen", "~auslaendisch", "~umschreib", "~ukrain", "fahren ohne", "digital", "i kfz", "fuehrerschein zuhause",
        "водительск", "забыл прав", "права дома", "права с собой", "техпаспорт", "нет с собой", "права на телефон", "права в телефон", "~обмен прав", "~иностранные права", "~российские права", "~украинские права", "~казахские права",
        "без прав", "~права действ", "электронн", "в приложени", "фото прав", "копия прав", "~права"]
    },
    {
      id: "test", group: "auto", title: "Alkohol- oder Drogen\u00ADtest", sub: "Pusten, Urin, Wischtest, Blut", tone: "right", toneLabel: "Freiwillig",
      say: [
        ["Einem freiwilligen Test stimme ich nicht zu.", "На добровольный тест не соглашаюсь."],
        ["Zu meinem Konsum und zur Sache mache ich keine Angaben.", "Об употреблении и по делу ничего не скажу."],
        ["Einer Blutentnahme stimme ich nicht zu, ich leiste aber keinen Widerstand.", "На взятие крови не соглашаюсь, но сопротивляться не буду."]
      ],
      doo: [
        "Freiwillig sind: Pusten, Urin-, Speichel- und Wischtest, der Pupillentest mit der Taschenlampe und Übungen wie Finger-Nase oder auf einer Linie gehen. Ablehnen ist kein Schuldeingeständnis. Die Polizei muss darauf nicht hinweisen.",
        "Eine Blutprobe darf die Polizei nur bei konkretem Verdacht anordnen – dann auch ohne Richter. Die Drohung „dann eben Blut auf der Wache“ ist kein Grund, freiwillig zu testen.",
        "Grenzwerte Auto und E-Scooter: 0,5 Promille, THC 3,5 ng/ml. Ab 1,1 Promille oder mit Ausfallerscheinungen ist es eine Straftat. Unter 21 und in der Probezeit: kein Alkohol, kein Cannabis.",
        "Urintests zeigen Cannabis noch Tage nach dem Konsum.",
        "Medikamente wie Ritalin oder Cannabis auf Rezept: Rezept oder ärztliche Bescheinigung dabeihaben, vor Ort aber nichts erklären – erst bei der Blutprobe oder über den Anwalt."
      ],
      dont: [
        "Keine Angaben zu Menge, Uhrzeit oder „vor Jahren mal gekifft“ – damit wird zurückgerechnet und eine Blutprobe begründet.",
        "Keine Übungen machen: Unsicherheit dabei kann aus einem Bußgeld eine Straftat machen.",
        "Die Blutprobe nicht körperlich verhindern – das ist Widerstand."
      ],
      note: "Erstverstoß ab 0,5 Promille oder 3,5 ng/ml THC: 500 €, 1 Monat Fahrverbot, 2 Punkte. Alkohol und THC zusammen: 1.000 €. Ist die Blutprobe negativ, wird das Verfahren eingestellt und du zahlst sie nicht.",
      law: "§ 81a StPO · §§ 24a, 24c StVG · § 316 StGB",
      actions: ["protokoll"],
      kw: ["alkohol", "pusten", "drogen", "test", "blut", "blutabnahm", "blutentnahm", "blutprob", "promill", "thc", "urin", "wischtest", "trunken", "roehrchen", "atemtest", "vortest", "schnelltest", "speichel",
        "augen", "rote augen", "pupill", "taschenlampe", "leuchtet", "medikament", "ritalin", "rezept", "schmerzmittel", "finger nase", "linie", "einbein", "bier", "getrunken",
        "алко", "пил", "выпил", "пиво", "пьян", "выпивш", "дунуть", "дуть", "продуть", "подуть", "дыхн", "трубк", "трубочк", "наркот", "тест", "кровь", "трав", "промил", "моч",
        "глаз", "красные глаз", "зрачк", "фонарик", "по носу", "пальц", "по линии", "на одной ноге", "упражнен", "риталин", "рецепт", "лекарств", "таблетк"]
    },
    {
      id: "escooter", group: "auto", title: "E-Scooter", sub: "Alkohol, Gehweg, zu zweit", tone: "warn", toneLabel: "Wie beim Auto",
      say: [
        ["Hier sind meine Personalien. Zur Sache sage ich nichts.", "Вот мои данные. По делу ничего не скажу."],
        ["Einem freiwilligen Test stimme ich nicht zu.", "На добровольный тест не соглашаюсь."]
      ],
      doo: [
        "Personalien angeben. Einen Führerschein brauchst du für den E-Scooter nicht, aber ein gültiges Versicherungskennzeichen.",
        "Es gelten die Grenzwerte wie beim Auto: 0,5 Promille, THC 3,5 ng/ml, ab 1,1 Promille Straftat. Unter 21 und in der Probezeit: 0,0.",
        "Nach einer Trunkenheitsfahrt mit dem E-Scooter droht auch der Verlust des Autoführerscheins."
      ],
      dont: [
        "Nicht auf dem Gehweg oder in der Fußgängerzone fahren und nicht zu zweit – das kostet Bußgeld.",
        "Kein Handy während der Fahrt: 100 € und 1 Punkt.",
        "Keine freiwilligen Tests und keine Angaben zum Konsum."
      ],
      note: "Ein Fahrverbot gilt für alle Kraftfahrzeuge – auch für den E-Scooter.",
      law: "eKFV · §§ 24a, 24c StVG · § 316 StGB · OLG Hamm 1 ORs 70/24",
      actions: ["situation:test", "protokoll"],
      kw: ["e scooter", "escooter", "scooter", "tretroller", "elektroroller", "roller", "e roller", "gehweg", "zu zweit", "versicherungskennzeich",
        "самокат", "на самокат", "электросамокат", "тротуар", "вдвоем", "скутер", "электроролл"]
    },
    {
      id: "auto", group: "auto", title: "Auto wird durchsucht", sub: "Kofferraum, Handschuhfach, Taschen", tone: "can", toneLabel: "Widersprechen",
      say: [
        ["Ich bin mit der Durchsuchung nicht einverstanden.", "Я не согласен на обыск."],
        ["Welcher konkrete Verdacht besteht? Bitte vermerken Sie meinen Widerspruch.", "Какое конкретное подозрение? Запишите, пожалуйста, моё возражение."],
        ["Bitte geben Sie mir ein Protokoll und eine Liste der mitgenommenen Sachen.", "Дайте, пожалуйста, протокол и список изъятых вещей."]
      ],
      doo: [
        "Deutlich sagen: „Ich bin nicht einverstanden.“ Schweigen kann als Zustimmung gewertet werden.",
        "Warndreieck, Verbandkasten und Warnweste selbst herausholen und zeigen. Hineinschauen darf die Polizei, ohne Verdacht aber nichts durchsuchen.",
        "Durchsuchen darf sie bei konkretem Verdacht, zum Beispiel Cannabisgeruch, mit Beschluss, in der Stuttgarter Waffenverbotszone oder an bestimmten Orten nach dem Polizeigesetz. Dann dulden, aber nicht mithelfen.",
        "Zeugen ansprechen, Namen und Kennzeichen notieren, danach Gedächtnisprotokoll schreiben."
      ],
      dont: [
        "Nichts festhalten, keine Tür zuhalten, niemanden wegschieben – das ist Widerstand.",
        "Keine Taschen selbst öffnen, nichts erklären, nichts unterschreiben."
      ],
      law: "§ 102 StPO · §§ 34, 35 PolG BW · § 42c WaffG · § 31b StVZO · § 107 StPO",
      actions: ["film", "protokoll"],
      kw: ["!kofferraum", "handschuhfach", "auto durchsuch", "wagen durchsuch", "fahrzeug durchsuch", "durchsucht mein auto", "durchsucht das auto",
        "!багажник", "бардачок", "обыскать машин", "обыск машин", "досмотр машин", "обыскивают машин", "обыскали машин", "шмон машин", "обыск в машин", "роет", "рыл", "роются"]
    },
    {
      id: "handysteuer", group: "auto", title: "Handy am Steuer", sub: "Vorwurf, Handy zeigen, Entsperren", tone: "warn", toneLabel: "Nicht entsperren",
      say: [
        ["Zum Vorwurf mache ich keine Angaben.", "По обвинению ничего не скажу."],
        ["Mein Handy zeige und entsperre ich nicht freiwillig.", "Телефон добровольно не показываю и не разблокирую."],
        ["Ich widerspreche der Beschlagnahme und bitte um eine Bescheinigung.", "Возражаю против изъятия и прошу документ."]
      ],
      doo: [
        "Personalien und Papiere geben, zum Vorwurf schweigen – auch „ich habe nur aufs Navi geschaut“ ist eine Aussage.",
        "Ohne Verdacht und Beschlagnahme darf die Polizei nicht in dein Handy schauen. Den PIN musst du nie nennen.",
        "Den Finger auflegen lassen musst du nur bei einer rechtmäßigen Beschlagnahme oder Durchsuchungsanordnung (BGH 2025) – dann nicht wehren.",
        "Bestreitest du den Vorwurf: nicht vor Ort diskutieren, Beifahrer und Zeugen notieren, später schriftlich über einen Anwalt."
      ],
      dont: [
        "Das Handy nicht aus der Hand geben, nicht selbst durchblättern, keine Anrufliste zeigen.",
        "Nicht darüber diskutieren, ob du telefoniert hast."
      ],
      note: "Handy am Steuer: 100 € und 1 Punkt, mit Gefährdung oder Unfall mehr. Essen am Steuer ist nicht ausdrücklich verboten – ein Bußgeld droht aber, wenn du dabei unaufmerksam fährst.",
      law: "§ 23 Abs. 1a StVO · § 1 StVO · §§ 94, 98, 81b StPO · BGH 2 StR 232/24",
      actions: ["protokoll"],
      kw: ["handy am steuer", "am steuer telefon", "telefonier", "handy beim fahren", "handy in der hand", "navi", "handyverbot", "smartphone am steuer", "ampel", "gekratzt",
        "телефон за рул", "телефону за рул", "по телефону", "телефон в руке", "взял телефон", "навигатор", "светофор", "почесал", "не разговарива", "не звонил"]
    },
    {
      id: "unfall", group: "auto", title: "Unfall", sub: "Blechschaden, Verletzte, Unfallflucht", tone: "must", toneLabel: "Dableiben",
      say: [
        ["Ich war beteiligt. Hier sind Name, Anschrift, Führerschein, Fahrzeugschein und Versicherung.", "Я участник аварии. Вот имя, адрес, права, техпаспорт и страховка."],
        ["Zum Hergang äußere ich mich nicht.", "Об обстоятельствах аварии ничего не скажу."],
        ["Einem freiwilligen Test stimme ich nicht zu.", "На добровольный тест не соглашаюсь."]
      ],
      doo: [
        "Sofort anhalten und die Stelle sichern: Warnblinker, Warnweste, Warndreieck. Bei kleinem Schaden an den Rand fahren. Gibt es Verletzte: helfen und 112 rufen – das ist Pflicht.",
        "Pflicht ist nur: sagen, dass du beteiligt warst, und auf Verlangen Name, Anschrift, Führerschein, Fahrzeugschein und Versicherung zeigen.",
        "Warten, bis alles aufgenommen ist. Kommt niemand: angemessen warten, je nach Lage 10 bis 60 Minuten, dann sofort die Polizei informieren. Ein Zettel am Auto reicht nicht.",
        "Fotos von Stelle, Schäden und Kennzeichen machen, Zeugen notieren. Den Europäischen Unfallbericht nur mit wahren Angaben ausfüllen."
      ],
      dont: [
        "Nicht weggehen oder wegfahren, bevor alles aufgenommen ist – auch nicht kurz zum Einkaufen. Unfallflucht ist eine Straftat, oft ist danach der Führerschein weg.",
        "Keine Schuld zugeben und nichts unterschreiben, was du nicht verstehst – auch nicht unter Schock.",
        "Keine Angaben zu Alkohol, Drogen oder Medikamenten. Tests sind auch nach einem Unfall freiwillig."
      ],
      note: "Bei reinem Blechschaden musst du die Polizei nicht rufen; will die Gegenseite sie holen, warte. Bei kleinem Parkschaden kann eine freiwillige Meldung binnen 24 Stunden die Strafe mildern oder ganz ersparen.",
      law: "§ 34 StVO · § 142 StGB · § 323c StGB · § 136 StPO",
      actions: ["situation:test", "protokoll"],
      kw: ["unfall", "unfallflucht", "fahrerflucht", "unfallort", "zusammenstoss", "zusammengestossen", "aufgefahren", "parkschaden", "blechschaden", "angefahren", "gerammt", "unfallbericht",
        "ausparken", "einparken", "gestreift", "touchiert", "delle", "beule", "kratzer", "авари", "!дтп", "столкнул", "врезал", "врезался", "въехал", "ударил машин", "задел машин", "поцарапал", "царапин", "скрылся", "уехал с места", "бампер", "унфаль"]
    },
    {
      id: "personalien", group: "weg", title: "Personen\u00ADkontrolle", sub: "Ausweis und Personalien", tone: "must", toneLabel: "Pflicht",
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
      kw: ["personalien", "ausweis", "~kontroll", "pass", "adress", "name angeb", "паспорт", "документ", "данные", "провер", "назвать имя", "называть имя", "имя"]
    },
    {
      id: "durchsuchung", group: "weg", title: "Durchsuchung", sub: "Person, Tasche, Wohnung", tone: "can", toneLabel: "Nicht zustimmen",
      say: [
        ["Ich stimme der Durchsuchung nicht zu. Ich leiste keinen Widerstand.", "Я не согласен на обыск. Я не сопротивляюсь."],
        ["Ich möchte von einer Person meines Geschlechts durchsucht werden.", "Прошу, чтобы меня обыскивал человек моего пола."],
        ["Ich möchte den Durchsuchungsbeschluss sehen.", "Покажите постановление об обыске."],
        ["Bitte geben Sie mir ein Verzeichnis der beschlagnahmten Gegenstände.", "Дайте, пожалуйста, список изъятого."]
      ],
      doo: [
        "Widerspruch laut und ruhig sagen – das zählt später.",
        "Wohnung: grundsätzlich nur mit richterlichem Beschluss, sonst nur bei Gefahr im Verzug. Du darfst dabei sein.",
        "Verzeichnis und Bescheinigung gibt es nur auf Verlangen – also verlangen.",
        "Durchsuchen darf dich nur eine Person deines Geschlechts oder ein Arzt – außer bei akuter Gefahr. Taschen nicht selbst ausleeren: dulden musst du, mithelfen nicht.",
        "Stuttgart: In der Waffenverbotszone der Innenstadt darf freitags, samstags und vor Feiertagen von 18 bis 8 Uhr ohne Verdacht durchsucht werden."
      ],
      dont: [
        "Nicht festhalten, wegziehen oder schubsen: Widerstand bis 3 Jahre, tätlicher Angriff 3 Monate bis 5 Jahre."
      ],
      law: "§§ 34–36 PolG BW · §§ 102, 105–107 StPO · Art. 13 GG · § 42c WaffG · §§ 113, 114 StGB",
      actions: ["film", "protokoll"],
      kw: ["durchsuch", "tasche", "rucksack", "abtast", "tastet", "wohnung", "beschluss", "bahnhof", "auszieh", "entkleid", "nackt",
        "hauptbahnhof", "!обыск", "досмотр", "сумк", "карман", "рюкзак", "квартир", "ордер", "~вокзал", "раздет", "раздева", "раздеть", "вывернут", "выверн", "обшмон"]
    },
    {
      id: "kontrolleur", group: "weg", title: "Fahrkarten\u00ADkontrolle", sub: "Bus, Stadtbahn, S\u2011Bahn, Zug", tone: "can", toneLabel: "Keine Polizei",
      say: [
        ["Meinen Ausweis können Sie ansehen. Aus der Hand gebe ich ihn nicht.", "Паспорт можете посмотреть, но в руки не дам."],
        ["Durchsuchen dürfen Sie mich nicht. Rufen Sie gern die Polizei.", "Обыскивать меня вы не имеете права. Можете вызвать полицию."],
        ["Mein Abo ist gültig, ich habe es nur vergessen. Ich zeige es innerhalb einer Woche vor.", "Мой проездной действует, я его просто забыл. Предъявлю в течение недели."]
      ],
      doo: [
        "Kontrolleure sind keine Polizei. Name und Anschrift musst du ihnen angeben, sonst holen sie die Polizei. Das Deutschlandticket gilt nur mit Lichtbildausweis.",
        "Ohne gültiges Ticket: 60 € erhöhtes Beförderungsentgelt. Persönliches Abo oder Deutschlandticket nur vergessen: innerhalb einer Woche vorzeigen, dann 7 €.",
        "Festhalten dürfen sie dich nur bis zum Eintreffen der Polizei und nur, wenn deine Identität unklar ist. Bis zur Endhaltestelle mitnehmen dürfen sie dich nicht.",
        "Ruhig bleiben, Uhrzeit, Linie und Namen oder Nummer des Kontrolleurs notieren. Einwände schriftlich an das Verkehrsunternehmen."
      ],
      dont: [
        "Nicht wegrennen, schubsen oder dich losreißen – daraus wird schnell eine Anzeige.",
        "Nicht beleidigen, auch nicht im Streit ums Ticket: Beleidigung ist eine Straftat.",
        "Den Ausweis nicht aus der Hand geben und nicht als Pfand dalassen."
      ],
      note: "Absichtlich ohne Ticket fahren bleibt eine Straftat. In DB-Zügen, S-Bahnen und am Hauptbahnhof kontrolliert oft die Bundespolizei.",
      law: "§ 9 VVS-Beförderungsbedingungen · § 9 BefBedV · § 1 PAuswG · § 127 StPO · § 265a StGB",
      actions: ["protokoll"],
      kw: ["kontrolleur", "kontrolleur ausweis", "контролер паспорт", "fahrkart", "fahrschein", "ticket", "schwarzfahr", "ohne ticket", "deutschlandticket", "abo", "befoerderungsentgelt", "stadtbahn", "s bahn", "u bahn", "strassenbahn",
        "контролер", "контроллер", "билет", "без билета", "зайц", "проездн", "в автобусе", "в электричк", "в трамва", "в метро", "штрассенбан", "штадтбан", "эсбан", "тикет", "дойчланд"]
    },
    {
      id: "zoll", group: "weg", title: "Zoll auf der Baustelle", sub: "Ausweis, Fragen zur Arbeit", tone: "must", toneLabel: "Ausweis zeigen",
      say: [
        ["Hier ist mein Ausweis.", "Вот мой паспорт."],
        ["Zu Fragen, mit denen ich mich selbst belasten würde, sage ich nichts.", "На вопросы, которыми я бы себя оговорил, отвечать не буду."],
        ["Ich brauche einen Dolmetscher für Russisch.", "Мне нужен переводчик с русского."]
      ],
      doo: [
        "Ausweis im Original zeigen: Personalausweis oder Pass, als Ausländer auch den Aufenthaltstitel. Auf dem Bau musst du ihn immer dabeihaben, sonst drohen bis 5.000 €.",
        "Anders als bei der Polizei musst du dem Zoll Fragen zu deiner Arbeit beantworten: Arbeitgeber, Lohn, Arbeitszeit. Wer sich weigert, riskiert ein Bußgeld.",
        "Schweigen darfst du, wenn du dich oder Angehörige mit der Antwort belasten würdest – etwa bei Schwarzarbeit oder fehlender Arbeitserlaubnis.",
        "Nichts unterschreiben, was du nicht verstehst. Einen Dolmetscher verlangen."
      ],
      dont: [
        "Nicht weglaufen und die Prüfung nicht behindern.",
        "Keine falschen Angaben zu Arbeitgeber, Lohn oder Arbeitszeit – lieber schweigen."
      ],
      note: "Baustellen und Geschäftsräume darf der Zoll betreten, eine bewohnte Wohnung – auch beim Kunden – grundsätzlich nicht ohne Beschluss. Dein Arbeitgeber muss dich schriftlich auf die Ausweispflicht hinweisen.",
      law: "§§ 2a, 3, 5, 8 SchwarzArbG · Art. 13 GG",
      actions: ["protokoll"],
      kw: ["!zoll", "!fks", "finanzkontrolle", "schwarzarbeit", "baustell", "arbeitserlaubnis", "arbeitgeber", "lohn",
        "таможн", "таможенник", "цоль", "стройк", "на стройке", "сколько получаю", "зарплат", "работодател", "разрешение на работ", "по черному", "нелегально работ", "проверка на работе"]
    },
    {
      id: "handy", group: "handy", title: "Handy oder Video löschen", sub: "Löschen, Beschlagnahme, Entsperren", tone: "right", toneLabel: "Nicht löschen",
      say: [
        ["Ich lösche nichts. Ich widerspreche der Beschlagnahme und bitte um eine Bescheinigung.", "Я ничего не удаляю. Возражаю против изъятия и прошу документ."],
        ["Meinen Code gebe ich nicht heraus.", "Код я не сообщаю."]
      ],
      doo: [
        "Nichts löschen. Eine besondere Befugnis, das Löschen anzuordnen, hat die Polizei nicht.",
        "Nimmt die Polizei das Handy als Beweismittel mit: nicht festhalten, Widerspruch sagen, Bescheinigung verlangen. Nach deinem Widerspruch soll sie binnen 3 Tagen die Bestätigung durch ein Gericht beantragen.",
        "Vorher Biometrie sperren, dann ist der Code nötig. iPhone: Seitentaste und Lauter-Taste 2 Sekunden halten. Android: Ein/Aus-Taste gedrückt halten und „Sperrmodus“ tippen – falls er fehlt, unter Einstellungen › Sperrbildschirm einschalten."
      ],
      dont: [
        "Den PIN nicht nennen – das musst du nicht.",
        "Aber wissen: Den Finger dürfen sie mit Zwang auflegen (BGH 2025, bei richterlich angeordneter Durchsuchung)."
      ],
      law: "§§ 94, 98 StPO · § 38 PolG BW · BGH 2 StR 232/24",
      actions: ["film", "protokoll"],
      kw: ["~handy", "lösch", "video lösch", "beschlagnahm", "sicherstell", "pin", "code", "entsperr", "~finger", "face id", "handy mit", "nimmt mein handy", "handy weg",
        "~телефон", "удал", "удалить видео", "стер", "изъяли телефон", "изъять телефон", "забрали телефон", "забрал телефон", "посмотреть телефон", "в мой телефон",
        "пин", "код", "пароль", "разблок", "приложить палец", "отпечатком"]
    },
    {
      id: "freund", group: "handy", title: "Freund wird kontrolliert", sub: "Du bist Zeuge, jemand wird mitgenommen", tone: "right", toneLabel: "Filmen erlaubt",
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
      kw: ["freund", "freundin", "zeuge", "mitgenommen", "~revier", "mein mann", "meine frau", "mein bruder",
        "друг", "друга", "подруг", "свидетел", "увоз", "~забира", "~участок", "рядом", "мужа", "жену", "брата", "сестру", "мужа задерж", "его забрал", "ее забрал"]
    },
    {
      id: "festnahme", group: "handy", title: "Festnahme oder Wache", sub: "Du wirst mitgenommen", tone: "right", toneLabel: "Deine Rechte",
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
      kw: ["festnahm", "festgenommen", "verhaft", "wache", "revier", "anwalt", "~dolmetsch", "zelle", "mitgenommen werden", "zur wache",
        "задерж", "арест", "участок", "адвокат", "~переводчик", "родн", "позвонить", "меня везут", "везут", "повезли", "меня забрал", "меня задерж", "отделени", "в отдел"]
    },
    {
      id: "filmen", group: "handy", title: "Ich will filmen", sub: "Video, Ton, Einwilligung", tone: "warn", toneLabel: "Ohne Ton",
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
      kw: ["film", "video", "kamera", "aufnahm", "aufnehm", "ton", "einwillig", "сним", "снимать", "съем", "видео", "камер", "запис", "звук", "разговор", "~соглас"]
    }
  ],

  cats: [
    ["kontrolle", "Kontrolle"], ["verkehr", "Verkehr"], ["filmen", "Filmen & Handy"], ["durchsuchung", "Durchsuchung"],
    ["festnahme", "Festnahme"], ["bahn", "Bus & Bahn"], ["verbote", "Messer & Cannabis"], ["fremd", "Ausländer"],
    ["arbeit", "Arbeit & Zoll"], ["danach", "Danach"]
  ],

  cards: [
    {
      id: "k-ausweis", cat: "kontrolle", title: "Muss ich meinen Ausweis dabeihaben?", tone: "warn", toneLabel: "Kommt drauf an",
      text: "Deutsche müssen einen Ausweis besitzen, aber nicht mitführen. Ausländer müssen Pass oder Aufenthaltstitel auf Verlangen der Polizei vorzeigen – praktisch heißt das: immer dabeihaben. Auf Baustellen gilt wegen Zollkontrollen eine Mitführungspflicht. Hast du den Ausweis dabei, musst du ihn zeigen.",
      law: "§ 1, § 32 PAuswG · § 47a, § 98 AufenthG · § 2a SchwarzArbG",
      kw: ["ausweis dabei", "mitführ", "pass", "aufenthalt", "baustell", "ausweis vergessen", "pass vergessen", "ohne ausweis", "паспорт", "носить", "с собой", "внж", "стройк", "~документ", "забыл паспорт", "паспорт дома", "без паспорт", "без документ", "аусвайс"]
    },
    {
      id: "k-fragen", cat: "kontrolle", title: "Muss ich Fragen beantworten?", tone: "right", toneLabel: "Nein",
      text: "Zur Sache darfst du schweigen – als Beschuldigter und als Zeuge. Zur Polizei musst du als Zeuge nur, wenn die Staatsanwaltschaft die Vorladung angeordnet hat. Die Personalien musst du trotzdem angeben.",
      say: [["Ich mache keine Angaben zur Sache. Ich möchte zuerst mit einem Anwalt sprechen.", "Я не даю показаний по делу. Сначала хочу поговорить с адвокатом."]],
      law: "§§ 55, 136, 163 Abs. 3 StPO",
      kw: ["frag", "antwort", "schweig", "aussag", "~zeug", "вопрос", "отвеч", "молч", "показан", "~свидетел"]
    },
    {
      id: "k-grund", cat: "kontrolle", title: "Darf die Polizei ohne Grund kontrollieren?", tone: "can", toneLabel: "Teilweise",
      text: "In BW in bestimmten Fällen ja: an „gefährlichen Orten“, bei Veranstaltungen, im öffentlichen Verkehr, an Kontrollstellen und in der Stuttgarter Waffenverbotszone. Menschen nach Hautfarbe oder Herkunft auszuwählen ist rechtswidrig. Nach dem Grund fragen darfst du immer.",
      say: [["Aus welchem Grund werde ich kontrolliert?", "По какой причине меня проверяют?"]],
      law: "§ 27 PolG BW · § 42c WaffG · OVG NRW 5 A 294/16",
      kw: ["ohne grund", "grundlos", "anlass", "hautfarb", "herkunft", "racial", "без причин", "проверить без", "просто так", "без повод", "цвет кож", "расизм", "почему остановил", "потому что иностран", "иностранц", "внешност", "акцент", "auslaender", "nur auslaender"]
    },
    {
      id: "k-paragraf", cat: "kontrolle", title: "Muss der Polizist Grund oder Paragrafen nennen?", tone: "right", toneLabel: "Grund: ja",
      text: "Den Paragrafen nicht. Bei einer strafrechtlichen Kontrolle muss er sagen, welche Straftat dir vorgeworfen wird. Bei einer polizeirechtlichen Kontrolle kannst du eine schriftliche Bestätigung der Maßnahme verlangen – dann muss sie begründet werden.",
      say: [
        ["Welche Straftat wird mir vorgeworfen?", "В каком преступлении меня подозревают?"],
        ["Ich bitte um eine schriftliche Bestätigung dieser Maßnahme.", "Прошу письменное подтверждение этой меры."]
      ],
      law: "§§ 163a Abs. 4, 163b StPO · OLG Hamm 2 ORs 5/25 · § 37 Abs. 2, § 39 LVwVfG",
      kw: ["paragraf", "paragraph", "rechtsgrundlag", "vorwurf", "vorgeworfen", "straftat", "sagt nicht warum", "grund nicht", "параграф", "стать", "основан", "подозрева", "в чем", "причин", "не говорит", "не объясня", "не называ"]
    },
    {
      id: "k-name", cat: "kontrolle", title: "Wie erfahre ich Name und Nummer des Polizisten?", tone: "right", toneLabel: "Fragen",
      text: "Eine Nummer tragen in BW nur geschlossene Einheiten der Bereitschaftspolizei. Nach Vorgabe des Innenministeriums zeigen Beamte auf Verlangen ihren Dienstausweis und nennen Name und Dienststelle – Ausnahmen gibt es. Notiere immer Kennzeichen und Uhrzeit.",
      say: [["Bitte zeigen Sie mir Ihren Dienstausweis und nennen Sie mir Ihren Namen und Ihre Dienststelle.", "Покажите удостоверение и назовите имя и участок."]],
      law: "§ 55 Abs. 5 LBG BW · Vorgabe IM BW zum Dienstausweis",
      kw: ["dienstnummer", "dienstausweis", "name des polizist", "nummer", "kennzeich", "имя полицейск", "номер", "жетон", "значок", "удостоверен", "кто он"]
    },
    {
      id: "k-filmen", cat: "filmen", title: "Darf ich die Polizei filmen?", tone: "right", toneLabel: "Video: ja",
      text: "Video ohne Ton im öffentlichen Raum: ja, wenn du nicht störst. Ton: umstritten – manche Gerichte sehen eine Straftat nach § 201 StGB, andere nicht, wenn Umstehende mithören können; der BGH hat nicht entschieden. Veröffentlichen nur mit unkenntlichen Gesichtern.",
      say: [["Ich filme ohne Ton zur Beweissicherung und behindere Sie nicht.", "Снимаю без звука для доказательств и вам не мешаю."]],
      law: "BVerfG 1 BvR 2501/13 · VG Berlin 1 K 334/23 · § 201 StGB · § 33 KUG",
      kw: ["film", "video", "kamera", "aufnahm", "aufnehm", "ton", "filmen erlaubt", "сним", "снимать", "съем", "видео", "камер", "запис", "звук", "разговор", "снимать полицию", "на телефон"]
    },
    {
      id: "k-tabu", cat: "kontrolle", title: "Was darf ich auf keinen Fall sagen oder tun?", tone: "no", toneLabel: "Tabu",
      text: "Beleidigung ist eine Straftat: Mittelfinger, „Schwein“, „Arschloch“. „Bulle“ allein ist nicht immer strafbar, Duzen auch nicht – wer aber nach der Bitte weiter duzt, riskiert es. Schubsen oder Losreißen ist Widerstand, ein tätlicher Angriff kostet 3 Monate bis 5 Jahre. Sag „Sie“, kurz und ruhig.",
      law: "§§ 185, 194 Abs. 3 StGB · §§ 113, 114 StGB · OLG Hamburg 1 ORs 13/25",
      kw: ["beleidig", "schimpf", "mittelfing", "duz", "bulle", "widerstand", "оскорб", "мат", "средний палец", "ругат", "на ты", "тыка", "сопротивл", "нельзя говорить", "обозвал", "хамит", "хамств", "грубит", "грубо", "ответить", "огрызн"]
    },
    {
      id: "k-platzverweis", cat: "kontrolle", title: "Platzverweis – muss ich gehen?", tone: "must", toneLabel: "Erst gehen",
      text: "Die Polizei darf dich vorübergehend von einem Ort wegschicken, um eine Gefahr abzuwehren, und ein Aufenthaltsverbot bis 3 Monate aussprechen. Befolge den Platzverweis sofort, auch wenn du ihn für falsch hältst – sonst drohen Zwang und bis 5.000 € Bußgeld. Frag nach dem Grund und lass ihn später prüfen. Wer nur filmt, ohne zu stören, darf nicht allein deshalb weggeschickt werden.",
      say: [["Ich gehe. Welche konkrete Gefahr geht von mir aus? Ich lasse das später prüfen.", "Я ухожу. Какую конкретную опасность я представляю? Я это потом обжалую."]],
      law: "§§ 30, 133 PolG BW · BVerfG 1 BvR 2501/13",
      kw: ["platzverweis", "wegschick", "weggeschickt", "aufenthaltsverbot", "verlassen sie", "прогнал", "прогоняют", "выгнал", "покинуть", "запрет находиться", "уходите", "велели уйти"]
    },
    {
      id: "k-wohnung", cat: "durchsuchung", title: "Polizei an der Wohnungstür", tone: "right", toneLabel: "Beschluss nötig",
      text: "Grundsätzlich nur mit richterlichem Beschluss, sonst nur bei Gefahr im Verzug. Du darfst anwesend sein. Nachts von 21 bis 6 Uhr nur in Ausnahmefällen. Ein Verzeichnis der mitgenommenen Sachen gibt es nur auf Verlangen.",
      say: [["Ich möchte den Durchsuchungsbeschluss sehen.", "Покажите постановление об обыске."]],
      law: "Art. 13 GG · §§ 105–107 StPO · § 36 PolG BW",
      kw: ["wohnung", "tür", "an der tür", "beschluss", "haus", "durchsuchungsbeschluss", "nachts", "квартир", "домой", "в дом", "двер", "ордер", "постановлен", "стучат", "пришли ко мне"]
    },
    {
      id: "k-bodycam", cat: "danach", title: "Bodycam-Aufnahme sichern", tone: "warn", toneLabel: "4 Wochen",
      text: "Bodycam-Aufnahmen werden spätestens nach 4 Wochen gelöscht, außer sie werden als Beweis gebraucht. Deshalb sofort schriftlich beim Polizeipräsidium Stuttgart die Sicherung beantragen – die Vorlage findest du unter „Danach“.",
      law: "§ 44 Abs. 5–11, § 75 Abs. 5 PolG BW",
      kw: ["bodycam", "körperkamera", "kamera der polizei", "sichern", "бодикам", "камера полиц", "нательн", "сохран"]
    },
    {
      id: "k-beschwerde", cat: "danach", title: "Wo kann ich mich beschweren?", tone: "warn", toneLabel: "3 Monate",
      text: "Kostenlos: die Bürgerbeauftragte des Landes BW, zugleich Polizeibeauftragte – innerhalb von 3 Monaten, nicht parallel zu einem Straf- oder Gerichtsverfahren; bei der Bundespolizei der Polizeibeauftragte des Bundes, 6 Monate. Dienstaufsichtsbeschwerde schriftlich an das Polizeipräsidium. Eine Strafanzeige gegen Beamte ist ein eigener Weg. Oft folgt eine Gegenanzeige, etwa wegen Beleidigung oder falscher Verdächtigung – deshalb erst mit einem Anwalt sprechen.",
      law: "buergerbeauftragte-bw.de · PP Stuttgart, Hahnemannstraße 1 · § 340 StGB · § 164 StGB · PolBeauftrG",
      kw: ["beschwer", "anzeig", "bürgerbeauftrag", "melden", "жалоб", "пожалов", "заявлен", "куда писать"]
    },
    {
      id: "k-geld", cat: "danach", title: "Bekomme ich Schadensersatz?", tone: "can", toneLabel: "Wenig",
      text: "Nicht wie in den USA. Beispiele: 3.000 € für eine unverhältnismäßige Zwangsmaßnahme (LG Berlin II, 2025), 75 € pro Tag bei ungerechtfertigter Freiheitsentziehung. Realistisches Ziel: gerichtlich feststellen lassen, dass die Maßnahme rechtswidrig war. Kostenrisiko bei einer Niederlage grob 1.600 € – eine Schätzung.",
      law: "§ 839 BGB · Art. 34 GG · § 7 StrEG · LG Berlin II 26 O 17/23",
      kw: ["schadensersatz", "schmerzensgeld", "entschädig", "klag", "geld", "деньг", "компенсац", "отсуд", "иск", "суд"]
    },
    {
      id: "k-post", cat: "danach", title: "Post von Polizei oder Bußgeldstelle", tone: "warn", toneLabel: "Fristen",
      text: "Anhörungsbogen: Pflicht sind nur deine Personalien, zur Sache darfst du schweigen. Zeugenfragebogen an den Halter: Angehörige musst du nicht als Fahrer nennen, dann droht aber ein Fahrtenbuch. Einen falschen Fahrer zu nennen kostet bis 30.000 €. Gegen einen Bußgeldbescheid: Einspruch schriftlich innerhalb von 2 Wochen ab Zustellung. Verkehrsverstöße verjähren seit 01.07.2026 grundsätzlich nach 6 Monaten – ein Anhörungsbogen unterbricht die Frist.",
      law: "§§ 55, 67, 111 OWiG · § 52 StPO · § 31a StVZO · §§ 4c, 23, 26 StVG",
      kw: ["anhoerung", "anhoerungsbogen", "zeugenfragebogen", "bussgeldbescheid", "bussgeld", "brief", "post von", "einspruch", "fahrer benennen", "fahrtenbuch", "blitzer", "geblitzt", "verjaehr", "письмо", "анкет", "заполнить", "по почте", "fragebogen", "formular", "ausfuellen", "анхерунг", "бусгельд", "пришло письмо", "пришел штраф", "обжалова", "кто был за рул", "фото с камеры", "блитцер", "камера скорост", "опросный лист"]
    },
    {
      id: "k-vorladung", cat: "danach", title: "Vorladung von der Polizei", tone: "right", toneLabel: "Oft keine Pflicht",
      text: "Als Beschuldigter musst du einer Vorladung der Polizei nicht folgen – sag ab oder lass deinen Anwalt absagen und Akteneinsicht beantragen. Als Zeuge musst du nur hin, wenn die Staatsanwaltschaft die Ladung angeordnet hat. Zu Staatsanwaltschaft oder Gericht musst du gehen, als Beschuldigter darfst du dort schweigen. Angehörige des Beschuldigten dürfen die Aussage verweigern.",
      say: [["Ich mache von meinem Schweigerecht Gebrauch. Mein Anwalt meldet sich bei Ihnen.", "Я пользуюсь правом не давать показаний. С вами свяжется мой адвокат."]],
      law: "§§ 52, 133, 136, 161a, 163, 163a StPO",
      kw: ["vorladung", "vorgeladen", "ladung", "beschuldigter", "als zeuge", "vernehm", "повестк", "вызывают в полиц", "вызвали в полиц", "допрос", "свидетелем", "обвиняем", "подозреваем", "форладунг"]
    },
    {
      id: "k-messer", cat: "verbote", title: "Messer in Stuttgart", tone: "no", toneLabel: "Verboten",
      text: "Waffenverbotszone Innenstadt, unter anderem Hauptbahnhof, Schlossgarten und Rathaus: freitags, samstags und vor Feiertagen von 18 bis 8 Uhr sind alle Messer verboten, Kontrollen ohne Verdacht, Bußgeld bis 10.000 €. In Bussen und Bahnen in BW gilt seit 2025 ein Messerverbot mit Stichproben. Ausnahmen für Werkzeug im Beruf sind noch nicht geklärt – bis dahin nicht mitführen.",
      law: "Verordnung Waffenverbotszone Stuttgart · §§ 42, 42c WaffG",
      kw: ["messer", "waffe", "cutter", "werkzeug", "verbotszone", "stadtbahn", "~bus", "!нож", "оруж", "зона", "~автобус", "~штутгарт", "карманный нож", "нож в карман", "вокзал", "messer im rucksack", "messer dabei", "hauptbahnhof"]
    },
    {
      id: "k-dauer", cat: "festnahme", title: "Wie lange darf mich die Polizei festhalten?", tone: "right", toneLabel: "Grenzen",
      text: "Zur Identitätsfeststellung nach StPO höchstens 12 Stunden. Polizeilicher Gewahrsam in BW ohne Richter nur bis zum Ende des nächsten Tages, mit Richter höchstens 2 Wochen. Nach einer Festnahme spätestens am Tag danach zum Richter.",
      law: "§ 163c StPO · § 33 PolG BW · Art. 104 GG · § 128 StPO",
      kw: ["wie lange", "festhalt", "stunden", "gewahrsam", "сколько времени", "сколько час", "сколько держ", "сколько могут", "держать", "часов", "~задерж"]
    },
    {
      id: "k-ed", cat: "festnahme", title: "Fotos und Fingerabdrücke", tone: "warn", toneLabel: "Dulden",
      text: "Als Beschuldigter musst du Fotos und Fingerabdrücke dulden, notfalls mit Zwang; nur zur Identitätsfeststellung, wenn es anders nicht geht. Sag, dass du nicht einverstanden bist, und lass dir die Rechtsgrundlage schriftlich geben – aber wehr dich nicht: Widerstand ist eine Straftat und kann dem Aufenthalt schaden. Gegen die Speicherung kannst du Widerspruch einlegen und später die Löschung beantragen.",
      say: [["Ich bin nicht einverstanden, leiste aber keinen Widerstand. Auf welcher Rechtsgrundlage? Bitte schriftlich.", "Я не согласен, но сопротивляться не буду. На каком основании? Прошу письменно."]],
      law: "§§ 81b, 163b StPO · §§ 41, 91, 92 PolG BW · § 113 StGB · § 54 AufenthG",
      kw: ["fingerabdr", "fotos", "foto machen", "erkennungsdienst", "ed behandlung", "отпечатки пальцев", "снять отпечатки", "сфотографир", "фотографир", "дактилоскоп"]
    },
    {
      id: "k-minderjaehrig", cat: "festnahme", title: "Unter 18: Was gilt für Jugendliche?", tone: "right", toneLabel: "Eltern dabei",
      text: "Jugendliche von 14 bis 17 dürfen schweigen wie Erwachsene. Die Polizei muss die Eltern so bald wie möglich informieren. Bei der Vernehmung dürfen Eltern oder eine andere Vertrauensperson dabei sein, wenn das dem Jugendlichen dient. In schweren Fällen bekommt er vor der Vernehmung einen Pflichtverteidiger. Auf die Eltern warten muss die Polizei nicht – deshalb nichts zur Sache sagen.",
      say: [["Ich bin minderjährig. Ich will meine Eltern oder eine Vertrauensperson dabeihaben und einen Anwalt. Bis dahin sage ich nichts.", "Я несовершеннолетний. Хочу, чтобы были родители или доверенное лицо и адвокат. До этого ничего не скажу."]],
      law: "§§ 67, 67a, 68a, 70a–70c JGG",
      kw: ["minderjaehrig", "jugendlich", "unter 18", "eltern", "mein sohn", "meine tochter", "sohn", "tochter", "~14", "~15", "~16", "~17", "schueler", "несовершеннолет", "подрост", "ребен", "сына", "сын", "дочь", "дочк", "родители", "школьник", "младше 18"]
    },
    {
      id: "k-auslfs", cat: "verkehr", title: "Ausländischer Führerschein – wie lange gilt er?", tone: "warn", toneLabel: "6 Monate",
      text: "Führerscheine aus Nicht-EU-Staaten wie Russland oder Kasachstan gelten nur 6 Monate, nachdem du in Deutschland deinen Wohnsitz genommen hast, meist mit Übersetzung oder Internationalem Führerschein. Danach ermittelt die Polizei wegen Fahrens ohne Fahrerlaubnis, auch wenn er zu Hause gilt. Gerichte urteilen nicht einheitlich, eine Verurteilung kann aber dem Aufenthalt schaden: keine Angaben, Anwalt. Neu seit 18.08.2026: In einem anderen EU-Staat umgetauschte Führerscheine gelten auch hier.",
      law: "§ 29 FeV · § 21 StVG · FeV-Änderung vom 18.08.2026",
      kw: ["auslaendischer fuehrerschein", "umschreib", "6 monat", "sechs monat", "russischer fuehrerschein", "kasach", "drittstaat", "wie lange gilt", "seit einem jahr", "~monat", "~jahr", "иностранные права", "обмен прав", "российские права", "казахстанск", "казахск", "полгода", "6 месяц", "шесть месяц", "сколько действуют", "~месяц", "~год", "поменять права"]
    },
    {
      id: "k-ukrainefs", cat: "verkehr", title: "Ukrainischer Führerschein", tone: "right", toneLabel: "Gilt mit § 24",
      text: "Mit Schutzstatus nach § 24 gilt der ukrainische Führerschein ohne Übersetzung, solange der Schutz gilt – derzeit bis 04.03.2027. Viele Beamte kennen die Regel nicht: Aufenthaltstitel und EU-Verordnung 2022/1280 ausgedruckt dabeihaben. Gilt ein alter Führerschein als gefälscht: Registerauszug des ukrainischen Innenministeriums mit Übersetzung über einen Anwalt vorlegen. Seit 18.08.2026 ohne Prüfung in einen deutschen umschreibbar – am besten vor einem Wechsel des Aufenthaltstitels, danach gelten nur 6 Monate.",
      say: [["Ich habe Schutzstatus nach § 24. Mein Führerschein gilt nach der EU-Verordnung 2022/1280.", "У меня статус защиты по § 24. Мои права действуют по регламенту ЕС 2022/1280."]],
      law: "EU-VO 2022/1280 · § 24 AufenthG · § 29 FeV · Anlage 11 FeV",
      kw: ["ukrain", "schutzstatus", "2022 1280", "gefaelscht", "faelsch", "alter fuehrerschein", "украин", "беженц", "статус защит", "украинские права", "поддел", "фальшив", "старые права", "старого образц"]
    },
    {
      id: "k-fsweg", cat: "verkehr", title: "Die Polizei nimmt meinen Führerschein mit", tone: "right", toneLabel: "Widersprechen",
      text: "Mitnehmen darf die Polizei den Führerschein nur bei Verdacht auf eine Straftat, für die er entzogen werden kann – etwa Alkohol oder Drogen am Steuer oder Unfallflucht. Sag, dass du widersprichst, und verlange eine Bescheinigung. Dann soll die Polizei innerhalb von 3 Tagen die Bestätigung durch ein Gericht beantragen. Bis dahin nicht selbst fahren – das wäre eine eigene Straftat.",
      say: [["Ich gebe den Führerschein nicht freiwillig heraus und widerspreche der Beschlagnahme. Bitte geben Sie mir eine Bescheinigung.", "Права добровольно не отдаю и возражаю против изъятия. Дайте, пожалуйста, документ об этом."]],
      law: "§§ 94, 98, 111a StPO · § 69 StGB · § 21 Abs. 2 StVG",
      kw: ["fuehrerschein weg", "fuehrerschein abgenommen", "fuehrerschein mitgenommen", "fuehrerschein beschlagnahm", "fuehrerschein eingezogen", "abgenomm", "eingezog", "забрали права", "изъяли права", "отобрали права", "лишили прав", "забрала права", "забрали фюрер"]
    },
    {
      id: "k-nichteinverstanden", cat: "durchsuchung", title: "Durchsuchung: „Ich bin nicht einverstanden“ laut sagen", tone: "right", toneLabel: "Laut sagen",
      text: "Schweigen kann als Einwilligung gelten. Sag deshalb deutlich: „Ich bin nicht einverstanden.“ Hat die Polizei eine Befugnis – Verdacht, Beschluss, Waffenverbotszone –, durchsucht sie trotzdem. Dann dulden: nichts festhalten, nicht mithelfen. Dein Widerspruch zählt später. Protokoll und Liste der mitgenommenen Sachen gibt es nur, wenn du sie verlangst.",
      say: [["Ich bin mit der Durchsuchung nicht einverstanden. Bitte vermerken Sie das.", "Я не согласен на обыск. Запишите это, пожалуйста."]],
      law: "§§ 102, 105, 107 StPO · §§ 34, 35 PolG BW · § 113 StGB",
      kw: ["einverstanden", "zustimm", "einwillig", "widersprech", "nein sagen", "не согласен", "соглаш", "согласие", "возраж", "сказать нет"]
    },
    {
      id: "k-urintest", cat: "verkehr", title: "Urintest verlangt – und die Drohung mit der Blutprobe", tone: "right", toneLabel: "Freiwillig",
      text: "Viele berichten: Wer den Urintest ablehnt, dem wird mit Wache, Blutprobe und Kosten gedroht. Rechtlich gilt: Der Urintest ist freiwillig, die Ablehnung allein ist kein Verdacht. Eine Blutprobe braucht einen konkreten Verdacht – liegt der vor, kommt sie ohnehin. Urintests zeigen Cannabis noch Tage nach dem Konsum. Ruhig bleiben, ablehnen, nicht wehren.",
      say: [["Einem freiwilligen Urintest stimme ich nicht zu.", "На добровольный тест мочи не соглашаюсь."]],
      law: "§ 81a StPO · § 24a StVG",
      kw: ["urintest", "urin", "pinkeln", "becher", "drohung", "droh", "blutprob", "blut abnehm", "verweiger", "zuschau", "тест мочи", "моч", "пописать", "писать", "стаканчик", "баночк", "угрожа", "отказаться от теста", "откаж", "возьмут кровь", "смотрит"]
    },
    {
      id: "k-cannabis", cat: "verbote", title: "Cannabis dabei oder gestern gekifft?", tone: "warn", toneLabel: "25 g · 3,5 ng",
      text: "Ab 18 erlaubt: unterwegs bis 25 g, zu Hause bis 50 g und 3 Pflanzen. Nicht kiffen neben Minderjährigen, nicht in Sichtweite von Schulen, Spielplätzen und Sportstätten (bis 100 m) und in Fußgängerzonen nicht von 7 bis 20 Uhr. Am Steuer gilt ein THC-Grenzwert von 3,5 ng/ml im Blut – auch Konsum am Vortag kann reichen. Unter 21 und in der Probezeit: gar kein Cannabis am Steuer.",
      law: "§§ 3, 5 KCanG · §§ 24a, 24c StVG",
      kw: ["cannabis", "kiff", "gras", "joint", "marihuana", "weed", "wie viel gramm", "gras dabei", "gestern gekifft", "каннабис", "травы", "траву", "сколько трав", "травы можно", "косяк", "марихуан", "покурил", "курил", "курил вчера", "грамм"]
    },
    {
      id: "k-notdienst", cat: "festnahme", title: "Sofort einen Anwalt – Notdienst Stuttgart", tone: "right", toneLabel: "Rund um die Uhr",
      text: "Anwaltlicher Notdienst für Strafsachen in Stuttgart, rund um die Uhr: 0711 998 899 66 (AnwaltVerein Stuttgart). Die Polizei muss dir helfen, einen Anwalt zu erreichen. Einen Pflichtverteidiger kannst du beantragen; spätestens vor dem Haftrichter bekommst du einen. Wirst du verurteilt, trägst du die Kosten meist selbst.",
      say: [["Ich will sofort einen Anwalt. Bitte rufen Sie den Anwaltlichen Notdienst an: 0711 998 899 66.", "Я хочу сразу адвоката. Позвоните, пожалуйста, в дежурную адвокатскую службу: 0711 998 899 66."]],
      law: "§§ 136, 140, 141 StPO · anwaltverein-stuttgart.de",
      kw: ["notdienst", "anwalt nummer", "anwalt telefon", "verteidiger", "pflichtverteidiger", "anwalt sofort", "дежурн", "номер адвокат", "дежурного адвокат", "телефон адвокат", "защитник", "позвонить адвокат"]
    },
    {
      id: "k-essen", cat: "verkehr", title: "Essen, Trinken, Rauchen am Steuer", tone: "can", toneLabel: "Nicht verboten",
      text: "Essen, Trinken und Rauchen am Steuer sind nicht ausdrücklich verboten. Wer dabei aber unaufmerksam fährt oder andere gefährdet, riskiert ein Bußgeld und bei einem Unfall Mitschuld. Ein Handy darfst du während der Fahrt nicht in die Hand nehmen: 100 € und 1 Punkt.",
      law: "§ 1 Abs. 2 StVO · § 23 Abs. 1a StVO",
      kw: ["essen", "trinken", "rauchen", "kaffee", "burger", "doener", "gegessen", "есть за рул", "можно ли есть", "ел за рул", "еда", "пить за рул", "курить за рул", "кофе", "бургер", "шаурм", "бутерброд", "перекус"]
    },
    {
      id: "k-unfallflucht", cat: "verkehr", title: "Nach dem Unfall: Wie lange warten?", tone: "no", toneLabel: "Nicht wegfahren",
      text: "Wegfahren, bevor deine Daten aufgenommen sind, ist Unfallflucht: bis 3 Jahre, oft ist der Führerschein weg. Eine feste Wartezeit gibt es nicht – Gerichte verlangen je nach Lage etwa 10 bis 60 Minuten, bei Verletzten mehr. Ein Zettel am Auto reicht nicht; kommt niemand, sofort die Polizei informieren. Bei kleinem Parkschaden kann eine freiwillige Meldung binnen 24 Stunden die Strafe mildern oder ersparen. Zum Hergang darfst du schweigen.",
      law: "§ 142 StGB · § 34 StVO",
      kw: ["unfallflucht", "fahrerflucht", "wie lange warten", "zettel", "parkschaden", "weggefahren", "gestreift", "ausparken", "скрылся", "уехал с места", "уехать", "сколько ждать", "оставил записку", "поцарапал", "царапин", "на парковке"]
    },
    {
      id: "k-ticket", cat: "bahn", title: "Ohne gültiges Ticket erwischt", tone: "warn", toneLabel: "60 €",
      text: "Das erhöhte Beförderungsentgelt beträgt 60 €. Hast du ein persönliches Abo oder Deutschlandticket nur vergessen, zeig es innerhalb einer Woche vor – dann 7 €. Kontrolleure dürfen Name und Anschrift verlangen, dich aber nicht durchsuchen. Absichtlich ohne Ticket fahren bleibt eine Straftat – der Bundestag hat die Abschaffung im April 2026 abgelehnt. Kommt ein Strafbefehl: Einspruch innerhalb von 2 Wochen, vorher Anwalt fragen.",
      law: "§ 9 VVS-Beförderungsbedingungen · § 9 BefBedV · § 265a StGB · § 410 StPO",
      kw: ["ohne ticket", "schwarzfahr", "erhoehtes befoerderungsentgelt", "60 euro", "abo vergessen", "ticket vergessen", "без билета", "зайцем", "забыл проездной", "штраф 60", "проездной дома", "забыл билет"]
    },
    {
      id: "k-bundespolizei", cat: "bahn", title: "Bundespolizei im Zug und am Bahnhof", tone: "can", toneLabel: "Meist nur ansehen",
      text: "In DB-Zügen, S-Bahnen und am Hauptbahnhof kontrolliert oft die Bundespolizei. Sie darf dich anhalten, befragen, Ausweispapiere verlangen und deine Sachen ansehen. Pflicht sind nur deine Personalien und mitgeführte Ausweise. In Fernzügen und Bahnhofsgebäuden mit Messerverbot darf sie auch ohne Verdacht durchsuchen. Menschen nach Hautfarbe auszuwählen ist verboten. Beschwerde beim Polizeibeauftragten des Bundes innerhalb von 6 Monaten.",
      say: [["Hier sind meine Personalien. Zu weiteren Fragen sage ich nichts, und einer Durchsuchung stimme ich nicht zu.", "Вот мои данные. На другие вопросы отвечать не буду, на обыск не соглашаюсь."]],
      law: "§§ 3, 22 BPolG · §§ 42b, 42c WaffG · Art. 3 Abs. 3 GG · PolBeauftrG",
      kw: ["bundespolizei", "im zug", "zugkontrolle", "db", "grenzkontrolle", "федеральная полиц", "бундесполиц", "в поезде", "на вокзале", "в электричке"]
    },
    {
      id: "k-zoll", cat: "arbeit", title: "Zoll-Kontrolle: Hier musst du Fragen beantworten", tone: "warn", toneLabel: "Auskunftspflicht",
      text: "Die Finanzkontrolle Schwarzarbeit des Zolls darf Baustellen und Geschäftsräume betreten, Ausweise prüfen und dich zu deiner Arbeit befragen. Anders als bei der Polizei musst du antworten – Arbeitgeber, Lohn, Arbeitszeit –, sonst droht ein Bußgeld. Schweigen darfst du nur, wenn du dich oder Angehörige belasten würdest. Den Ausweis musst du auf dem Bau immer dabeihaben: bis 5.000 €. Eine bewohnte Wohnung darf der Zoll ohne Beschluss grundsätzlich nicht betreten.",
      law: "§§ 2a, 3, 5, 8 SchwarzArbG · Art. 13 GG",
      kw: ["!zoll", "!fks", "finanzkontrolle", "schwarzarbeit", "arbeitserlaubnis", "auskunftspflicht", "таможн", "цоль", "на стройке", "по черному", "разрешение на работ", "работодател"]
    },
    {
      id: "k-dolmetscher", cat: "fremd", title: "Ich verstehe kein Deutsch", tone: "right", toneLabel: "Kostenlos",
      text: "Wirst du als Beschuldigter befragt, steht dir ein Dolmetscher zu – kostenlos, auch bei der Polizei. Sag das sofort und äußere dich bis dahin nicht zur Sache. Unterschreibe nichts, was du nicht verstehst. Bei einer einfachen Kontrolle gibt es keinen Anspruch auf einen Dolmetscher; deine Personalien musst du trotzdem angeben. Wichtige Schreiben wie Haftbefehl, Strafbefehl oder Urteil bekommst du in der Regel übersetzt.",
      say: [["Ich verstehe nicht genug Deutsch. Ich verlange einen Dolmetscher für Russisch. Bis dahin sage ich nichts zur Sache.", "Я недостаточно понимаю по-немецки. Требую переводчика с русского. До этого по делу ничего не скажу."]],
      law: "§ 187 GVG · § 163a Abs. 5 StPO · § 114b StPO · § 111 OWiG",
      kw: ["dolmetsch", "uebersetz", "kein deutsch", "verstehe nicht", "sprache", "russisch", "переводчик", "перевод", "не понимаю", "по немецки", "не говорю по", "язык", "на русском"]
    },
    {
      id: "k-strafbefehl", cat: "fremd", title: "Strafbefehl, Aufenthalt und Einbürgerung", tone: "warn", toneLabel: "2 Wochen",
      text: "Ein Strafbefehl ist eine Verurteilung ohne Verhandlung. Einspruch nur innerhalb von 2 Wochen ab Zustellung – danach ist er rechtskräftig. Nach einem Einspruch kann die Strafe auch höher werden: vorher Anwalt fragen. Für die Einbürgerung zählen Geldstrafen bis 90 Tagessätze in der Regel nicht, die Ausländerbehörde erfährt aber davon. Ab 6 Monaten Freiheitsstrafe, auch auf Bewährung, kann eine Ausweisung drohen.",
      law: "§§ 407–411 StPO · § 12a StAG · § 54 AufenthG · §§ 32, 41 BZRG",
      kw: ["strafbefehl", "штрафбефел", "tagessaetze", "tagessatz", "einbuergerung", "ausweisung", "vorbestraft", "fuehrungszeugnis", "штрафбефель", "судебный приказ", "гражданств", "натурализац", "депортац", "высыл", "выслать", "судимост", "лишат внж"]
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
