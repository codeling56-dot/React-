import { Gem } from "lucide-react";
import React from "react";

const Psp = () => {
  return (
    <section className="bg-[#0C0F0F]">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-12 lg:p-18 gap-16 lg:gap-8">
        {/* Left Column */}
        <div className="relative w-full max-w-[38rem] h-[28rem] md:h-[36rem] lg:h-[44rem] mx-auto lg:mx-0 lg:ml-16 my-8 md:my-12">
          {/* Image */}
          <div className="w-full h-full rounded-sm shadow-2xl shadow-black/40">
            <img
              src="/screen.png"
              alt=""
              className="overflow-hidden w-full h-full object-cover brightness-95 contrast-110"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 md:-bottom-10 right-4 md:-right-14 w-56 md:w-64 bg-[#1A1A1A]/90 backdrop-blur-md border border-zinc-700 shadow-xl shadow-black/40 p-4 md:p-5 z-20">
            <div className="flex flex-col gap-3">
              <Gem className="text-secondary" size={24} strokeWidth={2.2} />

              <h3 className="font-heading text-base md:text-lg font-semibold text-neutral">
                Heritage Craft
              </h3>

              <p className="font-body text-xs leading-6 text-zinc-300">
                Each piece is finished by hand in our Milanese atelier, ensuring
                every stitch meets our architectural standards.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          {/* Label */}
          <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#D4AF37] mb-8">
            THE PHILOSOPHY
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 text-zinc-300">
            Precision in Every Fiber
          </h2>

          {/* Description */}
          <p className="mb-12 max-w-128 mx-auto lg:mx-0 text-base md:text-xl text-zinc-300">
            Quiet Luxury isn't just about the absence of logos. It's the
            presence of quality so absolute it speaks for itself. We source only
            from mills that share our commitment to ethical sourcing and
            material innovation.
          </p>

          <div className="border-t border-zinc-800 pt-10"></div>

          {/* Features */}
          <div className="flex flex-col md:flex-row text-zinc-300 gap-10 md:gap-20">
            {/* Feature 1 */}
            <div>
              <h4 className="font-bold mb-2">TECHNICITY</h4>

              <p>Weather-resistant membranes integrated into natural fibers.</p>
            </div>

            {/* Feature 2 */}
            <div>
              <h4 className="font-bold mb-2">LONGEVITY</h4>

              <p>Built to endure beyond the seasonal trends of fast fashion.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Psp;
