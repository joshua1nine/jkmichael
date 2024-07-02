"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { ProjectCard } from "./ui/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const MoreWork = () => {
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
        Want to see more?
      </motion.h3>
      <motion.h2
        ref={ref}
        variants={popInVariants}
        initial="hidden"
        animate={mainControls}
        className="mb-12"
      >
        More Work
      </motion.h2>
      <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
        <div className="relative h-[300px] transition-all hover:scale-[1.05] cursor-pointer">
          <Link href="https://www.firelakeballoonfest.com/" target="_blank">
            <Image
              alt="balloon festival screenshot"
              src="/baloonfest_thumb.png"
              fill
              sizes="100vw"
              className="object-cover object-left-top rounded-md"
            />
            <div className="absolute top-4 right-4 rounded border bg-gray-900 border-white">
              <ArrowUpRight size={24} color="#FFF" />
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center p-1 text-xs font-semibold  rounded border bg-gray-900 border-white mr-1">
                Developer
              </span>
            </div>
          </Link>
        </div>
        <div className="relative h-[300px] transition-all hover:scale-[1.05] cursor-pointer">
          <Link href="https://www.theballfieldsatfirelake.com/" target="_blank">
            <Image
              alt="firelake ball fields screenshot"
              src="/ball_fields_thumb.png"
              fill
              sizes="100vw"
              className="object-cover object-left-top rounded-md"
            />
            <div className="absolute top-4 right-4 rounded border bg-gray-900 border-white">
              <ArrowUpRight size={24} color="#FFF" />
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center p-1 text-xs font-semibold  rounded border bg-gray-900 border-white mr-1">
                Developer
              </span>
              <span className="inline-flex items-center p-1 text-xs font-semibold  rounded border bg-gray-900 border-white">
                Designer
              </span>
            </div>
          </Link>
        </div>
        <div className="relative h-[300px] transition-all hover:scale-[1.05] cursor-pointer">
          <Link href="https://www.potawatomiheritage.com/" target="_blank">
            <Image
              alt="potawatomi heritage screenshot"
              src="/heritage_thumb.png"
              fill
              sizes="100vw"
              className="object-cover object-left-top rounded-md"
            />
            <div className="absolute top-4 right-4 rounded border bg-gray-900 border-white">
              <ArrowUpRight size={24} color="#FFF" />
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center p-1 text-xs font-semibold  rounded border bg-gray-900 border-white mr-1">
                Developer
              </span>
            </div>
          </Link>
        </div>
        <div className="relative h-[300px] transition-all hover:scale-[1.05] cursor-pointer">
          <Link href="https://www.laborsync.com/" target="_blank">
            <Image
              alt="labor sync screenshot"
              src="/labor_sync_thumb.png"
              fill
              sizes="100vw"
              className="object-cover object-left-top rounded-md"
            />
            <div className="absolute top-4 right-4 rounded border bg-gray-900 border-white">
              <ArrowUpRight size={24} color="#FFF" />
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center p-1 text-xs font-semibold  rounded border bg-gray-900 border-white mr-1">
                Developer
              </span>
              <span className="inline-flex items-center p-1 text-xs font-semibold  rounded border bg-gray-900 border-white">
                Designer
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
