import React from "react";

interface TitleProps {
  title: string;
  subtitle: string;
  classProps: string;
}

const CustomCaption: React.FC<TitleProps> = ({
  title,
  subtitle,
  classProps,
}) => {
  return (
    <div
      className={`flex py-15 flex-col items-center justify-center md:text-5xl text-2xl font-[Literata] ${classProps}`}
    >
      <h1 className="text-black">{title}</h1>
      <h1 className="text-[#C6B081]">{subtitle}</h1>
    </div>
  );
};

export default CustomCaption;
