import React, { useState } from "react";
import WelcomeSign from "./WelcomeSign";

interface ImageSwitcherProps {
  image1: string;
  image2: string;
  image3: string;
  caption: String;
  undertext: String;
  description: String;
  btnText: String;
}

interface WelcomeSignProps {}

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({
  image1,
  image2,
  image3,
  caption,
  undertext,
  description,
  btnText,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-dvh w-full overflow-x-hidden">
      {/* Image slider container */}
      <div
        className={`flex w-full h-full transition-transform duration-700 ease-in-out`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover brightness-60"
            />
          </div>
        ))}
      </div>

      {/* WelcomeSign with responsive positioning */}
      <div className="absolute text-white pl-2 bottom-20 md:left-10 md:bottom-40 z-20 left-2 right-2 max-w-[95vw]">
        <WelcomeSign
          captureText={caption}
          magicText={undertext}
          desc={description}
          buttonText={btnText}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Responsive dots/buttons */}
      <div className="absolute bottom-5 right-0 flex space-x-2 md:space-x-3 z-10 translate-x-[-50%]">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleIndexChange(idx)}
            className={`
              p-2 md:p-3
              text-white
              rounded-full
              cursor-pointer
              transition-colors
              ${currentIndex === idx ? "bg-[#C6AB81]" : "bg-white/50"}
            `}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {/* Mobile: small dots, Desktop: numbers */}
            <div className="hidden md:block w-4 h-4 md:w-5 md:h-5 text-sm md:text-base">
              {idx + 1}
            </div>
            <div className="md:hidden w-2 h-2 bg-current rounded-full" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSwitcher;
