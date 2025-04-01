// src/pages/Gallery.tsx
import Galerija from "../components/Galerija";
import { Helmet } from "react-helmet";

const Gallery = () => {
  return (
    <div className="p-10 bg-gray-100">
      <Helmet>
        <title>Galerie focení | Imagia fotostudio Brno</title>
        <meta
          name="description"
          content="Prohlédněte si galerii profesionálních fotografií z ateliéru Imagia v Brně. Portréty, párové focení, detaily interiéru a ukázky naší práce."
        />
        <link rel="canonical" href="https://www.imagiafotostudio.cz/gallery" />
        <meta
          property="og:title"
          content="Galerie focení | Imagia fotostudio Brno"
        />
        <meta
          property="og:description"
          content="Ukázky focení v ateliéru Imagia – portréty, páry, detaily interiéru. Inspirujte se našimi fotografiemi z Brna."
        />
        <meta
          property="og:image"
          content="https://www.imagiafotostudio.cz/images/interior/1.jpg"
        />
        <meta
          property="og:url"
          content="https://www.imagiafotostudio.cz/gallery"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Galerija />
    </div>
  );
};

export default Gallery;
