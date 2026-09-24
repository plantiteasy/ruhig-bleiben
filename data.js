/* Inhalte des Prototyps. Stand und Quellen: Recherche_2026-09-24.md (Projektordner). */
window.RB = {
  stand: "25.09.2026",
  region: "Baden-Württemberg",

  situations: [

    {
      id: "verkehr", title: "Verkehrskontrolle", sub: "Auto, Transporter, Motorrad", tone: "must", toneLabel: "Pflicht",
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
        "Keine freiwilligen Tests: Pusten, Urin, Wischtest, Übungen wie Finger-Nase.",
        "Nicht wegfahren, die Tür nicht verriegeln, nichts unterschreiben, was du nicht verstehst."
      ],
      note: "Papiere vergessen: 10 € je Dokument. Aussteigen verweigern: 20 €. Haltezeichen ignorieren: 70 € und 1 Punkt.",
      law: "§ 36 Abs. 5 StVO · § 4 Abs. 2 FeV · § 13 Abs. 6 FZV · § 31b StVZO · § 111 OWiG",
      actions: ["situation:papiere", "situation:test", "situation:auto", "film"],
      kw: ["verkehrskontroll", "angehalten", "anhalten", "fahrzeugschein", "aussteig", "warndreieck", "verbandkasten", "warnweste", "auto", "fahr", "остановил", "машин", "авто", "техпаспорт", "выйти из машин", "аптечк", "знак", "за рул"]
    },
    {
      id: "papiere", title: "Führerschein und Papiere", sub: "Vergessen, ausländisch, abgenommen", tone: "must", toneLabel: "Original zeigen",
      say: [
        ["Meinen Führerschein habe ich nicht dabei. Bitte prüfen Sie meine Daten im Register.", "Прав с собой нет. Проверьте, пожалуйста, мои данные в реестре."],
        ["Ich habe Schutzstatus nach § 24. Mein ukrainischer Führerschein gilt nach der EU-Verordnung 2022/1280.", "У меня статус защиты по § 24. Мои украинские права действуют по регламенту ЕС 2022/1280."],
        ["Ich gebe den Führerschein nicht freiwillig heraus und widerspreche der Beschlagnahme.", "Права добровольно не отдаю и возражаю против изъятия."]
      ],
      doo: [
        "Führerschein und Fahrzeugschein im Original zeigen; der digitale Fahrzeugschein der i‑Kfz‑App zählt. Vergessen kostet 10 € je Papier – keine Straftat.",
        "Führerschein aus einem Nicht-EU-Land wie Russland oder Kasachstan: gilt nur 6 Monate ab deinem Wohnsitz in Deutschland. Danach ist Fahren damit eine Straftat – rechtzeitig umschreiben lassen.",
        "Ukraine mit Schutzstatus nach § 24: Der Führerschein gilt ohne Übersetzung, solange der Schutz gilt – derzeit bis 04.03.2027. Die EU-Verordnung 2022/1280 ausgedruckt mitnehmen.",
        "Nimmt die Polizei den Führerschein mit: widersprechen, Bescheinigung verlangen, danach nicht mehr selbst fahren."
      ],
      dont: [
        "Nicht mit abgelaufenem ausländischem Führerschein weiterfahren – auch wenn er im Heimatland gilt.",
        "Keine Kopie oder kein Foto als Ersatz anbieten und nichts zum Vorwurf erklären."
      ],
      note: "Fahren trotz mitgenommenem Führerschein ist eine eigene Straftat. Wer in einen anderen Aufenthaltstitel wechselt, hat mit dem ukrainischen Führerschein wieder nur 6 Monate.",
      law: "§ 4 FeV · § 29 FeV · § 21 StVG · §§ 94, 98, 111a StPO · EU-VO 2022/1280",
      actions: ["protokoll"],
      kw: ["fuehrerschein", "fahrerlaubnis", "papiere", "vergessen", "auslaendisch", "umschreib", "ukrain", "fahren ohne", "водительск", "забыл прав", "права дома", "права с собой", "обмен прав", "иностранные права", "российские права", "украинские права", "казахские права", "без прав", "права действ", "забрали права"]
    },
    {
      id: "test", title: "Alkohol- oder Drogentest", sub: "Pusten, Urin, Wischtest, Blut", tone: "right", toneLabel: "Freiwillig",
      say: [
        ["Einem freiwilligen Test stimme ich nicht zu.", "На добровольный тест не соглашаюсь."],
        ["Zu meinem Konsum und zur Sache mache ich keine Angaben.", "Об употреблении и по делу ничего не скажу."],
        ["Einer Blutentnahme stimme ich nicht zu, ich leiste aber keinen Widerstand.", "На взятие крови не соглашаюсь, но сопротивляться не буду."]
      ],
      doo: [
        "Freiwillig sind: Pusten, Urintest, Wischtest und Übungen wie Finger-Nase oder auf einer Linie gehen. Ablehnen ist kein Schuldeingeständnis. Die Polizei muss darauf nicht hinweisen.",
        "Eine Blutprobe darf die Polizei nur bei konkretem Verdacht anordnen – dann auch ohne Richter. Die Drohung „dann eben Blut auf der Wache“ ist kein Grund, freiwillig zu testen.",
        "Grenzwerte Auto und E-Scooter: 0,5 Promille, THC 3,5 ng/ml. Ab 1,1 Promille oder mit Ausfallerscheinungen ist es eine Straftat. Unter 21 und in der Probezeit: kein Alkohol, kein Cannabis.",
        "Urintests zeigen Cannabis noch Tage nach dem Konsum."
      ],
      dont: [
        "Keine Angaben zu Menge, Uhrzeit oder „vor Jahren mal gekifft“ – damit wird zurückgerechnet und eine Blutprobe begründet.",
        "Keine Übungen machen: Unsicherheit dabei kann aus einem Bußgeld eine Straftat machen.",
        "Die Blutprobe nicht körperlich verhindern – das ist Widerstand."
      ],
      note: "Erstverstoß ab 0,5 Promille oder 3,5 ng/ml THC: 500 €, 1 Monat Fahrverbot, 2 Punkte. Alkohol und THC zusammen: 1.000 €.",
      law: "§ 81a StPO · §§ 24a, 24c StVG · § 316 StGB",
      actions: ["protokoll"],
      kw: ["alkohol", "pusten", "drogen", "test", "blut", "promill", "thc", "urin", "wischtest", "trunken", "алко", "пил", "выпил", "дунуть", "дуть", "трубк", "наркот", "тест", "кровь", "трав", "промил", "моч"]
    },
    {
      id: "escooter", title: "E-Scooter", sub: "Alkohol, Gehweg, zu zweit", tone: "warn", toneLabel: "Wie beim Auto",
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
      kw: ["e scooter", "escooter", "scooter", "tretroller", "elektroroller", "roller", "gehweg", "zu zweit", "versicherungskennzeich", "самокат", "на самокат", "электросамокат", "тротуар", "вдвоем", "скутер"]
    },
    {
      id: "auto", title: "Auto wird durchsucht", sub: "Kofferraum, Handschuhfach, Taschen", tone: "can", toneLabel: "Widersprechen",
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
      kw: ["kofferraum", "handschuhfach", "auto durchsuch", "wagen durchsuch", "fahrzeug durchsuch", "багажник", "бардачок", "обыскать машин", "обыск машин", "досмотр машин", "обыскивают машин"]
    },
    {
      id: "handysteuer", title: "Handy am Steuer", sub: "Vorwurf, Handy zeigen, Entsperren", tone: "warn", toneLabel: "Nicht entsperren",
      say: [
        ["Zum Vorwurf mache ich keine Angaben.", "По обвинению ничего не скажу."],
        ["Mein Handy zeige und entsperre ich nicht freiwillig.", "Телефон добровольно не показываю и не разблокирую."],
        ["Ich widerspreche der Beschlagnahme und bitte um eine Bescheinigung.", "Возражаю против изъятия и прошу документ."]
      ],
      doo: [
        "Personalien und Papiere geben, zum Vorwurf schweigen – auch „ich habe nur aufs Navi geschaut“ ist eine Aussage.",
        "Ohne Verdacht und Beschlagnahme darf die Polizei nicht in dein Handy schauen. Den PIN musst du nie nennen.",
        "Den Finger auflegen lassen musst du nur bei einer rechtmäßigen Beschlagnahme oder Durchsuchungsanordnung (BGH 2025) – dann nicht wehren."
      ],
      dont: [
        "Das Handy nicht aus der Hand geben, nicht selbst durchblättern, keine Anrufliste zeigen.",
        "Nicht darüber diskutieren, ob du telefoniert hast."
      ],
      note: "Handy am Steuer: 100 € und 1 Punkt, mit Gefährdung oder Unfall mehr. Essen am Steuer ist nicht ausdrücklich verboten – ein Bußgeld droht aber, wenn du dabei unaufmerksam fährst.",
      law: "§ 23 Abs. 1a StVO · § 1 StVO · §§ 94, 98, 81b StPO · BGH 2 StR 232/24",
      actions: ["protokoll"],
      kw: ["handy am steuer", "am steuer telefon", "telefonier", "handy beim fahren", "handy in der hand", "navi", "handyverbot", "smartphone am steuer", "телефон за рул", "телефону за рул", "по телефону", "телефон в руке", "навигатор"]
    },
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
      id: "durchsuchung", title: "Durchsuchung", sub: "Person, Tasche, Wohnung", tone: "can", toneLabel: "Nicht zustimmen",
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
        "Vorher Biometrie sperren, dann ist der Code nötig. iPhone: Seitentaste und Lauter-Taste 2 Sekunden halten. Android: Ein/Aus-Taste gedrückt halten und „Sperrmodus“ tippen – falls er fehlt, unter Einstellungen › Sperrbildschirm einschalten."
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
      kw: ["ausweis dabei", "mitführ", "pass", "aufenthalt", "baustell", "паспорт", "носить", "с собой", "внж", "стройк", "документ"]
    },
    {
      id: "k-fragen", cat: "kontrolle", title: "Muss ich Fragen beantworten?", tone: "right", toneLabel: "Nein",
      text: "Zur Sache darfst du schweigen – als Beschuldigter und als Zeuge. Zur Polizei musst du als Zeuge nur, wenn die Staatsanwaltschaft die Vorladung angeordnet hat. Die Personalien musst du trotzdem angeben.",
      say: [["Ich mache keine Angaben zur Sache. Ich möchte zuerst mit einem Anwalt sprechen.", "Я не даю показаний по делу. Сначала хочу поговорить с адвокатом."]],
      law: "§§ 55, 136, 163 Abs. 3 StPO",
      kw: ["frag", "antwort", "schweig", "aussag", "zeug", "vorlad", "вопрос", "отвеч", "молч", "показан", "свидетел", "повестк"]
    },
    {
      id: "k-grund", cat: "kontrolle", title: "Darf die Polizei ohne Grund kontrollieren?", tone: "can", toneLabel: "Teilweise",
      text: "In BW in bestimmten Fällen ja: an „gefährlichen Orten“, bei Veranstaltungen, im öffentlichen Verkehr, an Kontrollstellen und in der Stuttgarter Waffenverbotszone. Menschen nach Hautfarbe oder Herkunft auszuwählen ist rechtswidrig. Nach dem Grund fragen darfst du immer.",
      say: [["Aus welchem Grund werde ich kontrolliert?", "По какой причине меня проверяют?"]],
      law: "§ 27 PolG BW · § 42c WaffG · OVG NRW 5 A 294/16",
      kw: ["ohne grund", "grundlos", "anlass", "hautfarb", "herkunft", "racial", "без причин", "проверить без", "просто так", "без повод", "цвет кож", "расизм", "почему остановил"]
    },
    {
      id: "k-paragraf", cat: "kontrolle", title: "Muss der Polizist Grund oder Paragrafen nennen?", tone: "right", toneLabel: "Grund: ja",
      text: "Den Paragrafen nicht. Bei einer strafrechtlichen Kontrolle muss er sagen, welche Straftat dir vorgeworfen wird. Bei einer polizeirechtlichen Kontrolle kannst du eine schriftliche Bestätigung der Maßnahme verlangen – dann muss sie begründet werden.",
      say: [
        ["Welche Straftat wird mir vorgeworfen?", "В каком преступлении меня подозревают?"],
        ["Ich bitte um eine schriftliche Bestätigung dieser Maßnahme.", "Прошу письменное подтверждение этой меры."]
      ],
      law: "§§ 163a Abs. 4, 163b StPO · OLG Hamm 2 ORs 5/25 · § 37 Abs. 2, § 39 LVwVfG",
      kw: ["paragraf", "paragraph", "rechtsgrundlag", "vorwurf", "vorgeworfen", "straftat", "параграф", "стать", "основан", "подозрева", "в чем"]
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
      kw: ["film", "video", "kamera", "aufnahm", "aufnehm", "ton", "сним", "съем", "видео", "камер", "запис", "звук"]
    },
    {
      id: "k-tabu", cat: "kontrolle", title: "Was darf ich auf keinen Fall sagen oder tun?", tone: "no", toneLabel: "Tabu",
      text: "Beleidigung ist eine Straftat: Mittelfinger, „Schwein“, „Arschloch“. „Bulle“ allein ist nicht immer strafbar, Duzen auch nicht – wer aber nach der Bitte weiter duzt, riskiert es. Schubsen oder Losreißen ist Widerstand, ein tätlicher Angriff kostet 3 Monate bis 5 Jahre. Sag „Sie“, kurz und ruhig.",
      law: "§§ 185, 194 Abs. 3 StGB · §§ 113, 114 StGB · OLG Hamburg 1 ORs 13/25",
      kw: ["beleidig", "schimpf", "mittelfing", "duz", "bulle", "widerstand", "оскорб", "мат", "палец", "ругат", "на ты", "сопротивл", "нельзя говорить"]
    },
    {
      id: "k-wohnung", cat: "durchsuchung", title: "Polizei an der Wohnungstür", tone: "right", toneLabel: "Beschluss nötig",
      text: "Grundsätzlich nur mit richterlichem Beschluss, sonst nur bei Gefahr im Verzug. Du darfst anwesend sein. Nachts von 21 bis 6 Uhr nur in Ausnahmefällen. Ein Verzeichnis der mitgenommenen Sachen gibt es nur auf Verlangen.",
      say: [["Ich möchte den Durchsuchungsbeschluss sehen.", "Покажите постановление об обыске."]],
      law: "Art. 13 GG · §§ 105–107 StPO · § 36 PolG BW",
      kw: ["wohnung", "tür", "haus", "durchsuchungsbeschluss", "nachts", "квартир", "дом", "двер", "ордер", "постановлен"]
    },
    {
      id: "k-bodycam", cat: "danach", title: "Bodycam-Aufnahme sichern", tone: "warn", toneLabel: "4 Wochen",
      text: "Bodycam-Aufnahmen werden spätestens nach 4 Wochen gelöscht, außer sie werden als Beweis gebraucht. Deshalb sofort schriftlich beim Polizeipräsidium Stuttgart die Sicherung beantragen – die Vorlage findest du unter „Danach“.",
      law: "§ 44 Abs. 5–11, § 75 Abs. 5 PolG BW",
      kw: ["bodycam", "körperkamera", "kamera der polizei", "sichern", "бодикам", "камера полиц", "нательн", "сохран"]
    },
    {
      id: "k-beschwerde", cat: "danach", title: "Wo kann ich mich beschweren?", tone: "warn", toneLabel: "3 Monate",
      text: "Kostenlos: die Bürgerbeauftragte des Landes BW, zugleich Polizeibeauftragte – innerhalb von 3 Monaten, aber nicht parallel zu einem Straf- oder Gerichtsverfahren. Dienstaufsichtsbeschwerde schriftlich an das Polizeipräsidium Stuttgart. Eine Strafanzeige gegen Beamte ist ein eigener Weg. Die Reihenfolge ist wichtig – erst mit einem Anwalt sprechen.",
      law: "buergerbeauftragte-bw.de · PP Stuttgart, Hahnemannstraße 1 · § 340 StGB",
      kw: ["beschwer", "anzeig", "bürgerbeauftrag", "melden", "жалоб", "пожалов", "заявлен", "куда писать"]
    },
    {
      id: "k-geld", cat: "danach", title: "Bekomme ich Schadensersatz?", tone: "can", toneLabel: "Wenig",
      text: "Nicht wie in den USA. Beispiele: 3.000 € für eine unverhältnismäßige Zwangsmaßnahme (LG Berlin II, 2025), 75 € pro Tag bei ungerechtfertigter Freiheitsentziehung. Realistisches Ziel: gerichtlich feststellen lassen, dass die Maßnahme rechtswidrig war. Kostenrisiko bei einer Niederlage grob 1.600 € – eine Schätzung.",
      law: "§ 839 BGB · Art. 34 GG · § 7 StrEG · LG Berlin II 26 O 17/23",
      kw: ["schadensersatz", "schmerzensgeld", "entschädig", "klag", "geld", "деньг", "компенсац", "отсуд", "иск", "суд"]
    },
    {
      id: "k-messer", cat: "verbote", title: "Messer in Stuttgart", tone: "no", toneLabel: "Verboten",
      text: "Waffenverbotszone Innenstadt, unter anderem Hauptbahnhof, Schlossgarten und Rathaus: freitags, samstags und vor Feiertagen von 18 bis 8 Uhr sind alle Messer verboten, Kontrollen ohne Verdacht, Bußgeld bis 10.000 €. In Bussen und Bahnen in BW gilt seit 2025 ein Messerverbot mit Stichproben. Ausnahmen für Werkzeug im Beruf sind noch nicht geklärt – bis dahin nicht mitführen.",
      law: "Verordnung Waffenverbotszone Stuttgart · §§ 42, 42c WaffG",
      kw: ["messer", "waffe", "cutter", "werkzeug", "verbotszone", "stadtbahn", "bus", "нож", "оруж", "зона", "автобус", "штутгарт", "карман"]
    },
    {
      id: "k-dauer", cat: "festnahme", title: "Wie lange darf mich die Polizei festhalten?", tone: "right", toneLabel: "Grenzen",
      text: "Zur Identitätsfeststellung nach StPO höchstens 12 Stunden. Polizeilicher Gewahrsam in BW ohne Richter nur bis zum Ende des nächsten Tages, mit Richter höchstens 2 Wochen. Nach einer Festnahme spätestens am Tag danach zum Richter.",
      law: "§ 163c StPO · § 33 PolG BW · Art. 104 GG · § 128 StPO",
      kw: ["wie lange", "festhalt", "stunden", "gewahrsam", "сколько", "держать", "часов", "задерж"]
    },
    {
      id: "k-auslfs", cat: "verkehr", title: "Ausländischer Führerschein – wie lange gilt er?", tone: "warn", toneLabel: "6 Monate",
      text: "Führerscheine aus Nicht-EU-Staaten wie Russland oder Kasachstan gelten nur 6 Monate, nachdem du in Deutschland deinen Wohnsitz genommen hast. In dieser Zeit gehört meist eine deutsche Übersetzung oder ein Internationaler Führerschein dazu. Danach ist Fahren damit eine Straftat – Fahren ohne Fahrerlaubnis –, auch wenn der Führerschein zu Hause gilt. Rechtzeitig bei der Führerscheinstelle umschreiben lassen.",
      law: "§ 29 FeV · § 21 StVG",
      kw: ["auslaendischer fuehrerschein", "umschreib", "6 monat", "sechs monat", "russischer fuehrerschein", "kasach", "drittstaat", "wie lange gilt", "иностранные права", "обмен прав", "российские права", "казахстанск", "полгода", "6 месяц", "шесть месяц", "сколько действуют"]
    },
    {
      id: "k-ukrainefs", cat: "verkehr", title: "Ukrainischer Führerschein", tone: "right", toneLabel: "Gilt mit § 24",
      text: "Mit Schutzstatus nach § 24 gilt der ukrainische Führerschein ohne Übersetzung, solange der Schutz gilt – derzeit bis 04.03.2027. Viele Beamte kennen die Regel nicht: Aufenthaltstitel und die EU-Verordnung 2022/1280 ausgedruckt mitnehmen. Hält die Polizei einen alten Führerschein für gefälscht: Bestätigung beim ukrainischen Innenministerium anfordern, übersetzen lassen, mit Anwalt vorlegen. Wechselst du in einen anderen Aufenthaltstitel, gelten wieder 6 Monate.",
      say: [["Ich habe Schutzstatus nach § 24. Mein Führerschein gilt nach der EU-Verordnung 2022/1280.", "У меня статус защиты по § 24. Мои права действуют по регламенту ЕС 2022/1280."]],
      law: "EU-VO 2022/1280 · § 24 AufenthG · § 29 FeV",
      kw: ["ukrain", "schutzstatus", "2022 1280", "украин", "беженц", "статус защит", "украинские права"]
    },
    {
      id: "k-fsweg", cat: "verkehr", title: "Die Polizei nimmt meinen Führerschein mit", tone: "right", toneLabel: "Widersprechen",
      text: "Mitnehmen darf die Polizei den Führerschein nur bei Verdacht auf eine Straftat, für die er entzogen werden kann – etwa Alkohol oder Drogen am Steuer oder Unfallflucht. Sag, dass du widersprichst, und verlange eine Bescheinigung. Dann soll die Polizei innerhalb von 3 Tagen die Bestätigung durch ein Gericht beantragen. Bis dahin nicht selbst fahren – das wäre eine eigene Straftat.",
      say: [["Ich gebe den Führerschein nicht freiwillig heraus und widerspreche der Beschlagnahme. Bitte geben Sie mir eine Bescheinigung.", "Права добровольно не отдаю и возражаю против изъятия. Дайте, пожалуйста, документ об этом."]],
      law: "§§ 94, 98, 111a StPO · § 69 StGB · § 21 Abs. 2 StVG",
      kw: ["fuehrerschein weg", "fuehrerschein abgenommen", "fuehrerschein mitgenommen", "fuehrerschein beschlagnahm", "fuehrerschein eingezogen", "забрали права", "изъяли права", "отобрали права", "лишили прав", "забрала права", "забрал"]
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
      kw: ["urintest", "urin", "pinkeln", "becher", "drohung", "blutprob", "тест мочи", "моч", "пописать", "угрожа", "отказаться от теста"]
    },
    {
      id: "k-cannabis", cat: "verbote", title: "Cannabis dabei oder gestern gekifft?", tone: "warn", toneLabel: "25 g · 3,5 ng",
      text: "Ab 18 erlaubt: unterwegs bis 25 g, zu Hause bis 50 g und 3 Pflanzen. Nicht kiffen neben Minderjährigen, nicht in Sichtweite von Schulen, Spielplätzen und Sportstätten (bis 100 m) und in Fußgängerzonen nicht von 7 bis 20 Uhr. Am Steuer gilt ein THC-Grenzwert von 3,5 ng/ml im Blut – auch Konsum am Vortag kann reichen. Unter 21 und in der Probezeit: gar kein Cannabis am Steuer.",
      law: "§§ 3, 5 KCanG · §§ 24a, 24c StVG",
      kw: ["cannabis", "kiff", "gras", "joint", "marihuana", "weed", "wie viel gramm", "gras dabei", "каннабис", "травы", "сколько трав", "травы можно", "косяк", "марихуан", "покурил", "грамм"]
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
      kw: ["essen", "trinken", "rauchen", "kaffee", "есть за рул", "можно ли есть", "ел за рул", "еда", "пить за рул", "курить за рул", "кофе"]
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
