import React from "react";
import Lenguages from "../components/Lenguages";
import LenguagesFlip from "../components/LenguagesFlip";
import { LenguageProvider } from "../context/ContextLeanguage";

type Props = {};

const teste = (props: Props) => {
  return (
    <LenguageProvider>
      <LenguagesFlip className="hidden md:relative  md:flex md:flex-row md:items-center md:justify-between md:px-2 md:max-w-[120px] md:min-w-[120px] md:h-[50px] md:bg-white/50 md:rounded-full md:translate-y-[5%]  md:z-[100] md:cursor-pointer" />
    </LenguageProvider>
  );
};

export default teste;
