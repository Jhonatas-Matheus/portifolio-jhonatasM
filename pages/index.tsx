import Head from "next/head";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Profrile from "../components/Profrile";
import Skill from "../components/Skill";
import Techs from "../components/Techs";
import Teste from "../components/Projects";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects";
import { SectionContextProvider } from "../context/ContextSection";
import Contact from "../components/Contact";
import Modal from "../components/Modal";
import ModalProvider from "../context/ContextModal";

export default function Home() {
  return (
    <>
      <Head>
        <title>JM DevBR</title>
      </Head>
      <SectionContextProvider>
        <ModalProvider>
          <Modal />
          <Navbar />
          <Profrile />
          <AboutMe />
          <Techs />
          <Skill />
          <Projects />
          {/* <Contact /> */}
        </ModalProvider>
      </SectionContextProvider>
    </>
  );
}
