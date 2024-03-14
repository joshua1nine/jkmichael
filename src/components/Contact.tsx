"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import ContactCard from "./ui/ContactCard";
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
    <section id="contact" className="mb-36 md:mb-56 lg:64">
      <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
        <motion.h3
          ref={ref}
          variants={popInVariants}
          initial="hidden"
          animate="visible"
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
        <p className="text-xl mb-12">
          Tell me more about your vision to expand your business so that we can
          collaborate to make it a reality
        </p>
      </div>
      <div className="max-w-xl mx-auto">
        <LeadForm />
      </div>
    </section>
  );
};
