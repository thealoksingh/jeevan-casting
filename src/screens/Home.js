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
    {
      image: insta,
      title: "Web & App Development",
      description:
        "We build powerful, modern, and scalable applications that deliver seamless experiences across web and mobile platforms.",
      backText:
        "Using cutting-edge technologies like React, Next.js, Spring Boot, and cloud-native systems, we create applications that are not just functional but future-ready. Our solutions are designed to handle scale, performance, and reliability while keeping user experience at the core.",
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

  const clients = [
    {
      name: "Ad name 1",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ad name 2",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ad name 3",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ad name 4",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ad name 5",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ad name 6",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="bg-[var(--brand-primary)] overflow-hidden pt-16">
      <div className="relative flex justify-center">
        {/* Background video - positioned absolutely */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        >
          <source src="/aivideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (optional) for extra dim effect */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative p-10 flex flex-col lg:flex-row items-center gap-10 z-10 max-w-7xl">
          <div className="flex-1 pt-10 text-center lg:text-left">
            <h1 className="text-[2rem] md:text-[2rem] xl:text-[3rem] font-extrabold tracking-tight text-white">
              Powering Industry 4.0 with Smart, Secure Solutions
            </h1>
            <p className="mt-2 text-[var(--neutral-gray)] text-base md:text-lg">
              by <span className="text-white/90">Curves & Codes</span> — Vision
              AI • Surveillance • Smart Infrastructure • SmartOps
            </p>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-[var(--brand-secondary)]">
              Integrated systems that drive{" "}
              <span className="text-[var(--brand-accent)]">
                security, efficiency,
              </span>{" "}
              and{" "}
              <span className="text-[var(--brand-accent)]">
                real-time insights
              </span>
              .
            </p>
            <p className="mt-5 text-sm md:text-base text-slate-300/90 max-w-2xl">
              We design and deploy{" "}
              <span className="text-white font-semibold">
                end-to-end solutions
              </span>{" "}
              across Vision AI, Surveillance & Security, and Smart
              Infrastructure— integrated with{" "}
              <span className="text-white font-semibold">
                SmartOps applications
              </span>{" "}
              to modernize operations and scale with your business.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-[var(--brand-accent)] text-white font-semibold shadow hover:opacity-90 transition"
              >
                Request a Proposal
              </button>
              {/* <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-white/20 text-white hover:bg-white/5 transition"
              >
                Book a 15-min Discovery Call
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <section
        className="relative min-h-screen flex flex-col items-center justify-center 
  px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pb-16"
      >
        <AnimatedCanvas />
        <div className="absolute inset-0 z-10 backdrop-blur-md"></div>
        <div className="relative z-20 text-white text-center">
          {/* <div className="flex flex-wrap gap-6 justify-center lg:mt-16 mt-8">
            {services.map((s, idx) => (
              <HoverFlipCard key={idx} index={idx} {...s} />
            ))}
          </div> */}
          {/* <div className="m-10">
            <BouncyText
              text={`Meets us`}
              className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
            />
          </div> */}
          <FlippingCardCarousel services={services} />
          <div className="m-10">
            <BouncyText
              text={`Our Clients`}
              className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
            />
          </div>
          <div className="overflow-hidden max-w-full py-10">
           <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]" style={{width: 'max-content'}}>

              {/* ORIGINAL */}
              {clients.map((client, idx) => (
                <MiniReelCard
                  key={`first-${idx}`}
                  name={client.name}
                  image={client.image}
                />
              ))}

              {/* DUPLICATE */}
              {clients.map((client, idx) => (
                <MiniReelCard
                  key={`second-${idx}`}
                  name={client.name}
                  image={client.image}
                />
              ))}
            </div>
          </div>

          <div className="m-10">
            <BouncyText
              text={`A Quick Glimpse of Our Work`}
              className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
            />
          </div>
          <div>
            {/* Project Section */}
            <div className="md:mt-16 flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto px-4">
              <div className="w-full lg:w-1/2 flex justify-center">
                <ProjectImages />
              </div>

              {/* Text part */}
              <div className="w-full lg:w-1/2 text-center lg:text-left px-2">
                <h1 className="text-[2rem] md:text-[1.5rem] xl:text-[2rem] font-bold tracking-tight text-white">
                  Title of the Project
                </h1>
                <p className="mt-2 text-[#9aa4b2] text-sm md:text-base">
                  Date: 2024-25
                </p>
                <p className="mt-5 text-sm md:text-base text-slate-300/90 mx-auto lg:mx-0">
                  Empowering industries to operate smarter, safer, and more
                  efficiently.{" "}
                  <span className="text-white font-semibold">
                    Combining technology, creativity,
                  </span>{" "}
                  and{" "}
                  <span className="text-white font-semibold">expertise,</span>{" "}
                  we drive the future of industrial digitalization.
                </p>
                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2 bg-[#ef0163] text-white font-semibold hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(239,1,99,0.35)] transition"
                >
                  View Project
                  <svg
                    className="w-4 h-4 text-current transition-transform group-hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.656-5.656l1.414-1.414a4 4 0 015.656 0zM10.172 13.828a4 4 0 010-5.656l1.414-1.414a4 4 0 015.656 5.656l-1.414 1.414a4 4 0 01-5.656 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project Section (Reversed) */}
            <div className="md:mt-16 flex flex-col lg:flex-row-reverse items-center lg:gap-10 gap-0  max-w-7xl mx-auto px-4 mb-10">
              <div className="w-full lg:w-1/2 flex justify-center">
                <ProjectImages />
              </div>

              {/* Text part */}
              <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
                <h1 className="text-[2rem] md:text-[1.5rem] xl:text-[2rem] font-bold tracking-tight text-white">
                  Title of the Project
                </h1>
                <p className="mt-2 text-[#9aa4b2] text-sm md:text-base">
                  Date: 2024-25
                </p>
                <p className="mt-5 text-sm md:text-base text-slate-300/90 text-justify mx-auto lg:mx-0">
                  Empowering industries to operate smarter, safer, and more
                  efficiently.{" "}
                  <span className="text-white font-semibold">
                    Combining technology, creativity,
                  </span>{" "}
                  and{" "}
                  <span className="text-white font-semibold">expertise,</span>{" "}
                  we drive the future of industrial digitalization.
                </p>
                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2 bg-[#ef0163] text-white font-semibold hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(239,1,99,0.35)] transition"
                >
                  View Project
                  <svg
                    className="w-4 h-4 text-current transition-transform group-hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.656-5.656l1.414-1.414a4 4 0 015.656 0zM10.172 13.828a4 4 0 010-5.656l1.414-1.414a4 4 0 015.656 5.656l-1.414 1.414a4 4 0 01-5.656 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
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
