import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/imgSwitch.css";

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
      animate={{ y: "-150%" }}
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
      initial={{ y: "150%" }}
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
  buttonText: String;
}

const WelcomeSign: React.FC<WelcomeSignProps> = ({
  captureText,
  magicText,
  desc,
  buttonText,
}) => {
  return (
    <div className="w-full max-w-[1400px] px-2 sm:px-4 md:px-8 flex flex-col items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8">
      {/* Upravený header container pro responzivitu */}
      <div className="flex flex-col  lg:flex-row xs:items-baseline gap-1 xs:gap-2">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Literata] flex">
          {captureText.split("").map((letter, index) => (
            <FlipLetter
              key={index}
              letter={letter === " " ? "\u00A0" : letter}
              index={index}
            />
          ))}
        </h1>

        <motion.h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-[Literata] text-[#C6B081] xs:ml-1 sm:ml-2"
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

      {/* Upravený popisek pro responzivitu */}
      <p className="text-lg xs:text-lg sm:text-base md:text-xl text-[#C3C1B6] w-full max-w-full sm:max-w-[600px]">
        {desc}
      </p>

      {/* Responzivní tlačítko */}
      <Link to="/reservation" className="w-fit">
        <p
          className="px-3 py-1 xs:px-4 xs:py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 
          transition outline-[#C6B081]/50 text-[#C6B081] hover:text-white 
          outline outline-solid duration-500 hover:bg-[#C6B081] 
          text-base xs:text-base sm:text-base"
        >
          {buttonText}
        </p>
      </Link>
    </div>
  );
};

export default WelcomeSign;
