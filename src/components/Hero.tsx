"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const router = useRouter();

  const popInVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="relative mt-8 mb-36 md:mt-16 md:mb-56 lg:mt-32 lg:mb-64 flex flex-col items-center"
    >
      <motion.h1
        variants={popInVariants}
        initial="hidden"
        animate="visible"
        className="py-2 mb-8 text-4xl font-black max-w-4xl md:leading-[120%] md:text-6xl text-center"
      >
        Elevate your business with{" "}
        <span className="gradient-text animate-gradient">bespoke</span> websites
        designed to{" "}
        <span className="gradient-text animate-gradient">engage</span> and{" "}
        <span className="gradient-text animate-gradient">convert</span>.
      </motion.h1>
      <motion.button
        onClick={() => router.push("/#work")}
        variants={popInVariants}
        initial="hidden"
        animate="visible"
        className="text-white text-md md:text-lg w-52 font-medium px-4 py-3 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95"
      >
        <span className="relative z-10">Check out my work</span>
        <motion.div
          initial={{ left: 0 }}
          animate={{ left: "-300%" }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 4,
            ease: "linear",
          }}
          className="bg-[linear-gradient(to_right,#ec6b2d,#f08c5b)] absolute z-0 inset-0 w-[400%]"
        ></motion.div>
      </motion.button>
    </section>
  );
};
