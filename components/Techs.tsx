import React, { useCallback, useContext, useState } from "react";
import { useEffect, useRef } from "react";
//Icons:
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
  TbBrandDocker,
} from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";
//Aos:
import Aos from "aos";
import "aos/dist/aos.css";
//Framer Motion:
import { motion, useDragControls } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowsSize";
import { SectionContext } from "../context/ContextSection";
//Curriculo:
//@ts-ignore eslint-disable-next-line
import { curriculo } from "../assets/curriculo-jhonatas.pdf";
import Link from "next/link";
import { LenguageContext } from "../context/ContextLeanguage";
type Props = {};

const Techs = (props: Props) => {
  const [width, setWidth] = useState<number>(0);
  const [leftConstraint, setLeftConstraint] = useState<any>(null);
  const [containerKey, setContainerKey] = useState<number>(0);
  const [sizeW, sizeH] = useWindowSize();
  const carouselTechs = useRef<any>(null);
  const { lenguage, setLenguage } = useContext(LenguageContext);
  const { setCurrentSection } = React.useContext(SectionContext);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    handleLeftConstraint();
  }, []);
  //Logiga do Grabbing Responsivo:
  const handleLeftConstraint = useCallback(() => {
    const el = document.getElementById("teste");
    if (el) {
      setLeftConstraint(el.scrollWidth - el.offsetWidth);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setContainerKey((prev) => prev + 1);
      handleLeftConstraint();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleLeftConstraint]);
  //-----
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setCurrentSection("techs");
        }
      },
      {
        // rootMargin: "48px",
        threshold: [1],
      }
    );
    //@ts-ignore eslint-disable-next-line
    intersectionObserver.observe(document.querySelectorAll("#techs")[1]);
  }, []);
  return (
    <div
      id="techs"
      className="flex flex-col bg-gray-one min-h-[50%] w-full py-4 px-4 md:px-20 lg:px-40 2xl:px-80 box-border "
    >
      <div
        className="flex flex-col space-y-4 text-white w-full min-h-[100%] py-4 items-center mt-12  "
        data-aos="fade-right"
      >
        <div className="flex flex-col space-y-1 items-center text-white">
          <h2 className="text-center">
            {lenguage === "english" ? "Technologies" : "Tecnologias"}
          </h2>
          <div className="border-solid border-b-2 border-color-primary w-10 min-h-2"></div>
          <div className="border-solid border-b-2 border-color-primary w-6 min-h-2"></div>
        </div>
        <div className="flex flex-row max-w-full items-center  ">
          <motion.div
            className="flex flex-row cursor-grab bg-color-primary/5 py-4 gap-4 px-4  max-w-full min-h-[50%] overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
            key={containerKey}
          >
            <motion.div
              className=" w-full flex flex-row gap-4 h-full"
              drag="x"
              dragConstraints={{ right: 0, left: -leftConstraint }}
              id={"teste"}
            >
              <div className="flex flex-col items-center ">
                <h3 className="whitespace-nowrap">HTML5</h3>
                <TbBrandHtml5 size={50} className="text-color-primary" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="whitespace-nowrap">CSS3</h3>
                <TbBrandCss3 size={50} className="text-color-primary" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="whitespace-nowrap">JavaScript</h3>
                <TbBrandJavascript size={50} className="text-color-primary" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="whitespace-nowrap">ReactJS</h3>
                <TbBrandReactNative size={50} className="text-color-primary" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="whitespace-nowrap">NextJS</h3>
                <TbBrandNextjs size={50} className="text-color-primary" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="whitespace-nowrap">TailWindCss</h3>
                <TbBrandTailwind size={50} className="text-color-primary" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="whitespace-nowrap">Git Flow</h3>
                <TbBrandGit size={50} className="text-color-primary" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="whitespace-nowrap">Firebase</h3>
                <TbBrandFirebase size={50} className="text-color-primary" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="whitespace-nowrap">NodeJS</h3>
                <IoLogoNodejs size={50} className="text-color-primary" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="whitespace-nowrap">Styled Components</h3>
                <SiStyledcomponents size={50} className="text-color-primary" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="whitespace-nowrap">Docker</h3>
                <TbBrandDocker size={50} className="text-color-primary" />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <a
          download
          href="/curriculo-jhonatas.pdf"
          className="border border-white border-solid p-4"
        >
          {lenguage === "english" ? "Curriculum" : "Currículo"}
        </a>
      </div>
    </div>
  );
};

export default Techs;
