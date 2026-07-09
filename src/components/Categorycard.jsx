import React from "react";

const Categorycard = () => {
  return (
    <section className="bg-primary py-16 md:py-24 px-6">
      {/* Heading */}
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-neutral text-center mb-10 md:mb-16">
        Shop by Category
      </h2>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-8">
        {/* Card 1 */}
        <div className="relative w-full max-w-72 h-[360px] md:h-[420px] overflow-hidden group cursor-pointer">
          <img
            src="outlet.png"
            alt="Outerwear"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-label text-secondary text-xs uppercase tracking-[0.3em] mb-3">
              Collection
            </p>

            <h3 className="font-heading text-neutral text-3xl md:text-4xl font-semibold">
              Outerwear
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-full max-w-72 h-[360px] md:h-[420px] overflow-hidden group cursor-pointer">
          <img
            src="Background.png"
            alt="Essentials"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-label text-secondary text-xs uppercase tracking-[0.3em] mb-3">
              Essential
            </p>

            <h3 className="font-heading text-neutral text-3xl md:text-4xl font-semibold">
              Essentials
            </h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-full max-w-72 h-[360px] md:h-[420px] overflow-hidden group cursor-pointer">
          <img
            src="Fabric.png"
            alt="Materials"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-label text-secondary text-xs uppercase tracking-[0.3em] mb-3">
              Atelier
            </p>

            <h3 className="font-heading text-neutral text-3xl md:text-4xl font-semibold">
              Materials
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categorycard;
