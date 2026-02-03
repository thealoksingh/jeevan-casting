import React from "react";

function BlurryCardWithIcon({ title, description, Icon }) {
  return (
    <div className="relative max-w-sm mx-auto rounded-xl border border-cyan-300 border-[0.2px] shadow-lg p-6 md:p-8 text-white transition-transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm bg-gradient-to-br from-[#67e8f9]/10 via-[#ef0163]/5 to-transparent">
      <div className="absolute inset-0 rounded-xl border border-transparent opacity-30 -z-10"></div>

      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl text-[#67e8f9] shadow-[0_0_15px_rgba(103,232,249,0.4)]">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-[#67e8f9]/50 via-[#ef0163]/50 to-transparent mb-4 rounded-full shadow-[0_0_10px_rgba(239,1,99,0.7)]"></div>

      <h2 className="text-xl md:text-xl font-bold mb-3 text-[#67e8f9]">
        {title}
      </h2>
      <p className="text-base md:text-sm text-gray-200 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default BlurryCardWithIcon;
