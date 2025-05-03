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

        <div className="w-full px-4 md:px-8 lg:px-10 xl:px-20">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-10 h-full">
            {/* První obrázek - mobil nad textem, desktop vlevo */}
            <div className="md:order-1 w-full h-[300px] md:h-auto relative">
              <img
                src={f1}
                alt="Fotoateliér v Brně – snímek z ateliéru Imagia"
                className="w-full h-full object-cover shadow-lg md:p-5 p-4"
                loading="lazy"
              />
            </div>

            {/* Textový obsah - mobil uprostřed, desktop uprostřed */}
            <div className="md:order-2 flex items-center">
              <div className="text-[#777777] font-[Montserrat] space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose">
                <ul className="list-disc">
                  <li> Tenhle sál je opavdu perlou našeho studia</li>
                  <li>
                    {" "}
                    Sál <strong>AURORA</strong> je jedinečná lehkost a modernost
                    interiéru, jehož vintage detaily dodávají do každého záběru
                    nádech eleganci
                  </li>
                  <li className="text-[#C7AC81]">
                    {" "}
                    <strong>70m² rozhloha, 3 velká okna, klasický styl</strong>
                  </li>
                  <li>
                    Aurora je ideální volbou pro lidi, kteří milují estetiku
                  </li>
                  <li>
                    {" "}
                    Místnost jé rozdělena na dvě velké časti: ložnici a obývací
                    pokoj, což umožňuje focení různých stylů.
                  </li>
                  <li>
                    {" "}
                    V sale budete mit možnost fotit s denním světlem a také s
                    profesionálním vybavením GODOX, APATURE a NANLITE.
                  </li>
                </ul>
              </div>
            </div>

            {/* Druhý obrázek - mobil pod textem, desktop vpravo */}
            <div className="md:order-3 w-full h-[300px] md:h-auto relative">
              <img
                src={f2}
                alt="Druhý snímek z ateliéru Imagia v Brně"
                className="w-full h-full object-cover shadow-lg md:p-5 p-4"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room3;
