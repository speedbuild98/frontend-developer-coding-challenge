'use client'
import { useState } from "react";
import {
  aeroLabLogo2,
  aeroPay1,
  aeroPay2,
  aeroPay3,
  chevronDefault,
  chevronActive,
  crossDefault,
} from "@/public/assets";
import { Popover } from "@headlessui/react";
import Image from "next/image";

const Button = ({ number, activeButton, setActiveButton }) => {
  const handleButtonClick = () => {
    setActiveButton(number);
    console.log("El valor actual es " + activeButton);
  };

  return (
    <button
      className={`${
        activeButton === number ? "bg-brand-default" : "bg-300"
      } w-[85.33px] h-[35px] rounded-[12px]`}
      onClick={handleButtonClick}
    >
      <p
        className={`${
          activeButton === number ? "text-white" : "text-brand-default"
        }`}
      >
        {number}
      </p>
    </button>
  );
};

function MyPopover() {
  const [points, setPoints] = useState(1000);

  const [activeButton, setActiveButton] = useState(5000);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleScore = () => {
    setPoints(points + activeButton);
    console.log("El valor actual es " + setPoints);
  };

  const handlePopoverToggle = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <Popover>
      <Popover.Button
        onClick={handlePopoverToggle}
        className="relative flex flex-row min-w-[143px] h-[40px] pl-[16px] pr-[20px] border box border-300 justify-between items-center outline-none"
      >
        <Image src={aeroPay1} alt="AeroLab Logo" width={24} height={24} />
        <p className="text-brand-default pl-[8px] pr-[16px]">{points}</p>
        <Image
          className={`${
            isPopoverOpen ? "rotate-90" : "-rotate-90"
          } transition duration-300 ease-in-out`}
          src={isPopoverOpen ? chevronActive : chevronDefault}
          alt="AeroLab Logo"
        />
      </Popover.Button>

      <Popover.Panel className="absolute z-10 right-[20px] mt-[8px]">
        <div className="flex flex-col box h-[404px] w-[312px] bg-white items-center border border-300">
          <div className="flex justify-between border-b w-full px-[24px] py-[16px]">
            <p className="text-[18px]">Add Balance</p>
            <Image
              src={crossDefault}
              alt="cross"
              width={24}
              height={24}
              onClick={handlePopoverToggle}
              className="cursor-pointer"
            />
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
          <div className="mt-[40px] flex flex-row justify-between gap-1">
            <Button
              number={2500}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
            <Button
              number={5000}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
            <Button
              number={7500}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </div>
          <button
            onClick={handleScore}
            className="rounded-[16px] mt-[24px] w-[264px] h-[51px] bg-brand-default flex flex-row justify-center items-center"
          >
            <Image src={aeroPay3} alt="cross" width={24} height={24} />
            <p className="text-white w-[102px] h-[27px] flex justify-center text-[18px] ml-[6px]">
              Add Points
            </p>
          </button>
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
