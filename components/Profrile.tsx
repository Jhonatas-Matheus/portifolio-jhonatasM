import Image from "next/image";
import React, { useContext, useEffect } from "react";
import avatar from "../assets/avatar.png";
//Icons
import {
  GrInstagram,
  GrFacebookOption,
  GrMail,
  GrMailOption,
  GrGithub,
  GrLinkedinOption,
} from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
import AnimatedText from "./AnimatedText";
import { SectionContext } from "../context/ContextSection";
import { LenguageContext } from "../context/ContextLeanguage";
import AnimatedTextDeveloper from "./AnimatedTextDeveloper";
type Props = {};

const Profrile = (props: Props) => {
  const router = useRouter();
  const { lenguage, setLenguage } = useContext(LenguageContext);

  const { setCurrentSection } = React.useContext(SectionContext);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setCurrentSection("home");
        }
      },
      {
        // rootMargin: "48px",
        threshold: [0.75],
      }
    );
    //@ts-ignore eslint-disable-next-line
    intersectionObserver.observe(document.querySelectorAll("#home")[1]);
  }, []);
  return (
    <>
      <div
        className=" mt-14 flex justify-center bg-[url('../assets/backgrounds/pexels-negative-space-160107.jpg')] bg-cover w-full min-h-[50%] bg-no-repeat"
        id="home"
      >
        <div className=" backdrop-blur-sm  w-full min-h-full flex justify-center items-center">
          <div className="flex flex-col items-center w-9/12 max-w-sm py-4 bg-gradient-to-t from-gradient-start via-gradient-start to-transparent space-y-4">
            <div className="flex w-full max-w-[255px] h-[240px] border-solid border-20 border-color-secundary/50 rounded-full">
              <div className="flex w-full h-full justify-center items-center border-solid border-8  border-color-primary rounded-full ">
                <Image src={avatar} alt={"Imagem de avatar"} width="150" />
              </div>
            </div>
            {/* Moldura Foto */}

            <h2 className="font-Teko font-bold text-white">
              <AnimatedText text="JHONATAS MATHEUS" />
            </h2>
            <h3 className="font-Teko font-bold text-white">
              <AnimatedTextDeveloper
                text1="Front-End Web Developer"
                text2="Desenvolvedor Web Front-End"
              />
              {/* // <AnimatedText
              //   text={
              //     lenguage === "english"
              //       ? "Front-End Web Developer"
              //       : "Desenvolvedor Web Front-End"
              //   }
              // /> */}
            </h3>
            <div className="flex space-x-4 ">
              <Link href="https://www.instagram.com/jhonndev/" target="_blank">
                <div className="cursor-pointer duration-200 border-solid border-white text-white border-2 rounded-full p-2 hover:border-color-primary hover:text-color-primary">
                  <GrInstagram />
                </div>
              </Link>
              <Link href="mailto:jmdevbr@gmail.com">
                <div className="cursor-pointer duration-200 border-solid border-white text-white border-2 rounded-full p-2 hover:border-color-primary hover:text-color-primary">
                  <GrMail />
                </div>
              </Link>
              <Link href="https://github.com/Jhonatas-Matheus" target="_blank">
                <div className="cursor-pointer duration-200 border-solid border-white text-white border-2 rounded-full p-2 hover:border-color-primary hover:text-color-primary">
                  <GrGithub />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jhonatasalves/"
                target="_blank"
              >
                <div className="cursor-pointer duration-200 border-solid border-white text-white border-2 rounded-full p-2 hover:border-color-primary hover:text-color-primary">
                  <GrLinkedinOption />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profrile;
