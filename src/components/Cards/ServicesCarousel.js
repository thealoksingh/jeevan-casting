import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-3rem] top-1/2 -translate-y-1/2 z-10 
               bg-white/30 hover:bg-white/50 text-white 
               rounded-full w-14 h-14 flex items-center justify-center text-3xl"
  >
    ◀
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-3rem] top-1/2 -translate-y-1/2 z-10 
               bg-white/30 hover:bg-white/50 text-white 
               rounded-full w-14 h-14 flex items-center justify-center text-3xl"
  >
    ▶
  </button>
);

const ServicesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 relative">
      <Slider {...settings}>  
        <div className="flex-none py-5"> 
        <ProductCard />
        </div>
        <div className="flex-none py-5"> 
        <ProductCard />
        </div>
         <div className="flex-none py-5"> 
        <ProductCard />
        </div>
         <div className="flex-none py-5"> 
        <ProductCard />
        </div>
         <div className="flex-none py-5"> 
        <ProductCard />
        </div>
      </Slider>
    </div>
  );
};

export default ServicesCarousel;
