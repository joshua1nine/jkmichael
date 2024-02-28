import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Header = () => {
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
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="flex items-center justify-between p-3 xl:p-6">
      <motion.img
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        src="/full-logo-white.svg"
        alt="JKM Logo"
        className="h-6 md:h-12"
      />
      <div className="flex space-x-3 md:space-x-3">
        <motion.div variants={popInVariants} initial="hidden" animate="visible">
          <Link href="mailto:joshua@jkmichael.com" target="_blank">
            <FaEnvelope className="text-white" size={24} />
          </Link>
        </motion.div>
        <motion.div
          variants={popInVariants}
          initial="hidden"
          transition={{ delay: 0.2 }}
          animate="visible"
        >
          <Link
            href="https://www.facebook.com/profile.php?id=61556643579784"
            target="_blank"
          >
            <FaFacebook className="text-white" size={24} />
          </Link>
        </motion.div>
        <motion.div
          variants={popInVariants}
          initial="hidden"
          transition={{ delay: 0.4 }}
          animate="visible"
        >
          <Link href="https://github.com/joshua1nine" target="_blank">
            <FaGithub className="text-white" size={24} />
          </Link>
        </motion.div>
        <motion.div
          variants={popInVariants}
          initial="hidden"
          transition={{ delay: 0.6 }}
          animate="visible"
        >
          <Link href="https://www.linkedin.com/in/jkmichael/" target="_blank">
            <FaLinkedin className="text-white" size={24} />
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
