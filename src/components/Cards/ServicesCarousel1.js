"use client";
import { useState, useEffect } from "react";
import ProductCard1 from "./ProductCard1";

const ServicesCarousel1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const services = [
    {
      title: "AI & Intelligent Solutions",
      description:
        "Predictive analytics, Vision AI (KEYE), and anomaly detection systems for manufacturing and smart cities.",
      category: "Artificial Intelligence",
      image: "/ai-robot-technology-futuristic.jpg",
    },
    {
      title: "Surveillance & Security Systems",
      description:
        "Advanced IP cameras, access control, and AI-enabled monitoring solutions for enterprises and government facilities.",
      category: "Security Technology",
      image: "/cctv.jpg",
    },
    {
      title: "Smart Infrastructure Solutions",
      description:
        "Comprehensive IT networking, cloud integration, and IoT device management for modern workplaces.",
      category: "Infrastructure",
      image: "/smart-city-infrastructure-technology.jpg",
    },
    {
      title: "Industry-Specific Smart Solutions",
      description:
        "Custom automation tools and digital workflow solutions for manufacturing, retail, and education sectors.",
      category: "Custom Solutions",
      image: "/industrial-automation-manufacturing.jpg",
    },
    {
      title: "SmartOps Applications",
      description:
        "Operations dashboards, process automation, and data insights for Industry 4.0 digital transformation.",
      category: "Operations",
      image: "/digital-dashboard-analytics-operations.jpg",
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
