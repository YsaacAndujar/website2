import "assets/css/timeline.css";
import "./Education.css";
import LanguageContext, { LangageType } from "context/LanguageContext";
import { useContext } from "react";
import { motion } from "framer-motion";

interface KeyStr {
  [key: string]: string;
}
interface degreeInterface {
  title: KeyStr;
  school: KeyStr;
  period: KeyStr;
}

const title: KeyStr = {
  es: "Educación",
  en: "Education",
};

const degrees: Array<degreeInterface> = [
  {
    period: {
      es: "4/2023 - Actualidad",
      en: "4/2023 - Now",
    },
    title: {
      es: "Ingieneria de Software",
      en: "Software Engineering",
    },
    school: {
      es: "Universidad del Caribe (UNICARIBE)",
      en: "Universidad del Caribe (UNICARIBE)",
    },
  },
  {
    period: {
      es: "01/2020 - 04/2022",
      en: "01/2020 - 04/2022",
    },
    title: {
      es: "Tecnólogo En Desarrollo de Software",
      en: "Software Development Technologist",
    },
    school: {
      en: "Instituto Tecnológico de Las Américas (ITLA)",
      es: "Instituto Tecnológico de Las Américas (ITLA)",
    },
  },
  {
    period: {
      es: "08/2015 - 05/2019",
      en: "06/2019 - 08/2019",
    },
    title: {
      es: "Bachiller Técnico en Electrónica y Telecomunicaciones",
      en: "Technical Bachelor in Electronics and Telecommunications",
    },
    school: {
      es: "Instituto Politécnico Pilar Constanzo",
      en: "Instituto Politécnico Pilar Constanzo",
    },
  },
];
const Education = () => {
  const { Language } = useContext(LanguageContext) as LangageType;
  return (
    <>
      <h1 className="title">{title[Language]}</h1>
      <hr className="separator" />
      <div className="timeline-container">
        <section className="timeline-section">
          <div className="timeline-items">
            {degrees.map((degree, index) => {
              const initial = {
                x: index % 2 === 0 ? -50 : 50,
              };
              const inView = {
                x: 0,
                transition: { duration: 0.5 },
              };
              return (
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <motion.div
                    className="timeline-date"
                    initial={initial}
                    whileInView={inView}
                  >
                    {degree.period[Language]}
                  </motion.div>
                  <motion.div
                    className="timeline-content"
                    initial={initial}
                    whileInView={inView}
                  >
                    <h3>{degree.title[Language]}</h3>
                    <p>{degree.school[Language]}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <hr className="final-separator" />
    </>
  );
};

export default Education;
