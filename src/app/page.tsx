import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LandingBox from "./components/LandingBox";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Background from "./components/Background";

export default function Home() {

  return (
    <div className="min-h-full">
      <Background />
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center">
        <LandingBox />
        <About />
        <Skills />
        <Work />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
