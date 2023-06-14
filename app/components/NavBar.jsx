"use client";
import { useState, useEffect } from "react";
import {
  aeroLabLogo2,
  aeroPay1,
  aeroPay2,
  aeroPay3,
  chevronDefault,
  chevronActive,
  crossDefault,
} from "@/public/assets";
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

function MyPopover({updatePoints}) {
  const [user, setData] = useState(null);

  const [activeButton, setActiveButton] = useState(5000);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg1ZmZjZmM1N2M0ZjAwMjBiYmNjMDMiLCJpYXQiOjE2ODY1MDMzNzV9.TUgUA08fIRH32H0G42ATn7oZIlDxghLXzdG5CjZb76A";

  const handlePopoverToggle = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://coding-challenge-api.aerolab.co/user/me",
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        const json = await res.json();
        setData(json);
      } else {
        console.log("Error al obtener los datos del usuario.");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  const handleScore = async () => {
    const amount = activeButton;
    setIsLoading(true); // Establecer isLoading a true antes de realizar la solicitud
    try {
      const res = await fetch(
        "https://coding-challenge-api.aerolab.co/user/points",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ amount }),
        }
      );

      if (res.ok) {
        console.log("Puntos agregados exitosamente.");
        fetchData(); // Volver a obtener los datos del usuario después de agregar los puntos
      } else {
        console.log("Error al agregar los puntos.");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    } finally {
      setIsLoading(false); // Establecer isLoading a false después de realizar la solicitud
    }
  };

  return (
    <div className="z-50">
      <div
        onClick={handlePopoverToggle}
        className="cursor-pointer relative flex flex-row min-w-[143px] h-[40px] pl-[16px] pr-[20px] border box border-300 justify-between items-center outline-none"
      >
        <Image src={aeroPay1} alt="AeroLab Logo" width={24} height={24} />
        <p
          className={`text-brand-default pl-[8px] pr-[16px] ${
            isLoading && "animate-pulse"
          }`}
        >
          {user ? user.points : ". . ."}
        </p>

        <Image
          className={`${
            isPopoverOpen ? "rotate-90" : "-rotate-90"
          } transition duration-300 ease-in-out`}
          src={isPopoverOpen ? chevronActive : chevronDefault}
          alt="AeroLab Logo"
        />
      </div>

      {isPopoverOpen && (
        <div
        className={`absolute right-[20px] mt-[8px] z-100 ${
          isPopoverOpen ? 'opacity-100 max-h-[404px]' : 'opacity-0 max-h-0'
        } transition-opacity duration-300 ease-in-out overflow-hidden`}
      >
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
                number={1000}
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
        </div>
      )}
    </div>
  );
}

const NavBar = () => {

  const updatePoints = async () => {
    try {
      const res = await fetch(
        "https://coding-challenge-api.aerolab.co/user/me",
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        const json = await res.json();
        setData(json);
      } else {
        console.log("Error al obtener los datos del usuario.");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };

  return (
    <nav className="fixed flex top-0 w-full h-[128px] items-center px-[20px] bg-white border-b border-300 z-1000">
      <div className="flex flex-row items-center w-full justify-between">
        <Image src={aeroLabLogo2} alt="AeroLab Logo" />
        <MyPopover />
      </div>
    </nav>
  );
};

export default NavBar;
