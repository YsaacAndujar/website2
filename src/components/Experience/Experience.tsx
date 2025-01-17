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
      es: "6/2023 - Actualidad",
      en: "6/2023 - Present",
    },
    title: {
      es: "Codika",
      en: "Codika",
    },
    position: {
      es: "Ingeniero de software",
      en: "Software Engineer",
    },
    summary: {
      es: "Desarrollé proyectos a gran escala para clientes destacados como Centro Cuesta Nacional, Banco Popular Dominicano, Bondelic, SkyHigh, Metaldom, Analisa y Seprisa. Utilicé tecnologías como React, NestJS, .NET Core, Angular y Django para crear soluciones web eficientes, escalables y personalizadas.",
      en: "I developed large-scale projects for prominent clients such as Centro Cuesta Nacional, Banco Popular Dominicano, Bondelic, SkyHigh, Metaldom, Analisa, and Seprisa. I used technologies like React, NestJS, .NET Core, Angular, and Django to create efficient, scalable, and customized web solutions.",
    },
  },
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
      es: "Ingeniero de software",
      en: "Software Engineer",
    },
    summary: {
      es: "Desarrollé el BackOffice de un buró de crédito para grandes bancos dominicanos con Angular en el frontend y Django en el backend.",
      en: "I developed the BackOffice for a credit bureau serving major Dominican banks, using Angular for the frontend and Django for the backend.",
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
      es: "Ingeniero de software",
      en: "Software Engineer",
    },
    summary: {
      es: "Trabajé como FullStack en proyectos con Vue.js y .NET Core, y en ASPX, desarrollando y manteniendo módulos.",
      en: "I worked as a FullStack developer on projects using Vue.js and .NET Core, as well as ASPX, developing and maintaining modules.",
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
      es: "Desarrollé un BackOffice para una aplicación móvil de recargas telefónicas y compra de tickets de lotería y creé las APIs necesarias para conectar el BackOffice con la aplicación móvil.",
      en: "I developed a BackOffice for a mobile app focused on phone top-ups and lottery ticket purchasesa and created the APIs required to connect the BackOffice with the mobile application.",
    },
  },
  {
    period: {
      es: "06/2019 - 08/2019",
      en: "06/2019 - 08/2019",
    },
    title: {
      es: "Freelance",
      en: "Freelance",
    },
    position: {
      es: "Desarrollador FullStack",
      en: "Full Stack Developer",
    },
    summary: {
      es: "Desarrollo de sitios web para clientes utilizando tecnologías modernas como JavaScript, TypeScript, React, Angular, Python, .NET Core, C#, Vue, SQL Server, MySQL, MongoDB y PostgreSQL.",
      en: "Development of websites for clients using modern technologies such as JavaScript, TypeScript, React, Angular, Python, .NET Core, C#, Vue, SQL Server, MySQL, MongoDB, and PostgreSQL.",
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
                  {/* <motion.div
                    className="timeline-date"
                    initial={initial}
                    whileInView={inView}
                  >{job.period[Language]}</motion.div> */}
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
