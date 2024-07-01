"use client";

import { motion } from "framer-motion";
import { Handshake, Mail } from "lucide-react";
import Link from "next/link";

export const LetsTalk = () => {
  return (
    <section id="contact" className="mb-36 md:mb-56 lg:64 scroll-mt-6">
      <div className="group relative mx-auto w-full overflow-hidden rounded-lg bg-[#151C1A] p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-[#212726]">
        <div className="relative z-10 flex h-full flex-col items-center justify-center overflow-hidden rounded-md bg-[#151C1A] p-8 transition-colors duration-500 group-hover:bg-[#212726]">
          <div className="p-4 mb-10 mt-2 flex items-center justify-center bg-gray-900 rounded-full border-2 border-orange">
            <Handshake size={24} className="text-orange" />
          </div>
          <h4 className="relative text-5xl z-10 mb-6 w-full text-center font-bold text-white">
            Let's Talk!
          </h4>
          <p className="relative mb-6 z-10 text-white text-center text-lg">
            Let's work together to make something great!
            <br /> Here's how you can react out to me!
          </p>
          <Link
            href="mailto:joshua@jkmichael.com"
            className="text-center flex gap-2 items-center text-white bg-[linear-gradient(to_right,#ec6b2d,#f08c5b)] px-4 py-3 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95"
          >
            <Mail />
            <span>joshua@jkmichael.com</span>
          </Link>
        </div>

        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          style={{ scale: 1.75 }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
          }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-orange via-orange/0 to-orange opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </section>
  );
};
