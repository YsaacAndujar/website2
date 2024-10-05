import "./Proyects.css";
import {
  GitHubIcon,
  YouTubeIcon,
  PythonIcon,
  DjangoIcon,
  PostgreSQLIcon,
  AngularIcon,
  TypeScriptIcon,
  CSharpIcon,
  BlazorIcon,
  LiveIcon,
  VueIcon,
  JavaScriptIcon,
  EmptyIcon,
  SqlServerIcon,
  AspxIcon,
  ReactIcon,
  MongoDbIcon,
} from "components/CustomIcons/Icons";
import LanguageContext, { LangageType } from "context/LanguageContext";
import { ReactNode, useContext } from "react";
import { motion } from "framer-motion";
import MotionContext, { MotionType } from "context/MotionContext";

interface KeyStr {
  [key: string]: string;
}
interface Parragraphs {
  [key: string]: Array<string>;
}
interface proyectInterface {
  title: KeyStr;
  summary: Parragraphs;
  technologies: Array<ReactNode>;
  more: Array<ReactNode>;
}
const proyects: Array<proyectInterface> = [
  {
    title: {
      es: "Kalifika",
      en: "Kalifika",
    },
    summary: {
      es: [
        'Plataforma Kalifika',
        "BackOffice para un buró de crédito digital que simplifica el análisis de datos crediticios de clientes. Ofrece gestión de usuarios, herramientas de análisis de crédito, generación de informes personalizados, herramientas de comunicación y auditoría de actividades.",
      ],
      en: [
        "Kalifika's plataform",
        "A BackOffice for a digital credit bureau that simplifies the analysis of customer credit data. It offers user management, credit analysis tools, customized report generation, communication tools, and activity auditing.",
      ],
    },
    technologies: [<PythonIcon />, <DjangoIcon />, <MongoDbIcon />],
    more: [<EmptyIcon />],
  },
  {
    title: {
      es: "Journal App",
      en: "Journal App",
    },
    summary: {
      es: [
        'Inspirado en "Quien es este pokemon?", esta app te da una imagen de un pokemon y debes elegir su nombre correcto entre 4 opciones distintas.',
        "Además tiene una pokédex para investigar los pokemon desconocidos.",
      ],
      en: [
        'Inspired by "Who is this pokemon?", this app gives you an image of a pokemon and you must choose its correct name among 4 different options.',
        "Additionally it has a pokédex to search unknown pokemon.",
      ],
    },
    technologies: [<VueIcon />, <JavaScriptIcon />],
    more: [
      <GitHubIcon link="https://github.com/YsaacAndujar/journal-app" />,
      <LiveIcon link="https://mynotesjournal.netlify.app/" />,
    ],
  },
  {
    title: {
      es: "Pokemon Game",
      en: "Pokemon Game",
    },
    summary: {
      es: [
        'Inspirado en "Quien es este pokemon?", esta app te da una imagen de un pokemon y debes elegir su nombre correcto entre 4 opciones distintas.',
        "Además tiene una pokédex para investigar los pokemon desconocidos.",
      ],
      en: [
        'Inspired by "Who is this pokemon?", this app gives you an image of a pokemon and you must choose its correct name among 4 different options.',
        "Additionally it has a pokédex to search unknown pokemon.",
      ],
    },
    technologies: [<VueIcon />, <JavaScriptIcon />],
    more: [
      <GitHubIcon link="https://github.com/YsaacAndujar/pokemon-vue2" />,
      <YouTubeIcon link="https://youtu.be/N8JpC0WZgJE" />,
      <LiveIcon link="https://ypokemon.netlify.app/" />,
    ],
  },
  {
    title: {
      es: "MagyNet",
      en: "MagyNet",
    },
    summary: {
      es: [
        'CRM de la empresa "Tennos Business"',
        "Administra todos los usuarios y empleados. También se manejan las solicitudes y se puede ver los KPI, gráficos, entre otras cosas. Básicamente todo lo que necesita un CRM.",
      ],
      en: [
        'CRM of the company "Tennos Business"',
        "Manage all users and employees, requests and you can see KPIs, graphs, among other things. Basically everything a CRM needs.",
      ],
    },
    technologies: [
      <VueIcon />,
      <JavaScriptIcon />,
      <CSharpIcon />,
      <SqlServerIcon />,
    ],
    more: [<EmptyIcon />],
  },
  {
    title: {
      es: "Recarga365",
      en: "Recarga365",
    },
    summary: {
      es: [
        'Este fue un proyecto en el que trabajé para la empresa "Seguridad Residencial y Comercial".',
        "Realicé un BackOffice y API's para una aplicación móvil sobre recargas telefónicas, transferencia de dinero y compra de tickets de lotería.",
      ],
      en: [
        'This was a project I worked on for the company "Seguridad Residencial y Comercial".',
        "I made a BackOffice and API's for a mobile application about phone recharges, money transfers and buying lottery tickets.",
      ],
    },
    technologies: [<PythonIcon />, <DjangoIcon />, <PostgreSQLIcon />],
    more: [<YouTubeIcon link="https://www.youtube.com/embed/Od5LRsEUXOI" />],
  },
  {
    title: {
      es: "MagyPago",
      en: "MagyPago",
    },
    summary: {
      es: [
        "Magypago funciona con una terminal de pago y/o Ticket que contiene la identidad del proveedor, para el uso exclusivo de consumo en un establecimiento determinado.",
        "Todo es manejado a través de una plataforma web, donde podrá ver todos los movimientos de consumos de su establecimiento.",
      ],
      en: [
        "Magypago works with an Payment terminal and/or Ticket that contains the supplier's identity, for the exclusive use of consumption in a specific establishment.",
        "Everything is managed through a web platform, where you can see all the consumption movements of your establishment.",
      ],
    },
    technologies: [<AspxIcon />, <CSharpIcon />, <SqlServerIcon />],
    more: [<EmptyIcon />],
  },
  {
    title: {
      es: "Trailers (BackEnd - API)",
      en: "Trailers (BackEnd - API)",
    },
    summary: {
      es: [
        "Esta aplicación es un BackOffice para una aplicación web para ver trailers de peliculas.",
        "Podrás crear nuevas categorías y películas. Tiene varias API que permiten obtener los datos de la base de datos para poder visualizarlas en la aplicación final que tendrá el usuario.",
      ],
      en: [
        "This application is a BackOffice for a web application to watch movie trailers.",
        "You can create new categories and movies. It has several APIs that allow obtaining the data from the database to be able to visualize them in the final application that the user will have.",
      ],
    },
    technologies: [<PythonIcon />, <DjangoIcon />],
    more: [
      <GitHubIcon link="https://github.com/YsaacAndujar/Trailers_API_Django_Rest_Framework" />,
      <YouTubeIcon link="https://www.youtube.com/embed/QSVky1ARCss" />,
    ],
  },
  {
    title: {
      es: "Trailers (FrontEnd)",
      en: "Trailers (FrontEnd)",
    },
    summary: {
      es: [
        "FrontEnd de mi BackEnd de Trailers. Consta de un sistema de login de usuarios, una parte para explorar películas y home.",
        "Asimismo, puedes ver los detalles de una película y ver su tráiler en la misma página.",
      ],
      en: [
        "FrontEnd of my Trailers BackEnd. It consists of a user login system, a part to explore movies and home.",
        "You can view the details of a movie and watch its trailer on the same page.",
      ],
    },
    technologies: [<AngularIcon />, <TypeScriptIcon />],
    more: [
      <GitHubIcon link="https://github.com/YsaacAndujar/Trailers_Angular" />,
      <YouTubeIcon link="https://www.youtube.com/embed/A618vRaX_w4" />,
    ],
  },
  {
    title: {
      es: "Super Market Web",
      en: "Super Market Web",
    },
    summary: {
      es: [
        "Puedes Elegir productos y agregarlos al carrito de la compra y rastrear sus pedidos.",
        "Los administradores pueden: Modificar los productos, categorias, ver todos los pedidos en un mapa y ver los detalles de cada uno. También pueden modificar el estado de los envíos y modificar el carrousel de la página de inicio.",
      ],
      en: [
        "You can choose products and add them to the shopping cart and track your orders.",
        "Administrators can: modify products, categories, see all orders on a map and see the details of each one. They can also modify the status of submissions and modify the home page carousel.",
      ],
    },
    technologies: [<CSharpIcon />, <BlazorIcon />],
    more: [
      <GitHubIcon link="https://github.com/YsaacAndujar/SuperMarketWeb" />,
      <YouTubeIcon link="https://www.youtube.com/embed/spfMqkFH6-g" />,
    ],
  },
  {
    title: {
      es: "Este portafolio",
      en: "This portfolio",
    },
    summary: {
      es: [
        "Versión 2 de mi portafolio.",
        "Creado para que puedan conocer un poco más sobre mis capacidades",
      ],
      en: [
        "Version 2 of my portfolio.",
        "Created so that you can know a little more about my capabilities",
      ],
    },
    technologies: [<ReactIcon />, <TypeScriptIcon />],
    more: [<GitHubIcon link="https://github.com/YsaacAndujar/website2" />],
  },
];
const title: KeyStr = {
  es: "Proyectos",
  en: "Proyects",
};
const Proyects = () => {
  const { Language } = useContext(LanguageContext) as LangageType;
  const { initital, inView } = useContext(MotionContext) as MotionType;

  return (
    <>
      <h1 className="title">{title[Language]}</h1>
      <hr className="separator" />
      <div className="container default-padding">
        {proyects.map(({ title, technologies, summary, more }, index) => {
          return (
            <motion.div
              key={index}
              initial={initital}
              whileInView={inView}
              className="card"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <h2 className="title-card">{title[Language]}</h2>
              {summary[Language].map((text, subindex) => {
                return <p className="text" key={`${index}${subindex}`}>{text}</p>;
              })}
              <div className="icons-container">
                <div className="icon-group right">{technologies}</div>
                <hr className="c-separator" />
                <div className="icon-group center">{more}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <hr className="final-separator" />
    </>
  );
};

export default Proyects;
