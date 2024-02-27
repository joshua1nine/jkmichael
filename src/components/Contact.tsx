import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="mb-36 md:mb-56 lg:64">
      <h2 className="mb-12 text-center">Contact</h2>
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
        />
        <ContactCard
          url="https://github.com/joshua1nine"
          icon={<FaGithub className="text-[#F5F5F5]" size={32} />}
          text="@joshua1nine"
        />
        <ContactCard
          url="https://www.linkedin.com/in/jkmichael/"
          icon={<FaLinkedin className="text-[#0077B5]" size={32} />}
          text="/in/jkmichael"
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

type ContactCardProps = {
  url: string;
  text: string;
  icon: React.ReactNode;
};

const ContactCard = (props: ContactCardProps) => {
  const { url, text, icon } = props;
  return (
    <Link href={url}>
      <a target="_blank">
        <div
          className="flex items-center mb-4 gap-3 hover:text-orange"
          id="email"
        >
          {icon}
          {text}
        </div>
      </a>
    </Link>
  );
};
