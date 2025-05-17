import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import ImageSwitcher from "../components/imageSwitch";
import PromoPageOne from "../screens/promoPageOne";
import IgCarousel from "../components/igCarousel";

import imageUrl1 from "../../public/images/room1/1.jpg";
import imageUrl2 from "../../public/images/room1/2.jpg";
import imageUrl3 from "../../public/images/room1/3.jpg";
import imageUrlV1 from "../../public/images/room1/6.jpg";
import imageUrlV2 from "../../public/images/room1/7.jpg";
import imageUrlV3 from "../../public/images/room1/8.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100">
      <Helmet>
        <title>{t("home.title")}</title>
      </Helmet>

      <ImageSwitcher
        imageDesktop1={imageUrl1}
        imageDesktop2={imageUrl2}
        imageDesktop3={imageUrl3}
        imageMobile1={imageUrlV1}
        imageMobile2={imageUrlV2}
        imageMobile3={imageUrlV3}
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
