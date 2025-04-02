import React from "react";

interface MansoryProps {
  imageUrls: string[];
  colGap: number;
}

const Mansory: React.FC<MansoryProps> = ({ imageUrls, colGap }) => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      style={{ gap: `${colGap}px` }}
    >
      {imageUrls.map((img, i) => (
        <div key={i} className="aspect-square w-full overflow-hidden">
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

export default Mansory;
