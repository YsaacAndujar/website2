import "./Home.css";
import Typed from "react-typed";
import LanguageContext, { LangageType } from "context/LanguageContext";
import { useContext, useEffect, useState } from "react";
import me from "assets/img/me.png";
import cven from "assets/pdf/CV - Software Developer - Ysaac Andujar.pdf";
import cves from "assets/pdf/CV - Desarrollador de Software - Ysaac Andujar.pdf";
import { motion } from "framer-motion";

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
      "Soy un ingeniero de software FullStack con más de 4 años de experiencia profesional, incluyendo el desarrollo de proyectos para grandes empresas.","He desarrollado sólidas habilidades en múltiples lenguajes de programación así como en el manejo de bases de datos relacionales y no relacionales."
    ],
    en: [
      "I am a FullStack software engineer with over 4 years of professional experience, including developing projects for large companies.",
      "I have developed strong skills in multiple programming languages as well as in managing relational and non-relational databases."
    ],
  };
  const [typedWord, setTypedWord] = useState<Array<string>>([""]);
  useEffect(() => {
    const x: { [key: string]: Array<string> } = {
      es: [
        "Ingeniero de Software",
        "Desarrollador de software",
        "Programador",
        "Desarrollador FullStack",
      ],
      en: [
        "Software Engineer",
        "Software Developer",
        "Programmer",
        "Full Stack Developer",
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
        <motion.div className="img-container">
          <motion.img
            className="me"
            src={me}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            initial={{ opacity: 0, x: 50 }}
          />
        </motion.div>
      </div>
      <div className="summary-container default-padding">
        {summary[Language].map((text, index) => {
          return (
            <p className="text" key={index}>
              {text}
            </p>
          );
        })}
      </div>
      <div className="cv-container">
        <a
          href={cves}
          download="CV - Desarrollador de Software - Ysaac Andujar"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="button-9"
          >
            CV - ES
          </motion.button>
        </a>
        <a href={cven} download="CV - Software Developer - Ysaac Andujar">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="button-9"
          >
            CV - EN
          </motion.button>
        </a>
      </div>
      <hr className="final-separator" />
    </>
  );
};

export default Home;
