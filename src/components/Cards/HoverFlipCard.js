import React from "react";
import { motion } from "framer-motion";

function HoverFlipCard({ index, name = "Actor/Owner Name", role = "Role/Title", description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className="group mt-16 w-full max-w-[20rem] relative h-[28rem] [perspective:1000px]"
    >
      {/* FRONT SIDE */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 transition-transform duration-700 [backface-visibility:hidden] [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)] rounded-lg border border-white/10 backdrop-blur-xl shadow-[var(--shadow-glow-secondary)] bg-[var(--card-background)]">
        {/* Image */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 border-2 border-[var(--brand-secondary)] rounded-full overflow-hidden">
          <div className="w-32 h-32 bg-[var(--brand-secondary)] rounded-full shadow-lg overflow-hidden ring-4 ring-[var(--card-background)]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ahHMDv50of-ScKXWvEspzqHb8ULkV2_lpg&s"
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Role */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-extrabold text-[var(--brand-secondary)]">{name}</h2>
          <p className="mt-2 text-sm text-white/80 font-medium">{role}</p>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            {description ||
              "A rising star in Bollywood, bringing talent and charisma to the big screen."}
          </p>
        </div>
      </div>

      {/* BACK SIDE */}
      <div className="absolute w-full h-full flex flex-col items-center justify-center px-6 text-center transition-transform duration-700 [backface-visibility:hidden] [transform:rotateY(-180deg)] group-hover:[transform:rotateY(0deg)] rounded-lg border border-white/10 backdrop-blur-xl shadow-[0_0_80px_rgba(255,250,41,0.3)] bg-[var(--card-background)]">
        <h2 className="text-2xl font-extrabold text-[var(--brand-secondary)]">About {name}</h2>
        <p className="mt-3 text-sm text-white/70 leading-relaxed">
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
        <p className="mt-3 text-sm text-white/70 leading-relaxed">
          Highlighted for <span className="text-[var(--brand-secondary)] font-semibold">versatility, professionalism, and charisma</span>, making a mark in cinematic arts.
        </p>
      </div>
    </motion.div>
  );
}

export default HoverFlipCard;
