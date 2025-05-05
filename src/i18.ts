import { desc, sub } from "framer-motion/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  cs: {
    translation: {
      navbar: {
        home: "Domů",
        gallery: "Galerie",
        rooms: "Sály",
        room1: "Sál 1",
        room2: "Sál 2",
        room3: "Sál 3",
        coupons: "Kupony",
        reservation: "Rezervace",
        whyus: "Proč právě my",
        rules: "Pravidla",
        equipment: "Vybavení",
      },
      home: {
        caption: "Fotografie má být odrazem ",
        secondaryCaption: "duše",
        descriptionText:
          "„Zachycujeme vaše nezapomenutelné okamžiky s láskou k detailu a jemností. Přirozeně, s profesionálním přístupem a v příjemné atmosféře“",
        reservation: "Vytvořit rezervaci",
      },
      title: "Každý snímek má smysl",
      subtitle: "Každý detail má váhu",
      descriptionText:
        "<firstline>Vítejte v ateliéru Imagia</firstline> – útulném a kreativním prostoru pro focení v srdci Brna. Najdete nás na ulici Milady Horákové, jen pár minut jízdy z centra města.<br/><br/>Moderní fotostudio s profesionálním zázemím pro tvorbu vizuálního obsahu na vysoké úrovni. Flexibilní prostor je ideální pro rodinné focení, portréty i komerční projekty. Nabízíme kvalitní techniku, komfortní prostředí a spolehlivý servis.Přijet k nám je snadné: stačí naskočit na <tram>Tramvaj číslo 9</tram> a jste doslova pár kroků od našich dveří.<br/><br/>Ať už toužíte zachytit nezapomenutelné okamžiky, nebo vytvořit něco opravdu originálního, Imagia je tím pravým místem pro vaši kreativitu. Těšíme se, až vás u nás přivítáme a pomůžeme vašim nápadům ožít! ",
      altTags: {
        foto1: "Fotoateliér v Brně – snímek z ateliéru Imagia",
        foto2: "Druhý snímek z ateliéru Imagia v Brně",
      },
      rules: {
        title1: "Délka pronájmu",
        content1: `- Ve studiu platí koncept "studijní hodiny"
        - Při rezervaci 60 minut máte k dispozici 55 minut
        - Zbylých 5 minut je vyhrazeno pro úklid a přípravu
        - Klient musí seznámit všechny účastníky s pravidly`,
        title2: "Rezervace a storno",
        content2: `- Rezervace po uhrazení 100% zálohy
        - Storno bez ztráty zálohy 48 hodin předem
        - Storno 24 hodin předem: 50% poplatek
        - Storno méně než 24 hodin předem: propadá celá záloha
        - Přesun rezervace možný 48 hodin předem
        - Opakovaný přesun: 50% poplatek z ceny pronájmu`,
        title3: "Provozní pravidla",
        content3: `- Maximálně 6 osob ve studiu (více osob po domluvě +300 Kč/osoba)
                  - Povinná čistá výměnná obuv
                  - Zákaz otevřeného ohně (pokuta 3000 Kč)
                  - Zákaz dýmovnic a bengálských ohňů
                  - Dekorativní svíčky pouze s dozorem administrátora
                  - Zákaz pornografického obsahu (pokuta 50 000 Kč)
                    - Zákaz alkoholu a podnapilého stavu
                    - Zákaz pořádání oslav a akcí`,
        title4: "Úklid a odpovědnost",
        content4: `- Studio předávat v původním stavu
        - Klient odpovídá za čistotu a stav vybavení
        - Poškození majetku hradí klient
        - Poplatek za znečištění papírových pozadí: 300 Kč/metr`,
        title5: "Speciální případy",
        content5: `- Focení s jídlem/zvířaty po domluvě
        - Pro zvířata: vlastní deky a podložky
        - Použití sypkých materiálů (mouka, konfety) nutno nahlásit
        - Změna barev pozadí po domluvě s administrátorem
        - Příplatek za speciální úklid: 300 Kč nebo 20 minut z času focení`,
        title6: "Technické požadavky",
        content6: `- Poškození vybavení bude vyčísleno administrátorem
                  - Potřeby studiového vybavení řešit s administrátorem
                  - Zákaz technických zásahů do vybavení studia`,
        title7: "Bezpečnostní pravidla",
        content7: `- Zákaz nebezpečných materiálů bez dozoru
                    - Povinnost hlásit úrazy a nehody
                    - Zákaz manipulace s elektroinstalací`,
      },
    },
  },
  en: {
    translation: {
      navbar: {
        home: "Home",
        gallery: "Gallery",
        rooms: "Rooms",
        room1: "Room 1",
        room2: "Room 2",
        room3: "Room 3",
        coupons: "Gift Coupons",
        reservation: "Reservation",
        whyus: "Why Us",
        rules: "Rules",
        equipment: "Equipment",
      },
      home: {
        caption: "Photography is reflection of ",
        secondaryCaption: "the soul",
        descriptionText:
          "“We capture real moments with an eye for detail. Naturally, professionally and with an emphasis on atmosphere.”",
        reservation: "Create Reservation",
      },
      title: "Every shot matters",
      subtitle: "Every detail counts",
      descriptionText:
        "<firstline>Welcome to Imagia photostudio</firstline> – a cozy and creative space for photography in the heart of Brno. You can find us on Milady Horákové Street, just a few minutes from the city center.<br/><br/>Our studio combines modern photography with a personal and friendly approach – ideal for portraits, family photos or professional shots. Getting here is easy: just hop on <tram>Tram number 9</tram> and you're literally steps away from our door.<br/><br/>Whether you want to capture special memories or create something artistic, Imagia is the right place where your visions come to life. We can't wait to welcome you!",
      altTags: {
        foto1: "Photo studio in Brno – photo from Imagia studio",
        foto2: "Second photo from Imagia studio in Brno",
      },
      rules: {
        title1: "Rental Duration",
        content1:
          "- Studio operates on 'studio hours' concept\n- 60-minute booking gives you 55 minutes of actual use\n- Remaining 5 minutes are reserved for cleanup and preparation\n- Client must inform all participants about the rules",
        title2: "Reservation and Cancellation",
        content2:
          "- Reservation confirmed after 100% deposit payment\n- Free cancellation up to 48 hours in advance\n- 50% fee for cancellation within 24 hours\n- Cancellation less than 24 hours: full deposit forfeited\n- Rescheduling possible up to 48 hours in advance\n- Repeated rescheduling: 50% fee of rental price",
        title3: "Operating Rules",
        content3:
          "- Maximum 6 people in studio (more by arrangement +300 CZK/person)\n- Clean indoor shoes required\n- Open flames prohibited (3000 CZK fine)\n- Smoke bombs and sparklers prohibited\n- Decorative candles only with supervisor present\n- Pornographic content prohibited (50,000 CZK fine)\n- Alcohol and intoxication prohibited\n- Parties and events prohibited",
        title4: "Cleaning and Responsibility",
        content4:
          "- Leave studio in original condition\n- Client responsible for cleanliness and equipment condition\n- Client liable for any damages\n- Background paper contamination fee: 300 CZK/meter",
        title5: "Special Cases",
        content5:
          "- Food/animal photography by arrangement\n- For animals: bring your own blankets and pads\n- Must report use of loose materials (flour, confetti)\n- Background color changes by arrangement with supervisor\n- Special cleaning surcharge: 300 CZK or 20 minutes from shooting time",
        title6: "Technical Requirements",
        content6:
          "- Equipment damage will be assessed by supervisor\n- Studio equipment needs to be discussed with supervisor\n- No technical modifications to studio equipment allowed",
        title7: "Safety Rules",
        content7:
          "- Hazardous materials prohibited without supervision\n- Must report all accidents and injuries\n- No tampering with electrical installations",
      },
    },
  },
  ru: {
    translation: {
      navbar: {
        home: "Главная",
        gallery: "Галерея",

        rooms: "Залы",
        room1: "Зал 1",
        room2: "Зал 2",
        room3: "Зал 3",
        coupons: "Сертификаты",
        reservation: "Бронировать",
        whyus: "Почему мы",
        rules: "Правила",
        equipment: "Оборудование",
      },
      home: {
        caption: "Фотография - отражение ",
        secondaryCaption: "души",
        descriptionText:
          "«Сохраняем ваши искренние моменты с любовью к каждой детали. Естественно, профессионально и в приятной атмосфере.",
        reservation: "Создать бронь",
      },
      title: "Каждый снимок несет в себе смысл,",
      subtitle: "каждая деталь неотъемлема",
      descriptionText:
        "Добро пожаловать в фотостудию Imagia</firstline> – уютное и творческое пространство для фотосъемки в самом сердце Брно. Вы можете найти нас на улице «Milady Horákové», всего в нескольких минутах от центра города<br><br> Добро пожаловать в фотостудию Imagia</firstline> – уютное и творческое пространство для фотосъемки в самом сердце Брно. Вы можете найти нас на улице «Milady Horákové», всего в нескольких минутах от центра города.Добраться сюда легко: просто садитесь на <tram>Трамвай номер 9</tram> и вы буквально в нескольких шагах от наших дверей.<br/><br/>Imagia — это пространство для вашего творчества, где вы можете запечатлеть важные моменты своей жизни или создать что-то уникальное. Мы с радостью поможем с воплощением любых ваших идей!",
      altTags: {
        foto1: "Фотостудия в Брно – фото из студии Imagia",
        foto2: "Второе фото из студии Imagia в Брно",
      },
      rules: {
        title1: "Продолжительность аренды",
        content1:
          "- В студии действует концепция 'студийных часов'\n- При бронировании 60 минут вам доступно 55 минут\n- Оставшиеся 5 минут отведены на уборку и подготовку\n- Клиент должен ознакомить всех участников с правилами",
        title2: "Бронирование и отмена",
        content2:
          "- Бронирование после оплаты 100% депозита\n- Бесплатная отмена за 48 часов\n- Отмена за 24 часа: штраф 50%\n- Отмена менее чем за 24 часа: депозит не возвращается\n- Перенос возможен за 48 часов\n- Повторный перенос: штраф 50% от стоимости аренды",
        title3: "Правила эксплуатации",
        content3:
          "- Максимум 6 человек (больше по договорённости +300 крон/чел)\n- Обязательна чистая сменная обувь\n- Запрещён открытый огонь (штраф 3000 крон)\n- Запрещены дымовые шашки и бенгальские огни\n- Декоративные свечи только под присмотром\n- Запрещена порнография (штраф 50 000 крон)\n- Запрещён алкоголь и состояние опьянения\n- Запрещены вечеринки и мероприятия",
        title4: "Уборка и ответственность",
        content4:
          "- Передавать студию в исходном состоянии\n- Клиент отвечает за чистоту и состояние оборудования\n- Ущерб оплачивает клиент\n- Загрязнение фонов: 300 крон/метр",
        title5: "Особые случаи",
        content5:
          "- Съёмка с едой/животными по договорённости\n- Для животных: свои подстилки\n- Использование сыпучих материалов (мука, конфетти) нужно согласовать\n- Смена цвета фона по договорённости\n- Доплата за особую уборку: 300 крон или 20 минут съёмки",
        title6: "Технические требования",
        content6:
          "- Ущерб оборудованию оценивает администратор\n- Вопросы по оборудованию решать с администратором\n- Запрещены технические вмешательства в оборудование",
        title7: "Техника безопасности",
        content7:
          "- Опасные материалы запрещены без присмотра\n- Обязательно сообщать о травмах и авариях\n- Запрещено вмешиваться в электропроводку",
      },
    },
  },
  ua: {
    translation: {
      navbar: {
        home: "Головна",
        gallery: "Галерея",
        rooms: "Зали",
        room1: "Зал 1",
        room2: "Зал 2",
        room3: "Зал 3",
        coupons: "Подарункові купони",
        reservation: "Бронювати",
        whyus: "Чому ми",
        rules: "Правила",
        equipment: "Обладнання",
      },
      home: {
        caption: "Фотографія - відображення ",
        secondaryCaption: "душі",
        descriptionText:
          "«Ми фіксуємо справжні моменти з увагою до деталей. Природно, професійно і з акцентом на атмосферу.»",
        reservation: "Бронювати",
      },
      title: "Кожна фотографія несе в собі сенс,",
      subtitle: "кожна деталь є невід'ємною.",
      descriptionText:
        "Ласкаво просимо до студії Imagia</firstline> – затишного та творчого простору для фотозйомки в самому серці Брно. Ви можете знайти нас на вулиці Мілади Горакової, всього за кілька хвилин від центру міста.<br/><br/>Сучасна фотостудія з професійним обладнанням для зйомки в будь-якому стилі. Затишний простір ідеально підійде для портретів, створення контенту та комерційних проєктів. Гарантуємо комфорт, креатив та високу якість кожного кадру. Дістатися сюди легко: просто сідайте на <tram>Трамвай номер 9</tram> і ви буквально за кілька кроків від наших дверей.<br/><br/>Imagia — це простір для вашої творчості, де ви можете зафіксувати важливі моменти свого життя або створити щось унікальне. Ми з радістю допоможемо з втіленням будь-яких ваших ідей!",
      altTags: {
        foto1: "Фотостудія у Брно – фото зі студії Imagia",
        foto2: "Друге фото зі студії Imagia у Брно",
      },
      rules: {
        title1: "Тривалість оренди",
        content1:
          "- У студії діє концепція 'студійних годин'\n- При бронюванні 60 хвилин вам доступно 55 хвилин\n- Решта 5 хвилин відведені на прибирання та підготовку\n- Клієнт повинен ознайомити всіх учасників з правилами",
        title2: "Бронювання та скасування",
        content2:
          "- Бронювання після оплати 100% депозиту\n- Безкоштовне скасування за 48 годин\n- Скасування за 24 години: штраф 50%\n- Скасування менш ніж за 24 години: депозит не повертається\n- Перенесення можливе за 48 годин\n- Повторне перенесення: штраф 50% від вартості оренди",
        title3: "Правила експлуатації",
        content3:
          "- Максимум 6 осіб (більше за домовленістю +300 крон/особа)\n- Обов'язкове чисте змінне взуття\n- Заборонено відкритий вогонь (штраф 3000 крон)\n- Заборонено димові шашки та бенгальські вогні\n- Декоративні свічки лише під наглядом\n- Заборонена порнографія (штраф 50 000 крон)\n- Заборонений алкоголь та стан сп'яніння\n- Заборонені вечірки та заходи",
        title4: "Прибирання та відповідальність",
        content4:
          "- Передавати студію у початковому стані\n- Клієнт відповідає за чистоту та стан обладнання\n- Шкоду оплачує клієнт\n- Забруднення фонів: 300 крон/метр",
        title5: "Особливі випадки",
        content5:
          "- Зйомка з їжею/тваринами за домовленістю\n- Для тварин: свої підстилки\n- Використання сипучих матеріалів (борошно, конфеті) потрібно узгодити\n- Зміна кольору фону за домовленістю\n- Доплата за особливе прибирання: 300 крон або 20 хвилин зйомки",
        title6: "Технічні вимоги",
        content6:
          "- Шкоду обладнанню оцінює адміністратор\n- Питання щодо обладнання вирішувати з адміністратором\n- Заборонено технічні втручання в обладнання",
        title7: "Техніка безпеки",
        content7:
          "- Небезпечні матеріали заборонені без нагляду\n- Обов'язково повідомляти про травми та аварії\n- Заборонено втручатися в електропроводку",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "cs",
  fallbackLng: "cs",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
