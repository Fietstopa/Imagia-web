import React from "react";
import ImageSwitcher from "@/components/imageSwitch";
import imageUrl1 from "../../public/images/room1/1.jpg";
import imageUrl2 from "../../public/images/room1/2.jpg";
import imageUrl3 from "../../public/images/room1/3.jpg";
import imageUrlV1 from "../../public/images/room1/6.jpg";
import imageUrlV2 from "../../public/images/room1/7.jpg";
import imageUrlV3 from "../../public/images/room1/8.jpg";

import CustomCaption from "@/components/CustomCaption";
import f1 from "../../public/images/room1/4.jpg";
import f2 from "../../public/images/room1/5.jpg";

const Room2 = () => {
  return (
    <div>
      <ImageSwitcher
        imageDesktop1={imageUrl1}
        imageDesktop2={imageUrl2}
        imageDesktop3={imageUrl3}
        imageMobile1={imageUrlV1}
        imageMobile2={imageUrlV2}
        imageMobile3={imageUrlV3}
        caption="AURORA"
        undertext="SÁL"
        description={`Tenhle sál je opravdu perla našeho studia. Jedinečná lehkost a modernost interiéru dodají každému vašemu záběru nádech elegance.`}
        btnText="Rezervace"
      />

      <div className="min-h-screen flex flex-col justify-center items-center py-10 md:py-20 px-4 md:px-10">
        <CustomCaption
          title="Sál"
          subtitle="Aurora"
          classProps="!py-10 md:!py-20"
        />

        {/* Sekce obrázek + text */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 pb-10 md:pb-20 w-full">
          <img
            src={imageUrl1}
            alt="Interiér sálu Aurora"
            className="w-full h-auto object-cover shadow-md "
          />

          <div className="text-sm md:text-base lg:text-lg text-[#555] font-[Montserrat] leading-relaxed space-y-6">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>70 m²</strong> světla, prostoru a inspirace pro vaši
                tvorbu
              </li>
              <li>
                Tento sál je <strong>opravdovým klenotem</strong> našeho studia.
                Každý jeho kout byl navržen s důrazem na detail a s láskou k
                estetice.
              </li>
              <li>
                <strong>Krémové tóny</strong> vytvářejí klidnou a elegantní
                atmosféru, která je ideální pro focení{" "}
                <strong>
                  portrétů, produktových snímků i svatebních fotek
                </strong>
                .
              </li>
              <li>
                Díky <strong>velkým oknům</strong> je sál zaplaven{" "}
                <strong>přirozeným světlem</strong>, které krásně modeluje scénu
                a podtrhuje každý detail.
              </li>
              <li>
                Ať už jste <strong>fotograf, influencer</strong> nebo jen
                hledáte krásné místo pro svou tvorbu,{" "}
                <strong>tenhle sál vás inspiruje</strong> hned, jak do něj
                vstoupíte.
              </li>
            </ul>
          </div>
        </div>

        {/* Sekce foto - text - foto */}
        <div className="w-full">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-10">
            {/* Obrázek vlevo (na mobilu nahoře) */}
            <div className="md:order-1 w-full h-[300px] md:h-auto">
              <img
                src={f1}
                alt="Fotoateliér Imagia"
                className="w-full h-full object-cover shadow-lg  md:p-4 p-2"
                loading="lazy"
              />
            </div>

            {/* Text uprostřed */}
            <div className="md:order-2 flex items-center">
              <div className="text-[#777777] font-[Montserrat] text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>3 velká okna</strong> s mramorovými parapety
                  </li>
                  <li>
                    <strong>Ložnice a obývací pokoj</strong> oddělené skleněnými
                    dveřmi
                  </li>
                  <li>Bílá pohovka, postel, noční stolek, nástěnná svítidla</li>
                  <li>Krb, vintage zrcadlo, stylové židle, 2 lustry</li>
                  <li>
                    Profesionální vybavení{" "}
                    <strong>značek Godox a Nanlite je v ceně</strong>
                  </li>
                  <li>
                    Ideální pro{" "}
                    <strong>rodinné, svatební a portrétní focení</strong> i
                    tvorbu obsahu
                  </li>
                </ul>
              </div>
            </div>

            {/* Obrázek vpravo (na mobilu dole) */}
            <div className="md:order-3 w-full h-[300px] md:h-auto">
              <img
                src={f2}
                alt="Ateliér Imagia – Aurora"
                className="w-full h-full object-cover shadow-lg  md:p-4 p-2"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Závěrečný odstavec */}
        <div className="text-[#777777] font-[Montserrat] text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose pt-10 md:pt-16 pb-20 text-center px-2 md:px-10">
          <p>
            <strong>Sál je ideální</strong> pro rodinné, individuální a svatební
            focení, stejně tak i pro{" "}
            <strong>
              tvorbu obsahu, natáčení podcastů a business portréty
            </strong>
            .
          </p>
          <p className="mt-4 font-semibold">Těšíme se na vás!</p>
        </div>
      </div>
    </div>
  );
};

export default Room2;
