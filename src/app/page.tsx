import "./css/globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingBox from "./components/LandingBox";
import About from "./components/About";
import Experience from "./components/Experience";
import Lines from "./components/Lines";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function Home() {

  return (
    <div className="min-h-full bg-[rgb(2,3,15)]">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex flex-col items-center justify-center">
          <Lines />
          <LandingBox />
          <Skills />
        </div>
        <div className="flex flex-col items-center justify-center">
          <About />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Projects />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Experience />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Lines />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
