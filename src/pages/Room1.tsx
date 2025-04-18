import React from "react";
import ImageSwitcher from "@/components/imageSwitch";
import imageUrl1 from "../../public/images/interior/2.jpg";
import imageUrl2 from "../../public/images/interior/7.jpg";
import imageUrl3 from "../../public/images/interior/9.jpg";
import CustomCaption from "@/components/CustomCaption";
import { Helmet } from "react-helmet";
import ImageLeft from "/images/vertical/5.jpg"; // Nahraď reálnými cestami
import ImageRight from "/images/vertical/6.jpg";
import MansoryDd from "@/components/Mansory";
import MansoryDouble from "@/components/MansoryDouble";
const Room1 = () => {
  const images = [
    "/images/interior/1.jpg",
    "/images/interior/2.jpg",
    "/images/interior/3.jpg",
    "/images/interior/4.jpg",
    "/images/interior/5.jpg",
    "/images/interior/6.jpg",
    "/images/interior/7.jpg",
    "/images/interior/8.jpg",
    "/images/interior/9.jpg",
    "/images/interior/10.jpg",
  ];
  return (
    <div className="bg-white">
      <Helmet>
        <title>Arch Deco – Sál | Imagia fotoateliér</title>
        <meta
          name="description"
          content="Sál Arch Deco kombinuje minimalistický interiér, papírové pozadí a profesionální vybavení. Vhodný pro portréty, svatební focení i video tvorbu."
        />
      </Helmet>

      <ImageSwitcher
        image1={imageUrl1}
        image2={imageUrl2}
        image3={imageUrl3}
        caption="ARCH DECO"
        undertext="SÁL"
        description="Arch Deco je elegantní prostor, kde dominují jemné oblouky a měkké světlo.  Ideální prostředí pro portrétní i umělecké focení s nadčasovou atmosférou."
        btnText="Rezervace"
      />

      <div className="min-h-screen flex flex-col justify-center items-center py-10 ">
        <CustomCaption
          title="SÁL"
          subtitle="ARCH DECO"
          classProps="!py-10 md:!py-20"
        />
        <div className="w-full px-10">
          {/* Úvodní sekce – obrázek a text */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-20 pb-10 md:pb-20">
            <img
              src={imageUrl1}
              alt="Interiér sálu Arch Deco"
              className="w-full h-auto object-cover shadow-md"
            />

            <div className="text-sm md:text-base lg:text-lg text-[#555] font-[Montserrat] leading-relaxed space-y-6">
              <p>
                Sál <strong>„Arch Deco“</strong> je ideálním místem pro
                realizaci vašich kreativních nápadů. Spojuje minimalistický
                interiér s praktickými prvky, jako jsou velká okna, texturovaná
                zeď a pohodlná kožená pohovka. Využít můžete profesionální
                vybavení – dýmový stroj, trvalá i záblesková světla, barevné
                osvětlení a projektor Gobo.
              </p>
              <p>
                Perfektní pro <strong>svatební focení</strong>,{" "}
                <strong>love story</strong>, <strong>portréty</strong>,{" "}
                <strong>komerční fotografie</strong> i{" "}
                <strong>tvorbu video obsahu</strong>.
              </p>
            </div>
          </div>

          {/* Tmavá sekce – obrázek, text, obrázek */}
        </div>
        <div className="bg-[#1a1a1a] text-white py-20   flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Levý obrázek */}
          <div className="w-full md:w-1/4">
            <img
              src={ImageLeft}
              alt="Dekorace vlevo"
              className="w-full left-0 h-auto object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col font-[Montserrat] m-auto  ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Vybaveni
            </h2>
            <ul className="list-disc pl-5 text-lg space-y-2">
              <li>Rozloha: 40 m²</li>
              <li>Bílá podlaha</li>
              <li>Dřevěné panely v černé a bílé barvě</li>
              <li>Dvě okna s blackout závěsy</li>
              <li>Dva černé oblouky jako akcenty</li>
              <li>Nábytek včetně dřevěné komody</li>
              <li>Papírové pozadí ve 4 barvách</li>
              <li>Studiové světlo Godox a Nanlite</li>
            </ul>
          </div>
          {/* Pravý obrázek */}
          <div className="w-full md:w-1/4">
            <img
              src={ImageRight}
              alt="Dekorace vpravo"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="px-10 p-20">
          {" "}
          <CustomCaption
            title="Fotky z ateliéru"
            subtitle=""
            classProps="text-4xl"
          />
          <MansoryDouble
            imageUrls={images}
            colGap={10}
            wideItems={[1, 5]}
          ></MansoryDouble>
        </div>
      </div>
    </div>
  );
};

export default Room1;
