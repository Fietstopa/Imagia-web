import React from "react";
import IconLoader from "./iconLoader";
import cursor from "/cursor.png"; // Make sure this path matches your project structure

interface MansoryDoubleProps {
  imageUrls: string[];
  colGap: number;
  wideItems?: number[];
  onImageClick?: (imgUrl: string) => void;
  showLabel?: boolean; // Added to control label visibility
}

const MansoryDouble: React.FC<MansoryDoubleProps> = ({
  imageUrls,
  colGap,
  wideItems = [],
  onImageClick,
  showLabel = true, // Default to showing the label
}) => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      style={{ gap: `${colGap}px` }}
    >
      {imageUrls.map((img, i) => (
        <div
          key={i}
          className={`w-full overflow-hidden cursor-pointer relative group ${
            wideItems.includes(i) ? "col-span-2 aspect-[2/1]" : "aspect-square"
          }`}
          onClick={() => onImageClick?.(img)}
        >
          <img
            src={img}
            alt={`image-${i}`}
            className="w-full h-full hover:brightness-50 transition duration-500 object-cover"
            loading="lazy"
          />

          {/* Hover cursor icon */}
          {showLabel && (
            <div className="absolute inset-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
              <div className="p-2">
                <IconLoader
                  link={cursor}
                  styles="w-8" // Adjust size as needed
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MansoryDouble;
