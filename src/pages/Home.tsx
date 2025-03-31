// src/pages/Home.tsx
import { useTranslation } from "react-i18next";

import ImageSwitcher from "../components/imageSwitch";
import PromoPageOne from "../screens/promoPageOne";
import IgCarousel from "../components/igCarousel";
import imageUrl1 from "../../public/images/interior/1.jpg";
import imageUrl2 from "../../public/images/interior/7.jpg";
import imageUrl3 from "../../public/images/interior/12.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100">
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
