import React from "react";

interface MansoryDoubleProps {
  imageUrls: string[];
  colGap: number;
  wideItems?: number[]; // Array of indices that should be wider (2:1 ratio)
  onImageClick?: (imgUrl: string) => void; // Added click handler prop
}

const MansoryDouble: React.FC<MansoryDoubleProps> = ({
  imageUrls,
  colGap,
  wideItems = [],
  onImageClick, // Added to destructured props
}) => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      style={{ gap: `${colGap}px` }}
    >
      {imageUrls.map((img, i) => (
        <div
          key={i}
          className={`w-full overflow-hidden cursor-pointer ${
            wideItems.includes(i) ? "col-span-2 aspect-[2/1]" : "aspect-square"
          }`}
          onClick={() => onImageClick?.(img)} // Added click handler
        >
          <img
            src={img}
            alt={`image-${i}`}
            className="w-full h-full object-cover"
            loading="lazy" // Added for better performance
          />
        </div>
      ))}
    </div>
  );
};

export default MansoryDouble;
