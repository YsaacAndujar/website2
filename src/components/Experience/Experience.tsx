import "assets/css/timeline.css";
import "./Experience.css";
import { useContext } from "react";
import LanguageContext, { LangageType } from "context/LanguageContext";
import { motion } from "framer-motion";
interface KeyStr {
  [key: string]: string;
}
interface jobInterface {
  title: KeyStr;
  position: KeyStr;
  summary: KeyStr;
  period: KeyStr;
}

const title: KeyStr = {
  es: "Experiencia",
  en: "Experience",
};

const jobs: Array<jobInterface> = [
  {
    period: {
      es: "11/2023 - Actualidad",
      en: "11/2023 - Present",
    },
    title: {
      es: "Kalifika",
      en: "Kalifika",
    },
    position: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
    },
    summary: {
      es: "Desarrollar un BackOffice y Backend para Kalifka, junto con la implementación de la lógica de negocio de la aplicación.",
      en: "Develop a BackOffice and Backend for Kalifka, as well as assist in creating the business logic for the application.",
    },
  },
  {
    period: {
      es: "6/2023 - Actualidad",
      en: "6/2023 - Present",
    },
    title: {
      es: "Codika",
      en: "Codika",
    },
    position: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
    },
    summary: {
      es: "Realicé el Backend, FrontEnd, Base de datos y logica de negocio de diferentes proyectos utilizando diferentes lenguajes y tecnologias.",
      en: "I create Backend, FrontEnd, Database and business logic for different projects using different languages and technologies.",
    },
  },
  {
    period: {
      es: "6/2022 - 6/2023",
      en: "6/2022 - 6/2023",
    },
    title: {
      es: "Tennos Business",
      en: "Tennos Business",
    },
    position: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
    },
    summary: {
      es: "Trabajé dando soporte y creando nuevos módulos para el crm MagyNet y la aplicación MagyPago",
      en: "I worked giving support and creating new modules for the MagyNet crm and the MagyPago application",
    },
  },
  {
    period: {
      es: "02/2022 - 06/2022",
      en: "02/2022 - 06/2022",
    },
    title: {
      es: "Seguridad Residencial y Comercial",
      en: "Seguridad Residencial y Comercial",
    },
    position: {
      es: "Desarrollador FullStack",
      en: "Full Stack Developer",
    },
    summary: {
      es: "Realicé un BackOffice y API's para una aplicación móvil sobre recargas telefónicas, transferencia de dinero y compra y venta de tickets de lotería.",
      en: "I made a BackOffice and API's for a mobile application about telephone recharges, money transfers and buying and selling lottery tickets",
    },
  },
  {
    period: {
      es: "06/2019 - 08/2019",
      en: "06/2019 - 08/2019",
    },
    title: {
      es: "Gadget Gallery",
      en: "Gadget Gallery",
    },
    position: {
      es: "Técnico en Computación",
      en: "Computer Technician",
    },
    summary: {
      es: "Trabajé como técnico en computación e informática dando soporte al cliente, reparando computadoras y vendiendolas.",
      en: "I worked as a computer and IT technician giving customer support, repairing computers and selling them.",
    },
  },
];
const Experience = () => {
  const { Language } = useContext(LanguageContext) as LangageType;

  return (
    <>
      <h1 className="title">{title[Language]}</h1>
      <hr className="separator" />
      <div className="timeline-container">
        <section className="timeline-section">
          <div className="timeline-items">
            {jobs.map((job, index) => {
              const initial = {
                x: index % 2 === 0 ? -50 : 50, opacity: 0
              };
              const inView = {
                x: 0,
                opacity: 1,
                transition: { duration: 0.5 },
              };
              return (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <motion.div
                    className="timeline-date"
                    initial={initial}
                    whileInView={inView}
                  >{job.period[Language]}</motion.div>
                  <motion.div
                    className="timeline-content"
                    initial={initial}
                    whileInView={inView}
                  >
                    <h3>{job.title[Language]}</h3>
                    <p>{job.position[Language]}</p>
                    <p>{job.summary[Language]}</p>
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

export default Experience;
