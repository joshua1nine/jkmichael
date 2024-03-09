import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import Image from "next/image";

const CARD_WIDTH = 375;
const CARD_HEIGHT = 450;
const MARGIN = 12;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section ref={ref}>
      <div className="relative overflow-hidden">
        {/* CARDS */}
        <div className="max-w-6xl">
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex p-2"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-white/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-white/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ image, title, description, roles, link }: CardProps) => {
  return (
    <div
      className="relative shrink-0 bg-gray-400 cursor-pointer rounded-md transition-all hover:scale-[1.015]"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
      }}
    >
      <Link href={link} target="_blank">
        <Image
          width={375}
          height={220}
          src={image}
          className="rounded-t-md h-52 w-full object-cover object-top aspect-video"
          alt="Website screenshot."
        />
        <div className="flex flex-col">
          <div className="flex-1 p-6">
            <h4 className="text-2xl font-bold mb-3">{title}</h4>
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
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardCarousel;

type CardProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  roles?: any[];
};

const items: CardProps[] = [
  {
    id: 1,
    image: "/balloon-fest_prod-card.jpg",
    title: "Firelight Balloon Fest",
    description:
      "Festival info site that included a custom backend for vendor registration and payments portal.",
    link: "https://www.firelakeballoonfest.com/",
    roles: ["developer"],
  },
  {
    id: 2,
    image: "/firelakegolf_prod-card.jpg",
    title: "Firelake Golf",
    description:
      "Golf course brochure site. Dynamic contact form allows users and to request event space or book a tournament.",
    link: "https://www.firelakegolf.com/",
    roles: ["developer", "designer"],
  },
  {
    id: 3,
    image: "/cpnhouseofhope_prod-card.jpg",
    title: "CPN House of Hope",
    description:
      "CPN House of Hope is a resource rich website that helps victims of abuse find programs and services in their area.",
    link: "https://www.cpnhouseofhope.com/",
    roles: ["developer", "designer"],
  },
  {
    id: 4,
    image: "/cultural_prod-card.png",
    title: "Cultural Heritage Center",
    description:
      "Award winning Cultural Heritage Center museum and website thanks to its fast custom built wordpress theme.",
    link: "https://www.potawatomiheritage.com/",
    roles: ["developer"],
  },
  {
    id: 5,
    image: "/potawatomi_prod-card.png",
    title: "Potawatomi",
    description:
      "CPN landing page. This custom WordPress theme this site informs everyone about CPN's enterpirses and services.",
    link: "https://www.potawatomi.org/",
    roles: ["developer"],
  },
];
