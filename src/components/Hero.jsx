import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background Image */}
      <img
        src="/outlet.png"
        alt="Boutique Outlet"
        className="absolute inset-0 w-full h-full object-cover grayscale-[10%] contrast-[110%]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center px-6 md:px-12 py-8 md:py-10 rounded-xl">
          <span className="uppercase tracking-[0.35em] text-xs md:text-sm font-semibold text-[#D4AF37]">
            THE ATELIER
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-[#F5F5F5]">
            ARCHITECTURAL FORM
          </h1>

          <button
            className="
          mt-2
          px-6 md:px-8
          py-3
          bg-[#D4AF37]
          text-[#0A0A0A]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-xs md:text-base
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
