import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
//Icons:
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import ProgresBar from "./ProgresBar";
import { useRouter } from "next/router";
import { SectionContext } from "../context/ContextSection";
import Lenguages from "./Lenguages";
import { LenguageContext } from "../context/ContextLeanguage";
import LenguagesFlip from "./LenguagesFlip";
type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<string>("");
  const router = useRouter();
  const { lenguage, setLenguage } = useContext(LenguageContext);
  const { currentSection, setCurrentSection } =
    React.useContext(SectionContext);
  const scrollToLink = (e: any, id: string) => {
    e.preventDefault();
    let element = document.querySelectorAll("#" + id)[1];
    // setCurrentSection(id);
    element.scrollIntoView();
  };
  const scrollToLinkMobile = (e: any, id: string) => {
    const trueId = id.split("2")[0];

    e.preventDefault();
    let element = document.querySelectorAll("#" + trueId)[1];

    // setCurrentSection(id);
    element.scrollIntoView();
  };
  return (
    <header className="relative flex flex-col z-10 w-full items-center box-border ">
      <div className="fixed z-50 h-14 flex justify-between w-full bg-gray-one shadow-md shadow-gray-50 px-4 box-border md:px-20 lg:px-40 2xl:px-80">
        <h1 className="relative md:right-16 lg:left-0 w-auto whitespace-nowrap flex align-middle items-center text-color-primary font-bold cursor-default  ">
          {"<JM DevBR/>"}
        </h1>
        <LenguagesFlip className="relative right-1 s:right-2 flex flex-row justify-between px-2 w-[120px] h-[50px] bg-gray-one/90 rounded-full translate-y-[5%]  z-[100] cursor-pointer md:hidden" />
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className=" text-color-primary md:hidden"
        >
          {isOpen ? (
            <RiCloseFill size={30} />
          ) : (
            <GiHamburgerMenu className="" size={30} />
          )}
        </button>
        <nav className="hidden md:flex  justify-end w-auto  ">
          <ul className="max-w-[364px] w-auto flex flex-row items-center text-white space-x-4 ">
            <li
              className={
                currentSection === "home"
                  ? "border-b-2 border-solid border-color-primary cursor-pointer"
                  : "hover:text-color-primary cursor-pointer"
              }
            >
              <span
                id="home"
                onClick={(e) => scrollToLink(e, e.currentTarget.id)}
              >
                {lenguage === "english" ? "Home" : "Inicio"}
              </span>
            </li>
            <li
              className={
                currentSection === "aboutUs"
                  ? "border-b-2 border-solid border-color-primary cursor-pointer"
                  : "hover:text-color-primary cursor-pointer"
              }
            >
              <span
                id="aboutUs"
                onClick={(e) => scrollToLink(e, e.currentTarget.id)}
                className="whitespace-nowrap"
              >
                {lenguage === "english" ? "About me" : "Sobre mim"}
              </span>
            </li>
            <li
              className={
                currentSection === "techs"
                  ? "border-b-2 border-solid border-color-primary cursor-pointer"
                  : "hover:text-color-primary cursor-pointer"
              }
            >
              <span
                id="techs"
                onClick={(e) => scrollToLink(e, e.currentTarget.id)}
              >
                {lenguage === "english" ? "Technologies" : "Tecnologias"}
              </span>
            </li>
            <li
              className={
                currentSection === "skills"
                  ? "border-b-2 border-solid border-color-primary cursor-pointer"
                  : "hover:text-color-primary cursor-pointer"
              }
            >
              <span
                id="skills"
                onClick={(e) => scrollToLink(e, e.currentTarget.id)}
              >
                {lenguage === "english" ? " Skills" : "Habilidades"}
              </span>
            </li>
            <li
              className={
                currentSection === "projects"
                  ? "border-b-2 border-solid border-color-primary cursor-pointer"
                  : "hover:text-color-primary cursor-pointer"
              }
            >
              <span
                id="projects"
                onClick={(e) => scrollToLink(e, e.currentTarget.id)}
              >
                {lenguage === "english" ? " Projects" : "Projetos"}
              </span>
            </li>
            {/* <li
              className={
                currentSection === "contact"
                  ? "border-b-2 border-solid border-color-primary cursor-pointer"
                  : "hover:text-color-primary cursor-pointer"
              }
            >
              <span
                id="contact"
                onClick={(e) => scrollToLink(e, e.currentTarget.id)}
              >
                Contato
              </span>
            </li> */}
          </ul>
        </nav>
        <Lenguages className="hidden md:relative md:left-16 lg:left-0 md:flex md:flex-row md:justify-between md:px-2 md:max-w-[120px] md:min-w-[120px] md:h-[50px] md:bg-white/50 md:rounded-full md:translate-y-[5%]  md:z-[100] md:cursor-pointer" />
      </div>
      {/* NavBar Mobile */}
      <nav className="flex  justify-end w-full md:hidden ">
        <ul
          className={
            isOpen
              ? "fixed z-50 mt-14 bg-gray-one/90 md:hidden translate-y-0 w-full text-center py-5 ease-in-out duration-300 space-y-4 min-w-full "
              : `fixed z-50 bg-gray-400 -translate-y-[100%] w-full text-center py-5 ease-in-out duration-300 space-y-4 `
          }
        >
          <li
            className={
              currentSection === "home" ? "text-color-primary" : "text-white"
            }
          >
            <span
              id="home2"
              onClick={(e) => scrollToLinkMobile(e, e.currentTarget.id)}
            >
              {lenguage === "english" ? "Home" : "Inicio"}
            </span>
          </li>
          <li
            className={
              currentSection === "aboutUs" ? "text-color-primary" : "text-white"
            }
          >
            {/* <Link href="/#aboutUs" scroll={true}>
              Sobre mim
            </Link> */}
            <span
              id="aboutUs2"
              onClick={(e) => scrollToLinkMobile(e, e.currentTarget.id)}
            >
              {lenguage === "english" ? "About me" : "Sobre mim"}
            </span>
          </li>
          <li
            className={
              currentSection === "techs" ? "text-color-primary" : "text-white"
            }
          >
            {/* <Link href="/#techs" scroll={true}>
              Tecnologias
            </Link> */}
            <span
              id="techs2"
              onClick={(e) => scrollToLinkMobile(e, e.currentTarget.id)}
            >
              {lenguage === "english" ? "Technologies" : "Tecnologias"}
            </span>
          </li>
          <li
            className={
              currentSection === "skills" ? "text-color-primary" : "text-white"
            }
          >
            {/* <Link href="/#skills">Habilidades</Link> */}
            <span
              id="skills2"
              onClick={(e) => scrollToLinkMobile(e, e.currentTarget.id)}
            >
              {lenguage === "english" ? " Skills" : "Habilidades"}
            </span>
          </li>
          <li
            className={
              currentSection === "projects"
                ? "text-color-primary"
                : "text-white"
            }
          >
            {/* <Link href="/#projects">Projetos</Link> */}
            <span
              id="projects2"
              onClick={(e) => scrollToLinkMobile(e, e.currentTarget.id)}
            >
              {lenguage === "english" ? " Projects" : "Projetos"}
            </span>
          </li>
          {/* <li
            className={currentSection === "contact" ? "text-color-primary" : "text-white"}
          >
            <Link href="/#contact">Contato</Link>
            <span
              id="contact"
              onClick={(e) => scrollToLink(e, e.currentTarget.id)}
            >
              Contato
            </span>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
