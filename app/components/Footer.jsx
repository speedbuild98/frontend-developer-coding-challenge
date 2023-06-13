import { githubDefault } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full static bottom-0 text-center flex flex-row justify-center items-center h-[120px] gap-[10px]">
      <Image src={githubDefault} alt="github" width={27} height={27} />
      <Link className="text-600" href="https://github.com/speedbuild98/frontend-developer-coding-challenge">View this repository</Link>
    </footer>
  );
};

export default Footer;
