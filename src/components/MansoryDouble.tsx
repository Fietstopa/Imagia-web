import React from "react";

interface MansoryProps {
  imageUrls: string[];
  colGap: number;
  wideItems?: number[]; // Array of indices that should be wider (2:1 ratio)
}

const MansoryDouble: React.FC<MansoryProps> = ({
  imageUrls,
  colGap,
  wideItems = [],
}) => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      style={{ gap: `${colGap}px` }}
    >
      {imageUrls.map((img, i) => (
        <div
          key={i}
          className={`w-full overflow-hidden ${
            wideItems.includes(i) ? "col-span-2 aspect-[2/1]" : "aspect-square"
          }`}
        >
          <img
            src={img}
            alt={`image-${i}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default MansoryDouble;
