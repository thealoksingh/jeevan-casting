"use client";
import { useState, useEffect } from "react";
import ProductCard1 from "./ProductCard1";

const ServicesCarousel1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const services = [
    {
      title: "Talent Discovery & Scouting",
      description:
        "Nationwide talent hunting for fresh faces and experienced actors across all age groups and demographics.",
      category: "Talent Acquisition",
      image:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Casting Direction Services",
      description:
        "Expert casting direction for films, TV shows, and digital content with precise character matching.",
      category: "Casting Direction",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Artist Portfolio Development",
      description:
        "Professional portfolio creation, headshots, and showreel development for aspiring artists.",
      category: "Artist Development",
      image:
        "https://images.unsplash.com/photo-1563341932-0c7e1870d40f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Audition Management",
      description:
        "Complete audition process management from scheduling to final selection for production houses.",
      category: "Production Support",
      image:
        "https://plus.unsplash.com/premium_photo-1661675440353-6a6019c95bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Celebrity Management",
      description:
        "End-to-end celebrity coordination, contract negotiations, and production logistics management.",
      category: "Celebrity Services",
      image:
        "https://images.unsplash.com/photo-1619164816991-22d393238d8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = Math.max(0, services.length - slidesToShow);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length, slidesToShow]);

  const nextSlide = () => {
    const maxSlide = Math.max(0, services.length - slidesToShow);
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxSlide = Math.max(0, services.length - slidesToShow);
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const maxSlide = Math.max(0, services.length - slidesToShow);

  return (
    <div className="max-w-7xl mx-auto px-4 relative overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out py-5"
        style={{
          transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-none px-2" // small gap between cards
            style={{ width: `${100 / slidesToShow}%` }} // each card width = container / visible cards
          >
            <ProductCard1 {...service} />
          </div>
        ))}
      </div>

      {/* Dots + Buttons */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-[var(--brand-secondary-hover)] text-white flex items-center justify-center border border-[var(--brand-secondary)]/30 hover:border-[var(--brand-secondary)]/50 transition-all duration-300"
        >
          ◀
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[var(--brand-secondary)]"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            />
          ))}
        </div>

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

export default ServicesCarousel1;
