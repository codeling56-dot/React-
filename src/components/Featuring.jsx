import React from 'react'

const Featuring = () => {
  return (
     <section className="bg-[#0A0A0A] text-[#F5F5F5] py-24 px-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-5 mb-24">
          <span className="text-[#D4AF37] uppercase tracking-[0.35em] text-sm font-semibold">
            LIMITED RELEASE
          </span>

          <h2 className="text-6xl font-bold uppercase tracking-tight">
            THE MONOLITH SERIES
          </h2>

          <p className="text-zinc-400 leading-8 max-w-2xl mx-auto">
            A study in structural integrity and monochromatic depth. Each piece
            is a testament to the beauty of restraint.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto flex items-center gap-20">
          {/* Image */}
          <div className="w-1/2 aspect-[4/5] overflow-hidden bg-[#1A1A1A]">
            <img
              src="Background.png"
              alt="Sculpted Form"
              className="w-full h-full object-cover grayscale-[20%] contrast-[110%]"
            />
          </div>

          {/* Text */}
          <div className="w-1/2 flex">
            {/* Divider */}
            <div className="w-px bg-[#D4AF37] mr-8"></div>

            <div className="flex flex-col gap-6">
              <h3 className="text-5xl font-bold text-[#F5F5F5]">
                Sculpted Form
              </h3>

              <p className="text-zinc-400 leading-8 max-w-md">
                Our signature outerwear reimagined through the lens of brutalist
                architecture. Heavy wools meet sharp, clean lines.
              </p>

              <a
                href="#explore"
                className="uppercase tracking-[0.2em] text-sm text-[#D4AF37] border-b border-[#D4AF37] pb-1 w-max transition hover:text-[#F5F5F5] hover:border-[#F5F5F5]"
              >
                EXPLORE THE SERIES
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Featuring