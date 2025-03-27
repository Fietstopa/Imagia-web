import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/imgSwitch.css";

const WelcomeSign = () => {
  const captureText = "CAPTURE THE ";
  const magicText = "MAGIC";

  return (
    <div className="w-full max-w-[1000px] px-4 md:px-8 flex flex-col items-start gap-8">
      {/* CAPTURE THE - each letter appears from below */}
      <div className="flex flex-wrap items-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-[Literata] flex">
          {captureText.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* MAGIC - flies in from the right as a whole */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-[Literata] text-[#C6B081] ml-2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        >
          {magicText}
        </motion.h1>
      </div>

      <p className="text-sm sm:text-base md:text-lg text-[#C3C1B6] max-w-[600px] w-full">
        Our studio specializes in creating unforgettable images capturing
        cherished memories and showcasing every radiant detail.
      </p>

      <Link to="/reservation" className="w-fit">
        <p className="px-6 py-3 sm:px-10 sm:py-4 transition outline-[#C6B081]/50 text-[#C6B081] hover:text-white outline outline-solid duration-500 hover:bg-[#C6B081]">
          Create reservation
        </p>
      </Link>
    </div>
  );
};

export default WelcomeSign;
