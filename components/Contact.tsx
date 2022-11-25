import React, { useEffect, useContext } from "react";
import CardProject from "./CardProject";
import partyLinkImage from "../assets/projects/party-link.png";
import { SectionContext } from "../context/ContextSection";
type Props = {};

const Contact = (props: Props) => {
  const { setCurrentSection } = useContext(SectionContext);
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          console.log(entries);
          console.log(entries[0].target.id);
          setCurrentSection("contact");
        }
      },
      {
        // rootMargin: "48px",
        threshold: [0.75],
      }
    );
    //@ts-ignore eslint-disable-next-line
    intersectionObserver.observe(document.querySelectorAll("#contact")[1]);
  }, []);
  return (
    <div
      id="contact"
      className="flex flex-col bg-gray-two min-h-[50%]  w-full py-4 px-4 pb-40 md:px-20 lg:px-40 2xl:px-80 box-border"
    >
      <div className="flex flex-col space-y-1 items-center text-white mt-12">
        <h2 className="text-center">Contato</h2>
        <div className="border-solid border-b-2 border-color-primary w-10 min-h-2"></div>
        <div className="border-solid border-b-2 border-color-primary w-6 min-h-2"></div>
      </div>
      <p className="text-white text-justify mt-4  max-w-full ">
        Caso tenha gostado do meu trabalho e queria entrar em contato, só
        preencher o formulário que irei retornar o contato o mais breve possível
        ou poderá retornar a home do site e entrar diretamente em contato
        através das redes sociasi lá disponíveis.
      </p>
      <form className=" flex flex-col mt-4 space-y-4 items-center">
        <label className="flex flex-col space-y-4 w-[70%] text-white ">
          <h2>Nome:</h2>
          <input
            className="w-full p-2 md:p-4 bg-gray-one"
            type="text"
            name="nome"
            placeholder="Digite aqui seu nome."
          />
        </label>
        <label className="flex flex-col space-y-4 w-[70%] text-white ">
          <h2>E-mail:</h2>
          <input
            className="w-full p-2 md:p-4 bg-gray-one"
            type="text"
            name="email"
            placeholder="Digite aqui seu e-mai."
          />
        </label>
        <label className="flex flex-col space-y-4 w-[70%] text-white ">
          <h2>Telefone:</h2>
          <input
            className="w-full p-2 md:p-4 bg-gray-one"
            type="text"
            name="email"
            placeholder="Digite aqui seu número pra contato."
          />
        </label>
        <label className="flex flex-row gap-1 w-auto text-white ">
          <input className="w-full" type="checkbox" />
          <span>Whatssap</span>
        </label>
        <label htmlFor="" className="flex flex-col space-y-4 ">
          <h2 className="text-center text-white">Assunto</h2>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="min-w-full bg-gray-one text-white"
          ></textarea>
        </label>
        <input
          type="submit"
          value="Enviar"
          className="p-4 border-solid border-2 text-white border-white"
        />
      </form>
    </div>
  );
};

export default Contact;
