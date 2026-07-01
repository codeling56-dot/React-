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
    </main>
  );
};

export default App;
