import { ReactNode, createContext, useState } from "react";
export const LanguageContext = createContext({});

interface Props {
  children: ReactNode;
}

export type LangageType = {
  Language: string;
  setLanguage: (value: string) => void;
};

export const LanguageContextProvider = ({ children }: Props) => {
  const [Language, setLanguage] = useState<string>("es");
  return (
    <LanguageContext.Provider value={{ Language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext