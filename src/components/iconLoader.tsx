import { img } from "framer-motion/client";
import React from "react";

interface icoProps {
  link: string;
  styles?: string;
}

const IconLoader: React.FC<icoProps> = ({ link, styles }) => {
  return (
    <>
      <img src={link} className={styles} alt="" />
    </>
  );
};

export default IconLoader;
