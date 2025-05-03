import React from "react";
import ImageSwitcher from "@/components/imageSwitch";
import imageUrl1 from "../../public/images/room1/s.png";
import bottomImage from "../../public/images/room1/3.jpg";
import imageUrl2 from "../../public/images/interior/7.jpg";
import imageUrl3 from "../../public/images/interior/9.jpg";
import CustomCaption from "@/components/CustomCaption";
import f1 from "../../public/images/room1/3.jpg";
import f2 from "../../public/images/room1/4.jpg";

const Room3 = () => {
  return (
    <div>
      <ImageSwitcher
        image1={imageUrl1}
        image2={imageUrl1}
        image3={imageUrl1}
        caption="NOVÝ SÁL"
        undertext="COMING SOON"
        description={`PLÁNUJEME PRO VÁS NOVÝ SÁL, KTERÝ SE OTEVŘE V LETĚ`}
        btnText="Rezervace"
      />

      <div className="min-h-screen flex flex-col justify-center items-center py-8 md:py-20">
        <CustomCaption
          title="Připravujeme pro vás nový sál"
          subtitle="Máte se na co těšit!"
          classProps="!py-10 md:!py-20"
        />
      </div>
    </div>
  );
};

export default Room3;
