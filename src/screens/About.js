import React from "react";
import HexagonGridBgAbout from "../components/backgrounds/HexagonGridBgAbout";
import AnimatedCanvas from "../components/backgrounds/AnimatedCanvas";
import BlurryCardWithIcon from "../components/Cards/BlurryCardWithIcon";
import { Camera, Users, Star, Award } from "lucide-react";
import BlurryImageCard from "../components/Cards/BlurryImageCard";
import BouncyText from "../components/BouncyText";
import JourneyTimeline from "../components/JourneyTimeline";

function About() {
  const services = [
    {
      title: "Talent Discovery",
      description:
        "Scouting fresh faces and seasoned actors across India for films, TV shows, and digital content.",
      Icon: Users,
    },
    {
      title: "Casting Direction",
      description:
        "Expert casting services for Bollywood, regional cinema, and OTT platforms with precision matching.",
      Icon: Camera,
    },
    {
      title: "Artist Management",
      description:
        "Complete portfolio development, audition prep, and career guidance for aspiring artists.",
      Icon: Star,
    },
    {
      title: "Production Support",
      description:
        "End-to-end casting solutions from pre-production planning to final artist selection.",
      Icon: Award,
    },
  ];

  const team = [
    {
      title: "Casting Directors",
      description:
        "Experienced professionals who understand the nuances of character matching and industry requirements.",
      Image:
        "https://plus.unsplash.com/premium_photo-1682146733343-eb0de7a744f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Talent Scouts",
      description:
        "Dedicated scouts who travel across India to discover hidden gems and fresh talent.",
      Image:
        "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Artist Coordinators",
      description:
        "Professional coordinators who manage artist schedules, contracts, and production logistics.",
      Image:
        "https://images.unsplash.com/photo-1518930259200-3e5b29f42096?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Creative Consultants",
      description:
        "Industry veterans who provide strategic guidance on casting choices and market trends.",
      Image:
        "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <div className="max-w-3xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
              At{" "}
              <span className="font-semibold text-[var(--brand-secondary)]">
                Jeevan Casting
              </span>
              , we don’t just cast actors — we discover{" "}
              <span className="text-white font-semibold">dreams</span>, shape{" "}
              <span className="text-white font-semibold">stories</span>, and
              bring unforgettable characters to life.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 mt-3">
              Since <span className="font-semibold">2017</span>, we have
              connected{" "}
              <span className="text-white font-semibold">talented artists</span>{" "}
              with{" "}
              <span className="text-white font-semibold">
                visionary filmmakers
              </span>
              , helping create powerful on-screen experiences through thoughtful
              casting.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 mt-3">
              From Bollywood productions and regional cinema to rapidly growing
              OTT platforms, our work focuses on identifying authentic talent
              and matching it with the right opportunities.
            </p>

            <p className="text-base sm:text-lg md:text-xl font-semibold text-[var(--brand-secondary)] mt-5">
              More than casting directors — we are dream makers.
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
