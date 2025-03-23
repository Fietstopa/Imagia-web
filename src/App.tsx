import React from "react";
import ImageSwitcher from "./components/imageSwitch";
import Navbar from "./components/Navbar";
import BookingPage from "./components/bookingpage";
import CustomCaption from "./components/CustomCaption";
import PromoPageOne from "./screens/promoPageOne";
import Footer from "./components/Footer";
import IgCarousel from "./components/igCarousel";
import Galerija from "./components/Galerija";
// Ukázkové odkazy na obrázky
const imageUrl1 =
  "https://i.pinimg.com/736x/ee/53/dd/ee53ddddc8801eaa90470f5c25934df9.jpg";
const imageUrl2 =
  "https://i.pinimg.com/736x/3f/f8/c5/3ff8c540b646444e6f541e6d6d3c13d3.jpg";
const imageUrl3 =
  "https://i.pinimg.com/736x/9d/fd/10/9dfd106406fae9b232d8456a7d87be7f.jpg";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <ImageSwitcher image1={imageUrl1} image2={imageUrl2} image3={imageUrl3} />
      {/* <BookingPage></BookingPage> */}
      <PromoPageOne></PromoPageOne>
      <IgCarousel></IgCarousel>
      <Galerija></Galerija>
      <Footer></Footer>
    </div>
  );
}

export default App;
