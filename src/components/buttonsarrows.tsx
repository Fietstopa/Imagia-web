import * as React from "react";

type ArrowProps = {
  onClick?: () => void;
};

const CustomLeftArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <i onClick={onClick} className="custom-left-arrow" />
);

const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <i onClick={onClick} className="custom-right-arrow" />
);

type CarouselState = {
  currentSlide: number;
  totalItems: number;
};

type ButtonGroupProps = {
  next?: () => void;
  previous?: () => void;
  goToSlide?: (index: number) => void;
  carouselState?: CarouselState;
};

const CustomButtonGroup: React.FC<ButtonGroupProps> = ({
  next,
  previous,
  goToSlide,
  carouselState,
}) => {
  const currentSlide = carouselState?.currentSlide ?? 0;
  const totalItems = carouselState?.totalItems ?? 0;

  return (
    <div className="custom-button-group">
      <div>Current slide is {currentSlide}</div>
      <button onClick={previous}>Previous slide</button>
      <button onClick={next}>Next slide</button>
      <button
        onClick={() => {
          if (goToSlide) {
            goToSlide(Math.floor(Math.random() * totalItems));
          }
        }}
      >
        Go to a random slide
      </button>
    </div>
  );
};
const CustomButtonGroupAsArrows: React.FC<{
  next?: () => void;
  previous?: () => void;
}> = ({ next, previous }) => {
  return (
    <div className="text-center space-x-4 mt-4">
      <button
        onClick={previous}
        className="bg-[#C6B081] text-white px-4 py-2 hover:bg-gray-700 transition"
      >
        &lt;-
      </button>
      <button
        onClick={next}
        className="bg-[#C6B081] text-white px-4 py-2 hover:bg-gray-700 transition"
      >
        -&gt;
      </button>
    </div>
  );
};

export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows,
};
