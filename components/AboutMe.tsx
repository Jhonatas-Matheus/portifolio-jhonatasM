import React, { useContext } from "react";
type Props = {};
//Icons:
// TbCode
import { TiHtml5 } from "react-icons/ti";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandGit,
  TbBrandFirebase,
} from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { SectionContext } from "../context/ContextSection";
import { LenguageContext } from "../context/ContextLeanguage";
const AboutMe = (props: Props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const router = useRouter();
  const { lenguage, setLenguage } = useContext(LenguageContext);

  const { setCurrentSection } = React.useContext(SectionContext);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setCurrentSection("aboutUs");
        }
      },
      {
        // rootMargin: "48px",
        threshold: [1],
      }
    );
    //@ts-ignore eslint-disable-next-line
    intersectionObserver.observe(document.querySelectorAll("#aboutUs")[1]);
  }, []);
  return (
    <div
      id="aboutUs"
      className="flex flex-col bg-gray-two min-h-[50%] w-full py-4 px-4  md:px-20 lg:px-40 2xl:px-80 box-border "
    >
      <div className="flex flex-col space-y-1 items-center text-white mt-12">
        <h2 className="text-center">
          {lenguage === "english" ? "About me" : "Sobre mim"}
        </h2>
        <div className="border-solid border-b-2 border-color-primary w-10 min-h-2"></div>
        <div className="border-solid border-b-2 border-color-primary w-6 min-h-2"></div>
      </div>
      {lenguage === "english" ? (
        <p className="text-white mt-4 text-justify max-w-full ">
          <span className="text-color-primary">Hi, my name is Jhonatas. </span>
          Since I was a child, I've been passionate about the world of computing
          and, as I've always been curious, around the age of 18 I started to
          study programming, an area that I fell in love with and continue to
          follow a professional career. I am a communicative and proactive
          person, I always seek to improve my knowledge, I see everything as an
          opportunity for evolution and I seek to add to the maximum in the
          environments in which I am inserted.
        </p>
      ) : (
        <p className="text-white mt-4 text-justify max-w-full ">
          <span className="text-color-primary">Olá, me chamo Jhonatas. </span>
          Desde de criança que sou apaixonado pelo mundo da computação e como
          sempre fui curioso por volta dos meus 18 anos comecei a estudar
          programação área pela qual me apaixonei e sigo carreira profissional.
          Sou uma pessoa comunicativa e provativa, busco sempre aprimorar os
          meus conhecimentos, vejo tudo como uma oportunidade de evolução e
          busco somar ao máximo nos ambientes no quais estou inserido.
        </p>
      )}
      <div className="w-full text-white mt-10 flex flex-col space-y-10 items-center">
        <h2 className="">
          {" "}
          {lenguage === "english"
            ? "Professional Status"
            : "Status Profissional"}
        </h2>
        <p className="border-2 border-solid border-white p-4 bg-green-500">
          Freelancer
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
