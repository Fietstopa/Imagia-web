// Galerija.jsx (nebo .tsx)
import React from "react";
import Mansory from "./Mansory";
import CustomCaption from "./CustomCaption";

const Galerija = () => {
  // Ručně vypsané cesty k obrázkům (1.jpg až 20.jpg)
  const images = [
    "/images/interior/1.jpg",
    "/images/interior/2.jpg",

    "/images/interior/7.jpg",
    "/images/interior/11.jpg",
    "/images/interior/12.jpg",
    "/images/interior/13.jpg",
    "/images/interior/14.jpg",
    "/images/interior/15.jpg",
    "/images/interior/16.jpg",
    "/images/interior/17.jpg",
    "/images/interior/18.jpg",
    "/images/interior/19.jpg",
    "/images/interior/20.jpg",
  ];

  return (
    <div className="px-5 py-20">
      <CustomCaption title="Our" subtitle="Gallery" classProps="" />
      <Mansory imageUrls={images} colCount={4} colGap={10} />
    </div>
  );
};

export default Galerija;
