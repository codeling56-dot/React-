import Featuring from "./components/Featuring";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Categorycard from "./components/Categorycard";
import Bento from "./Bento";
import { Gem } from "lucide-react";

const App = () => {
  return (
    <main className="bg-[#1A1A1A] text-[#F5F5F5] overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <Hero />
      <Featuring />
      <Categorycard />
      <Bento />

      <section>
        <div className="grid grid-cols-2 bg-[#0C0F0F] p-18">
          {/* Left Column */}
          {/* ✅ CHANGED: Parent is now relative only */}
          <div className="relative w-[38rem] h-[44rem] my-12 ml-16">
            {/* ✅ CHANGED: Image gets its own overflow-hidden wrapper */}
            <div className="w-full h-full rounded-sm shadow-2xl shadow-black/40">
              <img
                src="/screen.png"
                alt=""
                className="overflow-hidden w-full h-full object-cover brightness-95 contrast-110 "
              />
            </div>

            {/* ✅ CHANGED: Floating card is now outside the overflow-hidden wrapper */}
            <div className="absolute -bottom-10 -right-14 w-64 bg-[#1A1A1A]/90 backdrop-blur-md border border-zinc-700 shadow-xl shadow-black/40 p-5 z-20">
              <div className="flex flex-col gap-3">
                <Gem className="text-secondary" size={24} strokeWidth={2.2} />

                <h3 className="font-heading text-lg font-semibold text-neutral">
                  Heritage Craft
                </h3>

                <p className="font-body text-xs leading-6 text-zinc-300">
                  Each piece is finished by hand in our Milanese atelier,
                  ensuring every stitch meets our architectural standards.
                </p>
              </div>
            </div>
          </div>{" "}
          {/* Right Column */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#D4AF37] mb-8">
              THE PHILOSOPHY
            </p>

            {/* Heading */}
            <h2 className="text-5xl leading-tight mb-8 text-zinc-300">
              Precision in Every Fiber
            </h2>

            {/* Description */}
            <p className="mb-12 max-w-128 text-1xl text-zinc-300">
              Quiet Luxury isn't just about the absence of logos. It's the
              presence of quality so absolute it speaks for itself. We source
              only from mills that share our commitment to ethical sourcing and
              material innovation.
            </p>

            <div className="border-t border-zinc-800 pt-10"></div>

            {/* Features */}
            <div className="flex text-zinc-300 gap-20">
              {/* Feature 1 */}
              <div>
                <h4 className="font-bold mb-2">TECHNICITY</h4>

                <p>
                  Weather-resistant membranes integrated into natural fibers.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <h4 className="font-bold mb-2">LONGEVITY</h4>

                <p>
                  Built to endure beyond the seasonal trends of fast fashion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
