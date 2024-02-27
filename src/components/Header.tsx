import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-3 xl:p-6">
      <img src="/full-logo-white.svg" alt="JKM Logo" className="h-6 md:h-12" />
      <div className="flex space-x-3 md:space-x-3">
        <Link href="mailto:joshua@jkmichael.com">
          <a target="_blank">
            <FaEnvelope className="text-white" size={24} />
          </a>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=61556643579784">
          <a target="_blank">
            <FaFacebook className="text-white" size={24} />
          </a>
        </Link>
        <Link href="https://github.com/joshua1nine">
          <a target="_blank">
            <FaGithub className="text-white" size={24} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/jkmichael/">
          <a target="_blank">
            <FaLinkedin className="text-white" size={24} />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
