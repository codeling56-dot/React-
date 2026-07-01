import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background Image */}
      <img
        src="/outlet.png"
        alt="Boutique Outlet"
        className="absolute inset-0 w-full h-full object-cover grayscale-[10%] contrast-[110%]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 text-center px-12 py-10 rounded-xl bg-[#1A1A1A]/20 backdrop-blur-md border border-white/10">
          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#D4AF37]">
            THE ATELIER
          </span>

          <h1 className="text-7xl font-bold uppercase tracking-tight text-[#F5F5F5]">
            ARCHITECTURAL FORM
          </h1>

          <button
            className="
          mt-2
          px-8
          py-3
          bg-[#D4AF37]
          text-[#0A0A0A]
          font-semibold
          uppercase
          tracking-[0.2em]
          transition
          duration-300
          hover:bg-[#F5F5F5]
          cursor-pointer
        "
          >
            VISIT THE BOUTIQUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
