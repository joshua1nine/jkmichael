import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import CardCarousel from "./ui/CardCarousel";
export const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const popInVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="work" className="mb-36 md:mb-56 lg:64 scroll-mt-6">
      <motion.h3
        ref={ref}
        variants={popInVariants}
        initial="hidden"
        animate={mainControls}
        className="gradient-text animate-gradient text-xl mb-4"
      >
        Check this out
      </motion.h3>
      <motion.h2
        ref={ref}
        variants={popInVariants}
        initial="hidden"
        animate={mainControls}
        className="mb-12"
      >
        My Work
      </motion.h2>
      <CardCarousel />
    </section>
  );
};
