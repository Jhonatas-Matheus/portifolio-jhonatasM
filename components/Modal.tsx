import React, { useContext } from "react";
import { ModalContext } from "../context/ContextModal";
import CardProject from "./CardProject";
import partyLinkImage from "../assets/projects/party-link.png";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Modal = (props: Props) => {
  const {
    modalIsOpen,
    setModalIsOpen,
    titleProject,
    descriptionOfProject,
    techsOfProject,
    linkOfProject,
    imageOfProject,
  } = useContext(ModalContext);
  return (
    // <div
    //   className={
    //     modalIsOpen
    //       ? "fixed flex justify-center items-center w-full h-full bg-gray-one/90 top-0 left-0 z-50 translate-y-0 duration-500"
    //       : "fixed flex justify-center items-center w-full h-full bg-gray-one/90 top-0 left-0 z-50 -translate-y-full duration-500 opacity-0"
    //   }
    // >
    <div
      className={
        modalIsOpen
          ? "fixed flex justify-center items-center w-full h-full bg-gray-one/90 top-0 left-0 z-50 opacity-1 duration-500"
          : "fixed flex justify-center items-center w-full h-full bg-gray-one/90 top-0 left-0 z-50 duration-500 opacity-0 pointer-events-none"
      }
    >
      <div
        className={
          modalIsOpen
            ? "relative flex flex-col gap-4 py-4 w-[70%] h-[70%] bg-gray-two text-white translate-y-0 duration-500"
            : "relative flex flex-col gap-4 py-4 w-[70%] h-[70%] bg-gray-two text-white -translate-y-full duration-500"
        }
      >
        <h2 className="text-center">{titleProject}</h2>
        <img
          src={imageOfProject}
          alt="Imagem do site da partylink"
          className="w-full md: w-[60%] self-center"
        />
        <p className="text-center px-4">{descriptionOfProject}</p>
        <h3 className="text-center">Tecnologias:</h3>
        <p className="text-center px-4">{techsOfProject.join(", ")}</p>

        <span className=" text-center mt-4">
          <Link
            href={linkOfProject}
            target="_blank"
            className="border border-white border-solid p-4"
          >
            Acessar o site
          </Link>
        </span>
        <button
          className="absolute top-2 right-2 "
          onClick={() => setModalIsOpen(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
