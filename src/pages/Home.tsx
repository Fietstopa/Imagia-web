// src/pages/Home.tsx
import { useTranslation } from "react-i18next";

import ImageSwitcher from "../components/imageSwitch";
import PromoPageOne from "../screens/promoPageOne";
import IgCarousel from "../components/igCarousel";
import imageUrl1 from "../../public/images/interior/1.jpg";
import imageUrl2 from "../../public/images/interior/7.jpg";
import imageUrl3 from "../../public/images/interior/12.jpg";
import { Helmet } from "react-helmet";
const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100">
      <Helmet>
        <html lang="cs" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Foto Brno - Imagia Ateliér</title>
        <meta
          name="description"
          content="Objevte ateliér Imagia v Brně – prostor pro profesionální focení portrétů, rodinných a uměleckých snímků. Každý snímek má u nás smysl!"
        />
        <link rel="canonical" href="https://www.tvujweb.cz" />
      </Helmet>
      <ImageSwitcher
        image1={imageUrl1}
        image2={imageUrl2}
        image3={imageUrl3}
        caption={t("home.caption")}
        undertext={t("home.secondaryCaption")}
        description={t("home.descriptionText")}
        btnText={t("home.reservation")}
      />
      <PromoPageOne />
      <IgCarousel />
    </div>
  );
};

export default Home;
