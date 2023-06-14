'use client'
import { crossDefault, systemSucces } from "@/public/assets";
import Image from "next/image";
import { useState, useEffect } from "react";

const Toast = ({ message, type }) => {
  const toastClass = `toast ${type} flex flex-row items-start justify-between bg-white shadow-md box p-[24px] fixed z-100 bottom-[20px] border-green border-2 w-[360px] h-[96px]`;
  const textColor =
    type === "success"
      ? "text-600 max-w-[195px] flex flex-row items-start"
      : "text-black max-w-[195px] flex flex-row";

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    isVisible && (
      <div className={toastClass}>
        <p className={textColor}>
          {" "}
          <Image
            className="mr-[14px]"
            src={systemSucces}
            width={24}
            height={24}
            alt="system succes icon"
          />
          {message}
        </p>
        <Image
          src={crossDefault}
          width={24}
          height={24}
          alt="system succes icon"
        />
      </div>
    )
  );
};

export default Toast;
