import React from 'react';
import { motion } from "framer-motion";
function HoverFlipCard({index}) {
  return (
   
    <motion.div
    initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2, // Adjust delay based on the index of the card instead of hardcoding 2 put index here
      }}
      viewport={{ once: true }}
      className="group mt-16 w-full max-w-[20rem] relative h-[28rem] [perspective:1000px] "
    >
       <div
        className="absolute w-full h-full flex flex-col items-center justify-center px-4 transition-transform duration-700 [backface-visibility:hidden] [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)] rounded-xl border border-white/10 backdrop-blur-xl shadow-[var(--shadow-glow)] bg-[var(--card-background)] "
      >
         <div className="absolute -top-16 left-1/2 -translate-x-1/2 border-2 border-white rounded-full overflow-hidden">
          <div className="w-32 h-32 bg-[var(--brand-secondary)] rounded-full shadow-lg overflow-hidden ring-4 ring-[var(--card-background)]">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop"
              alt="Demo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

         <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white">title here</h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <span className="text-[var(--brand-accent)] font-medium">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>.
          </p>
        </div>
      </div>

      <div
        className="absolute w-full h-full flex flex-col items-center justify-center px-6 text-center transition-transform duration-700 [backface-visibility:hidden] [transform:rotateY(-180deg)] group-hover:[transform:rotateY(0deg)] rounded-xl border border-white/10 backdrop-blur-xl shadow-[var(--shadow-glow)] hover:shadow-[0_0_80px_rgba(239,1,99,0.2)] transition-shadow duration-300 bg-[var(--card-background)]"
      >
        <h2 className="text-2xl font-bold text-white">Back Side</h2>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <span className="text-[var(--brand-accent)] font-medium">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </span>.
        </p>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <span className="text-[var(--brand-accent)] font-medium">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </span>.
        </p>
      </div></motion.div>
    
   
  );
}

export default HoverFlipCard;