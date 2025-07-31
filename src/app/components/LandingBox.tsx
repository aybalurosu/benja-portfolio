'use client';

import * as m from "framer-motion";
import Image from "next/image";
import useMesure from "react-use-measure";
import "./../css/landing.css";
import { useEffect } from "react";

export default function LandingBox() {

  const [ref, { width }] = useMesure();
  const xTranslation = m.useMotionValue(1);

  useEffect(() => {
    let finalPosition = -width / 2 + 100;

    let controls = m.animate(xTranslation, [1, finalPosition], {
      ease: "easeInOut",
      duration: 25,  
      repeat: Infinity,
      repeatType: "loop",
      restDelay: 1,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-3 relative z-10">
      <div className="flex flex-col items-center justify-end">
        <div className="landing-icon w-30 h-30 rounded-full relative bottom-4"></div>
        <div className="bg-[#4a4f62] w-40 h-10 rounded-lg absolute"></div>
      </div>
      <div className="text-center text-white flex flex-col items-center justify-center p-5 w-4xl">
        <h1 className="text-6xl font-semibold mb-4">
          Designed for Designers to showcase their work
        </h1>
        <p className="text-xl mb-6 w-lg">
          Helping startups and brands to craft expressive and engaging solutions
          for their software needs.
        </p>
      </div>
      <m.motion.div  ref={ref} style={{ x: xTranslation }} className="w-90 h-40 overflow-hidden relative">
        <div className="inline-flex justify-center items-center gap-15 mt-8">
          <div className="terraform"></div>
          <div className="ansible"></div>
          <div className="docker"></div>
          <div className="linux"></div>
          <div className="php"></div>
          <div className="python"></div>
          <div className="mysql"></div>
          <div className="proxmox"></div>
        </div>
      </m.motion.div>
    </section>
  );
}
