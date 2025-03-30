import { motion } from "framer-motion";
import CustomCaption from "../components/CustomCaption";
import f1 from "/images/foto1.jpg";
import f2 from "/images/foto2.jpg";

const PromoPageOne = () => {
  return (
    <div className="">
      <CustomCaption
        title="Capture & Celebrate:"
        subtitle="Studio for Photography and Events"
        classProps="text-center md:text-6xl!"
      />

      <div className="grid-cols-1 sm:grid-cols-3 grid gap-10 px-5 overflow-hidden">
        <motion.img
          src={f1}
          alt="Photo 1"
          className="md:pt-20 p-10"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="text-base lg:text-lg text-[#777777] font-[Montserrat] leading-relaxed  text-center "
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Welcome to Imagia, a cozy and creative photo studio nestled in the
          heart of Brno. You’ll find us on Milady Horákové Street, just a short
          ride from the city center.
          <br /> <br />
          Our studio blends modern photography with a warm, personal touch —
          perfect for portraits, family sessions, or professional shoots.
          Getting here is easy: simply hop on{" "}
          <span className="font-bold">tram number 9</span> and you’ll arrive
          just steps away from our door.
          <br />
          <br />
          Whether you're looking to capture special memories or create something
          artistic, Imagia is the perfect place to bring your vision to life. We
          can’t wait to welcome you!
        </motion.p>

        {/* Druhý obrázek: animuje se zprava */}
        <motion.img
          src={f2}
          alt="Photo 2"
          className=" md:pt-20  p-10"
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
