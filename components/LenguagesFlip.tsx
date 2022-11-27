import React, { useContext, useRef } from "react";
import { LenguageContext } from "../context/ContextLeanguage";

type Props = {
  className: string;
};

const LenguagesFlip = ({ className }: Props) => {
  const { lenguage, setLenguage } = useContext(LenguageContext);
  const image = useRef<any>(null);
  const switchLenguage = () => {
    if (lenguage === "portuguese") {
      setLenguage("english");
      image.current.style.transform = "rotate3d(0, 1, 0, 180deg)";
      image.current.style.transitionDuration = "500ms";
      setTimeout(() => {
        image.current.src = "/bandeira-estados-unidos.jpg";
      }, 200);
    } else {
      setLenguage("portuguese");
      image.current.style.transform = "rotate3d(0, 1, 0, 0deg)";
      image.current.style.transitionDuration = "500ms";
      setTimeout(() => {
        image.current.src = "/bandeira-brasil.jpg";
      }, 200);
    }
  };
  return (
    <div onClick={switchLenguage} className={className}>
      <img
        id="testando"
        src="/bandeira-brasil.jpg"
        alt="bandeira do brasil"
        className="w-[45%] rounded-full object-cover"
        ref={image}
      />
      <span className="items-center text-white leading-[48px] min-w-[44.45px]">
        {lenguage === "english" ? "En-Us" : "Pt-Br"}
      </span>
    </div>
  );
};

export default LenguagesFlip;
