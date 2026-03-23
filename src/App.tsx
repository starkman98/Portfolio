import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Homelab from "./components/Homelab";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Homelab />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
