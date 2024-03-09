import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const About = () => {
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

  const dropInVariants = {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="mb-36 md:mb-44 lg:64">
      <div>
        <motion.h3
          ref={ref}
          variants={popInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="gradient-text animate-gradient text-xl mb-4"
        >
          Let me introduce myself
        </motion.h3>
        <motion.h2
          ref={ref}
          variants={popInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mb-8 lg:hidden"
        >
          Who am I?
        </motion.h2>
        <div className="lg:flex lg:flex-row-reverse">
          <motion.div
            ref={ref}
            variants={popInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="flex justify-center mb-4 lg:block lg:ml-2"
          >
            <Image
              className="rounded-lg"
              width={400}
              height={400}
              src="/portrait.jpg"
              alt="Joshua Michael"
            />
          </motion.div>
          <article className="lg:flex-1">
            <motion.h2
              ref={ref}
              variants={popInVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="mb-8 hidden lg:block"
            >
              Who am I?
            </motion.h2>
            <motion.div
              ref={ref}
              variants={popInVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <p className="mb-12 leading-7 text-lg max-w-2xl">
                Welcome to Michael Web Solutions! I'm Joshua, your go-to
                developer, dedicated to crafting seamless user experiences for
                the digital world. Let's transform your business ideas into
                stunning, custome websites tailored to your unique needs. From
                concept to launch, I'm here to elevate your online presence and
                solve your software challenges. Let's collaborate and bring your
                vision to life!
              </p>
            </motion.div>
            <div className="flex flex-wrap justify-center lg:justify-start">
              <motion.img
                ref={ref}
                variants={dropInVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ delay: 0.2 }}
                src="/icons/html_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="html"
              />
              <motion.img
                ref={ref}
                variants={popInVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ delay: 0.3 }}
                src="/icons/css_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="css"
              />
              <motion.img
                ref={ref}
                variants={dropInVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ delay: 0.4 }}
                src="/icons/javascript-logo-svgrepo-com.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="css"
              />
              <motion.img
                ref={ref}
                variants={popInVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ delay: 0.5 }}
                src="/icons/react_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="react"
              />
              <motion.img
                ref={ref}
                variants={dropInVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ delay: 0.6 }}
                src="/icons/figma_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="figma"
              />
              <motion.img
                ref={ref}
                variants={popInVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ delay: 0.7 }}
                src="/icons/next_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="next.js"
              />
              <motion.img
                src="/icons/node-svgrepo-com.svg"
                ref={ref}
                variants={dropInVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ delay: 0.8 }}
                alt=""
                className="h-10 mr-5 mb-3"
                title="node.js"
              />
              <motion.img
                ref={ref}
                variants={popInVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ delay: 0.9 }}
                src="/icons/sanity_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="sanity"
              />
              <motion.img
                ref={ref}
                variants={popInVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ delay: 1.0 }}
                src="/icons/vercel_logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="vercel"
              />
              <motion.img
                ref={ref}
                variants={popInVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ delay: 1.1 }}
                src="/icons/wordpress-svgrepo-com.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="vercel"
              />
              <motion.img
                ref={ref}
                variants={popInVariants}
                initial="hidden"
                animate={mainControls}
                transition={{ delay: 1.2 }}
                src="/icons/php-logo.svg"
                alt=""
                className="h-10 mr-5 mb-3"
                title="vercel"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
