import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import ContactCard from "./ui/ContactCard";

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
      <motion.h2
        ref={ref}
        variants={popInVariants}
        initial="hidden"
        animate={mainControls}
        className="mb-12 text-center"
      >
        Contact
      </motion.h2>
      <div className="flex flex-col items-center">
        <ContactCard
          url="mailto:joshua@jkmichael.com"
          icon={<FaEnvelope className="text-white" size={32} />}
          text="joshua@jkmichael.com"
        />
        <ContactCard
          url="https://www.facebook.com/profile.php?id=61556643579784"
          icon={<FaFacebook className="text-[#316FF6]" size={32} />}
          text="Michael Web Solutions"
          delay={0.2}
        />
        <ContactCard
          url="https://github.com/joshua1nine"
          icon={<FaGithub className="text-[#F5F5F5]" size={32} />}
          text="@joshua1nine"
          delay={0.4}
        />
        <ContactCard
          url="https://www.linkedin.com/in/jkmichael/"
          icon={<FaLinkedin className="text-[#0077B5]" size={32} />}
          text="/in/jkmichael"
          delay={0.6}
        />
        {/* <Link href="https://res.cloudinary.com/bearedweb/image/upload/v1649030743/Resume_-_Joshua_Michael_berwpi.pdf"> */}
        {/*   <a target="_blank" className="btn"> */}
        {/*     Want a resume? */}
        {/*   </a> */}
        {/* </Link> */}
      </div>
    </section>
  );
};
