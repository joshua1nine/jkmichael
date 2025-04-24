"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { ProjectCard } from "./ui/ProjectCard";
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
      <div className="flex flex-wrap gap-3 justify-center">
        <ProjectCard
          id={1}
          image="/laborsync_prod-card.png"
          title="Labor Sync"
          description="Clean, intuitive, and feature rich SAAS web app."
          link="/case/labor-sync"
        />
        <ProjectCard
          id={1}
          image="/firelakegolf_prod-card.jpg"
          title="Firelake Golf"
          description="A stunning Golf course marketing website."
          link="/case/firelake-golf"
        />
        <ProjectCard
          id={1}
          image="/cpnhouseofhope_prod-card.jpg"
          title="House of Hope"
          description="A warm and inviting website helping women of domestic abuse."
          link="/case/house-of-hope"
        />
        <ProjectCard
          id={1}
          image="/potawatomi_prod-card.png"
          title="Potawatomi"
          description="Information dense government website designed to inform"
          link="/case/potawatomi"
        />
      </div>
    </section>
  );
};
