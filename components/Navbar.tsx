import Link from "next/link";
import React, { useEffect, useState } from "react";
//Icons:
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import ProgresBar from "./ProgresBar";
import { useRouter } from "next/router";
import { SectionContext } from "../context/ContextSection";
type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<string>("");
  const router = useRouter();
  const { currentSection, setCurrentSection } =
    React.useContext(SectionContext);
  const scrollToLink = (e: any, id: string) => {
    console.log(id);
    e.preventDefault();
    let element = document.querySelectorAll("#" + id)[1];
    setCurrentSection(id);
    element.scrollIntoView();
  };
  return (
    <header className="relative flex flex-col z-10 w-full items-center box-border ">
      <div className="fixed z-50 h-14 flex justify-between w-full bg-gray-one shadow-md shadow-gray-50 px-4 box-border md:px-20 lg:px-40 2xl:px-80">
        <h1 className=" w-auto whitespace-nowrap flex align-middle items-center text-color-primary font-bold cursor-default  ">
          {"<JM DevBR/>"}
        </h1>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className=" text-color-primary sm:hidden"
        >
          {isOpen ? (
            <RiCloseFill size={30} />
          ) : (
            <GiHamburgerMenu className="" size={30} />
          )}
        </button>
        <nav className="hidden sm:flex  justify-end w-auto  ">
          <ul className="w-auto flex flex-row items-center text-white space-x-4 ">
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
                Inicio
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
              >
                Sobre mim
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
                Tecnologias
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
                Skills
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
                Projetos
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
      </div>
      {/* NavBar Mobile */}
      <nav className="flex  justify-end w-full sm:hidden ">
        <ul
          className={
            isOpen
              ? "fixed z-50 mt-14 bg-gray-one/90 sm:hidden translate-y-0 w-full text-center py-5 ease-in-out duration-300 space-y-4 min-w-full "
              : `fixed z-50 bg-gray-400 -translate-y-[100%] w-full text-center py-5 ease-in-out duration-300 space-y-4 `
          }
        >
          <li
            className={
              currentSection === "home" ? "text-color-primary" : "text-white"
            }
          >
            <Link href="/">Home</Link>
            {/* <span
              id="home"
              onClick={(e) => scrollToLink(e, e.currentTarget.id)}
            >
              Inicio
            </span> */}
          </li>
          <li
            className={
              currentSection === "aboutUs" ? "text-color-primary" : "text-white"
            }
          >
            <Link href="/#aboutUs" scroll={true}>
              Sobre mim
            </Link>
            {/* <span
              id="aboutUs"
              onClick={(e) => scrollToLink(e, e.currentTarget.id)}
            >
              Sobre mim
            </span> */}
          </li>
          <li
            className={
              currentSection === "techs" ? "text-color-primary" : "text-white"
            }
          >
            <Link href="/#techs" scroll={true}>
              Tecnologias
            </Link>
            {/* <span
              id="techs"
              onClick={(e) => scrollToLink(e, e.currentTarget.id)}
            >
              Tecnologias
            </span> */}
          </li>
          <li
            className={
              currentSection === "skills" ? "text-color-primary" : "text-white"
            }
          >
            <Link href="/#skills">Habilidades</Link>
            {/* <span
              id="skills"
              onClick={(e) => scrollToLink(e, e.currentTarget.id)}
            >
              Skills
            </span> */}
          </li>
          <li
            className={
              currentSection === "projects"
                ? "text-color-primary"
                : "text-white"
            }
          >
            <Link href="/#projects">Projetos</Link>
            {/* <span
              id="projects"
              onClick={(e) => scrollToLink(e, e.currentTarget.id)}
            >
              Projetos
            </span> */}
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
