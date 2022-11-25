import React from "react";
import { useEffect, useState } from "react";
import {} from "next";
import Head from "next/head";
import TypeWriter from "typewriter-effect";
type Props = {
  text: string;
};

const AnimatedText = ({ text }: Props) => {
  return (
    <TypeWriter onInit={(typewriter) => typewriter.typeString(text).start()} />
  );
};

export default AnimatedText;
