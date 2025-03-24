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
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="px-5 pb-5">
      <CustomCaption
        title="Our"
        subtitle="Instagram"
        classProps="py-10"
      ></CustomCaption>
      <Carousel
        responsive={responsive}
        infinite={true}
        dotListClass="custom-dot-list-style"
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButtonGroupAsArrows />}
      >
        <InstagramEmbed
          url="https://www.instagram.com/reel/DHYStjGoFpN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DHCAkwIoPbo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DGkpCNEo3QQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DFx_DtMofng/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/reel/DHYStjGoFpN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DHCAkwIoPbo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DGkpCNEo3QQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DFx_DtMofng/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
      </Carousel>
    </div>
  );
};

export default IgCarousel;
