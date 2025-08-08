'use client';
import { Montserrat, Noto_Sans } from 'next/font/google';
import { motion } from "framer-motion";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500'] });
const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['300'] });

export default function LandingBox() {

  return (
    <section className="min-h-screen max-w-screen flex flex-col items-center justify-center gap-5 relative z-10">
      <div className="absolute z-30 flex flex-col items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center pt-0 pb-0 p-5 w-4xl">
          <motion.div
            initial={{opacity: 0, y: -70}} 
            animate={{opacity: 1, y:0}} 
            transition={{duration: 0.8}}>
              <h1 className={`${montserrat.className} md:text-2xl lg:text-[70px] font-semibold 
                mb-4 bg-gradient-to-tr from-[#435dc2] via-[#8eb7e6] to-[#befbee] text-transparent bg-clip-text`}>
                Designed for Designers to showcase their work
            </h1>
          </motion.div>
          <motion.div
           initial={{opacity: 0, y: -60}} 
            animate={{opacity: 1, y:0}} 
            transition={{duration: 0.7}}>
            <p className={`${notoSans.className} text-slate-300 sm:text-base md:text-lg lg:text-xl mb-6 w-lg`}>
              Helping startups and brands to craft expressive and engaging solutions
              for their software needs.
            </p>
          </motion.div>
        </div>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg 
        group bg-gradient-to-br from-[#031455] via-[#2369a7] to-[#34a1d0] group-hover:from-[#185b96] group-hover:to-[#6ab4d3] hover:text-white 
        dark:text-white">
          <span className="relative px-5 py-2.5 inline-flex items-center justify-center gap-3 transition-all ease-in duration-75 dark:bg-[#041A2D] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            <span className="absolute -start-full transition-all group-hover:start-4">
              <Image src={'/landing/cv.svg'} width={20} height={20} alt=""/>
            </span>
            <span className="text-sm font-medium transition-all group-hover:ml-5"> Get in Touch </span>
          </span>
        </button>
      </div>
    </section>
  );
}
