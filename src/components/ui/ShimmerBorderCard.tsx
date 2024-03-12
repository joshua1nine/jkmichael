import { motion } from "framer-motion";
import {
  BarChart,
  Dna,
  Handshake,
  LineChart,
  LockKeyhole,
  Magnet,
  Pen,
  PencilRuler,
  Search,
  Smile,
  User,
  Wifi,
} from "lucide-react";
import { ComponentProps } from "react";

type ShimmerBorderCardComponentProps = ComponentProps<"div">;

type ShimmerBorderCardCustomProps = {
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

type ShimmerBorderCardProps = Omit<
  ShimmerBorderCardComponentProps,
  keyof ShimmerBorderCardCustomProps
> &
  ShimmerBorderCardCustomProps;

const ShimmerBorderCard = (props: ShimmerBorderCardProps) => {
  const { iconName, title, body, ...componentProps } = props;

  // Switch statement to determine which icon to use
  const iconStyles = "text-orange";

  const iconSize = 24;
  let icon: React.ReactNode;
  switch (iconName) {
    case "handshake":
      icon = <Handshake size={iconSize} className={`${iconStyles}`} />;
      break;
    case "wifi":
      icon = <Wifi size={iconSize} className={iconStyles} />;
      break;
    case "dna":
      icon = <Dna size={iconSize} className={iconStyles} />;
      break;
    case "design":
      icon = <PencilRuler size={iconSize} className={iconStyles} />;
      break;
    case "search":
      icon = <Search size={iconSize} className={iconStyles} />;
      break;
    case "magnet":
      icon = <Magnet size={iconSize} className={iconStyles} />;
      break;
    case "analytics":
      icon = <BarChart size={iconSize} className={iconStyles} />;
      break;
    case "lock":
      icon = <LockKeyhole size={iconSize} className={iconStyles} />;
      break;
    case "graph":
      icon = <LineChart size={iconSize} className={iconStyles} />;
      break;
    case "user":
      icon = <User size={iconSize} className={iconStyles} />;
      break;
    case "pen":
      icon = <Pen size={iconSize} className={iconStyles} />;
      break;
    case "smile":
      icon = <Smile size={iconSize} className={iconStyles} />;
      break;
    default:
      icon = <Handshake size={iconSize} className={iconStyles} />;
      break;
  }

  return (
    <div
      className="group relative mx-auto w-full overflow-hidden rounded-lg bg-[#151C1A] p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-[#212726]"
      {...componentProps}
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-center overflow-hidden rounded-md bg-[#151C1A] p-8 transition-colors duration-500 group-hover:bg-[#212726]">
        <div className="p-4 mb-10 mt-2 flex items-center justify-center bg-gray-900 rounded-full border-2 border-orange">
          {icon}
        </div>

        <h4 className="relative z-10 mb-4 w-full text-2xl font-bold text-white">
          {title}
        </h4>
        <p className="relative z-10 text-white text-lg">{body}</p>
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
  );
};

export default ShimmerBorderCard;
