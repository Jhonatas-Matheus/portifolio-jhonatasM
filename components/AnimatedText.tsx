import React, { useContext } from "react";
import { useEffect, useState } from "react";
import {} from "next";
import Head from "next/head";
import TypeWriter from "typewriter-effect";
import { LenguageContext } from "../context/ContextLeanguage";
type Props = {
  text: string;
};

const AnimatedText = ({ text }: Props) => {
  const { lenguage, setLenguage } = useContext(LenguageContext);

  return (
    <TypeWriter onInit={(typewriter) => typewriter.typeString(text).start()} />
  );
};

export default AnimatedText;
