import React, { useState } from "react";
import WelcomeSign from "./WelcomeSign";
interface ImageSwitcherProps {
  image1: string;
  image2: string;
  image3: string;
}

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({
  image1,
  image2,
  image3,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="flex w-[100%] h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-screen h-full flex-shrink-0">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover brightness-70"
            />
          </div>
        ))}
      </div>
      <div className="absolute text-white left-10 bottom-40 flex items-center justify-center z-20">
        <WelcomeSign />
      </div>
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="absolute bottom-5 right-0 flex space-x-3 z-10 translate-x-[-50%]">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleIndexChange(idx)}
            className={`
              p-4
              text-white
              rounded-full
              cursor-pointer
              ${currentIndex === idx ? "bg-[#C6AB81]" : "bg-transparent"}
            `}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              {idx + 1}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSwitcher;
