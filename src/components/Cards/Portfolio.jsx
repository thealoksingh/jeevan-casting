import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const services = [
  {
    title: "Talent Discovery & Scouting",
    description:
      "Comprehensive nationwide talent hunting services to discover fresh faces and experienced actors across all age groups and demographics. Our expert scouts travel across India to identify unique talents that match specific character requirements for various entertainment projects.",
    category: "Talent Acquisition",
    image:
      "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Casting Direction Services",
    description:
      "Professional casting direction for films, television shows, web series, and digital content with precise character matching. Our experienced casting directors understand the nuances of storytelling and ensure perfect artist-character alignment for memorable performances.",
    category: "Casting Direction",
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Artist Portfolio Development",
    description:
      "Complete artist development services including professional portfolio creation, high-quality headshots, showreel production, and career guidance. We help aspiring artists build compelling profiles that showcase their versatility and talent to industry professionals.",
    category: "Artist Development",
    image:
      "https://images.unsplash.com/photo-1570834322056-ba3e2994ab85?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Audition Management",
    description:
      "End-to-end audition process management from initial scheduling to final artist selection for production houses. Our systematic approach ensures efficient audition workflows, proper documentation, and seamless coordination between artists and production teams.",
    category: "Production Support",
    image:
      "https://plus.unsplash.com/premium_photo-1664302907956-bfb009c075fd?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Celebrity Management",
    description:
      "Comprehensive celebrity coordination services including contract negotiations, scheduling management, and production logistics. We handle all aspects of celebrity engagement to ensure smooth collaboration between stars and production houses for successful project completion.",
    category: "Celebrity Services",
    image:
      "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Single = ({ item, index }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  const isOdd = index % 2 != 0;

  return (
    <section className="h-auto md:h-[80vh] flex items-center justify-center px-4 py-4 md:py-0">
      <div
        className={`flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1366px] w-full ${
          !isOdd ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          ref={ref}
          style={{
            y: typeof window !== "undefined" && window.innerWidth > 768 ? y : 0,
          }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">
            {/* LEFT film holes */}
            <div className="absolute -left-6 top-0 h-full hidden border border-[var(--brand-secondary-hover)] p-1 sm:flex flex-col justify-between py-3">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-8 bg-[var(--brand-secondary)] rounded-sm opacity-80 shadow-[0_0_8px_rgba(255,248,41,0.6)]"
                />
              ))}
            </div>

            {/* RIGHT film holes */}
            <div className="absolute -right-6 top-0 h-full hidden border border-[var(--brand-secondary-hover)] p-1 sm:flex flex-col justify-between py-3">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-8 bg-[var(--brand-secondary)] rounded-sm opacity-80 shadow-[0_0_8px_rgba(255,248,41,0.6)]"
                />
              ))}
            </div>

            {/* IMAGE FRAME */}
            <div
              className="
        relative
        overflow-hidden
        bg-black
        rounded-sm
        border border-white/10
        shadow-[0_0_40px_rgba(255,248,41,0.15)]
        group-hover:shadow-[0_0_80px_rgba(255,248,41,0.35)]
        transition-all
        duration-500
      "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
          w-full
          max-w-[520px]
          aspect-[16/9]
          object-cover
          group-hover:scale-110
          transition-transform
          duration-700
        "
              />

              {/* Cinematic gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex-1 flex flex-col gap-6 text-white p-4 md:p-0 text-center md:text-left ">
          <h4 className="text-[var(--brand-secondary)] font-semibold">
            {item.category}
          </h4>
          <h2 className="text-2xl md:text-4xl font-bold ">{item.title}</h2>
          <p className="text-base md:text-lg text-gray-200 font-light text-justify leading-relaxed">
            {item.description}
          </p>
          <button className="w-40 md:w-48 px-6 py-2 bg-[var(--brand-secondary)] text-[var(--brand-primary)] font-semibold rounded-sm hover:bg-[var(--brand-secondary-hover)] transition mx-auto md:mx-0">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio relative" ref={ref}>
      <div className="max-w-6xl mx-auto py-10">
        {services.map((item, idx) => (
          <Single key={idx} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
