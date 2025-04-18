// Galerija.jsx (nebo .tsx)
import React from "react";
import Mansory from "./Mansory";
import CustomCaption from "./CustomCaption";
import { text } from "stream/consumers";
import MansoryDouble from "./MansoryDouble";

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
    "/images/interior/8.jpg",
    "/images/interior/9.jpg",
    "/images/interior/10.jpg",
  ];
  const textil = [
    "/images/textil/1.jpg",
    "/images/textil/2.jpg",
    "/images/textil/4.jpg",
    "/images/textil/3.jpg",
  ];
  const valentyn = [
    "/images/valentine/1.jpg",
    "/images/valentine/2.jpg",
    "/images/valentine/3.jpg",
    "/images/valentine/4.jpg",
    "/images/valentine/5.jpg",
    "/images/valentine/6.jpg",
    "/images/valentine/7.jpg",
    "/images/valentine/8.jpg",
  ];
  const jaro = [
    "/images/Jaro/1.jpg",
    "/images/Jaro/2.jpg",
    "/images/Jaro/3.jpg",
    "/images/Jaro/4.jpg",
    "/images/Jaro/5.jpg",
    "/images/Jaro/6.jpg",
    "/images/Jaro/7.jpg",
    "/images/Jaro/8.jpg",
  ];
  const newYear = [
    "/images/NewYear/1.jpg",
    "/images/NewYear/2.jpg",
    "/images/NewYear/3.jpg",
    "/images/NewYear/4.jpg",
    "/images/NewYear/5.jpg",
    "/images/NewYear/6.jpg",
    "/images/NewYear/7.jpg",
    "/images/NewYear/8.jpg",
  ];
  return (
    <div className=" py-20">
      <CustomCaption title="ARCH DECO " subtitle="SÁL" classProps="text-6xl" />
      <MansoryDouble
        imageUrls={images}
        colGap={10}
        wideItems={[1, 5]}
      ></MansoryDouble>
      <CustomCaption title="Látková" subtitle="pozadí" classProps="text-6xl" />
      <Mansory imageUrls={textil} colGap={10} isVertical={false} />
      <CustomCaption title="Lokace" subtitle="Valentyn" classProps="text-6xl" />
      <Mansory imageUrls={valentyn} colGap={10} isVertical={true} />
      <CustomCaption title="Lokace" subtitle="Jaro" classProps="text-6xl" />
      <Mansory imageUrls={jaro} colGap={10} />
      <CustomCaption title="Lokace" subtitle="Vánoce" classProps="text-6xl" />
      <Mansory imageUrls={newYear} colGap={10} isVertical={true} />
    </div>
  );
};

export default Galerija;
