import React, { useState } from "react";
import DemoCard from "../components/DemoCard";
import HoverFlipCard from "../components/Cards/HoverFlipCard";
import ClientCard from "../components/Cards/ClientCard";
import ProjectImages from "../components/Cards/ProjectImages";
import BouncyText from "../components/BouncyText";
import RadarSphere from "../components/RadarSphere";
import HexagonGridBgHome from "../components/backgrounds/HexagonGridBgHome";
import AnimatedCanvas from "../components/backgrounds/AnimatedCanvas";
import ContactUsModal from "./ContactUsModal";
import insta from "../assests/images/insta.png";
import FlippingCardCarousel from "../components/Cards/FlippingCardCarousel";
import MiniReelCard from "../components/Cards/MiniReelCard";
import MyHighlight from "../components/MyHighlight";
import OrbitReels from "../components/OrbitReels";

function Home() {
  const [open, setOpen] = useState(false);
  const services = [
    {
      image: insta,
      title: "AI-Powered Solutions",
      description:
        "We design and deploy AI-driven ecosystems that transform the way businesses operate, making processes faster, smarter, and more efficient.",
      backText:
        "From predictive analytics and computer vision to natural language processing and automation, our AI-powered solutions are built to adapt and scale with your business needs. We don’t just deliver tools; we deliver intelligence that empowers decision-making and drives sustainable growth.",
    },
    {
      image: insta,
      title: "Smart Surveillance",
      description:
        "Next-generation monitoring systems that combine security, intelligence, and scalability to protect assets and ensure peace of mind.",
      backText:
        "Our surveillance solutions go beyond traditional monitoring — integrating AI, IoT, and real-time analytics to provide actionable insights. Whether it’s smart cities, enterprises, or industrial infrastructure, we deliver systems that evolve with changing threats and create safer environments.",
    },
    {
      image: insta,
      title: "Web & App Development",
      description:
        "We build powerful, modern, and scalable applications that deliver seamless experiences across web and mobile platforms.",
      backText:
        "Using cutting-edge technologies like React, Next.js, Spring Boot, and cloud-native systems, we create applications that are not just functional but future-ready. Our solutions are designed to handle scale, performance, and reliability while keeping user experience at the core.",
    },
  ];

  return (
    <div className="bg-[var(--brand-primary)] overflow-x-hidden pt-16">
      {/* HERO SECTION */}
      <div className="relative flex justify-center">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        >
          <source src="/aivideo.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* CONTENT */}
        <div className="relative w-full max-w-7xl  p-4 sm:p-6 lg:p-10 pb-20 flex flex-col lg:flex-row items-center gap-10 z-10">
          {/* TEXT */}
          <div className="flex-1 pt-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl xl:text-5xl font-extrabold tracking-tight text-white break-words">
              Jeevan Casting Company — Spotlighting Talent, Shaping Dreams
            </h1>

            <p className="mt-2 text-sm sm:text-base text-gray-300 break-words">
              by <span className="text-white/90">Jeevan Casting</span> —
              Bollywood • Films • Web Series • Ads
            </p>

            <p className="mt-4 text-base sm:text-lg md:text-xl font-semibold text-[var(--brand-secondary)] break-words">
              Connecting <span className="text-white">actors, models,</span> and{" "}
              <span className="text-white">performers</span> with the perfect
              roles.
            </p>

            <p className="mt-5 text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto lg:mx-0 break-words">
              We help talent shine on screen by providing{" "}
              <span className="text-white font-semibold">
                audition opportunities
              </span>
              , portfolio showcases, and{" "}
              <span className="text-white font-semibold">casting support</span>{" "}
              for films, commercials, and web series—making dreams of Bollywood
              stardom a reality.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => setOpen(true)}
                className="rounded-sm px-6 py-3 bg-[var(--brand-secondary)] text-black font-semibold shadow hover:opacity-90 transition"
              >
                Submit Your Profile
              </button>

              <a
                href="/contact"
                className="rounded-sm px-5 py-3 border border-white/20 text-white hover:bg-white/5 transition"
              >
                Connect With Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center ">
        <AnimatedCanvas />
        <div className="absolute inset-0 z-10 backdrop-blur-md px-4"></div>

        <div className="relative z-20 text-white text-center w-full">
          <MyHighlight />
        <div className="max-w-8xl mx-auto sm:px-6 lg:px-16 pb-16">
          {/* MEET US */}
          <div className="my-10">
            <BouncyText
              text="Meets us"
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold"
            />
          </div>

          <div className="flex flex-wrap gap-6 justify-center mt-8 lg:mt-16">
            {services.map((s, idx) => (
              <HoverFlipCard key={idx} index={idx} {...s} />
            ))}
          </div>

          {/* PROJECT TITLE */}
          <div className="my-10">
            <BouncyText
              text="A Quick Glimpse of Our Work"
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold"
            />
          </div>

          {/* PROJECT 1 */}
          <div className="mt-12 flex flex-col lg:flex-row items-center gap-12 mx-auto">
            <div className="w-full lg:w-1/2 flex justify-center">
              <ProjectImages />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Title of the Project
              </h1>

              <p className="mt-2 text-gray-400 text-sm">Date: 2024-25</p>

              <p className="mt-5 text-sm sm:text-base text-slate-300 break-words">
                Empowering industries to operate smarter, safer, and more
                efficiently.{" "}
                <span className="text-white font-semibold">
                  Combining technology, creativity,
                </span>{" "}
                and <span className="text-white font-semibold">expertise,</span>{" "}
                we drive the future of industrial digitalization.
              </p>
              <div className="group mt-4 inline-flex items-center gap-2 rounded-sm px-5 py-2 bg-[var(--brand-secondary)] text-black font-semibold  hover:bg-brand-secondary-hover  hover:translate-y-[-1px] transition">
                View Project
              </div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="mt-16 flex flex-col lg:flex-row-reverse  items-center gap-12 mx-auto mb-10">
            <div className="w-full lg:w-1/2 flex justify-center">
              <ProjectImages />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Title of the Project
              </h1>

              <p className="mt-2 text-gray-400 text-sm">Date: 2024-25</p>

              <p className="mt-5 text-sm sm:text-base text-slate-300 break-words">
                Empowering industries to operate smarter, safer, and more
                efficiently.
              </p>
              <div className="group mt-4 inline-flex items-center gap-2 rounded-sm px-5 py-2 bg-[var(--brand-secondary)] text-black font-semibold  hover:bg-brand-secondary-hover  hover:translate-y-[-1px] transition">
                View Project
              </div>
            </div>
          </div>
          {/* <div className="my-10">
            <BouncyText
              text="Gallery"
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold"
            />
          </div> */}
          <OrbitReels />
        </div>
        </div>
      </section>

      <section className="relative">
        <HexagonGridBgHome />
      </section>

      <ContactUsModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default Home;
