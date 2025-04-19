import React from "react";
import ImageSwitcher from "@/components/imageSwitch";
import imageUrl1 from "../../public/images/room1/COMINGSOON.png";
import imageUrl2 from "../../public/images/interior/7.jpg";
import imageUrl3 from "../../public/images/interior/9.jpg";
import CustomCaption from "@/components/CustomCaption";

const Room2 = () => {
  return (
    <div>
      <ImageSwitcher
        image1={imageUrl1}
        image2={imageUrl2}
        image3={imageUrl3}
        caption="AURORA"
        undertext="SÁL"
        description={` Tenhle sál je fakt perla našeho studia. Jedinečná lehkost a
              modernost interiéru dodají každému vašemu záběrů nádech elegance.
         
             `}
        btnText="Rezervace"
      />

      <div className="min-h-screen flex flex-col justify-center items-center py-8 md:py-20">
        <CustomCaption
          title="Připravujeme pro vás nový sál"
          subtitle="Máte se na co těšit!"
          classProps="!py-10 md:!py-20"
        />

        <div className="w-full px-4 md:px-8 lg:px-10 xl:px-20">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-2 md:gap-20 pb-8 md:pb-20">
            <img
              src={imageUrl1}
              alt="Victorian White interiér"
              className="w-full h-auto object-cover max-w-full mb-6 md:mb-0"
            />

            <p className="text-sm md:text-base lg:text-lg text-[#777777] font-[Montserrat] leading-relaxed text-left">
              Tenhle sál je fakt perla našeho studia. Jedinečná lehkost a
              modernost interiéru dodají každému vašemu záběrů nádech elegance.
              <br /> <br />
              Krémový, útulný interiér, luxusní lustry a vintage křeslo
              vytvářejí atmosféru, která je ideální pro focení.
              <br /> <br /> Místnost je rozdělena na dvě velké části: ložnici a
              obývací pokoj, což umožňuje focení různých stylů.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room2;
