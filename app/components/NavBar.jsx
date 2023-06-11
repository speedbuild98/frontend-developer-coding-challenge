"use client";
import {
  aeroLabLogo2,
  aeroPay1,
  aeroPay2,
  chevronDefault,
  crossDefault,
} from "@/public/assets";
import { Popover } from "@headlessui/react";
import Image from "next/image";

function MyPopover() {
  return (
    <Popover>
      <Popover.Button className="relative flex flex-row w-[143px] h-[40px] border box border-300 items-center outline-none">
        <Image
          src={aeroPay1}
          className="ml-[16px]"
          alt="AeroLab Logo"
          width={24}
          height={24}
        />
        <p className="text-brand-default ml-[8px]">1000</p>
        <Image
          className="ml-[20.5px] -rotate-90"
          src={chevronDefault}
          alt="AeroLab Logo"
        />
      </Popover.Button>

      <Popover.Panel className="absolute z-10 right-[20px] mt-[8px]">
        <div className="flex flex-col box h-[404px] w-[312px] bg-white items-center border border-300">
          <div className="flex justify-between border-b w-full px-[24px] py-[16px]">
            <p className="text-[18px]">Add Balance</p>
            <Image src={crossDefault} alt="cross" width={24} height={24} />
          </div>
          <div className="bg-900 w-[264px] h-[148px] rounded-[8px] mt-[16px] p-[16px] flex flex-col justify-between wave-pattern">
            <div className="flex justify-between text-white">
              <p>Aerocard</p>
              <Image src={aeroPay2} alt="cross" width={24} height={24} />
            </div>
            <div className="flex justify-between text-white">
              <p>John Kite</p>
              <p>07/23</p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

const NavBar = () => {
  return (
    <nav className="fixed flex top-0 w-full h-[128px] items-center px-[20px]">
      <div className="flex flex-row items-center w-full justify-between">
        <Image src={aeroLabLogo2} alt="AeroLab Logo" />
        <MyPopover />
      </div>
    </nav>
  );
};

export default NavBar;
