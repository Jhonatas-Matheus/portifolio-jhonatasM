import React, { useCallback } from "react";
import ProgresBar from "./ProgresBar";
import { useEffect, MutableRefObject, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";
import { useWindowSize } from "../hooks/useWindowsSize";
import { SectionContext } from "../context/ContextSection";
type Props = {};

const Skill = (props: Props) => {
  const carouselSkills = useRef<any>(null);
  const [width, height] = useWindowSize();
  const [soft, setSoft] = useState<boolean | null>(false);
  const { setCurrentSection } = React.useContext(SectionContext);
  useEffect(() => {
    if (soft) {
      carouselSkills.current.scrollLeft = carouselSkills.current.offsetWidth;
    }
  }, [width]);
  const displaySoftSkills = (e: any): void => {
    e.preventDefault();
    carouselSkills.current.scrollLeft = carouselSkills.current.offsetWidth;
    setSoft(true);
  };
  const displayHardSkills = (e: any): void => {
    e.preventDefault();
    carouselSkills.current.scrollLeft = 0;
    setSoft(false);
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //----
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setCurrentSection("skills");
        }
      },
      {
        // rootMargin: "48px",
        threshold: [1],
      }
    );
    //@ts-ignore eslint-disable-next-line
    intersectionObserver.observe(document.querySelectorAll("#skills")[1]);
  }, []);
  return (
    <div
      className="flex flex-row text-white bg-gray-two max-h-[50%] w-full py-4 px-4 box-border md:px-20 lg:px-40 2xl:px-80"
      id="skills"
    >
      {/* Desktop */}
      <div className="w-full hidden md:flex mt-12 ">
        <div
          className="flex flex-col space-y-4 w-full h-full "
          data-aos="fade-up"
        >
          <div className="flex flex-col space-y-1 items-center text-white">
            <h2 className="text-center">Skills</h2>
            <div className="border-solid border-b-2 border-color-primary w-10 min-h-2"></div>
            <div className="border-solid border-b-2 border-color-primary w-6 min-h-2"></div>
          </div>
          <div className="flex flex-row w-full h-full">
            <div className="w-[50%] flex flex-col items-center space-y-4 max-h-[80%] ">
              <h3 className="text-center">Hard Skills</h3>
              <div className="flex flex-col h-full w-full space-y-4 overflow-y-auto">
                <div className="flex flex-col  justify-center items-center">
                  <h4>ReactJS</h4>
                  <ProgresBar level="100%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>JavaScript</h4>
                  <ProgresBar level="100%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>HTML5 & CSS3</h4>
                  <ProgresBar level="100%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>Typescript</h4>
                  <ProgresBar level="100%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>Styled Components</h4>
                  <ProgresBar level="100%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>NextJs</h4>
                  <ProgresBar level="75%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>Controle de versão com git</h4>
                  <ProgresBar level="75%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>Redux</h4>
                  <ProgresBar level="75%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>NodeJS</h4>
                  <ProgresBar level="50%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>Docker</h4>
                  <ProgresBar level="25%" />
                </div>
              </div>
            </div>
            <div className="w-[50%] flex flex-col items-center space-y-4">
              <h3 className="text-center">Soft Skills</h3>
              <div className="flex flex-col justify-center items-center">
                <h4>Trabalho em equipe</h4>
                <ProgresBar level="100%" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4>Metodologias ágeis</h4>
                <ProgresBar level="75%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex w-full md:hidden mt-12">
        <div className="flex flex-col w-full space-y-10 " data-aos="fade-up">
          <div className="flex flex-col space-y-1 items-center text-white">
            <h2 className="text-center">Skills</h2>
            <div className="border-solid border-b-2 border-color-primary w-10 min-h-2"></div>
            <div className="border-solid border-b-2 border-color-primary w-6 min-h-2"></div>
          </div>
          <div className="flex justify-center gap-6 text-white w-full">
            <button
              className="border border-white border-solid p-4"
              onClick={(e) => displayHardSkills(e)}
            >
              Hard Skills
            </button>
            <button
              className="border border-white border-solid p-4"
              onClick={(e) => displaySoftSkills(e)}
            >
              Soft Skills
            </button>
          </div>
          <div
            className="flex flex-row overflow-x-hidden scroll-smooth snap-mandatory max-w-full"
            id="teste2"
            ref={carouselSkills}
          >
            <div className="min-w-[100%] flex flex-col items-center space-y-4 overflow-y-hidden ">
              <h3 className="text-center">Hard Skills</h3>
              <div className="flex flex-col items-center overflow-y-auto space-y-4 px-4 overflow-x-hidden max-w-full  ">
                <div className="flex flex-col justify-center items-center">
                  <h4>ReactJS</h4>
                  <ProgresBar level="100%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>JavaScript</h4>
                  <ProgresBar level="100%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>HTML5 & CSS3</h4>
                  <ProgresBar level="100%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>Typescript</h4>
                  <ProgresBar level="100%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>Styled Components</h4>
                  <ProgresBar level="100%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>NextJs</h4>
                  <ProgresBar level="75%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>Controle de versão com git</h4>
                  <ProgresBar level="75%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>Redux</h4>
                  <ProgresBar level="75%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>NodeJS</h4>
                  <ProgresBar level="50%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>Docker</h4>
                  <ProgresBar level="25%" />
                </div>
              </div>
            </div>
            <div className="min-w-[100%] flex flex-col items-center space-y-4 overflow-y-hidden">
              <h3 className="text-center">Soft Skills</h3>
              <div className="flex flex-col items-center overflow-y-auto space-y-4 px-4 overflow-x-hidden max-w-full ">
                <div className="flex flex-col justify-center items-center">
                  <h4>Trabalho em equipe</h4>
                  <ProgresBar level="100%" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4>Metodologias ágeis</h4>
                  <ProgresBar level="75%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
