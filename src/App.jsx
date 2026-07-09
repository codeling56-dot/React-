import Featuring from "./components/Featuring";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Categorycard from "./components/Categorycard";
import Bento from "./Bento";
import Psp from "./components/Psp";
import Gmail from "./components/Gmail";
import Footer from "./components/Footer";



const App = () => {
  return (
    <main className="bg-[#1A1A1A] text-[#F5F5F5] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Featuring />
      <Categorycard />
      <Bento />
      <Psp/>
      <Gmail/>
      <Footer/>
    </main>


  );
};

export default App;
