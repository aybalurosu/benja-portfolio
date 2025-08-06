"use client";
import "./../css/skills.css";
import useMeasure from "react-use-measure";
import Card from "./Card";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function Skills() {
  const images: string[] = [
    "/icons/ansible.png",
    "/icons/docker.png",
    "/icons/kubernetes.png",
    "/icons/linux.png",
    "/icons/mysql.png",
    "/icons/php.png",
    "/icons/proxmox.png",
    "/icons/python.png",
    "/icons/terraform.png",
  ];

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let finalPosition = -width / 3 + 8;

    let controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [width]);
  return (
    <section className="min-h-[200px] min-w-screen flex flex-col items-center justify-center relative z-10">
        <div className="slider overflow-hidden max-w-[1400px] relative">
        <motion.div
            className="slider flex gap-30 w-max"
            ref={ref}
            style={{ x: xTranslation }}
        >
            {[...images, ...images].map((img, i) => (
            <Card image={img} key={i} />
            ))}
        </motion.div>
        </div>
    </section>
  );
}
