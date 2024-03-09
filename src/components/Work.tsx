import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Card from "./ui/Card";
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
      <div className="flex flex-col space-y-6 items-center md:items-start md:flex-row md:flex-wrap md:space-y-0 md:gap-4 md:justify-center">
        <Card
          image="/balloon-fest_prod-card.jpg"
          title="Firelight Balloon Fest"
          description="Festival info site that included a custom backend for vendor registration and payments portal."
          link="https://www.firelakeballoonfest.com/"
          roles={["developer"]}
          tech={[
            { icon: "/icons/react_logo.svg", title: "React.js" },
            { icon: "/icons/next_logo.svg", title: "Next.js" },
            { icon: "/icons/stripe_logo.svg", title: "Stripe" },
            { icon: "/icons/sanity_logo.svg", title: "Sanity" },
            { icon: "/icons/vercel_logo.svg", title: "Vercel" },
          ]}
          delay={0.1}
        />
        <Card
          image="/firelakegolf_prod-card.jpg"
          title="FireLake Golf"
          description="Golf course brochure site. Dynamic contact form allows users and to request event space or book a tournament."
          link="https://www.firelakegolf.com/"
          roles={["developer", "designer"]}
          tech={[
            { icon: "/icons/figma_logo.svg", title: "Figma" },
            { icon: "/icons/react_logo.svg", title: "React.js" },
            { icon: "/icons/next_logo.svg", title: "Next.js" },
            { icon: "/icons/wordpress-svgrepo-com.svg", title: "WordPress" },
            { icon: "/icons/php-logo.svg", title: "PHP" },
            { icon: "/icons/vercel_logo.svg", title: "Vercel" },
          ]}
          delay={0.2}
        />
        <Card
          image="/cpnhouseofhope_prod-card.jpg"
          title="CPN House of Hope"
          description="CPN House of Hope is a resource rich website that helps victims of abuse find programs and services in their area."
          link="https://www.cpnhouseofhope.com/"
          roles={["developer", "designer"]}
          tech={[
            { icon: "/icons/figma_logo.svg", title: "Figma" },
            { icon: "/icons/react_logo.svg", title: "React.js" },
            { icon: "/icons/next_logo.svg", title: "Next.js" },
            { icon: "/icons/wordpress-svgrepo-com.svg", title: "WordPress" },
            { icon: "/icons/php-logo.svg", title: "PHP" },
            { icon: "/icons/vercel_logo.svg", title: "Vercel" },
          ]}
          delay={0.3}
        />
        <Card
          image="/cultural_prod-card.png"
          title="Cultural Heritage Center"
          description="Award winning Cultural Heritage Center museum and website thanks to its fast custom built wordpress theme."
          link="https://www.potawatomiheritage.com/"
          roles={["developer"]}
          tech={[
            { icon: "/icons/figma_logo.svg", title: "Figma" },
            { icon: "/icons/wordpress-svgrepo-com.svg", title: "WordPress" },
            { icon: "/icons/php-logo.svg", title: "PHP" },
          ]}
          delay={0.4}
        />
        <Card
          image="/potawatomi_prod-card.png"
          title="Potawatomi"
          description="CPN landing page. This custom WordPress theme this site informs everyone about CPN's enterpirses and services."
          link="https://www.potawatomi.org/"
          roles={["developer"]}
          tech={[
            { icon: "/icons/figma_logo.svg", title: "Figma" },
            { icon: "/icons/wordpress-svgrepo-com.svg", title: "WordPress" },
            { icon: "/icons/php-logo.svg", title: "PHP" },
          ]}
          delay={0.5}
        />
      </div>
    </section>
  );
};
