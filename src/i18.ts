import { desc, sub } from "framer-motion/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  cs: {
    translation: {
      navbar: {
        home: "Domů",
        gallery: "Galerie",
        room1: "Sál 1",
        room2: "Sál 2",
        room3: "Sál 3",
        coupons: "Kupony",
        reservation: "Rezervace",
        whyus: "Proč právě my",
        rules: "Pravidla",
      },
      home: {
        caption: "Fotografie má být odrazem ",
        secondaryCaption: "duše",
        descriptionText:
          "„Zachycujeme skutečné momenty s citem pro detail. Přirozeně, profesionálně a s důrazem na atmosféru.“",
        reservation: "Vytvořit rezervaci",
      },
      title: "Každý snímek má smysl",
      subtitle: "Každý detail má váhu",
      descriptionText:
        "<firstline>Vítejte v ateliéru Imagia</firstline> – útulném a kreativním prostoru pro focení v srdci Brna. Najdete nás na ulici Milady Horákové, jen pár minut jízdy z centra města.<br/><br/>Náš ateliér propojuje moderní fotografii s osobním a přívětivým přístupem – ideální pro portréty, rodinná focení nebo profesionální snímky. Přijet k nám je snadné: stačí naskočit na <tram>Tramvaj číslo 9</tram> a jste doslova pár kroků od našich dveří.<br/><br/>Ať už chcete zachytit výjimečné vzpomínky, nebo vytvořit něco uměleckého, Imagia je to pravé místo, kde vaše vize ožívají. Už se nemůžeme dočkat, až vás přivítáme!",
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
        room1: "Room 1",
        room2: "Room 2",
        room3: "Room 3",
        coupons: "Gift Coupons",
        reservation: "Reservation",
        whyus: "Why Us",
        rules: "Rules",
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
        room1: "Зал 1",
        room2: "Зал 2",
        room3: "Зал 3",
        coupons: "Подарочные купоны",
        reservation: "Бронирование",
        whyus: "Почему мы",
        rules: "Правила",
      },
      home: {
        caption: "Фотография - отражение ",
        secondaryCaption: "души",
        descriptionText:
          "«Мы запечатлеваем настоящие моменты с чувством к деталям. Естественно, профессионально и с акцентом на атмосферу.»",
        reservation: "Создать бронь",
      },
      title: "Каждый снимок имеет значение",
      subtitle: "Каждая деталь важна",
      descriptionText:
        "<firstline>Добро пожаловать в фотостудию Imagia</firstline> – уютное и творческое пространство для фотосъемки в самом сердце Брно. Вы можете найти нас на улице «Milady Horákové», всего в нескольких минутах от центра города.<br/><br/>Наша студия сочетает современную фотографию с индивидуальным и дружелюбным подходом – идеально подходит для портретов, семейных фотографий или профессиональных снимков. Добраться сюда легко: просто садитесь на <tram>Трамвай номер 9</tram> и вы буквально в нескольких шагах от наших дверей.<br/><br/>Хотите ли вы запечатлеть особые воспоминания или создать что-то художественное, Imagia – это правильное место, где ваши видения оживают. Мы не можем дождаться, чтобы приветствовать вас!",
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
        room1: "Зал 1",
        room2: "Зал 2",
        room3: "Зал 3",
        coupons: "Подарункові купони",
        reservation: "Бронювати",
        whyus: "Чому ми",
        rules: "Правила",
      },
      home: {
        caption: "Фотографія - відображення ",
        secondaryCaption: "душі",
        descriptionText:
          "«Ми фіксуємо справжні моменти з увагою до деталей. Природно, професійно і з акцентом на атмосферу.»",
        reservation: "Бронювати",
      },
      title: "Кожен знімок має значення",
      subtitle: "Кожна деталь важлива",
      descriptionText:
        "<firstline>Ласкаво просимо до студії Imagia</firstline> – затишного та творчого простору для фотозйомки в самому серці Брно. Ви можете знайти нас на вулиці Мілади Горакової, всього за кілька хвилин від центру міста.<br/><br/>Наша студія поєднує сучасну фотографію з індивідуальним та дружнім підходом – ідеально підходить для портретів, сімейних фотографій або професійних знімків. Дістатися сюди легко: просто сідайте на <tram>Трамвай номер 9</tram> і ви буквально за кілька кроків від наших дверей.<br/><br/>Чи хочете ви зафіксувати особливі спогади чи створити щось художнє, Imagia – це правильне місце, де ваші бачення оживають. Ми з нетерпінням чекаємо, щоб вас привітати!",
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
