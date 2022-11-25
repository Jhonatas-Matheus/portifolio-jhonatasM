import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface IContextValue {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  titleProject: string | null;
  setTitleProject: Dispatch<SetStateAction<string | null>>;
  techsOfProject: string[];
  setTechsOfProject: Dispatch<SetStateAction<string[]>>;
  descriptionOfProject: string | null;
  setDescriptionOfProject: Dispatch<SetStateAction<string | null>>;
  linkOfProject: string;
  setLinkOfProject: Dispatch<SetStateAction<string>>;
  imageOfProject: string;
  setImageOfProject: Dispatch<SetStateAction<string>>;
}
interface IContextProps {
  children: React.ReactNode;
}

export const ModalContext = createContext({} as IContextValue);

const ModalProvider = ({ children }: IContextProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [titleProject, setTitleProject] = useState<string | null>(null);
  const [techsOfProject, setTechsOfProject] = useState<string[]>([]);
  const [linkOfProject, setLinkOfProject] = useState<string>("");
  const [imageOfProject, setImageOfProject] = useState<string>("");
  const [descriptionOfProject, setDescriptionOfProject] = useState<
    string | null
  >(null);
  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        setModalIsOpen,
        titleProject,
        setTitleProject,
        techsOfProject,
        setTechsOfProject,
        descriptionOfProject,
        setDescriptionOfProject,
        linkOfProject,
        setLinkOfProject,
        imageOfProject,
        setImageOfProject,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
