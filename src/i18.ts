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
        coupons: "Dárkové kupony",
        reservation: "Rezervace",
      },
      home: {
        caption: "Fotografie má být odrazem ",
        secondaryCaption: "duše",
        descriptionText:
          "„Zachycujeme skutečné momenty s citem pro detail. Přirozeně, profesionálně a s důrazem na atmosféru.“",
        reservation: "Vytvořit rezervaci",
      },
      // další překlady...
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
      },
      home: {
        caption: "Photography is reflection of ",
        secondaryCaption: "the soul",
        descriptionText:
          "“We capture real moments with an eye for detail. Naturally, professionally and with an emphasis on atmosphere.”",
        reservation: "Create Reservation",
      },
      // další překlady...
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
      },
      home: {
        caption: "Фотография - отражение ",
        secondaryCaption: "души",
        descriptionText:
          "«Мы запечатлеваем настоящие моменты с чувством к деталям. Естественно, профессионально и с акцентом на атмосферу.»",
        reservation: "Создать бронь",
      },
      // další překlady...
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
      },
      home: {
        caption: "Фотографія - відображення ",
        secondaryCaption: "душі",
        descriptionText:
          "«Ми фіксуємо справжні моменти з увагою до деталей. Природно, професійно і з акцентом на атмосферу.»",
        reservation: "Бронювати",
      },
      // další překlady...
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
