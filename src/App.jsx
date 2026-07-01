import Featuring from "./components/Featuring";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-[#1A1A1A] text-[#F5F5F5] overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <Hero />
      <Featuring />

    <section className="bg-primary py-24">

  {/* Heading */}
  <h2 className="font-heading text-5xl font-bold text-neutral text-center mb-16">
    Shop by Category
  </h2>

  {/* Cards */}
  <div className="flex justify-center gap-8">

    {/* Card 1 */}
    <div className="relative w-72 h-[420px] overflow-hidden group cursor-pointer">

      <img
        src="public/outlet.png"
        alt="Outerwear"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <p className="font-label text-secondary text-xs uppercase tracking-[0.3em] mb-3">
          Collection
        </p>

        <h3 className="font-heading text-neutral text-4xl font-semibold">
          Outerwear
        </h3>

      </div>

    </div>

    {/* Card 2 */}
    <div className="relative w-72 h-[420px] overflow-hidden group cursor-pointer">

      <img
        src="public/Background.png"
        alt="Essentials"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <p className="font-label text-secondary text-xs uppercase tracking-[0.3em] mb-3">
          Essential
        </p>

        <h3 className="font-heading text-neutral text-4xl font-semibold">
          Essentials
        </h3>

      </div>

    </div>

    {/* Card 3 */}
    <div className="relative w-72 h-[420px] overflow-hidden group cursor-pointer">

      <img
        src="public/Fabric.png"
        alt="Materials"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <p className="font-label text-secondary text-xs uppercase tracking-[0.3em] mb-3">
          Atelier
        </p>

        <h3 className="font-heading text-neutral text-4xl font-semibold">
          Materials
        </h3>

      </div>

    </div>

  </div>

</section>
    </main>
  );
};

export default App;
