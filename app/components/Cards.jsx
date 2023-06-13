import {
  heroResponsive,
  walkthrough1,
  walkthroughResponsive1,
  walkthroughResponsive2,
  walkthroughReponsive3,
} from "@/public/assets";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="flex flex-col w-[335px] h-[408] border-[12px] border-[#FFFFFF70] rounded-[32px] -mt-[12px] text-left mb-[32px]">
      <Image
        className="rounded-t-[24px] max-h-[245px] object-contain overflow-hidden]"
        src={props.img}
        alt={props.alt}
        width={311}
        height={245}
      />
      <div className="bg-white rounded-b-[20px] p-[24px]">
        <div className="flex flex-row  items-center mb-[20px]">
          <span className="bg-brand-light w-[40px] h-[40px] flex items-center justify-center rounded-[8px]">
            <Image
              src={walkthrough1}
              alt="walkthrough-1"
              width={26}
              height={26}
            />
          </span>
          <p className="text-brand-default uppercase font-[900] text-[24px] ml-[23px]">
            {props.title}
          </p>
        </div>
        <p className="text-600 text-[16px]">{props.text}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <section className="bg-brand-default w-full mt-[80px] flex flex-col justify-center items-center">
      <Image className="-mt-[85px]" src={heroResponsive} alt="hero-bg" />
      <Card
        img={walkthroughResponsive1}
        alt="walkthroughResponsive1"
        title="1—browse"
        text="Browse our tech catalog with more than 20 top tech products"
      />
      <Card
        img={walkthroughResponsive2}
        alt="walkthroughResponsive2"
        title="2—choose"
        text="Exchange your hard-earned AeroPoints for a cool tech item"
      />
      <Card
        img={walkthroughReponsive3}
        alt="walkthroughResponsive3"
        title="3—enjoy"
        text="All done We’ll take care of delivery of your tech item!"
      />
    </section>
  );
};

export default Cards;
