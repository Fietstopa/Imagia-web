import React from "react";
import ImageSwitcher from "@/components/imageSwitch";
import imageUrl1 from "../../public/images/interior/1.jpg";
import imageUrl2 from "../../public/images/interior/7.jpg";
import imageUrl3 from "../../public/images/interior/12.jpg";
import CustomCaption from "@/components/CustomCaption";
import photoLeft from "https://img.myloview.cz/obrazy/large-photo-studio-with-lighting-equipment-close-up-400-167426839.jpg";
const Room1 = () => {
  return (
    <div className="">
      <ImageSwitcher
        image1={imageUrl1}
        image2={imageUrl2}
        image3={imageUrl3}
        caption="Arch deco "
        undertext={"sál"}
        description={`„Arch Deco je elegantní prostor inspirovaný stylem art deco, kde dominují jemné oblouky a měkké světlo. Ideální pro portréty i umělecké focení s nádechem nadčasové estetiky.“`}
      />

      <div className="h-screen flex flex-col justify-center items-center">
        {" "}
        <CustomCaption
          title="Světlo a prostor"
          subtitle="Každý oblouk má svůj význam"
          classProps="!py-20"
        ></CustomCaption>
        <div className=" gap-40 grid grid-cols-[2fr_3fr] pb-20 px-50">
          <img src={imageUrl1} alt="" className="" />
          <p className="text-base lg:text-lg text-[#777777] font-[Montserrat] leading-relaxed text-left relative">
            Sál Arch Deco je elegantní prostor inspirovaný nadčasovým stylem art
            deco, kde dominují jemné oblouky, měkké světlo a promyšlená
            kompozice. <br />
            <br />
            Je ideální pro portrétní, párové i umělecké focení a působí
            přirozeně, přesto stylově. Každý detail byl navržen tak, aby
            podporoval vizuální harmonii a vytvářel příjemnou, inspirativní
            atmosféru. <br />
            <br />
            Díky předchozí domluvě nabízíme možnost{" "}
            <span className="font-bold">
              přizpůsobení sálu vašim konkrétním potřebám{" "}
            </span>
            – ať už jde o přesun nábytku, změnu dekorací, nebo úpravu světelného
            nastavení. Vaše vize je pro nás klíčová a rádi vám pomůžeme vytvořit
            ideální prostředí pro váš projekt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Room1;
