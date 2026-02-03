"use client";
import { useState, useEffect } from "react";
import HoverFlipCard from "./HoverFlipCard";

const FlippingCardCarousel = ({ services = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    if (!services.length) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = Math.max(0, services.length - slidesToShow);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [services, slidesToShow]);

  const nextSlide = () => {
    const maxSlide = Math.max(0, services.length - slidesToShow);
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxSlide = Math.max(0, services.length - slidesToShow);
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => setCurrentSlide(index);

  const maxSlide = Math.max(0, services.length - slidesToShow);

  if (!services.length) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 relative mt-10 mb-10 overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
        }}
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex-none px-2 box-border "
            style={{ width: `${100 / slidesToShow}%` }}
          >
            <HoverFlipCard {...service} index={idx} />
          </div>
        ))}
      </div>

      {/* Controls + Dots */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-[var(--brand-secondary-hover)] text-white flex items-center justify-center border border-[var(--brand-secondary)]/30 hover:border-[var(--brand-secondary)]/50 transition-all duration-300"
        >
          ◀
        </button>

        {/* Dot Indicators */}
        <div className="flex space-x-2">
          {Array.from({ length: maxSlide + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === i
                  ? "bg-[var(--brand-secondary)]"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-[var(--brand-secondary-hover)] text-white flex items-center justify-center border border-[var(--brand-secondary)]/30 hover:border-[var(--brand-secondary)]/50 transition-all duration-300"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default FlippingCardCarousel;
