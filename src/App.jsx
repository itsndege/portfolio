import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar name="Silas Ochieng" />

      <Hero
        name="Silas Ochieng"
        title="IT Graduate | Frontend Developer | Cybersecurity Enthusiast"
        location="Nairobi, Kenya"
        university="JKUAT"
      />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
  
}
export default App;