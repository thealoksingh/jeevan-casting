import React from "react";
import { motion } from "framer-motion";

const ProjectImages = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true }}
      className="w-full flex justify-center items-center overflow-hidden"
    >
      {/* SCALE WRAPPER */}
      <div
        className="
          origin-center
          will-change-transform
          scale-[0.65]
          sm:scale-[0.75]
          md:scale-[0.9]
          lg:scale-100
          transition-transform duration-300
        "
      >
        {/* MAIN CANVAS */}
        <div className="relative w-[900px] h-[520px] mx-auto">
          {/* Main Image */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       border border-[var(--brand-secondary)] z-20
                       w-[420px] h-[260px]"
            style={{
              boxShadow: "var(--shadow-glow-secondary)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=1170&auto=format&fit=crop"
              alt="Main Project"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/800x600/38bdf8/ffffff?text=Main";
              }}
            />
          </div>

          {/* Top Left */}
          <div
            className="absolute top-[70px] left-[160px] lg:left-[140px]
                       border border-[var(--brand-secondary)] z-50
                       w-[200px] h-[130px]"
            style={{
              boxShadow: "var(--shadow-glow-secondary)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Top Left"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right */}
          <div
            className="absolute bottom-[60px] lg:right-[160px] right-[170px]
                       border border-[var(--brand-secondary)] z-20
                       w-[240px] h-[150px]"
            style={{
              boxShadow: "var(--shadow-glow-secondary)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1543242594-c8bae8b9e708?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Bottom Right"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Extra Image */}
          <div
            className="absolute top-[60px] lg:right-[150px] right-[170px]
                       border border-[var(--brand-secondary)] z-30
                       w-[160px] h-[100px]"
            style={{
              boxShadow: "var(--shadow-glow-secondary)",
            }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1684923604035-93b39a3e6375?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Extra"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectImages;
