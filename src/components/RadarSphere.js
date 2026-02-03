import React from "react";

export default function RadarSphere({ size = "w-48 h-48 md:w-64 md:h-64" }) {
  return (
    <>
      <style>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0px rgba(239,1,99,0.0); }
          50% { box-shadow: 0 0 28px rgba(239,1,99,0.35); }
        }
        .sphere {
          background: radial-gradient(closest-side, #1f2533, #0f1220 70%, #0b0c10 100%);
          position: relative;
          isolation: isolate;
        }
        .sphere::before {
          content: "";
          position: absolute;
          inset: -8%;
          border-radius: 9999px;
          background:
            conic-gradient(from 0deg, rgba(0,0,0,0) 0 70%, rgba(239,1,99,0.5) 71% 74%, rgba(0,0,0,0) 75% 100%),
            radial-gradient(closest-side, rgba(239,1,99,0.15), rgba(0,0,0,0) 65%);
          animation: spinSlow 6s linear infinite;
          z-index: -1;
          filter: blur(0.5px);
        }
        .sphere:hover::after {
          opacity: 1;
          transform: scale(1);
        }
        .sphere::after {
          content: "";
          position: absolute;
          inset: 12%;
          border-radius: 9999px;
          background:
            radial-gradient(circle at 50% 50%, rgba(0,255,255,0.12), rgba(0,0,0,0) 55%),
            radial-gradient(circle at 35% 60%, rgba(239,1,99,0.15), rgba(0,0,0,0) 50%);
          opacity: 0;
          transform: scale(0.9);
          transition: all .5s ease;
        }
      `}</style>

      <div
        className={`relative rounded-full sphere animate-[floatSoft_5s_ease-in-out_infinite] ring-1 ring-white/10 ${size}`}
      >
        {/* neon ring glow */}
        <div className="absolute inset-0 rounded-full border border-[#ef0163]/20 pointer-events-none animate-[pulseGlow_3s_ease-in-out_infinite]" />
      </div>
    </>
  );
}
