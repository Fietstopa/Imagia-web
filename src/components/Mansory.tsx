import React from "react";

interface MansoryProps {
  imageUrls: string[];
  colCount: number;
  colGap: number;
}

const Mansory: React.FC<MansoryProps> = ({ imageUrls, colCount, colGap }) => {
  return (
    <div className={`columns-${colCount}`} style={{ columnGap: `${colGap}px` }}>
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
