import React, { useEffect, useRef, useState } from "react";
import ContactUsModal from "../../screens/ContactUsModal";

function useCountUp(target = 0, duration = 1500) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (reduced) {
      setValue(target);
      return;
    }

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [target, duration]);

  return Math.round(value);
}

function Stat({ label, value, suffix = "+", duration = 1500 }) {
  const current = useCountUp(value, duration);
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--card-background)] backdrop-blur-md px-5 py-6 shadow-lg">
      <div className="text-4xl md:text-5xl font-extrabold text-white tabular-nums">
        {current}
        <span className="text-[var(--brand-secondary)]">{suffix}</span>
      </div>
      <div className="mt-2 text-sm md:text-base text-white/70">{label}</div>
    </div>
  );
}

function HexagonGridBgHome() {
     const [open, setOpen] = useState(false);
  return (
    <section
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(
          to bottom,
          #0b0c10,               
          rgba(55, 134, 143, 0.61),
          #0b0c10               
        )`,
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hexPattern"
            width="100"
            height="87"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="50,0 100,25 100,62 50,87 0,62 0,25"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>

      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Trusted Security. Proven Results.
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-lg text-white/80 max-w-3xl mx-auto">
            From smart surveillance to enterprise-grade deployments, we deliver
            reliable, scalable solutions tailored to your needs.
          </p>

          <button
           onClick={() => setOpen(true)}
            className="mt-6 inline-block px-6 py-3 text-base md:text-lg font-semibold bg-[var(--brand-accent)] text-white rounded-2xl shadow-lg hover:bg-[var(--brand-accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
          >
            Get in Touch
          </button>
        </div>

       
        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Stat
            label="Completed Projects"
            value={50}
            suffix="+"
            duration={1600}
          />
          <Stat label="Indian Clients" value={40} suffix="+" duration={1700} />
          <Stat
            label="International Clients"
            value={60}
            suffix="+"
            duration={1800}
          />
          <Stat
            label="Satisfaction Rate"
            value={100}
            suffix="%"
            duration={2000}
          />
        </div>

        <p className="sr-only">
          Satisfaction rate is rounded to two decimals and presented as a
          percentage.
        </p>
      </div>
         <ContactUsModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}

export default HexagonGridBgHome;
