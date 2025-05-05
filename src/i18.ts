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
        "Сучасна фотостудія з професійним обладнанням для зйомки в будь-якому стилі. Затишний простір ідеально підійде для портретів, створення контенту та комерційних проєктів. Гарантуємо комфорт, креатив та високу якість кожного кадру.<br/><br/>Наша студія поєднує сучасну фотографію з індивідуальним та дружнім підходом – ідеально підходить для портретів, сімейних фотографій або професійних знімків. Дістатися сюди легко: просто сідайте на <tram>Трамвай номер 9</tram> і ви буквально за кілька кроків від наших дверей.<br/><br/> Imagia — це простір для вашої творчості, де ви можете зафіксувати важливі моменти свого життя або створити щось унікальне. Ми з радістю допоможемо з втіленням будь-яких ваших ідей!",
      altTags: {
        foto1: "Фотостудія у Брно – фото зі студії Imagia",
        foto2: "Друге фото зі студії Imagia у Брно",
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
