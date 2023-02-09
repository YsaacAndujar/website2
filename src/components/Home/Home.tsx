import "./Home.css";
import Typed from "react-typed";
import LanguageContext, { LangageType } from "context/LanguageContext";
import { ReactNode, useContext, useEffect, useState } from "react";
import me from "assets/img/me.jpg";
interface KeyStr {
  [key: string]: string;
}
const Home = () => {
  const { Language } = useContext(LanguageContext) as LangageType;

  const myName: KeyStr = {
    es: "Hola, mi nombre es",
    en: "Hi, my name is",
  };
  const iAm: KeyStr = {
    es: "Y soy un",
    en: "and I'm a",
  };
  const summary: { [key: string]: Array<string> } = {
    es: [
      "Soy un programador y desarrollador FullStack con experiencia en FrontEnd, BackEnd y Base de datos.",
      "Dominio varios lenguajes como JavaScript, C# y Python; Algunos frameworks como Vue, React, Angular y Django. Tambien manejo Base de datos como SqlServer, MySql y PostgreSQL.",
      "De igual manera siempre estoy dispuesto a aprender nuevos lenguajes y tecnologías. Trabajo con responsabilidad, creatividad, y dedicación.",
    ],
    en: [
      "I am a programmer and FullStack developer with experience in FrontEnd, BackEnd and Database.",
      "I am know several languages such as JavaScript, C# and Python; Some frameworks like Vue, React, Angular and Django. I also manage databases such as SqlServer, MySql and PostgreSQL.",
      "In the same way I am always willing to learn new languages and technologies. I work with responsibility, creativity, and dedication.",
    ],
  };
  const [typedWord, setTypedWord] = useState<Array<string>>([""]);
  useEffect(() => {
    const x: { [key: string]: Array<string> } = {
      es: [
        "Desarrollador de software",
        "Programador",
        "Desarrollador FullStack",
        "Tecnólogo en software",
        "Estudiante Ing. Software",
      ],
      en: [
        "Software Developer",
        "Programmer",
        "Full Stack Developer",
        "Software Technician",
        "Software Engineer",
      ],
    };
    setTypedWord(x[Language]);
  }, [Language]);
  return (
    <>
      <div className="front-container">
        <div className="text-container">
          <div>
            <div>
              <div className="text-group">
                <span>
                  <span className="sm">{myName[Language]}</span>
                  <span className="md">
                    <br className="br-mobile" /> Ysaac Andujar Binet
                  </span>
                  <br />
                  <span className="sm">{iAm[Language]}</span>
                </span>
              </div>
              <Typed
                strings={typedWord}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="bg"
              />
            </div>
          </div>
        </div>
        <div className="img-container">
          <img className="me" src={me} alt="" />
        </div>
      </div>
      <div className="summary-container default-padding">
        {
          summary[Language].map(text =>{
            return (
              <p className="text">
                  {text}
              </p>
            )
          })
        }
      </div>
      <hr className="final-separator" />
    </>
  );
};

export default Home;
