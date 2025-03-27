import { motion } from "framer-motion";
import CustomCaption from "../components/CustomCaption";
import f1 from "/images/foto1.jpg";
import f2 from "/images/foto2.jpg";

const PromoPageOne = () => {
  return (
    // "overflow-x-hidden" helps prevent a horizontal scrollbar
    // when elements animate in from off-screen.
    <div className="flex flex-col items-center justify-center px-5 overflow-x-hidden w-full">
      <CustomCaption
        title="Capture & Celebrate:"
        subtitle="Studio for Photography and Events"
        classProps="text-center md:text-6xl!"
      />

      {/* For smaller screens => column; md+ => row */}
      <div className="flex flex-col md:flex-row gap-10 md:mt-8 w-full">
        {/* First image: flies in from the left */}
        <motion.img
          src={f1}
          alt="Photo 1"
          className="w-full md:w-1/3 h-auto md:pt-20"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Text: rises up from the bottom 
            Use smaller text on mobile (text-base) and bigger on md+ (text-lg) */}
        <motion.p
          className="text-base md:text-lg text-[#777777] font-[Montserrat] leading-relaxed max-w-md text-center md:text-left"
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

        {/* Second image: flies in from the right */}
        <motion.img
          src={f2}
          alt="Photo 2"
          className="w-full md:w-1/3 h-auto md:pt-20"
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
