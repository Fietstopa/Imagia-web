import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import ImageSwitcher from "../components/imageSwitch";
import PromoPageOne from "../screens/promoPageOne";
import IgCarousel from "../components/igCarousel";

import imageUrl1 from "../../public/images/interior/2.jpg";
import imageUrl2 from "../../public/images/interior/5.jpg";
import imageUrl3 from "../../public/images/interior/11.jpg";

import imageUrlVertical1 from "../../public/images/vertical/1.jpg";
import imageUrlVertical2 from "../../public/images/vertical/3.jpg";
import imageUrlVertical3 from "../../public/images/vertical/2.jpg";

const Home = () => {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Initial check
    setIsMobile(mediaQuery.matches);

    // Add listener
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const image1 = isMobile ? imageUrlVertical1 : imageUrl1;
  const image2 = isMobile ? imageUrlVertical2 : imageUrl2;
  const image3 = isMobile ? imageUrlVertical3 : imageUrl3;

  return (
    <div className="bg-gray-100">
      <ImageSwitcher
        image1={image1}
        image2={image2}
        image3={image3}
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
