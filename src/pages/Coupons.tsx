import React from "react";
import CustomCaption from "@/components/CustomCaption";
import kupon from "/images/kupon.jpg";
import kupon2 from "/images/kupon2.jpg";

const Coupons = () => {
  return (
    <div
      className="w-dvw
 flex flex-col items-center pt-20 px-4 text-center"
    >
      <CustomCaption
        title="Darujte vzpomínku, která nezmizí"
        subtitle="Potěšte své blízké poukazem"
        classProps=""
      />
      <p className="text-lg lg:text-lg text-[#777777] font-[Montserrat] leading-relaxed text-left relative mb-10 max-w-xl">
        Všechny dárkové poukazy máme na pokladně a vystavíme vám je na
        jakoukoliv částku.
      </p>
      <div className="flex flex-col mb-10 gap-10 items-center max-w-[600px] w-full">
        <img src={kupon} alt="Dárkový poukaz 1" className=" shadow-lg w-full" />
        <img
          src={kupon2}
          alt="Dárkový poukaz 2"
          className=" shadow-lg w-full"
        />
      </div>
    </div>
  );
};

export default Coupons;
