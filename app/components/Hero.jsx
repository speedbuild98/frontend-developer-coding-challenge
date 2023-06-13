import Link from "next/link";
import { ButtonBrand } from ".";
import { icons } from "@/public/assets";

const Hero = () => {
  return (
    <section className="text-center flex flex-col justify-center px-[20px]">
      <span className="text-[16px] text-600 tracking-[.25em] ">
        EXPLORE THE
      </span>
      <h1 className="font-[900] text-[90px] leading-[76.8px] text-900">
        <span className="text-brand-default">TECH</span> <br /> ZONE
      </h1>
      <p className="text-[16px] text-600 mt-[24px]">
        Here you’ll be able to redeem all of your hard-earned Aeropoints and
        exchange them for cool tech.
      </p>
      <Link href="#products">
        <ButtonBrand
          content="VIEW ALL PRODUCTS"
          style="w-[300px] mt-[40px] mx-auto"
          icon={icons}
          alt="icon"
        />
      </Link>
    </section>
  );
};

export default Hero;
