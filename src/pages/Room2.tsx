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

      <div className="h-screen flex flex-col justify-center items-center">
        <CustomCaption
          title="Připravujeme pro vás nový sál"
          subtitle="Máte se na co těšit!"
          classProps="!py-20"
        />
        <div className="gap-40 grid grid-cols-[2fr_3fr] pb-20 px-50">
          <img src={imageUrl1} alt="Victorian White interiér" />
          <p className="text-base lg:text-lg text-[#777777] font-[Montserrat] leading-relaxed text-left">
            Právě dokončujeme poslední detaily tohoto krásného prostoru. Už brzy
            bude otevřený pro vaše focení. Sledujte nás, ať vám neuteče jeho
            slavnostní spuštění. Bude to místo plné světla, elegance a
            inspirace. Těšíme se, až ho naplníte svými nápady a příběhy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Room2;
