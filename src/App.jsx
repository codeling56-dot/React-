import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F5F5] w-dvw h-dvh overflow-x-hidden">
      <header>
        <Navbar />
        <Hero/>
      </header>
    </main>
  );
};

export default App;
