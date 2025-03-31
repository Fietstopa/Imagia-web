import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/imgSwitch.css";
import { desc } from "framer-motion/client";
interface FlipLetterProps {
  letter: string;
  index: number;
}
const DURATION = 0.45;
const STAGGER = 0.025;
const FlipLetter: React.FC<FlipLetterProps> = ({ letter, index }) => (
  <span className="relative inline-block overflow-hidden">
    <motion.span
      initial={{ y: 0 }}
      animate={{ y: "-150%" }} // schová se výš
      transition={{
        duration: DURATION,
        ease: "easeInOut",
        delay: STAGGER * index,
      }}
      className="block"
    >
      {letter}
    </motion.span>
    <motion.span
      initial={{ y: "150%" }} // přiletí zespodu výš
      animate={{ y: 0 }}
      transition={{
        duration: DURATION,
        ease: "easeInOut",
        delay: STAGGER * index,
      }}
      className="block absolute inset-0"
    >
      {letter}
    </motion.span>
  </span>
);
interface WelcomeSignProps {
  captureText: String;
  magicText: String;
  desc: String;
}
const WelcomeSign: React.FC<WelcomeSignProps> = ({
  captureText,
  magicText,
  desc,
}) => {
  // const captureText = "„Fotografie má být odrazem ";
  // const magicText = "duše“";

  return (
    <div className="w-full max-w-[1000px] px-4 md:px-8 flex flex-col items-start gap-8 ">
      <div className="flex items-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-[Literata] flex ">
          {captureText.split("").map((letter, index) => (
            <FlipLetter
              key={index}
              letter={letter === " " ? "\u00A0" : letter}
              index={index}
            />
          ))}
        </h1>

        {/* MAGIC TEXT - flies in from the right */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-[Literata] text-[#C6B081] ml-2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: captureText.length * STAGGER,
          }}
        >
          {magicText}
        </motion.h1>
      </div>

      <p className="text-sm sm:text-base md:text-lg text-[#C3C1B6] max-w-[600px] w-full">
        {/* „Zachycujeme skutečné momenty s citem pro detail. Přirozeně,
        profesionálně a s důrazem na atmosféru.“ */}
        {desc}
      </p>

      <Link to="/reservation" className="w-fit">
        <p className="px-6 py-3 sm:px-10 sm:py-4 transition outline-[#C6B081]/50 text-[#C6B081] hover:text-white outline outline-solid duration-500 hover:bg-[#C6B081]">
          Vytvorit rezervaci
        </p>
      </Link>
    </div>
  );
};

export default WelcomeSign;
