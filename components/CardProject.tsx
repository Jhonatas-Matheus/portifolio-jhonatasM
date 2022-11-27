import Image, { StaticImageData } from "next/image";
import React, { useContext } from "react";
import { LenguageContext } from "../context/ContextLeanguage";
import { ModalContext } from "../context/ContextModal";

type Props = {
  title: string;
  description: string;
  techsUse: string[];
  link: string;
  image: string;
};

const CardProject = ({
  title: projectTitle,
  description: projectDescription,
  techsUse: projectTechsUse,
  link: projectLink,
  image: projectImage,
}: Props) => {
  const { lenguage, setLenguage } = useContext(LenguageContext);
  const {
    setModalIsOpen,
    setDescriptionOfProject,
    setTitleProject,
    setTechsOfProject,
    setLinkOfProject,
    setImageOfProject,
  } = useContext(ModalContext);
  const setDataModal = () => {
    setDescriptionOfProject(projectDescription);
    setTitleProject(projectTitle);
    setTechsOfProject(projectTechsUse);
    setLinkOfProject(projectLink);
    setImageOfProject(projectImage);
  };
  return (
    <div className="flex min-w-full flex-col gap-4 text-center overflow-y-hidden items-center">
      <img
        src={projectImage}
        alt={"Imagem do projeto " + projectTitle}
        className="w-full h-full md:w-[500px] lg:w-[800px]"
      />
      <h2 className="text-white">{projectTitle}</h2>
      <button
        className="border border-white border-solid p-4 text-white"
        onClick={() => {
          setDataModal();
          setModalIsOpen(true);
        }}
      >
        {lenguage === "english" ? "View more" : "Ver mais"}
      </button>
    </div>
  );
};

export default CardProject;
