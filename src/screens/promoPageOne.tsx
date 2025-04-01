import { motion } from "framer-motion";
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
          <motion.div
            className="md:order-1 w-full h-[300px] md:h-auto relative"
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={f1}
              alt="Fotoateliér v Brně – snímek z ateliéru Imagia"
              className="w-full h-full object-cover rounded-lg shadow-lg md:p-10 p-4"
            />
          </motion.div>

          {/* Textový obsah - mobil uprostřed, desktop uprostřed */}
          <motion.div
            className="md:order-2 flex items-center"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
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
                <a className="relative group text-[#C6AB81] font-bold underline cursor-pointer hover:text-[#ae945f] transition-colors">
                  Tramvaj číslo 9{" "}
                  <span className="absolute hidden md:group-hover:block top-full left-1/2 -translate-x-1/2 w-[280px] md:w-[450px] text-white text-sm font-sans px-3 py-2 bg-[#1F1A16] shadow-lg z-50 rounded-md">
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-[#1F1A16]"></span>
                    <p className="mb-2 font-medium">Cesta z ul. České k nám</p>
                    <img
                      src={mapimage}
                      alt="Mapa k ateliéru Imagia"
                      className="rounded-md"
                    />
                  </span>
                </a>{" "}
                a jste doslova pár kroků od našich dveří.
              </p>

              <p>
                Ať už chcete zachytit výjimečné vzpomínky, nebo vytvořit něco
                uměleckého, Imagia je to pravé místo, kde vaše vize ožívají. Už
                se nemůžeme dočkat, až vás přivítáme!
              </p>
            </div>
          </motion.div>

          {/* Druhý obrázek - mobil pod textem, desktop vpravo */}
          <motion.div
            className="md:order-3 w-full h-[300px] md:h-auto relative"
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={f2}
              alt="Druhý snímek z ateliéru Imagia v Brně"
              className="w-full h-full object-cover rounded-lg shadow-lg md:p-10 p-4"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PromoPageOne;
