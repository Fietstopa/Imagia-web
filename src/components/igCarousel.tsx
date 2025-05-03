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

const IgCarousel = () => {
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
        // Because we're using custom buttons, we hide default arrows
        arrows={false}
        // Allow buttons to render outside the carousel container
        renderButtonGroupOutside
        // Use your custom arrow/button group
        customButtonGroup={<CustomButtonGroupAsArrows />}
        // Center the carousel within its container
        containerClass="mx-auto"
        // Center each item
        itemClass="flex justify-center px-2"
        dotListClass="custom-dot-list-style"
      >
        <InstagramEmbed
          url="https://www.instagram.com/reel/DHYStjGoFpN/"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DHCAkwIoPbo/"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DGkpCNEo3QQ/"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DFx_DtMofng/"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DH5xSipCbKs/"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DHbD7JzIAfE/"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DEe_gisoXRo/"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DIgfW3bopJ7/?igsh=aXBocDhzaWowZnNt"
          width={328}
        />
      </Carousel>
    </div>
  );
};

export default IgCarousel;
