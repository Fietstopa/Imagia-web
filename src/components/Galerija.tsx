// Galerija.jsx (nebo .tsx)
import React from "react";
import Mansory from "./Mansory";
import CustomCaption from "./CustomCaption";

const Galerija = () => {
  // Ručně vypsané cesty k obrázkům (1.jpg až 20.jpg)
  const images = [
    "/images/interior/1.jpg",
    "/images/interior/2.jpg",
    "/images/interior/3.jpg",
    "/images/interior/4.jpg",
    "/images/interior/5.jpg",
    "/images/interior/6.jpg",

    "/images/interior/7.jpg",
    "/images/interior/11.jpg",
    "/images/interior/12.jpg",
    "/images/interior/13.jpg",
    "/images/interior/14.jpg",
    "/images/interior/15.jpg",
  ];

  return (
    <div className=" py-20">
      <CustomCaption title="Our" subtitle="Gallery" classProps="text-6xl" />
      <Mansory imageUrls={images} colGap={10} />
    </div>
  );
};

export default Galerija;
