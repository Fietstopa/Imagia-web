// src/pages/Gallery.tsx
import Galerija from "../components/Galerija";
import { Helmet } from "react-helmet";

const Gallery = () => {
  return (
    <div className="p-10 bg-gray-100">
      <Galerija />
    </div>
  );
};

export default Gallery;
