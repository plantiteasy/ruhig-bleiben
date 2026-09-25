/* Inhalte des Prototyps. Stand und Quellen: Recherche_2026-09-24.md (Projektordner). */
window.RB = {
  stand: "25.09.2026",
  region: "Baden-Württemberg",

  groups: [["auto", "Auto, Scooter, Unfall", "Машина, самокат, ДТП"], ["weg", "Unterwegs und bei der Arbeit", "На улице и на работе"], ["handy", "Handy, Zeugen, Festnahme", "Телефон, свидетели, задержание"]],

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
      ru: {
        title: "Проверка на дороге", sub: "Машина, фургон, мотоцикл", toneLabel: "Обязательно",
        doo: ["Заглуши мотор, опусти стекло, держи руки на виду. Это не обязанность, но так спокойнее.",
          "Покажи права (Führerschein) и техпаспорт (Fahrzeugschein) в оригинале. Электронный техпаспорт в приложении i\u2011Kfz считается, фото — нет.",
          "Назови свои данные. Выйди из машины, если полиция требует этого для проверки.",
          "Знак аварийной остановки, аптечку и жилет достань сам и покажи. Заглянуть в багажник полиция может, но без подозрения ничего не обыскивает."],
        dont: ["Не говори, куда едешь, и ничего про алкоголь, наркотики или лекарства — даже «всего одно пиво».",
          "Не соглашайся на добровольные тесты: дуть в трубку, моча, мазок, проверка зрачков фонариком, упражнения вроде «палец к носу».",
          "Не уезжай, не запирай двери, не подписывай то, чего не понимаешь."],
        note: "Забыл документы: 10 € за каждый. Отказ выйти из машины: 20 €. Не остановился по требованию: 70 € и 1 балл."
      },
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
      ru: {
        title: "Права и документы", sub: "Забыл, иностранные, забрали", toneLabel: "Оригиналы",
        doo: ["Покажи права и техпаспорт в оригинале; электронный техпаспорт в приложении i\u2011Kfz считается. Забыл — 10 € за каждый документ, это не преступление. Дали бланк — покажи права в полицейском участке в указанный срок, иначе делом займётся прокуратура.",
          "Права страны вне ЕС, например России или Казахстана, действуют только 6 месяцев с момента, как ты поселился в Германии. Потом полиция возбуждает дело за езду без прав — поменяй права вовремя.",
          "Украина со статусом защиты по § 24: права действуют без перевода, пока действует защита — сейчас до 04.03.2027. Возьми распечатку регламента ЕС 2022/1280. С 18.08.2026 их можно обменять на немецкие без экзаменов.",
          "Если полиция забирает права: возрази, потребуй справку и больше сам за руль не садись."],
        dont: ["Не езди с иностранными правами после окончания срока, даже если дома они действуют.",
          "Не предлагай копию или фото вместо прав и ничего не объясняй по поводу обвинения."],
        note: "Ездить после того, как права забрали, — отдельное преступление. Если меняешь вид на жительство, с украинскими правами снова остаётся только 6 месяцев."
      },
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
      ru: {
        title: "Тест на алкоголь или наркотики", sub: "Дуть, моча, мазок, кровь", toneLabel: "Добровольно",
        doo: ["Добровольно: дуть в трубку, тесты мочи, слюны и мазок, проверка зрачков фонариком и упражнения вроде «палец к носу» или «пройти по линии». Отказ — не признание вины. Полиция не обязана говорить, что это добровольно.",
          "Кровь полиция может взять только при конкретном подозрении — тогда и без судьи. Угроза «тогда возьмём кровь в участке» — не причина соглашаться на тест.",
          "Пределы для машины и электросамоката: 0,5 промилле, THC 3,5 нг/мл. С 1,1 промилле или при явных признаках опьянения — это преступление. До 21 года и на испытательном сроке: ни алкоголя, ни каннабиса.",
          "Тест мочи показывает каннабис ещё несколько дней после употребления.",
          "Лекарства вроде риталина или каннабис по рецепту: носи с собой рецепт или справку врача, но на месте ничего не объясняй — только при взятии крови или через адвоката."],
        dont: ["Не называй количество, время и не говори «курил пару лет назад» — по этому пересчитывают и обосновывают анализ крови.",
          "Не делай упражнения: неуверенность при них может превратить штраф в уголовное дело.",
          "Не мешай физически брать кровь — это сопротивление."],
        note: "Первое нарушение с 0,5 промилле или 3,5 нг/мл THC: 500 €, 1 месяц запрета водить, 2 балла. Алкоголь и THC вместе: 1 000 €. Если анализ крови чистый, дело закрывают и платить за него не нужно."
      },
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
      ru: {
        title: "Электро\u00ADсамокат", sub: "Алкоголь, тротуар, вдвоём", toneLabel: "Как авто",
        doo: ["Назови свои данные. Права для электросамоката не нужны, но нужен действующий страховой номерной знак.",
          "Пределы как для машины: 0,5 промилле, THC 3,5 нг/мл, с 1,1 промилле — преступление. До 21 года и на испытательном сроке: 0,0.",
          "После поездки пьяным на самокате можно лишиться и автомобильных прав."],
        dont: ["Не езди по тротуару и в пешеходной зоне и не вдвоём — за это штраф.",
          "Не держи телефон во время езды: 100 € и 1 балл.",
          "Никаких добровольных тестов и ничего об употреблении."],
        note: "Запрет водить действует для всех транспортных средств с мотором — и для электросамоката тоже."
      },
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
      ru: {
        title: "Обыск машины", sub: "Багажник, бардачок, сумки", toneLabel: "Возражай",
        doo: ["Скажи чётко: «Ich bin nicht einverstanden» — «Я не согласен». Молчание могут посчитать согласием.",
          "Знак аварийной остановки, аптечку и жилет достань сам и покажи. Заглянуть полиция может, но без подозрения ничего не обыскивает.",
          "Обыскивать можно при конкретном подозрении, например запахе каннабиса, по постановлению, в зоне запрета оружия в Штутгарте или в отдельных местах по закону о полиции. Тогда терпи, но не помогай.",
          "Обратись к свидетелям, запиши имена и номера машин, потом напиши протокол по памяти."],
        dont: ["Ничего не держи, не придерживай дверь, никого не отталкивай — это сопротивление.",
          "Не открывай сумки сам, ничего не объясняй, ничего не подписывай."]
      },
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
      ru: {
        title: "Телефон за рулём", sub: "Обвинение, показать, разблокировать", toneLabel: "Не разблокируй",
        doo: ["Дай свои данные и документы, об обвинении молчи. «Я только посмотрел в навигатор» — это тоже показания.",
          "Без подозрения и изъятия полиция не может смотреть твой телефон. PIN называть не нужно никогда.",
          "Приложить палец для разблокировки обязан только при законном изъятии или постановлении об обыске (BGH 2025) — тогда не сопротивляйся.",
          "Если не согласен с обвинением: не спорь на месте, запиши пассажиров и свидетелей, потом письменно через адвоката."],
        dont: ["Не выпускай телефон из рук, не листай его сам, не показывай список звонков.",
          "Не спорь о том, говорил ли ты по телефону."],
        note: "Телефон за рулём: 100 € и 1 балл, при опасности или ДТП больше. Есть за рулём прямо не запрещено, но штраф грозит, если при этом отвлекаешься."
      },
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
      ru: {
        title: "ДТП", sub: "Вмятина, пострадавшие, бегство с места", toneLabel: "Не уезжай",
        doo: ["Сразу остановись и обозначь место: аварийка, жилет, знак. При небольшом ущербе отъедь к обочине. Есть пострадавшие — помоги и звони 112, это обязанность.",
          "Обязательно только: сказать, что ты участник, и по требованию показать имя, адрес, права, техпаспорт и страховку.",
          "Жди, пока всё не запишут. Никто не пришёл — подожди разумное время, по ситуации 10–60 минут, потом сразу сообщи в полицию. Записки под дворником мало.",
          "Сфотографируй место, повреждения и номера, запиши свидетелей. Европротокол (Europäischer Unfallbericht) заполняй только правдиво."],
        dont: ["Не уходи и не уезжай, пока всё не записано, даже ненадолго в магазин. Бегство с места ДТП — преступление, часто после него отбирают права.",
          "Не признавай вину и не подписывай то, чего не понимаешь, даже в шоке.",
          "Ничего об алкоголе, наркотиках или лекарствах. Тесты и после ДТП добровольные."],
        note: "Если только помята машина, полицию вызывать не обязательно; если другая сторона хочет её вызвать — жди. При мелком ущербе на парковке добровольное сообщение в течение 24 часов может смягчить наказание или избавить от него."
      },
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
      ru: {
        title: "Проверка документов", sub: "Паспорт и личные данные", toneLabel: "Обязательно",
        doo: ["Назови свои данные: имя, дату и место рождения, адрес, гражданство, семейное положение, профессию.",
          "Покажи удостоверение, если оно с собой. Иностранцу — паспорт или вид на жительство, поэтому всегда носи их с собой.",
          "Спроси имя и участок полицейского, запомни номер патрульной машины."],
        dont: ["Ничего по делу — молчать твоё право.",
          "Не уходи, пока идёт проверка.",
          "Не оскорбляй, никаких жестов."],
        note: "Отказ назвать данные: штраф до 1 000 €. Удостоверение с собой, но не показал: до 3 000 €. Если личность не установить, полиция может задержать и отвезти в участок."
      },
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
      ru: {
        title: "Обыск", sub: "Человек, сумка, квартира", toneLabel: "Не соглашайся",
        doo: ["Возрази громко и спокойно — это важно потом.",
          "Квартира: в принципе только по постановлению судьи, иначе лишь при срочной опасности. Ты вправе присутствовать.",
          "Опись и справку дают только по требованию — так что требуй.",
          "Обыскивать тебя может только человек твоего пола или врач, кроме случаев острой опасности. Не выворачивай карманы сам: терпеть обязан, помогать — нет.",
          "Штутгарт: в зоне запрета оружия в центре по пятницам, субботам и перед праздниками с 18 до 8 часов могут обыскать без подозрения."],
        dont: ["Не держись, не вырывайся, не толкайся: сопротивление — до 3 лет, нападение — от 3 месяцев до 5 лет."]
      },
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
      ru: {
        title: "Контролёры в транспорте", sub: "Автобус, штадтбан, S\u2011Bahn, поезд", toneLabel: "Не полиция",
        doo: ["Контролёры — не полиция. Имя и адрес им назвать обязан, иначе вызовут полицию. Deutschlandticket действует только с документом с фото.",
          "Без действующего билета: 60 € (повышенный тариф). Личный проездной или Deutschlandticket просто забыл: покажи в течение недели — тогда 7 €.",
          "Удерживать тебя могут только до приезда полиции и только если личность неясна. Везти тебя до конечной они не имеют права.",
          "Сохраняй спокойствие, запиши время, линию и имя или номер контролёра. Возражения — письменно в транспортную компанию."],
        dont: ["Не убегай, не толкайся, не вырывайся — из этого быстро получается заявление в полицию.",
          "Не оскорбляй, даже в споре о билете: оскорбление — преступление.",
          "Не отдавай документ в руки и не оставляй его в залог."],
        note: "Сознательно ездить без билета — по-прежнему преступление. В поездах DB, S\u2011Bahn и на главном вокзале часто проверяет федеральная полиция (Bundespolizei)."
      },
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
      ru: {
        title: "Таможня на стройке", sub: "Документ, вопросы о работе", toneLabel: "Покажи документ",
        doo: ["Покажи документ в оригинале: удостоверение личности или паспорт, иностранцу — ещё и вид на жительство. На стройке он всегда должен быть с собой, иначе штраф до 5 000 €.",
          "В отличие от полиции, таможне ты обязан отвечать на вопросы о работе: работодатель, зарплата, рабочее время. За отказ грозит штраф.",
          "Молчать можешь, если ответ навредит тебе или родственникам — например, при работе вчёрную или без разрешения на работу.",
          "Не подписывай то, чего не понимаешь. Требуй переводчика."],
        dont: ["Не убегай и не мешай проверке.",
          "Не давай ложных сведений о работодателе, зарплате или времени работы — лучше молчи."],
        note: "На стройку и в служебные помещения таможня войти может, в жилую квартиру — даже у заказчика — без постановления, как правило, нет. Работодатель обязан письменно предупредить тебя, что документ нужно носить с собой."
      },
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
      ru: {
        title: "Телефон и видео", sub: "Удалить, изъять, разблокировать", toneLabel: "Не удаляй",
        doo: ["Ничего не удаляй. Особого права приказать удалить у полиции нет.",
          "Если полиция забирает телефон как доказательство: не держи его, скажи, что возражаешь, потребуй справку. После возражения она должна в течение 3 дней обратиться в суд за подтверждением.",
          "Заранее отключи биометрию, тогда нужен код. iPhone: держи боковую кнопку и кнопку громкости 2 секунды. Android: держи кнопку питания и нажми «Блокировка» (Lockdown); если её нет — включи в настройках экрана блокировки."],
        dont: ["Не называй PIN — ты не обязан.",
          "Но знай: палец могут приложить силой (BGH 2025, при обыске по постановлению судьи)."]
      },
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
      ru: {
        title: "Проверяют друга", sub: "Ты свидетель, кого-то забирают", toneLabel: "Снимать можно",
        doo: ["Держись на расстоянии, снимай видео без звука и сразу сохрани его.",
          "Запиши номер машины, время, имена и участок.",
          "Запись остаётся у тебя как у свободного свидетеля — не отдавай свой телефон тому, кого забирают.",
          "В тот же день каждый пишет свой протокол по памяти."],
        dont: ["Не вмешивайся, не комментируй, никого не трогай.",
          "Не записывай звук без согласия, ничего не публикуй."]
      },
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
      ru: {
        title: "Задержание или участок", sub: "Тебя забирают", toneLabel: "Твои права",
        doo: ["Сохраняй спокойствие, не сопротивляйся.",
          "Требуй адвоката и сообщения родным — это твоё право. Переводчик бесплатный.",
          "После задержания тебя должны доставить к судье не позднее следующего дня. Только для установления личности по StPO — максимум 12 часов."],
        dont: ["Ничего не подписывай, если не понимаешь.",
          "Не «объясняй коротко» — любое объяснение считается показаниями."]
      },
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
      ru: {
        title: "Хочу снимать", sub: "Видео, звук, согласие", toneLabel: "Без звука",
        doo: ["Видео без звука можно, пока ты не мешаешь — держи дистанцию.",
          "Звук — только с согласия всех, кто говорит. В начале записи попроси ещё раз подтвердить согласие.",
          "Сразу сохрани: отправь себе или в своё облако."],
        dont: ["Не записывай звук тайно — это спорно по § 201 StGB, телефон могут изъять.",
          "Не публикуй лица и не распространяй данные полицейских."]
      },
      kw: ["film", "video", "kamera", "aufnahm", "aufnehm", "ton", "einwillig", "сним", "снимать", "съем", "видео", "камер", "запис", "звук", "разговор", "~соглас"]
    }
  ],

  cats: [
    ["kontrolle", "Kontrolle", "Проверка"], ["verkehr", "Verkehr", "Дорога"], ["filmen", "Filmen & Handy", "Съёмка и телефон"], ["durchsuchung", "Durchsuchung", "Обыск"],
    ["festnahme", "Festnahme", "Задержание"], ["bahn", "Bus & Bahn", "Транспорт"], ["verbote", "Messer & Cannabis", "Ножи и каннабис"], ["fremd", "Ausländer", "Иностранцам"],
    ["arbeit", "Arbeit & Zoll", "Работа и таможня"], ["danach", "Danach", "После"]
  ],

  cards: [
    {
      id: "k-ausweis", cat: "kontrolle", title: "Muss ich meinen Ausweis dabeihaben?", tone: "warn", toneLabel: "Kommt drauf an",
      text: "Deutsche müssen einen Ausweis besitzen, aber nicht mitführen. Ausländer müssen Pass oder Aufenthaltstitel auf Verlangen der Polizei vorzeigen – praktisch heißt das: immer dabeihaben. Auf Baustellen gilt wegen Zollkontrollen eine Mitführungspflicht. Hast du den Ausweis dabei, musst du ihn zeigen.",
      law: "§ 1, § 32 PAuswG · § 47a, § 98 AufenthG · § 2a SchwarzArbG",
      ru: { title: "Обязан ли я носить с собой документ?", toneLabel: "Зависит",
        text: "Немцы обязаны иметь удостоверение личности, но не обязаны носить его с собой. Иностранцы по требованию полиции должны показать паспорт или вид на жительство — на практике это значит: всегда с собой. На стройке из-за проверок таможни документ обязателен. Если документ при тебе, его нужно показать." },
      kw: ["ausweis dabei", "mitführ", "pass", "aufenthalt", "baustell", "ausweis vergessen", "pass vergessen", "ohne ausweis", "паспорт", "носить", "с собой", "внж", "стройк", "~документ", "забыл паспорт", "паспорт дома", "без паспорт", "без документ", "аусвайс"]
    },
    {
      id: "k-fragen", cat: "kontrolle", title: "Muss ich Fragen beantworten?", tone: "right", toneLabel: "Nein",
      text: "Zur Sache darfst du schweigen – als Beschuldigter und als Zeuge. Zur Polizei musst du als Zeuge nur, wenn die Staatsanwaltschaft die Vorladung angeordnet hat. Die Personalien musst du trotzdem angeben.",
      say: [["Ich mache keine Angaben zur Sache. Ich möchte zuerst mit einem Anwalt sprechen.", "Я не даю показаний по делу. Сначала хочу поговорить с адвокатом."]],
      law: "§§ 55, 136, 163 Abs. 3 StPO",
      ru: { title: "Обязан ли я отвечать на вопросы?", toneLabel: "Нет",
        text: "По делу можешь молчать — и как подозреваемый, и как свидетель. Идти в полицию свидетелем нужно, только если вызов назначила прокуратура. Личные данные всё равно нужно назвать." },
      kw: ["frag", "antwort", "schweig", "aussag", "~zeug", "вопрос", "отвеч", "молч", "показан", "~свидетел"]
    },
    {
      id: "k-grund", cat: "kontrolle", title: "Darf die Polizei ohne Grund kontrollieren?", tone: "can", toneLabel: "Teilweise",
      text: "In BW in bestimmten Fällen ja: an „gefährlichen Orten“, bei Veranstaltungen, im öffentlichen Verkehr, an Kontrollstellen und in der Stuttgarter Waffenverbotszone. Menschen nach Hautfarbe oder Herkunft auszuwählen ist rechtswidrig. Nach dem Grund fragen darfst du immer.",
      say: [["Aus welchem Grund werde ich kontrolliert?", "По какой причине меня проверяют?"]],
      law: "§ 27 PolG BW · § 42c WaffG · OVG NRW 5 A 294/16",
      ru: { title: "Может ли полиция проверять без причины?", toneLabel: "Частично",
        text: "В BW в некоторых случаях да: в «опасных местах», на мероприятиях, в общественном транспорте, на контрольных пунктах и в зоне запрета оружия в Штутгарте. Выбирать людей по цвету кожи или происхождению незаконно. Спросить о причине можно всегда." },
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
      ru: { title: "Должен ли полицейский назвать причину или статью?", toneLabel: "Причину — да",
        text: "Статью — нет. При уголовной проверке он должен сказать, в каком преступлении тебя подозревают. При полицейской проверке можно потребовать письменное подтверждение меры — тогда её должны обосновать." },
      kw: ["paragraf", "paragraph", "rechtsgrundlag", "vorwurf", "vorgeworfen", "straftat", "sagt nicht warum", "grund nicht", "параграф", "стать", "основан", "подозрева", "в чем", "причин", "не говорит", "не объясня", "не называ"]
    },
    {
      id: "k-name", cat: "kontrolle", title: "Wie erfahre ich Name und Nummer des Polizisten?", tone: "right", toneLabel: "Fragen",
      text: "Eine Nummer tragen in BW nur geschlossene Einheiten der Bereitschaftspolizei. Nach Vorgabe des Innenministeriums zeigen Beamte auf Verlangen ihren Dienstausweis und nennen Name und Dienststelle – Ausnahmen gibt es. Notiere immer Kennzeichen und Uhrzeit.",
      say: [["Bitte zeigen Sie mir Ihren Dienstausweis und nennen Sie mir Ihren Namen und Ihre Dienststelle.", "Покажите удостоверение и назовите имя и участок."]],
      law: "§ 55 Abs. 5 LBG BW · Vorgabe IM BW zum Dienstausweis",
      ru: { title: "Как узнать имя и номер полицейского?", toneLabel: "Спроси",
        text: "Номер в BW носят только подразделения оперативной полиции (Bereitschaftspolizei). По указанию МВД земли полицейские по требованию показывают служебное удостоверение и называют имя и участок — бывают исключения. Всегда записывай номер машины и время." },
      kw: ["dienstnummer", "dienstausweis", "name des polizist", "nummer", "kennzeich", "имя полицейск", "номер", "жетон", "значок", "удостоверен", "кто он"]
    },
    {
      id: "k-filmen", cat: "filmen", title: "Darf ich die Polizei filmen?", tone: "right", toneLabel: "Video: ja",
      text: "Video ohne Ton im öffentlichen Raum: ja, wenn du nicht störst. Ton: umstritten – manche Gerichte sehen eine Straftat nach § 201 StGB, andere nicht, wenn Umstehende mithören können; der BGH hat nicht entschieden. Veröffentlichen nur mit unkenntlichen Gesichtern.",
      say: [["Ich filme ohne Ton zur Beweissicherung und behindere Sie nicht.", "Снимаю без звука для доказательств и вам не мешаю."]],
      law: "BVerfG 1 BvR 2501/13 · VG Berlin 1 K 334/23 · § 201 StGB · § 33 KUG",
      ru: { title: "Можно ли снимать полицию?", toneLabel: "Видео — да",
        text: "Видео без звука в общественном месте — да, если не мешаешь. Звук — спорно: одни суды видят в этом преступление по § 201 StGB, другие нет, если разговор слышат окружающие; Верховный суд (BGH) это не решил. Публиковать — только с неузнаваемыми лицами." },
      kw: ["film", "video", "kamera", "aufnahm", "aufnehm", "ton", "filmen erlaubt", "сним", "снимать", "съем", "видео", "камер", "запис", "звук", "разговор", "снимать полицию", "на телефон"]
    },
    {
      id: "k-tabu", cat: "kontrolle", title: "Was darf ich auf keinen Fall sagen oder tun?", tone: "no", toneLabel: "Tabu",
      text: "Beleidigung ist eine Straftat: Mittelfinger, „Schwein“, „Arschloch“. „Bulle“ allein ist nicht immer strafbar, Duzen auch nicht – wer aber nach der Bitte weiter duzt, riskiert es. Schubsen oder Losreißen ist Widerstand, ein tätlicher Angriff kostet 3 Monate bis 5 Jahre. Sag „Sie“, kurz und ruhig.",
      law: "§§ 185, 194 Abs. 3 StGB · §§ 113, 114 StGB · OLG Hamburg 1 ORs 13/25",
      ru: { title: "Что нельзя говорить и делать ни в коем случае?", toneLabel: "Табу",
        text: "Оскорбление — преступление: средний палец, слова вроде «Schwein» или «Arschloch». «Bulle» сам по себе не всегда наказуем, обращение на «ты» тоже — но если продолжаешь «тыкать» после просьбы, рискуешь. Толкнуть или вырваться — сопротивление, нападение — от 3 месяцев до 5 лет. Говори «Sie» (на «вы»), коротко и спокойно." },
      kw: ["beleidig", "schimpf", "mittelfing", "duz", "bulle", "widerstand", "оскорб", "мат", "средний палец", "ругат", "на ты", "тыка", "сопротивл", "нельзя говорить", "обозвал", "хамит", "хамств", "грубит", "грубо", "ответить", "огрызн"]
    },
    {
      id: "k-platzverweis", cat: "kontrolle", title: "Platzverweis – muss ich gehen?", tone: "must", toneLabel: "Erst gehen",
      text: "Die Polizei darf dich vorübergehend von einem Ort wegschicken, um eine Gefahr abzuwehren, und ein Aufenthaltsverbot bis 3 Monate aussprechen. Befolge den Platzverweis sofort, auch wenn du ihn für falsch hältst – sonst drohen Zwang und bis 5.000 € Bußgeld. Frag nach dem Grund und lass ihn später prüfen. Wer nur filmt, ohne zu stören, darf nicht allein deshalb weggeschickt werden.",
      say: [["Ich gehe. Welche konkrete Gefahr geht von mir aus? Ich lasse das später prüfen.", "Я ухожу. Какую конкретную опасность я представляю? Я это потом обжалую."]],
      law: "§§ 30, 133 PolG BW · BVerfG 1 BvR 2501/13",
      ru: { title: "Велят уйти (Platzverweis) — обязан?", toneLabel: "Сначала уйди",
        text: "Полиция может временно отправить тебя с места, чтобы предотвратить опасность, и запретить там появляться до 3 месяцев. Выполни требование сразу, даже если считаешь его неправильным, — иначе применят силу и штраф до 5 000 €. Спроси причину и потом обжалуй. Если ты просто снимаешь и не мешаешь, только за это прогнать нельзя." },
      kw: ["platzverweis", "wegschick", "weggeschickt", "aufenthaltsverbot", "verlassen sie", "прогнал", "прогоняют", "выгнал", "покинуть", "запрет находиться", "уходите", "велели уйти"]
    },
    {
      id: "k-wohnung", cat: "durchsuchung", title: "Polizei an der Wohnungstür", tone: "right", toneLabel: "Beschluss nötig",
      text: "Grundsätzlich nur mit richterlichem Beschluss, sonst nur bei Gefahr im Verzug. Du darfst anwesend sein. Nachts von 21 bis 6 Uhr nur in Ausnahmefällen. Ein Verzeichnis der mitgenommenen Sachen gibt es nur auf Verlangen.",
      say: [["Ich möchte den Durchsuchungsbeschluss sehen.", "Покажите постановление об обыске."]],
      law: "Art. 13 GG · §§ 105–107 StPO · § 36 PolG BW",
      ru: { title: "Полиция у двери квартиры", toneLabel: "Нужен ордер",
        text: "В принципе только по постановлению судьи, иначе лишь при срочной опасности. Ты вправе присутствовать. Ночью с 21 до 6 часов — только в исключительных случаях. Опись изъятого дают только по требованию." },
      kw: ["wohnung", "tür", "an der tür", "beschluss", "haus", "durchsuchungsbeschluss", "nachts", "квартир", "домой", "в дом", "двер", "ордер", "постановлен", "стучат", "пришли ко мне"]
    },
    {
      id: "k-bodycam", cat: "danach", title: "Bodycam-Aufnahme sichern", tone: "warn", toneLabel: "4 Wochen",
      text: "Bodycam-Aufnahmen werden spätestens nach 4 Wochen gelöscht, außer sie werden als Beweis gebraucht. Deshalb sofort schriftlich beim Polizeipräsidium Stuttgart die Sicherung beantragen – die Vorlage findest du unter „Danach“.",
      law: "§ 44 Abs. 5–11, § 75 Abs. 5 PolG BW",
      ru: { title: "Сохранить запись нательной камеры", toneLabel: "4 недели",
        text: "Записи нательных камер полиции удаляют не позже чем через 4 недели, если они не нужны как доказательство. Поэтому сразу письменно попроси полицейское управление Штутгарта сохранить запись — шаблон письма во вкладке «После»." },
      kw: ["bodycam", "körperkamera", "kamera der polizei", "sichern", "бодикам", "камера полиц", "нательн", "сохран"]
    },
    {
      id: "k-beschwerde", cat: "danach", title: "Wo kann ich mich beschweren?", tone: "warn", toneLabel: "3 Monate",
      text: "Kostenlos: die Bürgerbeauftragte des Landes BW, zugleich Polizeibeauftragte – innerhalb von 3 Monaten, nicht parallel zu einem Straf- oder Gerichtsverfahren; bei der Bundespolizei der Polizeibeauftragte des Bundes, 6 Monate. Dienstaufsichtsbeschwerde schriftlich an das Polizeipräsidium. Eine Strafanzeige gegen Beamte ist ein eigener Weg. Oft folgt eine Gegenanzeige, etwa wegen Beleidigung oder falscher Verdächtigung – deshalb erst mit einem Anwalt sprechen.",
      law: "buergerbeauftragte-bw.de · PP Stuttgart, Hahnemannstraße 1 · § 340 StGB · § 164 StGB · PolBeauftrG",
      ru: { title: "Куда жаловаться?", toneLabel: "3 месяца",
        text: "Бесплатно: уполномоченная по делам граждан BW, она же уполномоченная по полиции, — в течение 3 месяцев и не параллельно с уголовным делом или судом; на федеральную полицию — уполномоченному по полиции при Бундестаге, 6 месяцев. Служебная жалоба — письменно в полицейское управление. Заявление на полицейских — отдельный путь. Часто в ответ приходит встречное заявление, например об оскорблении или ложном доносе, — поэтому сначала поговори с адвокатом." },
      kw: ["beschwer", "anzeig", "bürgerbeauftrag", "melden", "жалоб", "пожалов", "заявлен", "куда писать"]
    },
    {
      id: "k-geld", cat: "danach", title: "Bekomme ich Schadensersatz?", tone: "can", toneLabel: "Wenig",
      text: "Nicht wie in den USA. Beispiele: 3.000 € für eine unverhältnismäßige Zwangsmaßnahme (LG Berlin II, 2025), 75 € pro Tag bei ungerechtfertigter Freiheitsentziehung. Realistisches Ziel: gerichtlich feststellen lassen, dass die Maßnahme rechtswidrig war. Kostenrisiko bei einer Niederlage grob 1.600 € – eine Schätzung.",
      law: "§ 839 BGB · Art. 34 GG · § 7 StrEG · LG Berlin II 26 O 17/23",
      ru: { title: "Получу ли я компенсацию?", toneLabel: "Немного",
        text: "Не как в США. Примеры: 3 000 € за несоразмерное применение силы (LG Berlin II, 2025), 75 € за день незаконного лишения свободы. Реальная цель — добиться в суде признания, что мера была незаконной. Риск расходов при проигрыше — примерно 1 600 €, это оценка." },
      kw: ["schadensersatz", "schmerzensgeld", "entschädig", "klag", "geld", "деньг", "компенсац", "отсуд", "иск", "суд"]
    },
    {
      id: "k-post", cat: "danach", title: "Post von Polizei oder Bußgeldstelle", tone: "warn", toneLabel: "Fristen",
      text: "Anhörungsbogen: Pflicht sind nur deine Personalien, zur Sache darfst du schweigen. Zeugenfragebogen an den Halter: Angehörige musst du nicht als Fahrer nennen, dann droht aber ein Fahrtenbuch. Einen falschen Fahrer zu nennen kostet bis 30.000 €. Gegen einen Bußgeldbescheid: Einspruch schriftlich innerhalb von 2 Wochen ab Zustellung. Verkehrsverstöße verjähren seit 01.07.2026 grundsätzlich nach 6 Monaten – ein Anhörungsbogen unterbricht die Frist.",
      law: "§§ 55, 67, 111 OWiG · § 52 StPO · § 31a StVZO · §§ 4c, 23, 26 StVG",
      ru: { title: "Письмо из полиции или штрафного ведомства", toneLabel: "Сроки",
        text: "Anhörungsbogen (ты под подозрением): обязательно только указать личные данные, по делу можешь молчать. Zeugenfragebogen владельцу машины: родственников как водителей называть не обязан, но тогда могут обязать вести журнал поездок (Fahrtenbuch). Назвать ложного водителя — штраф до 30 000 €. Против штрафного решения (Bußgeldbescheid) — письменное возражение в течение 2 недель со дня вручения. С 01.07.2026 нарушения ПДД, как правило, погашаются давностью через 6 месяцев; Anhörungsbogen прерывает срок." },
      kw: ["anhoerung", "anhoerungsbogen", "zeugenfragebogen", "bussgeldbescheid", "bussgeld", "brief", "post von", "einspruch", "fahrer benennen", "fahrtenbuch", "blitzer", "geblitzt", "verjaehr", "письмо", "анкет", "заполнить", "по почте", "fragebogen", "formular", "ausfuellen", "анхерунг", "бусгельд", "пришло письмо", "пришел штраф", "обжалова", "кто был за рул", "фото с камеры", "блитцер", "камера скорост", "опросный лист"]
    },
    {
      id: "k-vorladung", cat: "danach", title: "Vorladung von der Polizei", tone: "right", toneLabel: "Oft keine Pflicht",
      text: "Als Beschuldigter musst du einer Vorladung der Polizei nicht folgen – sag ab oder lass deinen Anwalt absagen und Akteneinsicht beantragen. Als Zeuge musst du nur hin, wenn die Staatsanwaltschaft die Ladung angeordnet hat. Zu Staatsanwaltschaft oder Gericht musst du gehen, als Beschuldigter darfst du dort schweigen. Angehörige des Beschuldigten dürfen die Aussage verweigern.",
      say: [["Ich mache von meinem Schweigerecht Gebrauch. Mein Anwalt meldet sich bei Ihnen.", "Я пользуюсь правом не давать показаний. С вами свяжется мой адвокат."]],
      law: "§§ 52, 133, 136, 161a, 163, 163a StPO",
      ru: { title: "Вызов в полицию (Vorladung)", toneLabel: "Часто не обязан",
        text: "Если тебя подозревают, по вызову полиции идти не обязан — откажись или поручи это адвокату и попроси ознакомиться с делом. Свидетелем идти нужно, только если вызов назначила прокуратура. В прокуратуру или суд являться обязан, но как подозреваемый там можешь молчать. Родственники подозреваемого могут отказаться от показаний." },
      kw: ["vorladung", "vorgeladen", "ladung", "beschuldigter", "als zeuge", "vernehm", "повестк", "вызывают в полиц", "вызвали в полиц", "допрос", "свидетелем", "обвиняем", "подозреваем", "форладунг"]
    },
    {
      id: "k-messer", cat: "verbote", title: "Messer in Stuttgart", tone: "no", toneLabel: "Verboten",
      text: "Waffenverbotszone Innenstadt, unter anderem Hauptbahnhof, Schlossgarten und Rathaus: freitags, samstags und vor Feiertagen von 18 bis 8 Uhr sind alle Messer verboten, Kontrollen ohne Verdacht, bis 10.000 €. In Bussen und Bahnen in BW sind seit 2025 alle Messer verboten, auch Taschen- und Cuttermesser. Ausnahme: Werkzeug für den Beruf, verschlossen verpackt und nicht griffbereit – etwa im geschlossenen Werkzeugkoffer. Bei einer Kontrolle vorher sagen, wo das Messer steckt.",
      law: "Verordnung Waffenverbotszone Stuttgart · BW-Verordnung Messerverbot im ÖPNV 2025 · §§ 42, 42a, 42c WaffG",
      ru: { title: "Ножи в Штутгарте", toneLabel: "Запрещено",
        text: "Зона запрета оружия в центре, в том числе главный вокзал, Шлоссгартен и ратуша: по пятницам, субботам и перед праздниками с 18 до 8 часов запрещены любые ножи, проверки без подозрения, штраф до 10 000 €. В автобусах и поездах BW с 2025 года запрещены все ножи, включая карманные и строительные. Исключение: рабочий инструмент в закрытой упаковке, не под рукой — например, в закрытом ящике для инструментов. При проверке сразу скажи, где лежит нож." },
      kw: ["messer", "waffe", "cutter", "werkzeug", "verbotszone", "stadtbahn", "~bus", "!нож", "оруж", "зона", "~автобус", "~штутгарт", "карманный нож", "нож в карман", "вокзал", "messer im rucksack", "messer dabei", "hauptbahnhof"]
    },
    {
      id: "k-dauer", cat: "festnahme", title: "Wie lange darf mich die Polizei festhalten?", tone: "right", toneLabel: "Grenzen",
      text: "Zur Identitätsfeststellung nach StPO höchstens 12 Stunden. Polizeilicher Gewahrsam in BW ohne Richter nur bis zum Ende des nächsten Tages, mit Richter höchstens 2 Wochen. Nach einer Festnahme spätestens am Tag danach zum Richter.",
      law: "§ 163c StPO · § 33 PolG BW · Art. 104 GG · § 128 StPO",
      ru: { title: "Сколько меня могут держать?", toneLabel: "Пределы",
        text: "Для установления личности по StPO — максимум 12 часов. Полицейское задержание в BW без судьи — только до конца следующего дня, с решением судьи — максимум 2 недели. После задержания по уголовному делу — к судье не позднее следующего дня." },
      kw: ["wie lange", "festhalt", "stunden", "gewahrsam", "сколько времени", "сколько час", "сколько держ", "сколько могут", "держать", "часов", "~задерж"]
    },
    {
      id: "k-ed", cat: "festnahme", title: "Fotos und Fingerabdrücke", tone: "warn", toneLabel: "Dulden",
      text: "Als Beschuldigter musst du Fotos und Fingerabdrücke dulden, notfalls mit Zwang; nur zur Identitätsfeststellung, wenn es anders nicht geht. Sag, dass du nicht einverstanden bist, und lass dir die Rechtsgrundlage schriftlich geben – aber wehr dich nicht: Widerstand ist eine Straftat und kann dem Aufenthalt schaden. Gegen die Speicherung kannst du Widerspruch einlegen und später die Löschung beantragen.",
      say: [["Ich bin nicht einverstanden, leiste aber keinen Widerstand. Auf welcher Rechtsgrundlage? Bitte schriftlich.", "Я не согласен, но сопротивляться не буду. На каком основании? Прошу письменно."]],
      law: "§§ 81b, 163b StPO · §§ 41, 91, 92 PolG BW · § 113 StGB · § 54 AufenthG",
      ru: { title: "Фото и отпечатки пальцев", toneLabel: "Терпеть",
        text: "Если тебя подозревают, фото и отпечатки придётся терпеть, при необходимости их снимут силой; только для установления личности — если иначе нельзя. Скажи, что не согласен, и попроси письменно основание — но не сопротивляйся: сопротивление — преступление и может навредить виду на жительство. Против хранения данных можно подать возражение, а позже потребовать удаления." },
      kw: ["fingerabdr", "fotos", "foto machen", "erkennungsdienst", "ed behandlung", "отпечатки пальцев", "снять отпечатки", "сфотографир", "фотографир", "дактилоскоп"]
    },
    {
      id: "k-minderjaehrig", cat: "festnahme", title: "Unter 18: Was gilt für Jugendliche?", tone: "right", toneLabel: "Eltern dabei",
      text: "Jugendliche von 14 bis 17 dürfen schweigen wie Erwachsene. Die Polizei muss die Eltern so bald wie möglich informieren. Bei der Vernehmung dürfen Eltern oder eine andere Vertrauensperson dabei sein, wenn das dem Jugendlichen dient. In schweren Fällen bekommt er vor der Vernehmung einen Pflichtverteidiger. Auf die Eltern warten muss die Polizei nicht – deshalb nichts zur Sache sagen.",
      say: [["Ich bin minderjährig. Ich will meine Eltern oder eine Vertrauensperson dabeihaben und einen Anwalt. Bis dahin sage ich nichts.", "Я несовершеннолетний. Хочу, чтобы были родители или доверенное лицо и адвокат. До этого ничего не скажу."]],
      law: "§§ 67, 67a, 68a, 70a–70c JGG",
      ru: { title: "До 18 лет: что действует для подростков?", toneLabel: "Родители рядом",
        text: "Подростки 14–17 лет могут молчать, как взрослые. Полиция должна как можно скорее сообщить родителям. На допросе могут присутствовать родители или другое доверенное лицо, если это в интересах подростка. В тяжёлых случаях до допроса назначают защитника. Ждать родителей полиция не обязана — поэтому ничего не говори по делу." },
      kw: ["minderjaehrig", "jugendlich", "unter 18", "eltern", "mein sohn", "meine tochter", "sohn", "tochter", "~14", "~15", "~16", "~17", "schueler", "несовершеннолет", "подрост", "ребен", "сына", "сын", "дочь", "дочк", "родители", "школьник", "младше 18"]
    },
    {
      id: "k-auslfs", cat: "verkehr", title: "Ausländischer Führerschein – wie lange gilt er?", tone: "warn", toneLabel: "6 Monate",
      text: "Führerscheine aus Nicht-EU-Staaten wie Russland oder Kasachstan gelten nur 6 Monate, nachdem du in Deutschland deinen Wohnsitz genommen hast, meist mit Übersetzung oder Internationalem Führerschein. Danach ermittelt die Polizei wegen Fahrens ohne Fahrerlaubnis, auch wenn er zu Hause gilt. Gerichte urteilen nicht einheitlich, eine Verurteilung kann aber dem Aufenthalt schaden: keine Angaben, Anwalt. Neu seit 18.08.2026: In einem anderen EU-Staat umgetauschte Führerscheine gelten auch hier.",
      law: "§ 29 FeV · § 21 StVG · FeV-Änderung vom 18.08.2026",
      ru: { title: "Иностранные права — сколько они действуют?", toneLabel: "6 месяцев",
        text: "Права стран вне ЕС, например России или Казахстана, действуют только 6 месяцев после того, как ты поселился в Германии, обычно с переводом или международными правами. Потом полиция возбуждает дело за езду без прав, даже если дома они действуют. Суды решают по-разному, но приговор может навредить виду на жительство: ничего не объясняй, иди к адвокату. Новое с 18.08.2026: права, обменянные в другой стране ЕС, действуют и здесь." },
      kw: ["auslaendischer fuehrerschein", "umschreib", "6 monat", "sechs monat", "russischer fuehrerschein", "kasach", "drittstaat", "wie lange gilt", "seit einem jahr", "~monat", "~jahr", "иностранные права", "обмен прав", "российские права", "казахстанск", "казахск", "полгода", "6 месяц", "шесть месяц", "сколько действуют", "~месяц", "~год", "поменять права"]
    },
    {
      id: "k-ukrainefs", cat: "verkehr", title: "Ukrainischer Führerschein", tone: "right", toneLabel: "Gilt mit § 24",
      text: "Mit Schutzstatus nach § 24 gilt der ukrainische Führerschein ohne Übersetzung, solange der Schutz gilt – derzeit bis 04.03.2027. Viele Beamte kennen die Regel nicht: Aufenthaltstitel und EU-Verordnung 2022/1280 ausgedruckt dabeihaben. Gilt ein alter Führerschein als gefälscht: Registerauszug des ukrainischen Innenministeriums mit Übersetzung über einen Anwalt vorlegen. Seit 18.08.2026 ohne Prüfung in einen deutschen umschreibbar – am besten vor einem Wechsel des Aufenthaltstitels, danach gelten nur 6 Monate.",
      say: [["Ich habe Schutzstatus nach § 24. Mein Führerschein gilt nach der EU-Verordnung 2022/1280.", "У меня статус защиты по § 24. Мои права действуют по регламенту ЕС 2022/1280."]],
      law: "EU-VO 2022/1280 · § 24 AufenthG · § 29 FeV · Anlage 11 FeV",
      ru: { title: "Украинские права", toneLabel: "Действуют с § 24",
        text: "Со статусом защиты по § 24 украинские права действуют без перевода, пока действует защита — сейчас до 04.03.2027. Многие полицейские этого не знают: держи при себе вид на жительство и распечатку регламента ЕС 2022/1280. Если старые права считают поддельными: выписка из реестра МВД Украины с переводом, через адвоката. С 18.08.2026 их можно обменять на немецкие без экзаменов — лучше до смены вида на жительство, после неё остаётся только 6 месяцев." },
      kw: ["ukrain", "schutzstatus", "2022 1280", "gefaelscht", "faelsch", "alter fuehrerschein", "украин", "беженц", "статус защит", "украинские права", "поддел", "фальшив", "старые права", "старого образц"]
    },
    {
      id: "k-fsweg", cat: "verkehr", title: "Die Polizei nimmt meinen Führerschein mit", tone: "right", toneLabel: "Widersprechen",
      text: "Mitnehmen darf die Polizei den Führerschein nur bei Verdacht auf eine Straftat, für die er entzogen werden kann – etwa Alkohol oder Drogen am Steuer oder Unfallflucht. Sag, dass du widersprichst, und verlange eine Bescheinigung. Dann soll die Polizei innerhalb von 3 Tagen die Bestätigung durch ein Gericht beantragen. Bis dahin nicht selbst fahren – das wäre eine eigene Straftat.",
      say: [["Ich gebe den Führerschein nicht freiwillig heraus und widerspreche der Beschlagnahme. Bitte geben Sie mir eine Bescheinigung.", "Права добровольно не отдаю и возражаю против изъятия. Дайте, пожалуйста, документ об этом."]],
      law: "§§ 94, 98, 111a StPO · § 69 StGB · § 21 Abs. 2 StVG",
      ru: { title: "Полиция забирает мои права", toneLabel: "Возражай",
        text: "Забрать права полиция может только при подозрении в преступлении, за которое их могут лишить, — например, алкоголь или наркотики за рулём или бегство с места ДТП. Скажи, что возражаешь, и потребуй справку. Тогда полиция должна в течение 3 дней обратиться в суд. До этого сам за руль не садись — это отдельное преступление." },
      kw: ["fuehrerschein weg", "fuehrerschein abgenommen", "fuehrerschein mitgenommen", "fuehrerschein beschlagnahm", "fuehrerschein eingezogen", "abgenomm", "eingezog", "забрали права", "изъяли права", "отобрали права", "лишили прав", "забрала права", "забрали фюрер"]
    },
    {
      id: "k-nichteinverstanden", cat: "durchsuchung", title: "Durchsuchung: „Ich bin nicht einverstanden“ laut sagen", tone: "right", toneLabel: "Laut sagen",
      text: "Schweigen kann als Einwilligung gelten. Sag deshalb deutlich: „Ich bin nicht einverstanden.“ Hat die Polizei eine Befugnis – Verdacht, Beschluss, Waffenverbotszone –, durchsucht sie trotzdem. Dann dulden: nichts festhalten, nicht mithelfen. Dein Widerspruch zählt später. Protokoll und Liste der mitgenommenen Sachen gibt es nur, wenn du sie verlangst.",
      say: [["Ich bin mit der Durchsuchung nicht einverstanden. Bitte vermerken Sie das.", "Я не согласен на обыск. Запишите это, пожалуйста."]],
      law: "§§ 102, 105, 107 StPO · §§ 34, 35 PolG BW · § 113 StGB",
      ru: { title: "Обыск: громко сказать «Ich bin nicht einverstanden»", toneLabel: "Скажи громко",
        text: "Молчание могут посчитать согласием. Поэтому скажи чётко: «Ich bin nicht einverstanden» — «Я не согласен». Если у полиции есть основание — подозрение, постановление, зона запрета оружия, — обыскивать всё равно будут. Тогда терпи: ничего не держи, не помогай. Твоё возражение пригодится потом. Протокол и опись изъятого дают, только если потребуешь." },
      kw: ["einverstanden", "zustimm", "einwillig", "widersprech", "nein sagen", "не согласен", "соглаш", "согласие", "возраж", "сказать нет"]
    },
    {
      id: "k-urintest", cat: "verkehr", title: "Urintest verlangt – und die Drohung mit der Blutprobe", tone: "right", toneLabel: "Freiwillig",
      text: "Viele berichten: Wer den Urintest ablehnt, dem wird mit Wache, Blutprobe und Kosten gedroht. Rechtlich gilt: Der Urintest ist freiwillig, die Ablehnung allein ist kein Verdacht. Eine Blutprobe braucht einen konkreten Verdacht – liegt der vor, kommt sie ohnehin. Urintests zeigen Cannabis noch Tage nach dem Konsum. Ruhig bleiben, ablehnen, nicht wehren.",
      say: [["Einem freiwilligen Urintest stimme ich nicht zu.", "На добровольный тест мочи не соглашаюсь."]],
      law: "§ 81a StPO · § 24a StVG",
      ru: { title: "Требуют тест мочи и грозят анализом крови", toneLabel: "Добровольно",
        text: "Многие рассказывают: кто отказывается от теста мочи, тому угрожают участком, анализом крови и расходами. По закону: тест мочи добровольный, сам отказ — не подозрение. Для анализа крови нужно конкретное подозрение — если оно есть, кровь возьмут в любом случае. Тест мочи показывает каннабис ещё несколько дней после употребления. Сохраняй спокойствие, откажись, не сопротивляйся." },
      kw: ["urintest", "urin", "pinkeln", "becher", "drohung", "droh", "blutprob", "blut abnehm", "verweiger", "zuschau", "тест мочи", "моч", "пописать", "писать", "стаканчик", "баночк", "угрожа", "отказаться от теста", "откаж", "возьмут кровь", "смотрит"]
    },
    {
      id: "k-cannabis", cat: "verbote", title: "Cannabis dabei oder gestern gekifft?", tone: "warn", toneLabel: "25 g · 3,5 ng",
      text: "Ab 18 erlaubt: unterwegs bis 25 g, zu Hause bis 50 g und 3 Pflanzen. Nicht kiffen neben Minderjährigen, nicht in Sichtweite von Schulen, Spielplätzen und Sportstätten (bis 100 m) und in Fußgängerzonen nicht von 7 bis 20 Uhr. Am Steuer gilt ein THC-Grenzwert von 3,5 ng/ml im Blut – auch Konsum am Vortag kann reichen. Unter 21 und in der Probezeit: gar kein Cannabis am Steuer.",
      law: "§§ 3, 5 KCanG · §§ 24a, 24c StVG",
      ru: { title: "Каннабис с собой или курил вчера?", toneLabel: "25 г · 3,5 нг",
        text: "С 18 лет можно: с собой до 25 г, дома до 50 г и 3 растения. Нельзя курить рядом с несовершеннолетними, в пределах видимости школ, детских и спортивных площадок (до 100 м) и в пешеходных зонах с 7 до 20 часов. За рулём предел THC — 3,5 нг/мл в крови, может хватить и вчерашнего употребления. До 21 года и на испытательном сроке — за рулём никакого каннабиса." },
      kw: ["cannabis", "kiff", "gras", "joint", "marihuana", "weed", "wie viel gramm", "gras dabei", "gestern gekifft", "каннабис", "травы", "траву", "сколько трав", "травы можно", "косяк", "марихуан", "покурил", "курил", "курил вчера", "грамм"]
    },
    {
      id: "k-notdienst", cat: "festnahme", title: "Sofort einen Anwalt – Notdienst Stuttgart", tone: "right", toneLabel: "Rund um die Uhr",
      text: "Anwaltlicher Notdienst für Strafsachen in Stuttgart, rund um die Uhr: 0711 998 899 66 (AnwaltVerein Stuttgart). Die Polizei muss dir helfen, einen Anwalt zu erreichen. Einen Pflichtverteidiger kannst du beantragen; spätestens vor dem Haftrichter bekommst du einen. Wirst du verurteilt, trägst du die Kosten meist selbst.",
      say: [["Ich will sofort einen Anwalt. Bitte rufen Sie den Anwaltlichen Notdienst an: 0711 998 899 66.", "Я хочу сразу адвоката. Позвоните, пожалуйста, в дежурную адвокатскую службу: 0711 998 899 66."]],
      law: "§§ 136, 140, 141 StPO · anwaltverein-stuttgart.de",
      ru: { title: "Срочно адвокат — дежурная служба Штутгарта", toneLabel: "Круглосуточно",
        text: "Дежурные адвокаты по уголовным делам в Штутгарте, круглосуточно: 0711 998 899 66 (AnwaltVerein Stuttgart). Полиция обязана помочь тебе связаться с адвокатом. Можно попросить назначить защитника; самое позднее перед судьёй по аресту его назначат. Если тебя осудят, расходы обычно платишь сам." },
      kw: ["notdienst", "anwalt nummer", "anwalt telefon", "verteidiger", "pflichtverteidiger", "anwalt sofort", "дежурн", "номер адвокат", "дежурного адвокат", "телефон адвокат", "защитник", "позвонить адвокат"]
    },
    {
      id: "k-essen", cat: "verkehr", title: "Essen, Trinken, Rauchen am Steuer", tone: "can", toneLabel: "Nicht verboten",
      text: "Essen, Trinken und Rauchen am Steuer sind nicht ausdrücklich verboten. Wer dabei aber unaufmerksam fährt oder andere gefährdet, riskiert ein Bußgeld und bei einem Unfall Mitschuld. Ein Handy darfst du während der Fahrt nicht in die Hand nehmen: 100 € und 1 Punkt.",
      law: "§ 1 Abs. 2 StVO · § 23 Abs. 1a StVO",
      ru: { title: "Есть, пить, курить за рулём", toneLabel: "Не запрещено",
        text: "Есть, пить и курить за рулём прямо не запрещено. Но если при этом отвлекаешься или создаёшь опасность — штраф, а при ДТП частичная вина. Брать телефон в руку во время езды нельзя: 100 € и 1 балл." },
      kw: ["essen", "trinken", "rauchen", "kaffee", "burger", "doener", "gegessen", "есть за рул", "можно ли есть", "ел за рул", "еда", "пить за рул", "курить за рул", "кофе", "бургер", "шаурм", "бутерброд", "перекус"]
    },
    {
      id: "k-unfallflucht", cat: "verkehr", title: "Nach dem Unfall: Wie lange warten?", tone: "no", toneLabel: "Nicht wegfahren",
      text: "Wegfahren, bevor deine Daten aufgenommen sind, ist Unfallflucht: bis 3 Jahre, oft ist der Führerschein weg. Eine feste Wartezeit gibt es nicht – Gerichte verlangen je nach Lage etwa 10 bis 60 Minuten, bei Verletzten mehr. Ein Zettel am Auto reicht nicht; kommt niemand, sofort die Polizei informieren. Bei kleinem Parkschaden kann eine freiwillige Meldung binnen 24 Stunden die Strafe mildern oder ersparen. Zum Hergang darfst du schweigen.",
      law: "§ 142 StGB · § 34 StVO",
      ru: { title: "После ДТП: сколько ждать?", toneLabel: "Не уезжай",
        text: "Уехать до того, как записали твои данные, — бегство с места ДТП: до 3 лет, часто лишают прав. Точного времени ожидания нет — суды требуют по ситуации около 10–60 минут, при пострадавших дольше. Записки под дворником мало; если никто не пришёл, сразу сообщи в полицию. При мелком ущербе на парковке добровольное сообщение в течение 24 часов может смягчить наказание или избавить от него. Об обстоятельствах можешь молчать." },
      kw: ["unfallflucht", "fahrerflucht", "wie lange warten", "zettel", "parkschaden", "weggefahren", "gestreift", "ausparken", "скрылся", "уехал с места", "уехать", "сколько ждать", "оставил записку", "поцарапал", "царапин", "на парковке"]
    },
    {
      id: "k-ticket", cat: "bahn", title: "Ohne gültiges Ticket erwischt", tone: "warn", toneLabel: "60 €",
      text: "Das erhöhte Beförderungsentgelt beträgt 60 €. Hast du ein persönliches Abo oder Deutschlandticket nur vergessen, zeig es innerhalb einer Woche vor – dann 7 €. Kontrolleure dürfen Name und Anschrift verlangen, dich aber nicht durchsuchen. Absichtlich ohne Ticket fahren bleibt eine Straftat – der Bundestag hat die Abschaffung im April 2026 abgelehnt. Kommt ein Strafbefehl: Einspruch innerhalb von 2 Wochen, vorher Anwalt fragen.",
      law: "§ 9 VVS-Beförderungsbedingungen · § 9 BefBedV · § 265a StGB · § 410 StPO",
      ru: { title: "Поймали без билета", toneLabel: "60 €",
        text: "Повышенный тариф — 60 €. Если личный проездной или Deutschlandticket просто забыл, покажи его в течение недели — тогда 7 €. Контролёры могут потребовать имя и адрес, но обыскивать не имеют права. Сознательно ездить без билета — по-прежнему преступление: в апреле 2026 Бундестаг отказался это отменить. Пришёл Strafbefehl — возражение в течение 2 недель, сначала спроси адвоката." },
      kw: ["ohne ticket", "schwarzfahr", "erhoehtes befoerderungsentgelt", "60 euro", "abo vergessen", "ticket vergessen", "без билета", "зайцем", "забыл проездной", "штраф 60", "проездной дома", "забыл билет"]
    },
    {
      id: "k-bundespolizei", cat: "bahn", title: "Bundespolizei im Zug und am Bahnhof", tone: "can", toneLabel: "Meist nur ansehen",
      text: "In DB-Zügen, S-Bahnen und am Hauptbahnhof kontrolliert oft die Bundespolizei. Sie darf dich anhalten, befragen, Ausweispapiere verlangen und deine Sachen ansehen. Pflicht sind nur deine Personalien und mitgeführte Ausweise. In Fernzügen und Bahnhofsgebäuden mit Messerverbot darf sie auch ohne Verdacht durchsuchen. Menschen nach Hautfarbe auszuwählen ist verboten. Beschwerde beim Polizeibeauftragten des Bundes innerhalb von 6 Monaten.",
      say: [["Hier sind meine Personalien. Zu weiteren Fragen sage ich nichts, und einer Durchsuchung stimme ich nicht zu.", "Вот мои данные. На другие вопросы отвечать не буду, на обыск не соглашаюсь."]],
      law: "§§ 3, 22 BPolG · §§ 42b, 42c WaffG · Art. 3 Abs. 3 GG · PolBeauftrG",
      ru: { title: "Федеральная полиция в поезде и на вокзале", toneLabel: "Только осмотр",
        text: "В поездах DB, S\u2011Bahn и на главном вокзале часто проверяет федеральная полиция (Bundespolizei). Она может остановить, задать вопросы, потребовать документы и осмотреть твои вещи. Обязательно только назвать данные и отдать документы, которые при тебе. В поездах дальнего следования и зданиях вокзалов с запретом ножей может обыскивать и без подозрения. Выбирать людей по цвету кожи запрещено. Жалоба — уполномоченному по полиции при Бундестаге в течение 6 месяцев." },
      kw: ["bundespolizei", "im zug", "zugkontrolle", "db", "grenzkontrolle", "федеральная полиц", "бундесполиц", "в поезде", "на вокзале", "в электричке"]
    },
    {
      id: "k-zoll", cat: "arbeit", title: "Zoll-Kontrolle: Hier musst du Fragen beantworten", tone: "warn", toneLabel: "Auskunftspflicht",
      text: "Die Finanzkontrolle Schwarzarbeit des Zolls darf Baustellen und Geschäftsräume betreten, Ausweise prüfen und dich zu deiner Arbeit befragen. Anders als bei der Polizei musst du antworten – Arbeitgeber, Lohn, Arbeitszeit –, sonst droht ein Bußgeld. Schweigen darfst du nur, wenn du dich oder Angehörige belasten würdest. Den Ausweis musst du auf dem Bau immer dabeihaben: bis 5.000 €. Eine bewohnte Wohnung darf der Zoll ohne Beschluss grundsätzlich nicht betreten.",
      law: "§§ 2a, 3, 5, 8 SchwarzArbG · Art. 13 GG",
      ru: { title: "Проверка таможни: здесь нужно отвечать", toneLabel: "Обязан отвечать",
        text: "Отдел таможни по борьбе с нелегальной работой (FKS) может войти на стройку и в служебные помещения, проверить документы и расспросить о работе. В отличие от полиции, отвечать обязан — работодатель, зарплата, рабочее время, — иначе штраф. Молчать можно, только если ответ навредит тебе или родственникам. На стройке документ всегда с собой: штраф до 5 000 €. В жилую квартиру без постановления таможня, как правило, войти не может." },
      kw: ["!zoll", "!fks", "finanzkontrolle", "schwarzarbeit", "arbeitserlaubnis", "auskunftspflicht", "таможн", "цоль", "на стройке", "по черному", "разрешение на работ", "работодател"]
    },
    {
      id: "k-dolmetscher", cat: "fremd", title: "Ich verstehe kein Deutsch", tone: "right", toneLabel: "Kostenlos",
      text: "Wirst du als Beschuldigter befragt, steht dir ein Dolmetscher zu – kostenlos, auch bei der Polizei. Sag das sofort und äußere dich bis dahin nicht zur Sache. Unterschreibe nichts, was du nicht verstehst. Bei einer einfachen Kontrolle gibt es keinen Anspruch auf einen Dolmetscher; deine Personalien musst du trotzdem angeben. Wichtige Schreiben wie Haftbefehl, Strafbefehl oder Urteil bekommst du in der Regel übersetzt.",
      say: [["Ich verstehe nicht genug Deutsch. Ich verlange einen Dolmetscher für Russisch. Bis dahin sage ich nichts zur Sache.", "Я недостаточно понимаю по-немецки. Требую переводчика с русского. До этого по делу ничего не скажу."]],
      law: "§ 187 GVG · § 163a Abs. 5 StPO · § 114b StPO · § 111 OWiG",
      ru: { title: "Я не понимаю по-немецки", toneLabel: "Бесплатно",
        text: "Если тебя допрашивают как подозреваемого, тебе положен переводчик — бесплатно, и в полиции тоже. Скажи об этом сразу и до этого ничего не говори по делу. Не подписывай то, чего не понимаешь. При обычной проверке права на переводчика нет — данные о себе назвать всё равно нужно. Важные документы — ордер на арест, Strafbefehl, приговор — обычно переводят письменно." },
      kw: ["dolmetsch", "uebersetz", "kein deutsch", "verstehe nicht", "sprache", "russisch", "переводчик", "перевод", "не понимаю", "по немецки", "не говорю по", "язык", "на русском"]
    },
    {
      id: "k-strafbefehl", cat: "fremd", title: "Strafbefehl, Aufenthalt und Einbürgerung", tone: "warn", toneLabel: "2 Wochen",
      text: "Ein Strafbefehl ist eine Verurteilung ohne Verhandlung. Einspruch nur innerhalb von 2 Wochen ab Zustellung – danach ist er rechtskräftig. Nach einem Einspruch kann die Strafe auch höher werden: vorher Anwalt fragen. Für die Einbürgerung zählen Geldstrafen bis 90 Tagessätze in der Regel nicht, die Ausländerbehörde erfährt aber davon. Ab 6 Monaten Freiheitsstrafe, auch auf Bewährung, kann eine Ausweisung drohen.",
      law: "§§ 407–411 StPO · § 12a StAG · § 54 AufenthG · §§ 32, 41 BZRG",
      ru: { title: "Strafbefehl, вид на жительство и гражданство", toneLabel: "2 недели",
        text: "Strafbefehl — это приговор без суда. Возражение — только в течение 2 недель со дня вручения, потом он вступает в силу. После возражения наказание может стать и строже: сначала спроси адвоката. Для гражданства штрафы до 90 дневных ставок обычно не учитываются, но ведомство по делам иностранцев о них узнаёт. При лишении свободы от 6 месяцев, даже условно, может грозить высылка." },
      kw: ["strafbefehl", "штрафбефел", "tagessaetze", "tagessatz", "einbuergerung", "ausweisung", "vorbestraft", "fuehrungszeugnis", "штрафбефель", "судебный приказ", "гражданств", "натурализац", "депортац", "высыл", "выслать", "судимост", "лишат внж"]
    }
  ],

  letters: {
    bodycam: {
      title: "Bodycam-Aufnahmen sichern lassen",
      to: "stuttgart.pp@polizei.bwl.de",
      hint: "Sofort schicken: Aufnahmen werden spätestens nach 4 Wochen gelöscht.",
      ru: { title: "Письмо: сохранить записи нательных камер", hint: "Отправь сразу: записи удаляют не позже чем через 4 недели. Письмо на немецком — так и отправляй." },
      body: "Sehr geehrte Damen und Herren,\n\nam {datum} gegen {zeit} Uhr wurde ich in {ort} von Beamten Ihres Präsidiums kontrolliert ({beamte}).\n\nIch bitte Sie, alle Bodycam-Aufnahmen dieses Einsatzes zu sichern und nicht zu löschen, da ich sie als Beweismittel benötige (§ 44 Abs. 10, § 75 Abs. 5 PolG BW). Bitte bestätigen Sie mir die Sicherung schriftlich.\n\nMit freundlichen Grüßen\n{name}"
    },
    beschwerde: {
      title: "Dienstaufsichtsbeschwerde",
      to: "Polizeipräsidium Stuttgart, Hahnemannstraße 1, 70191 Stuttgart",
      hint: "Vorher mit einem Anwalt sprechen: Eine Beschwerde kann laufende Verfahren beeinflussen.",
      ru: { title: "Служебная жалоба (Dienstaufsichtsbeschwerde)", hint: "Сначала поговори с адвокатом: жалоба может повлиять на текущие дела. Письмо на немецком — так и отправляй." },
      body: "Sehr geehrte Damen und Herren,\n\nhiermit erhebe ich Dienstaufsichtsbeschwerde gegen die Beamten, die mich am {datum} gegen {zeit} Uhr in {ort} kontrolliert haben ({beamte}).\n\nSachverhalt:\n{ablauf}\n\nIch bitte um Prüfung des Verhaltens der Beamten und um schriftliche Mitteilung des Ergebnisses.\n\nMit freundlichen Grüßen\n{name}"
    }
  },

  consent: {
    de: "Ich möchte unser Gespräch zur Dokumentation aufnehmen. Sind Sie einverstanden?",
    ru: "Хочу записать наш разговор для документации. Вы согласны?"
  }
};
