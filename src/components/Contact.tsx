"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { LeadForm } from "./ui/LeadForm";

export const Contact = () => {
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
    <section id="contact" className="mb-36 md:mb-56 lg:64 scroll-mt-6">
      <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
        <motion.h3
          ref={ref}
          variants={popInVariants}
          initial="hidden"
          animate={mainControls}
          className="gradient-text animate-gradient text-xl"
        >
          Let's work together
        </motion.h3>
        <motion.h2
          ref={ref}
          variants={popInVariants}
          initial="hidden"
          animate={mainControls}
          transition={{ delay: 0.25 }}
          className=""
        >
          Get Your Business Online
        </motion.h2>
        <motion.p
          ref={ref}
          variants={popInVariants}
          initial="hidden"
          animate={mainControls}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-50 mb-12"
        >
          Tell me more about your vision to expand your business so that we can
          collaborate to make it a reality
        </motion.p>
      </div>
      <motion.div
        ref={ref}
        variants={popInVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.75 }}
        className="max-w-xl mx-auto"
      >
        <LeadForm />
      </motion.div>
    </section>
  );
};
