import React from "react";
import CustomCaption from "../components/CustomCaption";
import f1 from "/foto1.jpg";
import f2 from "/foto2.jpg";

const PromoPageOne = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 ">
      <CustomCaption
        title="Capture & Celebrate:"
        subtitle="Studio for Photography and Events"
        classProps=""
      />

      <div className="flex flex-col md:flex-row  gap-10 mt-8 w-100vw">
        {/* První obrázek */}
        <img src={f1} alt="Photo 1" className="w-full md:w-1/3 h-auto pt-20" />

        {/* Text uprostřed */}
        <p className="text-base text-[#777777] font-[Montserrat] leading-relaxed max-w-md text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis
          deleniti quia culpa praesentium distinctio nostrum exercitationem amet
          odit! Excepturi vero esse molestiae <br /> <br />
          veniam facilis ducimus deserunt! Officia recusandae, incidunt in omnis
          aliquid explicabo impedit unde perspiciatis nisi assumenda! Autem
          beatae, magni dolor sint ab nulla <br /> <br /> laborum omnis expedita
          eveniet voluptate quos a consequatur corrupti perferendis quas
          deserunt fuga saepe!
        </p>

        {/* Druhý obrázek */}
        <img src={f2} alt="Photo 2" className="w-full md:w-1/3 h-auto pt-20 " />
      </div>
    </div>
  );
};

export default PromoPageOne;
