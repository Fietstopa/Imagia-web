import React, { useState, useMemo } from "react";
import ImageSwitcher from "@/components/imageSwitch";
import imageUrl1 from "../../public/images/musa/10.jpg";
import imageUrl2 from "../../public/images/musa/8.jpg";
import imageUrl3 from "../../public/images/musa/4.jpg";
import imageUrlV1 from "../../public/images/musa/2.jpg";
import imageUrlV2 from "../../public/images/musa/1.jpg";
import imageUrlV3 from "../../public/images/musa/11.jpg";

import CustomCaption from "@/components/CustomCaption";
import f1 from "../../public/images/musa/7.jpg";
import f2 from "../../public/images/musa/9.jpg";
import MansoryDouble from "@/components/MansoryDouble";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Room3: React.FC = () => {
  /* ------------------------------------------------------------------
   * 1️⃣  GALLERY IMAGES
   * ----------------------------------------------------------------*/
  const images: string[] = [
    "/images/musa/1.jpg",
    "/images/musa/2.jpg",
    "/images/musa/3.jpg",
    "/images/musa/4.jpg",
    "/images/musa/5.jpg",
    "/images/musa/6.jpg",
    "/images/musa/7.jpg",
    "/images/musa/8.jpg",
    "/images/musa/9.jpg",
    "/images/musa/10.jpg",
    "/images/musa/11.jpg",
    "/images/musa/12.jpg",
  ];

  /* ------------------------------------------------------------------
   * 2️⃣  LIGHTBOX STATE & HELPERS
   * ----------------------------------------------------------------*/
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Map url -> index for quick lookup
  const imageIndexMap = useMemo<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    images.forEach((url, i) => (map[url] = i));
    return map;
  }, [images]);

  const handleImageClick = (url: string) => {
    setCurrentIndex(imageIndexMap[url] ?? 0);
    setIsOpen(true);
  };

  return (
    <div>
      {/* ----------------------------------------------------------------
       *  HERO SWITCHER
       * --------------------------------------------------------------*/}
      <ImageSwitcher
        imageDesktop1={imageUrl1}
        imageDesktop2={imageUrl2}
        imageDesktop3={imageUrl3}
        imageMobile1={imageUrlV1}
        imageMobile2={imageUrlV2}
        imageMobile3={imageUrlV3}
        caption="MUZA"
        undertext="SÁL"
        description="Místo, kde se setkává inspirace, estetika a tvůrčí svoboda. MUZA je harmonický a nadčasový prostor s vintage nádechem."
        btnText="Rezervace"
      />

      {/* ----------------------------------------------------------------
       *  OBSAH STRÁNKY
       * --------------------------------------------------------------*/}
      <div className="min-h-screen flex flex-col justify-center items-center py-10 md:py-20">
        {/* HLAVNÍ NADPIS */}
        <CustomCaption
          title="Sál"
          subtitle="Muza"
          classProps="!py-10 md:!py-20"
        />

        {/* SEKCE 1: OBRÁZEK + TEXT */}
        <div className="flex px-10 flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 pb-10 md:pb-20 w-full">
          <img
            src={imageUrl1}
            alt="Interiér sálu Muza"
            className="w-full h-auto object-cover shadow-md"
            loading="lazy"
          />

          <div className="text-sm md:text-base lg:text-lg text-[#555] font-[Montserrat] leading-relaxed space-y-6">
            <p>
              Sal Muza působí <strong>nadčasově a harmonicky</strong>, s jemným nádechem <strong>vintage estetiky</strong>.
              Celek je <strong>vizuálně vyvážený, elegantní</strong> a má <strong>vlastní charakter</strong>, který se propisuje do každého detailu interiéru.
            </p>
          </div>
        </div>

        {/* SEKCE 2: FOTO – TEXT – FOTO */}
        <div className="bg-stone-400 text-white py-20 flex flex-col md:flex-row items-center gap-30 w-full">
          {/* Levý obrázek */}
          <div className="w-full md:w-1/4">
            <img
              src={f2}
              alt="Dekorace vlevo"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/4 flex flex-col items-center justify-center font-[Montserrat] px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Popis sálu
            </h2>
            <ul className="list-disc pl-5 text-base md:text-lg space-y-2">
              <li>
                Prostorný a světlý sál o rozloze <strong>40 m²</strong>
              </li>
              <li><strong>Čtyři velká okna</strong> a vysoký strop <strong>4,20 m</strong></li>
              <li>Pečlivě vybraný <strong>vintage nábytek</strong></li>
              <li><strong>Antický klavír</strong> jako dominantní prvek</li>
              <li>Dva lustry se <strong>skutečnými svíckami</strong></li>
              <li><strong>Živé stromy</strong> a množství drobných detailů</li>
              <li>
                <strong>Tmavě čokoládové blackout závěsy</strong> v plné délce, které také
                mohou sloužit jako stylové pozadí pro focení
              </li>
              <li><strong>Profesionální technika</strong> je zahrnutá v ceně</li>
              <li>Možnost využití <strong>mlhostoje a sněhového stroje</strong></li>
            </ul>
          </div>

          {/* Pravý obrázek */}
          <div className="w-full md:w-1/4">
            <img
              src={f1}
              alt="Dekorace vpravo"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* SEKCE 3: GALERIE */}
        <div className="w-full px-10 py-20">
          <CustomCaption
            title="Fotky z ateliéru"
            subtitle=""
            classProps="text-4xl"
          />

          <MansoryDouble
            imageUrls={images}
            colGap={10}
            wideItems={[1, 5, 6]}
            onImageClick={handleImageClick}
          />
        </div>
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={currentIndex}
      />
    </div>
  );
};

export default Room3;
