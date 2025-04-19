import React, { useState, useMemo } from "react"; // Add React import
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Mansory from "./Mansory";
import CustomCaption from "./CustomCaption";
import MansoryDouble from "./MansoryDouble";
const Galerija = () => {
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

  const [allImages, imageIndexMap] = useMemo<
    [string[], Record<string, number>]
  >(() => {
    const all: string[] = [];
    const map: Record<string, number> = {};
    const galleries = [images, textil, valentyn, jaro, newYear];

    galleries.forEach((gallery) => {
      gallery.forEach((imgUrl) => {
        map[imgUrl] = all.length;
        all.push(imgUrl);
      });
    });

    return [all, map];
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleImageClick = (imgUrl: string): void => {
    setCurrentIndex(imageIndexMap[imgUrl]);
    setIsOpen(true);
  };

  return (
    <div className="py-20">
      <CustomCaption title="ARCH DECO " subtitle="SÁL" classProps="text-4xl" />
      <MansoryDouble
        imageUrls={images}
        colGap={10}
        wideItems={[1, 5]}
        onImageClick={handleImageClick}
      />

      <CustomCaption title="Látková" subtitle="pozadí" classProps="text-4xl" />
      <Mansory
        imageUrls={textil}
        colGap={10}
        isVertical={false}
        onImageClick={handleImageClick}
      />

      <CustomCaption title="Lokace" subtitle="Valentyn" classProps="text-4xl" />
      <Mansory
        imageUrls={valentyn}
        colGap={10}
        isVertical={true}
        onImageClick={handleImageClick}
      />

      <CustomCaption title="Lokace" subtitle="Jaro" classProps="text-4xl" />
      <Mansory imageUrls={jaro} colGap={10} onImageClick={handleImageClick} />

      <CustomCaption title="Lokace" subtitle="Vánoce" classProps="text-4xl" />
      <Mansory
        imageUrls={newYear}
        colGap={10}
        isVertical={true}
        onImageClick={handleImageClick}
      />

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={allImages.map((img) => ({ src: img }))}
        index={currentIndex}
      />
    </div>
  );
};

export default Galerija;
