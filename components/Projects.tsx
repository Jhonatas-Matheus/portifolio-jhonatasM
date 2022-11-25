import React, { useEffect, useContext } from "react";
import CardProject from "./CardProject";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { SectionContext } from "../context/ContextSection";
type Props = {};
import projects from "../services/projects.json";

const Projects = (props: Props) => {
  const { setCurrentSection } = useContext(SectionContext);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          console.log(entries);
          console.log(entries[0].target.id);
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
  return (
    <div
      id="projects"
      className="flex flex-col bg-gray-one min-h-[50%]  w-full py-4 px-4 md:px-20 lg:px-40 2xl:px-80 box-border"
    >
      <div className="flex flex-col space-y-1 items-center text-white mt-12">
        <h2 className="text-center">Projetos</h2>
        <div className="border-solid border-b-2 border-color-primary w-10 min-h-2"></div>
        <div className="border-solid border-b-2 border-color-primary w-6 min-h-2"></div>
      </div>
      <p className="text-white text-center mt-4  max-w-full ">
        Esses são os projetos que desenvolvi ao longo da minha carreira como
        desenvolvedor até aqui.
      </p>
      <div className="flex justify-center gap-6 text-white w-full mt-4 text-sm text-center">
        <button className="border border-white border-solid p-4 min-w-[30%]">
          Projetos Individual
        </button>
        <button className="border border-white border-solid p-4 min-w-[30%] ">
          Projetos em Equipe
        </button>
      </div>
      <div className="relative flex flex-row max-w-full overflow-x-auto gap-4 mt-4 ">
        <BiLeftArrow
          scale={50}
          className="hidden lg:flex absolute top-[30%] z-[100] -left-10 text-white bg-blue-700 min-w-[20px]"
        />
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
        <BiRightArrow
          scale={50}
          className="hidden lg:flex absolute top-[30%] z-[100] -right-10 text-white bg-blue-700 min-w-[20px]"
        />
      </div>
    </div>
  );
};

export default Projects;
