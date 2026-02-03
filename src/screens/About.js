import React from "react";
import HexagonGridBgAbout from "../components/backgrounds/HexagonGridBgAbout";
import AnimatedCanvas from "../components/backgrounds/AnimatedCanvas";
import BlurryCardWithIcon from "../components/Cards/BlurryCardWithIcon";
import { LineChart, Shield, Network, Cpu } from "lucide-react";
import BlurryImageCard from "../components/Cards/BlurryImageCard";
import BouncyText from "../components/BouncyText";
import JourneyTimeline from "../components/JourneyTimeline";

function About() {
  const services = [
    {
      title: "Real-Time KPI Tracking",
      description:
        "Monitor performance instantly with live dashboards, interactive metrics, and predictive insights.",
      Icon: LineChart,
    },
    {
      title: "Surveillance & Security",
      description:
        "AI-powered CCTV, biometric access, and 24/7 monitoring for ultimate safety and reliability.",
      Icon: Shield,
    },
    {
      title: "Smart Infrastructure",
      description:
        "Scalable IT networks, IoT devices, and cloud systems designed for Industry 4.0 growth.",
      Icon: Network,
    },
    {
      title: "AI-Driven Solutions",
      description:
        "Leverage machine learning and automation to optimize workflows and unlock innovation.",
      Icon: Cpu,
    },
  ];

  const team = [
    {
      title: "Real-Time KPI Tracking",
      description:
        "Monitor performance instantly with live dashboards, interactive metrics, and predictive insights.",
      Image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Surveillance & Security",
      description:
        "AI-powered CCTV, biometric access, and 24/7 monitoring for ultimate safety and reliability.",
      Image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Smart Infrastructure",
      description:
        "Scalable IT networks, IoT devices, and cloud systems designed for Industry 4.0 growth.",
      Image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "AI-Driven Solutions",
      description:
        "Leverage machine learning and automation to optimize workflows and unlock innovation.",
      Image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="bg-[var(--brand-primary)] overflow-hidden">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <AnimatedCanvas />
        <div className="absolute inset-0 z-10 backdrop-blur-md"></div>

        <div className="relative z-20 text-white text-center">
          <div className="m-10">
            <BouncyText
              text={`Who Are we ?`}
              className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
            />
          </div>
          <div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              At{" "}
              <span className="font-semibold text-pink-400">
                Jeevan Casting (C&C)
              </span>
              , technology isn’t just about systems. it’s about
              <span className="text-cyan-300 font-semibold">
                {" "}
                transformation
              </span>
              ,<span className="text-cyan-300 font-semibold"> empowerment</span>
              , and shaping a smarter future.
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mt-4">
              Since <span className="font-semibold">2010</span>, we’ve grown
              from a vision-driven startup into a company that blends
              <span className="text-pink-400 font-semibold"> creativity</span>,
              <span className="text-pink-400 font-semibold"> engineering</span>,
              and
              <span className="text-pink-400 font-semibold"> innovation</span>.
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mt-4">
              From <span className="font-semibold">AI-powered solutions</span>{" "}
              and
              <span className="font-semibold"> smart surveillance</span> to
              <span className="font-semibold"> scalable infrastructures</span>,
              we design ecosystems where technology works seamlessly for people.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-cyan-300 mt-6">
              We’re more than service providers — <br />
              we are{" "}
              <span className="text-pink-400 font-bold">
                partners in progress
              </span>
              .
            </p>
          </div>

          <div className="m-10">
            <BouncyText
              text={`Our Journey`}
              className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
            />
          </div>

          <div className="m-10">
            <JourneyTimeline />
          </div>
          <div className="m-10">
            <BouncyText
              text={`Our Vision`}
              className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
            />
          </div>
          <div
            className="grid gap-6 mt-20 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4"
          >
            {services.map((service, idx) => (
              <BlurryCardWithIcon
                key={idx}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
              />
            ))}
          </div>
          <div className="m-10">
            <BouncyText
              text={`Our Team Members`}
              className="text-2xl sm:text-4xl md:text-5xl text-white  px-4 mt-3 font-extrabold leading-tight text-center  "
            />
          </div>
          <div
            className="grid gap-6 mt-20 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4"
          >
            {team.map((team, idx) => (
              <BlurryImageCard
                key={idx}
                title={team.title}
                description={team.description}
                Image={team.Image}
              />
            ))}
          </div>
        </div>
      </section>

    
       <section className="relative">
        <HexagonGridBgAbout />
      </section>
    </div>
  );
}

export default About;
