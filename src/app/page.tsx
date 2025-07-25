import "./css/globals.css";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingBox from "./components/LandingBox";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Background from "./components/Background";
import Projects from "./components/Projects";

export default function Home() {

  return (
    <div className="min-h-full">
      <Background />
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center">
        <LandingBox />
        <div className="min-h-screen relative z-10 bg-gradient-to-b from-[#01012565] to-[#3549922c] w-full max-w-screen">
          <About />
          <Skills />
        </div>
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
