import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, useEffect, useRef } from "react";

type CardComponentProps = ComponentProps<"article">;

type CardCustomProps = {
  image: string;
  title: string;
  description: string;
  tech: { icon: any; title?: string }[];
  link: string;
  roles?: any[];
  delay?: number;
};

type CardProps = Omit<CardComponentProps, keyof CardCustomProps> &
  CardCustomProps;

const Page = ({
  image,
  title,
  description,
  tech,
  link = "",
  roles,
  delay = 0,
}: CardProps) => {
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
    hover: { scale: 1.05 },
  };

  return (
    <motion.article
      ref={ref}
      whileHover="hover"
      variants={popInVariants}
      initial="hidden"
      animate={mainControls}
      className="bg-gray-400 rounded-md max-w-[375px] aspect-video"
    >
      <Link href={link} target="_blank">
        <div>
          <Image
            width={375}
            height={220}
            src={image}
            className="rounded-t-md h-52 w-full object-cover object-top"
            alt="Website screenshot."
          />
          <div className="flex flex-col">
            <div className="flex-1 p-4 pt-2">
              <h4 className="text-2xl font-bold mb-1">{title}</h4>
              <div className="mb-3">
                {roles.map((role, index) => {
                  return (
                    <span
                      key={index}
                      className={` ${
                        index % 2 === 0
                          ? "bg-orange text-white"
                          : "bg-green text-gray-900"
                      } px-1 rounded mr-2`}
                    >
                      {role}
                    </span>
                  );
                })}
              </div>
              <p className="mb-6 leading-7">{description}</p>
            </div>
            <div className="flex items-start px-4 pb-4">
              {tech.map(({ icon, title }, index) => {
                return (
                  <div key={index} className="flex flex-col items-center">
                    <img className="h-7 mr-3" src={icon} title={title} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default Page;
