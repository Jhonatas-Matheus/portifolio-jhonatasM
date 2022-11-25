import { createContext, useState, Dispatch, SetStateAction } from "react";

interface IcontextValue {
  currentSection: string | null;
  setCurrentSection: Dispatch<SetStateAction<string | null>>;
}
interface IcontextProps {
  children: React.ReactNode;
}
export const SectionContext = createContext({} as IcontextValue);
export const SectionContextProvider = ({ children }: IcontextProps) => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};
