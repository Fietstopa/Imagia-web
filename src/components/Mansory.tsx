import React from "react";

interface MansoryProps {
  imageUrls: string[];
  colGap: number;
}

const Mansory: React.FC<MansoryProps> = ({ imageUrls, colGap }) => {
  return (
    <div
      className={` md:columns-2 lg:columns-3 xl:columns-4`}
      style={{ columnGap: `${colGap}px` }}
    >
      {imageUrls.map((img, i) => (
        <img
          key={i}
          src={img}
          className="image block w-full"
          style={{ marginBottom: `${colGap}px` }}
          alt={`image-${i}`}
        />
      ))}
    </div>
  );
};

export default Mansory;
