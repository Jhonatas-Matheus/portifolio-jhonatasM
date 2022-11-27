import React, { useEffect, useContext, useRef } from "react";
import CardProject from "./CardProject";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { SectionContext } from "../context/ContextSection";
type Props = {};
import projects from "../services/projects.json";
import { useWindowSize } from "../hooks/useWindowsSize";
import { LenguageContext } from "../context/ContextLeanguage";

const Projects = (props: Props) => {
  const [width, height] = useWindowSize();
  const ref = useRef<any>(null);
  const { lenguage, setLenguage } = useContext(LenguageContext);
  useEffect(() => {
    ref.current.scrollLeft = ref.current.offsetWidth;
  }, [width]);
  const { setCurrentSection } = useContext(SectionContext);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setCurrentSection("projects");
        }
      },
      {
        // rootMargin: "48px",
        threshold: [0.75],
      }
    );
    //@ts-ignore eslint-disable-next-line
    intersectionObserver.observe(document.querySelectorAll("#projects")[1]);
  }, []);

  const showNextProject = () => {
    ref.current.scrollLeft += ref.current.offsetWidth + 16;
  };
  const showPreviousProject = () => {
    ref.current.scrollLeft -= ref.current.offsetWidth + 16;
  };
  return (
    <div
      id="projects"
      className="relative flex flex-col bg-gray-one min-h-[50%]  w-full py-4 px-4 md:px-20 lg:px-40 2xl:px-80 box-border"
    >
      <div className="flex flex-col space-y-1 items-center text-white mt-12">
        <h2 className="text-center">
          {lenguage === "english" ? "Projects" : "Projetos"}
        </h2>
        <div className="border-solid border-b-2 border-color-primary w-10 min-h-2"></div>
        <div className="border-solid border-b-2 border-color-primary w-6 min-h-2"></div>
      </div>
      <p className="text-white text-center mt-4  max-w-full ">
        {lenguage === "english"
          ? "These are the projects I've developed throughout my career as a developer so far."
          : "Esses são os projetos que desenvolvi ao longo da minha carreira como desenvolvedor até aqui."}
      </p>
      <div className="flex justify-center gap-6 text-white w-full mt-4 text-sm text-center">
        <button
          className="border border-white border-solid p-4 min-w-[135.94px] w-[30%] whitespace-nowrap"
          onClick={showPreviousProject}
          // disabled={ref.current.scrollLeft === 0 ? true : false}
        >
          {lenguage === "english" ? "Previous Project" : "Projeto Anterior"}
        </button>
        <button
          className="border border-white border-solid p-4 min-w-[135.94px] w-[30%] whitespace-nowrap "
          onClick={showNextProject}
        >
          {lenguage === "english" ? "Next Project" : "Projeto Seguinte"}
        </button>
      </div>
      <div
        className="flex flex-row max-w-full overflow-x-hidden gap-4 mt-4 scroll-smooth snap-mandatory "
        ref={ref}
      >
        {projects.map((project) => {
          return (
            <CardProject
              title={project.projectTitle}
              image={project.projectImg ? project.projectImg : ""}
              techsUse={project.projeectTechs}
              description={project.projectDescription}
              link={project.projectLink}
              key={project.projectTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
