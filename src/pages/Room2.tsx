import React, { useState, useMemo } from "react";
import ImageSwitcher from "@/components/imageSwitch";
import imageUrl1 from "../../public/images/room1/1.jpg";
import imageUrl2 from "../../public/images/room1/2.jpg";
import imageUrl3 from "../../public/images/room1/3.jpg";
import imageUrlV1 from "../../public/images/room1/6.jpg";
import imageUrlV2 from "../../public/images/room1/7.jpg";
import imageUrlV3 from "../../public/images/room1/8.jpg";

import CustomCaption from "@/components/CustomCaption";
import f1 from "../../public/images/room1/4.jpg";
import f2 from "../../public/images/room1/5.jpg";
import MansoryDouble from "@/components/MansoryDouble";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Room2: React.FC = () => {
  /* ------------------------------------------------------------------
   * 1️⃣  GALLERY IMAGES
   * ----------------------------------------------------------------*/
  const images: string[] = [
    "/images/aurora/5.jpg",
    "/images/aurora/2.jpg",
    "/images/aurora/3.jpg",
    "/images/aurora/6.jpg",
    "/images/aurora/22.jpg",
    "/images/aurora/7.jpg",
    "/images/aurora/16.jpg",
    "/images/aurora/8.jpg",
    "/images/aurora/9.jpg",
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
        caption="AURORA"
        undertext="SÁL"
        description="Tenhle sál je opravdu perla našeho studia. Jedinečná lehkost a modernost interiéru dodají každému vašemu záběru nádech elegance."
        btnText="Rezervace"
      />

      {/* ----------------------------------------------------------------
       *  OBSAH STRÁNKY
       * --------------------------------------------------------------*/}
      <div className="min-h-screen flex flex-col justify-center items-center py-10 md:py-20">
        {/* HLAVNÍ NADPIS */}
        <CustomCaption
          title="Sál"
          subtitle="Aurora"
          classProps="!py-10 md:!py-20"
        />

        {/* SEKCE 1: OBRÁZEK + TEXT */}
        <div className="flex px-10 flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 pb-10 md:pb-20 w-full">
          <img
            src={imageUrl1}
            alt="Interiér sálu Aurora"
            className="w-full h-auto object-cover shadow-md"
            loading="lazy"
          />

          <div className="text-sm md:text-base lg:text-lg text-[#555] font-[Montserrat] leading-relaxed space-y-6">
            <ul className="pl-5 space-y-2 list-disc">
              <li>
                Tento sál je <strong>opravdovým klenotem</strong> našeho studia.
                Každý jeho kout byl navržen s důrazem na detail a s láskou k
                estetice.
              </li>
              <li>
                <strong>Krémové tóny</strong> vytvářejí klidnou a elegantní
                atmosféru, která je ideální pro{" "}
                <strong>portrétní, rodinné i svatební focení</strong>.
              </li>
              <li>
                Díky <strong>velkým oknům</strong> je sál zaplaven{" "}
                <strong>přirozeným světlem</strong>, které krásně modeluje scénu
                a podtrhuje každý detail.
              </li>
              <li>
                Ať už jste <strong>fotograf, influencer</strong> nebo jen
                hledáte krásné místo pro svou tvorbu,{" "}
                <strong>tenhle sál vás inspiruje</strong> hned, jak do něj
                vstoupíte.
              </li>
            </ul>
          </div>
        </div>

        {/* SEKCE 2: FOTO – TEXT – FOTO */}
        <div className="bg-stone-400 text-white py-20 flex flex-col md:flex-row items-center  gap-30 w-full ">
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
          <div className="w-full md:w-2/4 flex flex-col items-center justify-center font-[Montserrat]">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Popis sálu
            </h2>
            <ul className="list-disc pl-5 text-base md:text-lg space-y-2">
              <li>
                Rozloha: <strong>70 m²</strong>
              </li>
              <li>3 velká okna s mramorovými parapety</li>
              <li>Ložnice a obývací pokoj oddělené skleněnými dveřmi</li>
              <li>Bílá pohovka, postel, noční stolek, nástěnná svítidla</li>
              <li>Krb, vintage zrcadlo, stylové židle, 2 lustry</li>
              <li>
                Profesionální vybavení <strong>značek Godox a Nanlite</strong> v
                ceně
              </li>
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

export default Room2;
