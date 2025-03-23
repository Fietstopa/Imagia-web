// src/pages/Home.tsx
import React from "react";
import ImageSwitcher from "../components/imageSwitch";
import Navbar from "../components/Navbar";
import PromoPageOne from "../screens/promoPageOne";
import IgCarousel from "../components/igCarousel";
import Footer from "../components/Footer";

const imageUrl1 =
  "https://i.pinimg.com/736x/ee/53/dd/ee53ddddc8801eaa90470f5c25934df9.jpg";
const imageUrl2 =
  "https://i.pinimg.com/736x/3f/f8/c5/3ff8c540b646444e6f541e6d6d3c13d3.jpg";
const imageUrl3 =
  "https://i.pinimg.com/736x/9d/fd/10/9dfd106406fae9b232d8456a7d87be7f.jpg";

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
