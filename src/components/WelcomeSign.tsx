import { motion } from "framer-motion";
import "../styles/imgSwitch.css";
import { Link } from "react-router-dom";

const WelcomeSign = () => {
  const captureText = "CAPTURE THE ";
  const magicText = "MAGIC";

  return (
    <div className="w-[1000px] flex flex-col justify-start items-start gap-8">
      {/* CAPTURE THE - Písmena postupně vylézají zdola */}
      <div className="flex">
        <h1 className="text-7xl font-[Literata] flex">
          {captureText.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1, // Každé písmeno se objeví postupně
              }}
            >
              {letter === " " ? "\u00A0" : letter} {/* Zpracování mezer */}
            </motion.span>
          ))}
        </h1>

        {/* MAGIC - Přiletí zprava jako celek */}
        <motion.h1
          className="text-7xl font-[Literata] text-[#C6B081]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        >
          {magicText}
        </motion.h1>
      </div>

      <p className="w-[600px] text-[#C3C1B6]">
        Our studio specializes in creating unforgettable images capturing
        cherished memories and showcasing every radiant detail.
      </p>
      <Link to="/reservation">
        {" "}
        <p className="px-10 py-4 transition outline-[#C6B081]/50 text-[#C6B081] hover:text-white outline outline-solid duration-500 hover:bg-[#C6B081] w-fit">
          Create reservation
        </p>
      </Link>
    </div>
  );
};

export default WelcomeSign;
