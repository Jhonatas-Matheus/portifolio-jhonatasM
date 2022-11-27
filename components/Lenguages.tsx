import React, { useContext } from "react";
import { LenguageContext } from "../context/ContextLeanguage";

type Props = {
  className: string;
};

const Lenguages = ({ className }: Props) => {
  const { lenguage, setLenguage } = useContext(LenguageContext);
  const switchLenguage = () => {
    if (lenguage === "portuguese") {
      setLenguage("english");
    } else {
      setLenguage("portuguese");
    }
  };
  return (
    <div className={className} onClick={switchLenguage}>
      <img
        src="/bandeira-brasil.jpg"
        alt="bandeira do brasil"
        className="w-[45%] rounded-full object-cover"
      />
      <img
        src="/bandeira-estados-unidos.jpg"
        alt="bandeira do brasil"
        className="w-[45%] rounded-full"
      />
      <div
        className={
          lenguage === "english"
            ? "absolute min-w-[44%] h-[100%] rounded-full bg-gray-two z-50 translate-x-0 duration-500 "
            : "absolute min-w-[44%] h-[100%] rounded-full bg-gray-two z-50 translate-x-[100%] duration-500"
        }
      ></div>
    </div>
  );
};

export default Lenguages;
