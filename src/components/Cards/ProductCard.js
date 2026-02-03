import React from "react";
import { motion } from "framer-motion";

function ProductCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group mt-5 w-full max-w-[16rem] md:max-w-[18rem] lg:max-w-[16rem] relative h-[22rem] 
                 rounded-xl bg-[var(--card-background)] 
                 shadow-[0_0_15px_rgba(239,1,99,0.3)] 
                 hover:shadow-[0_0_30px_rgba(54,253,253,0.5)]
                 transition-shadow duration-500 overflow-hidden border border-white/5"
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        {/* Top Image */}
        <div className="w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop"
            alt="Demo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Content with S-Curve */}
        <div
          className="absolute bottom-0 w-full h-1/2 bg-[var(--card-background)] text-center px-4 flex flex-col justify-center
                     rounded-t-[40%] rounded-b-xl
                     transition-all duration-500
                     hover:rounded-t-sm"
        >
          <h2 className="text-xl font-bold text-white">title here</h2>
          <p className="mt-1 text-xs text-slate-300 leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <span className="text-[var(--brand-accent)] font-medium">
              Ut enim ad minim veniam.
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
