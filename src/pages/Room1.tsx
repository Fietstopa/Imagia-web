import React, { useState, useMemo } from "react";
import ImageSwitcher from "@/components/imageSwitch";
import imageUrl1 from "../../public/images/interior/2.jpg";
import imageUrl2 from "../../public/images/interior/5.jpg";
import imageUrl3 from "../../public/images/interior/11.jpg";
import CustomCaption from "@/components/CustomCaption";
import ImageLeft from "/images/vertical/21.jpg";
import ImageRight from "/images/vertical/20.jpg";
import MansoryDouble from "@/components/MansoryDouble";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Room1: React.FC = () => {
  /* ------------------------------------------------------------------
   * 1️⃣  GALLERY IMAGES
   * ----------------------------------------------------------------*/
  const images: string[] = [
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

  /* ------------------------------------------------------------------
   * 2️⃣  LIGHTBOX STATE & HELPERS
   * ----------------------------------------------------------------*/
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Map url -> index, abychom vždy otevřeli správný snímek
  const imageIndexMap = useMemo<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    images.forEach((url, i) => (map[url] = i));
    return map;
  }, [images]);

  // Callback z MansoryDouble
  const handleImageClick = (imgUrl: string): void => {
    setCurrentIndex(imageIndexMap[imgUrl] ?? 0);
    setIsOpen(true);
  };

  return (
    <div className="bg-white">
      {/* ----------------------------------------------------------------
       *  HERO SWITCHER
       * --------------------------------------------------------------*/}
      <ImageSwitcher
        imageDesktop1={imageUrl1}
        imageDesktop2={imageUrl2}
        imageDesktop3={imageUrl3}
        imageMobile1={imageUrl1}
        imageMobile2={imageUrl1}
        imageMobile3={imageUrl1}
        caption="ARCH DECO"
        undertext="SÁL"
        description="Arch Deco je elegantní prostor, kde dominují jemné oblouky a měkké světlo.  Ideální prostředí pro portrétní i umělecké focení s nadčasovou atmosférou."
        btnText="Rezervace"
      />

      {/* ----------------------------------------------------------------
       *  OBSAH STRÁNKY
       * --------------------------------------------------------------*/}
      <div className="min-h-screen flex flex-col justify-center items-center py-10">
        {/* Úvodní nadpis */}
        <CustomCaption
          title="SÁL"
          subtitle="ARCH DECO"
          classProps="!py-10 md:!py-20"
        />

        {/* Úvodní sekce – obrázek & text */}
        <div className="w-full px-10">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-20 pb-10 md:pb-20">
            <img
              src={imageUrl1}
              alt="Interiér sálu Arch Deco"
              className="w-full h-auto object-cover shadow-md"
              loading="lazy"
            />

            <div className="text-sm md:text-base lg:text-lg text-[#555] font-[Montserrat] leading-relaxed space-y-6">
              <p>
                Sál <strong>„Arch Deco“</strong> je ideálním místem pro
                realizaci vašich kreativních nápadů. Spojuje minimalistický
                interiér s praktickými prvky, jako jsou velká okna, texturovaná
                zeď a pohodlná kožená pohovka.
                <br />
                <br />
                Využít můžete profesionální vybavení – dýmový stroj, trvalá i
                záblesková světla, barevné osvětlení a projektor Gobo.
              </p>
              <p>
                Perfektní pro <strong>svatební focení</strong>,{" "}
                <strong>love story</strong>, <strong>portréty</strong>,{" "}
                <strong>komerční fotografie</strong> i{" "}
                <strong>tvorbu video obsahu</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------
         *  TMAVÁ SEKCE – OBRÁZEK / TEXT / OBRÁZEK
         * --------------------------------------------------------------*/}
        <div className="bg-[#1a1a1a] text-white py-20 flex flex-col md:flex-row items-center justify-center gap-10 w-full px-10 md:px-20">
          {/* Levý obrázek */}
          <div className="w-full md:w-1/4">
            <img
              src={ImageLeft}
              alt="Dekorace vlevo"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/4 font-[Montserrat]">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Popis sálu
            </h2>
            <ul className="list-disc pl-5 text-base md:text-lg space-y-2">
              <li>Rozloha: 40 m²</li>
              <li>Bílá podlaha</li>
              <li>Dřevěné panely v černé a bílé barvě</li>
              <li>Dvě okna s blackout závěsy</li>
              <li>Dva černé oblouky jako akcenty</li>
              <li>Nábytek včetně dřevěné komody</li>
              <li>Papírové pozadí ve 4 barvách</li>
              <li>Studiové světlo Godox a Nanlite</li>
            </ul>
          </div>

          {/* Pravý obrázek */}
          <div className="w-full md:w-1/4">
            <img
              src={ImageRight}
              alt="Dekorace vpravo"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* ----------------------------------------------------------------
         *  GALERIE MANSORY + LIGHTBOX
         * --------------------------------------------------------------*/}
        <div className="w-full px-10 py-20">
          <CustomCaption
            title="Fotky z ateliéru"
            subtitle=""
            classProps="text-4xl"
          />

          <MansoryDouble
            imageUrls={images}
            colGap={10}
            wideItems={[1, 5]}
            onImageClick={handleImageClick}
          />
        </div>
      </div>

      {/* ----------------------------------------------------------------
       *  LIGHTBOX – MUSÍ BÝT VE VRSTVĚ NAD VŠÍM
       * --------------------------------------------------------------*/}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={currentIndex}
      />
    </div>
  );
};

export default Room1;
