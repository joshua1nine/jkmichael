import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

type ContactCardProps = {
  url: string;
  text: string;
  icon: React.ReactNode;
  delay?: number;
};

const ContactCard = (props: ContactCardProps) => {
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

  const { url, text, icon, delay = 0 } = props;
  return (
    <Link href={url} target="_blank">
      <div
        className="flex items-center mb-4 gap-3 hover:text-orange"
        id="email"
      >
        <motion.span
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          transition={{ delay }}
          animate={mainControls}
        >
          {icon}
        </motion.span>
        <motion.span
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          transition={{ delay: delay + 0.1 }}
          animate={mainControls}
        >
          {text}
        </motion.span>
      </div>
    </Link>
  );
};

export default ContactCard;
