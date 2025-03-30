import { motion } from "framer-motion";
import CustomCaption from "../components/CustomCaption";
import f1 from "/images/foto1.jpg";
import f2 from "/images/foto2.jpg";
import mapimage from "/images/mapimage.png";

const PromoPageOne = () => {
  return (
    <div
      style={{ height: "calc(100vh - 54px)" }}
      className="overflow-x-hidden overflow-y-hidden relative"
    >
      <CustomCaption
        title="Každý snímek má smysl"
        subtitle="Každý detail má váhu"
        classProps="text-center md:text-6xl!"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-5 h-full">
        <motion.img
          src={f1}
          alt="Photo 1"
          className="md:pt-10 p-20"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="text-base lg:text-lg text-[#777777] font-[Montserrat] leading-relaxed text-left relative"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Vítejte v ateliéru Imagia – útulném a kreativním prostoru pro focení v
          srdci Brna. Najdete nás na ulici Milady Horákové, jen pár minut jízdy
          z centra města. <br /> <br /> Náš ateliér propojuje moderní fotografii
          s osobním a přívětivým přístupem – ideální pro portréty, rodinná
          focení nebo profesionální snímky. Přijet k nám je snadné: stačí
          naskočit na{" "}
          <span className="relative inline-block group text-[#C6B081] underline cursor-pointer">
            tramvaj číslo 9
            <img
              src={mapimage}
              alt="Mapa"
              className="hidden group-hover:block absolute top-[-160px] left-1/2 -translate-x-1/2 w-[500px] h-auto rounded-lg shadow-lg border border-gray-300 z-50"
            />
          </span>
          a jste doslova pár kroků od našich dveří. <br /> <br />
          Ať už chcete zachytit výjimečné vzpomínky, nebo vytvořit něco
          uměleckého, Imagia je to pravé místo, kde vaše vize ožívají. Už se
          nemůžeme dočkat, až vás přivítáme!
        </motion.p>

        <motion.img
          src={f2}
          alt="Photo 2"
          className="md:pt-10 p-20"
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default PromoPageOne;
