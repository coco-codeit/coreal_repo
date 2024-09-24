"use client";

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function useCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const sliderRef = useRef<Slider>(null);

  const onClickPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const onClickNext = () => {
    sliderRef.current?.slickNext();
  };

  const Carousel = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <Slider
      ref={sliderRef}
      {...settings}
      className={className ? className : ""}
    >
      {children}
    </Slider>
  );

  const CarouselBtns = ({ className }: { className?: string }) => (
    <div className={`flex flex-row gap-2 ${className ? className : ""}`}>
      <SlArrowLeft
        onClick={onClickPrev}
        className="cursor-pointer w-[30px] h-[30px] p-2 rounded-full text-gray-10 bg-gray-5 hover:bg-gray-3 active:bg-gray-5"
      />
      <SlArrowRight
        onClick={onClickNext}
        className="cursor-pointer w-[30px] h-[30px] p-2 rounded-full text-gray-10 bg-gray-5 hover:bg-gray-3 active:bg-gray-5"
      />
    </div>
  );
  return {
    Carousel,
    CarouselBtns,
  };
}
