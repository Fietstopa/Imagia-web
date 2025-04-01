import React from "react";
import ImageSwitcher from "@/components/imageSwitch";
import imageUrl1 from "../../public/images/interior/1.jpg";
import imageUrl2 from "../../public/images/interior/7.jpg";
import imageUrl3 from "../../public/images/interior/12.jpg";
import CustomCaption from "@/components/CustomCaption";

const Room2 = () => {
  return (
    <div>
      <ImageSwitcher
        image1={imageUrl1}
        image2={imageUrl2}
        image3={imageUrl3}
        caption="Victorian White "
        undertext="sál"
        description={`Arch Deco je elegantní ateliér inspirovaný stylem art deco. Dominují v něm jemné oblouky, měkké světlo a nadčasová atmosféra. Ideální prostor pro portréty i umělecké focení.`}
        btnText="Rezervace"
      />

      <div className="min-h-screen flex flex-col justify-center items-center py-8 md:py-20">
        <CustomCaption
          title="Připravujeme pro vás nový sál"
          subtitle="Máte se na co těšit!"
          classProps="!py-10 md:!py-20"
        />

        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-50">
          <div className="flex flex-col md:grid md:grid-cols-[2fr_3fr] gap-6 md:gap-40 pb-8 md:pb-20">
            <img
              src={imageUrl1}
              alt="Victorian White interiér"
              className="w-full h-auto object-cover max-w-full mb-6 md:mb-0"
            />

            <p className="text-sm md:text-base lg:text-lg text-[#777777] font-[Montserrat] leading-relaxed text-left">
              Právě dokončujeme poslední detaily tohoto krásného prostoru. Už
              brzy bude otevřený pro vaše focení. Sledujte nás, ať vám neuteče
              jeho slavnostní spuštění. Bude to místo plné světla, elegance a
              inspirace. Těšíme se, až ho naplníte svými nápady a příběhy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room2;
