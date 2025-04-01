import React from "react";
import ImageSwitcher from "@/components/imageSwitch";
import imageUrl1 from "../../public/images/interior/1.jpg";
import imageUrl2 from "../../public/images/interior/7.jpg";
import imageUrl3 from "../../public/images/interior/12.jpg";
import CustomCaption from "@/components/CustomCaption";
import { Helmet } from "react-helmet";

const Room1 = () => {
  return (
    <div className="">
      <Helmet>{/* Metadata zůstává stejné */}</Helmet>

      <ImageSwitcher
        image1={imageUrl1}
        image2={imageUrl2}
        image3={imageUrl3}
        caption="Arch deco "
        undertext={"sál"}
        description={`„Arch Deco je elegantní prostor inspirovaný stylem art deco, kde dominují jemné oblouky a měkké světlo. Ideální pro portréty i umělecké focení s nádechem nadčasové estetiky.“`}
        btnText={"rezervace"}
      />

      <div className="min-h-screen flex flex-col justify-center items-center py-8 md:py-20">
        <CustomCaption
          title="Světlo a prostor"
          subtitle="Každý oblouk má svůj význam"
          classProps="!py-10 md:!py-20"
        />

        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-50">
          <div className="flex flex-col md:grid md:grid-cols-[2fr_3fr] gap-8 md:gap-40 pb-8 md:pb-20">
            <img
              src={imageUrl1}
              alt="Interiér sálu Arch Deco"
              className="w-full h-auto object-cover max-w-full"
            />

            <p className="text-sm md:text-base lg:text-lg text-[#777777] font-[Montserrat] leading-relaxed text-left">
              Sál Arch Deco je elegantní prostor inspirovaný nadčasovým stylem
              art deco, kde dominují jemné oblouky, měkké světlo a promyšlená
              kompozice. <br className="hidden md:block" />
              <br className="hidden md:block" />
              Je ideální pro portrétní, párové i umělecké focení a působí
              přirozeně, přesto stylově. Každý detail byl navržen tak, aby
              podporoval vizuální harmonii a vytvářel příjemnou, inspirativní
              atmosféru. <br className="hidden md:block" />
              <br className="hidden md:block" />
              Díky předchozí domluvě nabízíme možnost{" "}
              <span className="font-bold">
                přizpůsobení sálu vašim konkrétním potřebám{" "}
              </span>
              – ať už jde o přesun nábytku, změnu dekorací, nebo úpravu
              světelného nastavení. Vaše vize je pro nás klíčová a rádi vám
              pomůžeme vytvořit ideální prostředí pro váš projekt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room1;
