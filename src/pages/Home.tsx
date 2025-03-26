// src/pages/Home.tsx
import React from "react";
import ImageSwitcher from "../components/imageSwitch";
import Navbar from "../components/Navbar";
import PromoPageOne from "../screens/promoPageOne";
import IgCarousel from "../components/igCarousel";
import Footer from "../components/Footer";
import imageUrl1 from "../../public/images/interior/1.jpg";
import imageUrl2 from "../../public/images/interior/7.jpg";
import imageUrl3 from "../../public/images/interior/27.jpg";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <ImageSwitcher image1={imageUrl1} image2={imageUrl2} image3={imageUrl3} />
      <PromoPageOne />
      <IgCarousel />
    </div>
  );
};

export default Home;
