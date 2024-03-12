"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ShimmerBorderCard from "./ui/ShimmerBorderCard";

export const Services = () => {
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
    <section id="services" className="mb-36 md:mb-56 lg:64 scroll-mt-6">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h3
          ref={ref}
          variants={popInVariants}
          initial="hidden"
          animate={mainControls}
          className="gradient-text animate-gradient text-xl mb-4"
        >
          Invest in your business
        </motion.h3>
        <motion.h2
          ref={ref}
          variants={popInVariants}
          initial="hidden"
          animate={mainControls}
          className="mb-6 text-center"
        >
          Elevate Your Brand
        </motion.h2>
        <motion.p
          ref={ref}
          variants={popInVariants}
          initial="hidden"
          animate={mainControls}
          className="mb-12 text-xl text-center max-w-2xl"
        >
          Investing in a well designed and developed website is crucial to
          growing your business.
        </motion.p>
      </div>

      <div className="max-w-lg: flex flex-col gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 ">
        {CARDS.map(({ id, title, body, iconName }) => {
          return (
            <ShimmerBorderCard
              key={id}
              title={title}
              body={body}
              iconName={iconName}
            />
          );
        })}
      </div>
    </section>
  );
};

type CardType = {
  id: number;
  iconName:
    | "handshake"
    | "wifi"
    | "dna"
    | "design"
    | "search"
    | "magnet"
    | "analytics"
    | "lock"
    | "graph"
    | "user"
    | "pen"
    | "smile";
  title: string;
  body: string;
};

const CARDS: CardType[] = [
  {
    id: 1,
    title: "Professionalism",
    body: "A well-designed website conveys professionalism and credibility, making a positive impression on potential customers.",
    iconName: "handshake",
  },
  {
    id: 2,
    title: "Online Presence",
    body: "In today's digital age, having an online presence is essential for reaching a broader audience and staying competitive.",
    iconName: "wifi",
  },
  {
    id: 3,
    title: "Brand Identity",
    body: "A custom-designed website can reflect the brand's identity, values, and personality, strengthening brand recognition and loyalty.",
    iconName: "dna",
  },
  {
    id: 4,
    title: "Responsive Design",
    body: "With increasing mobile use, a responsive website ensures it looks and functions well on all screens, enhancing accessibility and satisfaction.",
    iconName: "design",
  },
  {
    id: 5,
    title: "Search Engine Optimization (SEO)",
    body: "An optimized website can improve search engine rankings, making it easier for potential customers to find the business online.",
    iconName: "search",
  },
  {
    id: 6,
    title: "Lead Generation",
    body: "A well-designed website can incorporate effective calls-to-action and lead capture forms, helping to generate leads and grow the customer base.",
    iconName: "magnet",
  },
  {
    id: 7,
    title: "Analytics",
    body: "Integrating tools like Google Analytics provides valuable insights into visitor behavior, enabling informed decisions and refined marketing strategies.",
    iconName: "analytics",
  },
  {
    id: 8,
    title: "Security",
    body: "Professional web developers implement robust security to protect websites from cyber threats, safeguarding sensitive data and customer trust.",
    iconName: "lock",
  },
  {
    id: 9,
    title: "Scalability",
    body: "As the business grows, a well-designed website can easily accommodate increased traffic, functionality, and features, without compromising performance.",
    iconName: "graph",
  },
  {
    id: 10,
    title: "User Experience",
    body: "A skilled web designer can create a user-friendly interface, enhancing the overall experience for visitors and encouraging engagement and conversions.",
    iconName: "user",
  },
  {
    id: 11,
    title: "Content Management",
    body: "Hiring a developer can facilitate the management of content, allowing your business to regularly update information, publish blog posts, and showcase new offerings.",
    iconName: "pen",
  },
  {
    id: 12,
    title: "Customer Support",
    body: "Features such as live chat, FAQs, and contact forms can improve customer support and satisfaction, fostering positive relationships and repeat business.",
    iconName: "smile",
  },
];
