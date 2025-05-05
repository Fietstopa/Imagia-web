import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { InstagramEmbed } from "react-social-media-embed";
import CustomCaption from "./CustomCaption";
import {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows,
} from "./buttonsarrows";
import { div } from "framer-motion/client";

const IgCarousel = ({ instagramPosts = [] }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="px-5 pb-5">
      <CustomCaption
        title="Our"
        subtitle="Instagram"
        classProps="py-10 text-center"
      />
      <Carousel
        responsive={responsive}
        infinite
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<CustomButtonGroupAsArrows />}
        containerClass="mx-auto"
        itemClass="flex justify-center px-2"
        dotListClass="custom-dot-list-style"
      >
        {instagramPosts.map((postUrl, index) => (
          <div className="border-8 border-[#C8AD81]">
            {" "}
            <InstagramEmbed key={index} url={postUrl} width={328} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

// Výchozí hodnoty pro příklady (lze smazat)
IgCarousel.defaultProps = {
  instagramPosts: [
    "https://www.instagram.com/reel/DHYStjGoFpN/",
    "https://www.instagram.com/p/DHCAkwIoPbo/",
    "https://www.instagram.com/p/DGkpCNEo3QQ/",
    "https://www.instagram.com/p/DFx_DtMofng/",
    "https://www.instagram.com/p/DH5xSipCbKs/",
    "https://www.instagram.com/p/DHbD7JzIAfE/",
    "https://www.instagram.com/p/DEe_gisoXRo/",
    "https://www.instagram.com/p/DIgfW3bopJ7/",
  ],
};

export default IgCarousel;
