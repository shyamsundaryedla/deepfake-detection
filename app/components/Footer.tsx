import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-xl font-bold">DeepFake Detector</h4>
          <p className="text-grey-300">© 2024 All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-2xl">
          <Link href="https://twitter.com/yourprofile" target="_blank">
            <FaTwitter className="hover:text-purple-500 transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" target="_blank">
            <FaLinkedin className="hover:text-purple-500 transition-colors" />
          </Link>
          <Link href="https://github.com/yourprofile" target="_blank">
            <FaGithub className="hover:text-purple-500 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
