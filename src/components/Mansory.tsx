import React from "react";
import IconLoader from "./iconLoader";
import cursor from "/cursor.png"; // Make sure this path is correct

interface MansoryProps {
  imageUrls: string[];
  colGap: number;
  isVertical?: boolean;
  onImageClick?: (imgUrl: string) => void;
  showLabel?: boolean;
}

const Mansory: React.FC<MansoryProps> = ({
  imageUrls,
  colGap,
  isVertical = false,
  onImageClick,
  showLabel = true,
}) => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      style={{ gap: `${colGap}px` }}
    >
      {imageUrls.map((img, i) => (
        <div
          key={i}
          className={`${
            isVertical ? "aspect-[2/3]" : "aspect-square"
          } w-full overflow-hidden cursor-pointer relative group`}
          onClick={() => onImageClick?.(img)}
        >
          <img
            src={img}
            alt={`image-${i}`}
            className="w-full h-full hover:brightness-50 transition duration-500 object-cover"
            loading="lazy"
          />

          {showLabel && (
            <div className="absolute inset-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
              <div className="p-2">
                {/* Ensure IconLoader is properly implemented */}
                <IconLoader link={cursor} styles="w-8 z-90 opacity-100 " />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Mansory;
