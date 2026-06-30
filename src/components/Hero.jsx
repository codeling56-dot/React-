import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="absolute z-10 w-full h-full flex flex-col items-center justify-center gap-6 pb-55">
        <p className="text-[#d4af37]">Autumn / Winter 2024</p>
        <h1 className="text-6xl font-bold">THE NOIR COLLECTION</h1>
        <button className="mt-4 px-6 py-2 bg-[#D4AF37] text-[#0A0A0A] cursor-pointer hover:bg-[#907623] transition-all duration-300">
          Explore Collection
        </button>
      </div>
      <img src="/Background.png" alt="" className="w-dvw relative" />
    </div>
  );
};

export default Hero;
