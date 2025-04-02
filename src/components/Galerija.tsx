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
    "/images/interior/7.jpg",
    "/images/interior/8.jpg",
    "/images/interior/9.jpg",
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
    "/images/interior/21.jpg",
    "/images/interior/22.jpg",
    "/images/interior/23.jpg",
    "/images/interior/24.jpg",
    "/images/interior/25.jpg",
    "/images/interior/27.jpg",
    "/images/interior/28.jpg",
    "/images/interior/29.jpg",
    "/images/interior/30.jpg",
  ];

  return (
    <div className=" py-20">
      <CustomCaption title="Our" subtitle="Gallery" classProps="text-6xl" />
      <Mansory imageUrls={images} colGap={10} />
    </div>
  );
};

export default Galerija;
