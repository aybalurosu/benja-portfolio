import {motion} from "motion/react";
import Image from "next/image";
import "./../css/landing.css";

export default function LandingBox() {
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
      <motion.div>
        <div className="carrusel flex flex-wrap justify-center items-center gap-4 mt-8">
          <div className="p-2 text-[#c0eaf8]">
            <Image
              src={"/icons/terraform.png"}
              width={70}
              height={100}
              alt=""
            ></Image>
          </div>
          <div className="p-2 text-[#c0eaf8]">
            <Image
              src={"/icons/ansible.png"}
              width={70}
              height={100}
              alt=""
            ></Image>
          </div>
          <div className="p-2 text-[#c0eaf8]">
            <Image
              src={"/icons/docker.png"}
              width={80}
              height={100}
              alt=""
            ></Image>
          </div>
          <div className="p-2 text-[#c0eaf8]">
            <Image
              src={"/icons/kubernetes.png"}
              width={70}
              height={100}
              alt=""
            ></Image>
          </div>
          <div className="p-2 text-[#c0eaf8]">
            <Image
              src={"/icons/linux.png"}
              width={70}
              height={100}
              alt=""
            ></Image>
          </div>
          <div className="p-2 text-[#c0eaf8]">
            <Image
              src={"/icons/php.png"}
              width={70}
              height={100}
              alt=""
            ></Image>
          </div>
          <div className="p-2 text-[#c0eaf8]">
            <Image
              src={"/icons/python.png"}
              width={70}
              height={100}
              alt=""
            ></Image>
          </div>
          <div className="p-2 text-[#c0eaf8]">
            <Image
              src={"/icons/proxmox.png"}
              width={70}
              height={100}
              alt=""
            ></Image>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
