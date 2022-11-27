import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ILenguageContextProps {
  children: React.ReactNode;
}
interface ILenguageContextValues {
  lenguage: string;
  setLenguage: Dispatch<SetStateAction<string>>;
}

export const LenguageContext = createContext({} as ILenguageContextValues);

export const LenguageProvider = ({ children }: ILenguageContextProps) => {
  const [lenguage, setLenguage] = useState<string>("");
  return (
    <LenguageContext.Provider value={{ lenguage, setLenguage }}>
      {children}
    </LenguageContext.Provider>
  );
};
