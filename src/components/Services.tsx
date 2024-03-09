import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Services = () => {
  const [selected, setSelected] = useState(TABS[0]);

  return (
    <section id="services" className="mb-36 md:mb-56 lg:64 scroll-mt-6">
      <Heading />
      <Tabs selected={selected} setSelected={setSelected} />
      <Service selected={selected} />
    </section>
  );
};

const Heading = () => {
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
    <>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h3
          ref={ref}
          variants={popInVariants}
          initial="hidden"
          animate={mainControls}
          className="gradient-text animate-gradient text-xl mb-4"
        >
          Need help?
        </motion.h3>
        <motion.h2
          ref={ref}
          variants={popInVariants}
          initial="hidden"
          animate={mainControls}
          className="mb-12"
        >
          Services
        </motion.h2>
      </div>
    </>
  );
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
      {TABS.map((tab) => (
        <button
          onClick={() => setSelected(tab)}
          className={`relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-lg font-medium transition-colors duration-500 ${
            selected === tab
              ? "border-orange text-white"
              : "border-gray-600 bg-transparent text-gray-100"
          }`}
          key={tab}
        >
          <span className="relative z-10">{tab}</span>
          <AnimatePresence>
            {selected === tab && (
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.5,
                  ease: "backIn",
                }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-orange-600 to-orange-400"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
};

const Service = ({ selected }) => {
  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <AnimatePresence mode="wait">
        {Object.entries(SERVICES).map(([tab, service]) => {
          return selected === tab ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: "backIn",
              }}
              className="space-y-4"
              key={tab}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-lg">{service.description}</p>
              </div>
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </div>
  );
};

const TABS = ["Web Dev", "UI Design", "SEO", "Consulting"];

const SERVICES = {
  "Web Dev": {
    title: "Web Development",
    description:
      "Transforming your vision into stunning digital reality, I specialize in crafting visually captivating and user-friendly website designs. From sleek layouts to intuitive navigation, each design is meticulously tailored to reflect your brand identity and engage your audience effectively.",
  },
  "UI Design": {
    title: "UI Design",
    description:
      "With expertise in cutting-edge technologies and industry best practices, I bring your website design to life through seamless and responsive development. From front-end aesthetics to back-end functionality, I ensure your website not only looks exceptional but also operates flawlessly across devices and platforms.",
  },
  SEO: {
    title: "SEO Integration",
    description:
      "Elevating your online visibility and driving organic traffic to your website, I seamlessly integrate search engine optimization (SEO) strategies into every aspect of your website. Leveraging tools like Google Analytics to ensure it's primed for maximum effectiveness and ready for any marketing team to boost SEO efforts.",
  },
  Consulting: {
    title: "Consultations",
    description:
      "Guiding you through the complexities of the digital landscape, I offer personalized consultations to help you navigate strategic decisions and maximize the effectiveness of your online presence. Whether it's refining your website's performance, improved design to increase conversions, or addressing specific challenges, I provide expert insights and actionable recommendations to drive your business forward.",
  },
};
