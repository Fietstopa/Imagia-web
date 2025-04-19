import React from "react";

interface MansoryProps {
  imageUrls: string[];
  colGap: number;
  isVertical?: boolean;
  onImageClick?: (imgUrl: string) => void;
}

const Mansory: React.FC<MansoryProps> = ({
  imageUrls,
  colGap,
  isVertical = false,
  onImageClick,
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
          } w-full overflow-hidden cursor-pointer`}
          onClick={() => onImageClick?.(img)}
        >
          <img
            src={img}
            alt={`image-${i}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default Mansory;
