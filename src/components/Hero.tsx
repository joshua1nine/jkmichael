import { motion, useAnimation, useInView } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    if (isInView) {
      // Fire animation
      mainControls.start("visible");
    }
  }, [isInView]);

  const popInVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="relative mt-8 mb-36 md:mt-16 md:mb-56 lg:mt-32 lg:mb-64"
    >
      <motion.h2
        variants={popInVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl flex flex-col gap-0 uppercase font-bold mb-2"
      >
        <span>Michael</span>
        <span className="text-orange">Web Solutions</span>
      </motion.h2>
      <motion.p
        variants={popInVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.2 }}
        className="py-2 mb-8 text-xl max-w-4xl md:leading-10 md:text-3xl"
      >
        Elevate your business with{" "}
        <span className="gradient-text animate-gradient">bespoke</span> websites
        designed to{" "}
        <span className="gradient-text animate-gradient">engage</span> and{" "}
        <span className="gradient-text animate-gradient">convert</span>,
        crafting pixel-perfect experiences that{" "}
        <span className="gradient-text animate-gradient">drive success</span>.
      </motion.p>
      <motion.button
        onClick={() => router.push("/#work")}
        variants={popInVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.2 }}
        className="text-white text-lg font-medium px-4 py-3 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95"
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
          className="bg-[linear-gradient(to_right,#ec6b2d,#ee7b44,#f08c5b)] absolute z-0 inset-0 w-[400%]"
        ></motion.div>
      </motion.button>
    </section>
  );
};
