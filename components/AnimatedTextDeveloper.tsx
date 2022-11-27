import React, { useContext } from "react";
import { useEffect, useState } from "react";
import {} from "next";
import Head from "next/head";
import TypeWriter from "typewriter-effect";
import { LenguageContext } from "../context/ContextLeanguage";
type Props = {
  text1: string;
  text2: string;
};

const AnimatedTextDeveloper = ({ text1, text2 }: Props) => {
  const { lenguage, setLenguage } = useContext(LenguageContext);

  return (
    <>
      {lenguage === "english" ? (
        <TypeWriter
          onInit={(typewriter) => typewriter.typeString(text1).start()}
        />
      ) : (
        <TypeWriter
          onInit={(typewriter) => typewriter.typeString(text2).start()}
        />
      )}
    </>
  );
};

export default AnimatedTextDeveloper;
