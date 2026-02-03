import React, { useEffect } from "react";
import Lottie from "lottie-react";

export const LottieAlert = ({ type, message, onClose, autoClose = true, loop = true }) => {
  const getSource = () => {
    switch (type) {
      case "success": return require("./success.json");
      case "failure": return require("./failure.json");
      case "warning": return require("./warning.json");
      default: return null;
    }
  };

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => onClose?.(), 3000);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40 z-[1000]">
  <div
    className="relative w-4/5 max-w-md text-center p-6 rounded-2xl shadow-lg
               bg-white/20 backdrop-blur-md border border-white/30"
  >
    {/* Close button */}
    <button
      onClick={onClose}
      className="absolute top-2 right-3 text-3xl font-bold text-white hover:text-gray-200"
    >
      ×
    </button>

    {/* Lottie animation */}
    <div className="w-24 h-24 mx-auto">
      <Lottie animationData={getSource()} loop={loop} autoplay />
    </div>

    {/* Message */}
    <p className="mt-4 text-lg font-semibold text-white drop-shadow-lg">
      {message}
    </p>
  </div>
</div>

  );
};
