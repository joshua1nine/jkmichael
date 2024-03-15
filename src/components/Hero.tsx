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
      className="relative mt-8 mb-36 md:mt-16 md:mb-56 lg:mt-32 lg:mb-64 flex flex-col md:items-center"
    >
      <motion.h1
        variants={popInVariants}
        initial="hidden"
        animate="visible"
        className="py-2 mb-4 text-5xl font-black leading-[110%] md:leading-[120%] md:text-7xl lg:text-8xl md:text-center"
      >
        Make your website{" "}
        <span className="gradient-text animate-gradient block">
          work for you!
        </span>
      </motion.h1>
      <motion.p
        variants={popInVariants}
        initial="hidden"
        animate="visible"
        className="text-xl mb-8 max-w-md md:max-w-xl text-gray-50 md:text-center md:text-3xl"
      >
        Elevate your business with websites that covert visitors into customers
      </motion.p>
      <motion.button
        onClick={() => router.push("/#contact")}
        variants={popInVariants}
        initial="hidden"
        animate="visible"
        className="text-white text-lg w-52 font-bold px-4 py-3 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95"
      >
        <span className="relative z-10">Let's Talk</span>
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
