// src/pages/Home.tsx
import ImageSwitcher from "../components/imageSwitch";
import PromoPageOne from "../screens/promoPageOne";
import IgCarousel from "../components/igCarousel";
import imageUrl1 from "../../public/images/interior/1.jpg";
import imageUrl2 from "../../public/images/interior/7.jpg";
import imageUrl3 from "../../public/images/interior/12.jpg";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <ImageSwitcher
        image1={imageUrl1}
        image2={imageUrl2}
        image3={imageUrl3}
        caption="„Fotografie má být odrazem "
        undertext={"duše“"}
        description={`„Zachycujeme skutečné momenty s citem pro detail. 
          Přirozeně, profesionálně a s důrazem na atmosféru.“`}
      />
      <PromoPageOne />
      <IgCarousel />
    </div>
  );
};

export default Home;
