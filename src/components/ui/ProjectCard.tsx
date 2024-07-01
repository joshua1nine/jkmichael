import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type CardProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({ image, title, description, link }: CardProps) => {
  return (
    <div className="flex flex-col border border-[#212726] space-y-4 relative max-w-[290px] p-3 shrink-0 bg-gray-400  rounded-2xl ">
      <Image
        width={375}
        height={375}
        src={image}
        className="rounded h-44 w-full object-cover object-top aspect-video"
        alt="Website screenshot."
      />
      <div className="h-[180px] flex flex-col p-2">
        <div className="flex-1">
          <h4 className="text-lg font-bold mb-2">{title}</h4>
          <p className="mb-6">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={link}
            target="_blank"
            className="inline-flex gap-2 items-center self-start rounded-md text-sm px-4 py-2 font-bold text-white bg-gray-300 transition-all hover:scale-[1.05]"
          >
            Case Study
            <ArrowRight size={16} />
          </Link>
          <span className="inline-flex rounded border border-gray-200">
            <ArrowUpRight color="#3f4b47" />
          </span>
        </div>
      </div>
    </div>
  );
};
