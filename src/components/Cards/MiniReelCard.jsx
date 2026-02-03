import React from "react";
import { motion } from "framer-motion";

function MiniReelCard({ index = 0, name, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
    className="group relative 
           w-[260px] h-[150px]
           sm:w-[300px] sm:h-[170px]
           md:w-[360px] md:h-[200px]
           lg:w-[420px] lg:h-[220px]
           bg-black rounded-xl overflow-hidden
           shadow-[0_15px_50px_rgba(0,0,0,0.9)]
           hover:scale-105 transition-all duration-300"
>
      
      {/* TOP FILM HOLES */}
      <div className="absolute top-0 left-0 w-full h-6 flex justify-around items-center bg-black z-10">
        {[...Array(14)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-zinc-800 rounded-sm"></div>
        ))}
      </div>

      {/* BOTTOM FILM HOLES */}
      <div className="absolute bottom-0 left-0 w-full h-6 flex justify-around items-center bg-black z-10">
        {[...Array(14)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-zinc-800 rounded-sm"></div>
        ))}
      </div>

      {/* IMAGE */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover 
                   group-hover:scale-110 
                   transition-transform duration-500"
      />

      {/* CINEMA OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />

      {/* NAME */}
      <h2 className="absolute bottom-8 left-5 
                     text-white font-semibold tracking-wider
                     text-sm">
        {name}
      </h2>
    </motion.div>
  );
}

export default MiniReelCard;
