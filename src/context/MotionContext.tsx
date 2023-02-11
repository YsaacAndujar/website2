import { ReactNode, createContext } from "react";
export const MotionContext = createContext({});

interface Props {
  children: ReactNode;
}
export type MotionType = {
    initital:strAny
animate:strAny
inView:strAny
  };
export type strAny = {
  [key:string]:any
};
const initital:strAny = { opacity: 0, y: 50 }
const animate:strAny = {

}
const inView:strAny = { opacity: 1, y:0,transition: { duration: 0.4 } }
export const MotionContextProvider = ({ children }: Props) => {
  return (
    <MotionContext.Provider value={{ initital, animate, inView }}>
      {children}
    </MotionContext.Provider>
  );
};

export default MotionContext