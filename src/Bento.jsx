import React from "react";

const Bento = () => {
  return (
    <section className="bg-primary py-16 md:py-24 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0 mb-12">
        {/* Left Side */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="font-heading text-neutral text-3xl md:text-4xl font-bold mb-4">
            Curated Silhouettes
          </h2>

          <p className="font-body text-zinc-400 leading-relaxed">
            Precision-engineered garments that balance technical performance
            with the effortless grace of traditional tailoring.
          </p>
        </div>

        <p className="font-label text-secondary uppercase text-xs tracking-[0.25em] hover:text-neutral transition-colors md:mt-14 cursor-pointer">
          View All Collections
        </p>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* ADDED: group */}
        <div className="group">
          <div className="relative h-[28rem] md:h-[40rem] overflow-hidden">
            <img
              src="Overcoat.png"
              alt="Overcoat"
              className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
            />

            <span className="absolute top-4 left-4 z-10 bg-secondary text-primary px-3 py-1 text-[10px] font-label font-semibold uppercase tracking-[0.2em] rounded-sm transition-transform duration-300 group-hover:scale-105">
              Limited Edition
            </span>

            <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/20"></div>
          </div>

          <div className="bg-tertiary p-6">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-heading text-lg text-neutral transition-colors duration-300 group-hover:text-secondary">
                Mono-Structure Overcoat
              </h3>

              <span className="font-label text-sm text-neutral transition-colors duration-300 group-hover:text-secondary">
                $1,850
              </span>
            </div>

            <p className="font-body text-sm text-zinc-400">
              Italian Virgin Wool
            </p>
          </div>
        </div>

        <div className="grid gap-20 md:gap-24">
          {/* ADDED: group */}
          <div className="group">
            <div className="relative h-[18rem] md:h-[20rem] overflow-hidden">
              <img
                src="Belt.png"
                alt="Belt"
                className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/20"></div>
            </div>

            <div className="bg-tertiary p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-heading text-lg text-neutral transition-colors duration-300 group-hover:text-secondary">
                  Architectural Leather Belt
                </h3>

                <span className="font-label text-sm text-neutral transition-colors duration-300 group-hover:text-secondary">
                  $340
                </span>
              </div>

              <p className="font-body text-sm text-zinc-400">
                Calfskin & Brass
              </p>
            </div>
          </div>

          {/* ADDED: group */}
          <div className="group">
            <div className="relative h-[18rem] md:h-[20rem] overflow-hidden">
              <img
                src="Pent.png"
                alt="Belt"
                className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/20"></div>
            </div>

            <div className="bg-tertiary p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-heading text-lg text-neutral transition-colors duration-300 group-hover:text-secondary">
                  Pleated Shadow Trousers
                </h3>

                <span className="font-label text-sm text-neutral transition-colors duration-300 group-hover:text-secondary">
                  $620
                </span>
              </div>

              <p className="font-body text-sm text-zinc-400">Silk Blend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
