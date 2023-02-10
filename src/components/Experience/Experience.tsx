import "assets/css/timeline.css";
import "./Experience.css";
import { useContext } from "react";
import LanguageContext, { LangageType } from "context/LanguageContext";
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
      es: "10/2022 - Actualidad",
      en: "10/2022 - Now",
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
      es: "Aquí realicé un BackOffice y API's para una aplicación móvil sobre recargas telefónicas, transferencia de dinero y compra y venta de tickets de lotería.",
      en: "Here I made a BackOffice and API's for a mobile application about telephone recharges, money transfers and buying and selling lottery tickets",
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
      es: "Aquí trabajé como técnico en computación e informática dando soporte al cliente, reparando computadoras y vendiendolas.",
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
          {
          jobs.map(job =>{
            return (
              <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{job.period[Language]}</div>
              <div className="timeline-content">
                <h3>{job.title[Language]}</h3>
                <p>{job.position[Language]}</p>
                <p>
                {job.summary[Language]}
                </p>
              </div>
            </div>
            )
          })
        }
          </div>
        </section>
      </div>
      <hr className="final-separator" />
    </>
  );
};

export default Experience;
