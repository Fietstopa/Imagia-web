import CustomCaption from "../components/CustomCaption";
import f1 from "/images/foto1.jpg";
import f2 from "/images/foto2.jpg";
import mapimage from "/images/mapimage.png";
import { Helmet } from "react-helmet";

const PromoPageOne = () => {
  return (
    <>
      <div
        style={{ minHeight: "calc(100vh - 54px)" }}
        className="overflow-x-hidden relative py-8 md:py-0"
      >
        <Helmet>
          <title>Imagia Ateliér Brno | Profesionální Fotoateliér</title>
          <meta
            name="description"
            content="Profesionální fotoateliér v Brně nabízející portrétní, rodinné a produktové focení v moderním prostředí."
          />
        </Helmet>

        <CustomCaption
          title="Každý snímek má smysl"
          subtitle="Každý detail má váhu"
          classProps="text-center text-4xl md:text-6xl px-4 mb-8 md:mb-12"
        />

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-8 lg:px-12 h-full">
          {/* První obrázek - mobil nad textem, desktop vlevo */}
          <div className="md:order-1 w-full h-[300px] md:h-auto relative">
            <img
              src={f1}
              alt="Fotoateliér v Brně – snímek z ateliéru Imagia"
              className="w-full h-full object-cover rounded-lg shadow-lg md:p-10 p-4"
            />
          </div>

          {/* Textový obsah - mobil uprostřed, desktop uprostřed */}
          <div className="md:order-2 flex items-center">
            <div className="text-[#777777] font-[Montserrat] space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose">
              <p>
                Vítejte v ateliéru Imagia – útulném a kreativním prostoru pro
                focení v srdci Brna. Najdete nás na ulici Milady Horákové, jen
                pár minut jízdy z centra města.
              </p>

              <p>
                Náš ateliér propojuje moderní fotografii s osobním a přívětivým
                přístupem – ideální pro portréty, rodinná focení nebo
                profesionální snímky. Přijet k nám je snadné: stačí naskočit na{" "}
                <a className="relative group text-[#C6AB81] font-bold underline  transition-colors">
                  Tramvaj číslo 9{" "}
                </a>{" "}
                a jste doslova pár kroků od našich dveří.
              </p>

              <p>
                Ať už chcete zachytit výjimečné vzpomínky, nebo vytvořit něco
                uměleckého, Imagia je to pravé místo, kde vaše vize ožívají. Už
                se nemůžeme dočkat, až vás přivítáme!
              </p>
            </div>
          </div>

          {/* Druhý obrázek - mobil pod textem, desktop vpravo */}
          <div className="md:order-3 w-full h-[300px] md:h-auto relative">
            <img
              src={f2}
              alt="Druhý snímek z ateliéru Imagia v Brně"
              className="w-full h-full object-cover rounded-lg shadow-lg md:p-10 p-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoPageOne;
