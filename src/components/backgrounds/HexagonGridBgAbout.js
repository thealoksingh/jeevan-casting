import React, { useEffect, useState } from "react";
import ContactUsModal from "../../screens/ContactUsModal";

function HexagonGridBgAbout() {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [countries, setCountries] = useState(0);
     const [open, setOpen] = useState(false);

  useEffect(() => {
    let projectsTarget = 120;
    let clientsTarget = 80;
    let countriesTarget = 15;

    let interval = setInterval(() => {
      setProjects((p) => (p < projectsTarget ? p + 2 : projectsTarget));
      setClients((c) => (c < clientsTarget ? c + 1 : clientsTarget));
      setCountries((ct) => (ct < countriesTarget ? ct + 1 : countriesTarget));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
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

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-12">
        {/* Left side text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            About Our Vision
          </h1>
          <p className="text-lg md:text-xl text-white mb-6">
            We combine advanced surveillance technology with smart analytics to
            deliver secure, reliable, and scalable solutions for businesses and
            communities worldwide.
          </p>
          <div>
            <button
             onClick={() => setOpen(true)}
              className="inline-block px-6 py-2 text-lg font-semibold bg-[var(--brand-accent)] text-white rounded-xl shadow-lg hover:bg-[var(--brand-accent-hover)] transform hover:scale-105 transition"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center md:items-start">
          <div className="grid grid-cols-3 gap-6 text-white">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition">
              <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-[var(--brand-secondary)]">
                {projects}+
              </h2>
              <p className="mt-1 text-sm">Projects</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition">
              <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-[var(--brand-secondary)]">
                {clients}+
              </h2>
              <p className="mt-1 text-sm">Clients</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition">
              <h2 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-[var(--brand-secondary)]">
                {countries}+
              </h2>
              <p className="mt-1 text-sm">Countries</p>
            </div>
          </div>

          <ul className="mt-6 space-y-3 text-white text-lg">
            <li>✔ AI-powered monitoring</li>
            <li>✔ 24/7 real-time alerts</li>
            <li>✔ Scalable cloud integration</li>
            <li>✔ Custom enterprise solutions</li>
          </ul>
        </div>
      </div>
         <ContactUsModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}

export default HexagonGridBgAbout;
