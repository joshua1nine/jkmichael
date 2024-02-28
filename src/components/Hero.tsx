import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

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
      <motion.h3
        variants={popInVariants}
        initial="hidden"
        animate={mainControls}
        className="text-orange text-xl mb-1"
      >
        Hello, my name is
      </motion.h3>
      <motion.h2
        variants={popInVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.1 }}
        className="text-7xl lg:text-8xl font-bold mb-2"
      >
        Joshua Michael
      </motion.h2>
      <motion.p
        variants={popInVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.2 }}
        className="py-2 mb-8 text-lg max-w-lg md:text-2xl"
      >
        I am a <span className="text-orange">full stack</span> web developer. I{" "}
        <span className="text-orange">design</span> and{" "}
        <span className="text-orange">develop</span> intuitive user experiences
        for the web.
      </motion.p>
      <motion.a
        variants={popInVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.3 }}
        className="py-4 px-6 bg-orange rounded-xl uppercase font-bold"
        href="#work"
      >
        Check out my work
      </motion.a>
    </section>
  );
};
