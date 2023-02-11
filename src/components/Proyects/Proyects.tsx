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
      es: "MagyNet",
      en: "MagyNet",
    },
    summary: {
      es: [
        'CRM de la empresa "Tennos Business"',
        "Aquí se administra todos los usuarios y empleados. También se manejan las solicitudes y se puede ver los KPI, gráficos, entre otras cosas. Básicamente todo lo que necesita un CRM.",
      ],
      en: [
        'CRM of the company "Tennos Business"',
        "Here you manage all users and employees, requests and you can see KPIs, graphs, among other things. Basically everything a CRM needs.",
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
        "Aquí realicé un BackOffice y API's para una aplicación móvil sobre recargas telefónicas, transferencia de dinero y compra y venta de tickets de lotería.",
      ],
      en: [
        'This was a project I worked on for the company "Residential and Commercial Security".',
        "Here I made a BackOffice and API's for a mobile application about phone recharges, money transfers and buying and selling lottery tickets.",
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
        "Magypago funciona con una terminal de pago Ingenico y/o Ticket que contiene la identidad del proveedor, para el uso exclusivo de consumo en un establecimiento determinado.",
        "Todo es manejado a través de una plataforma web, donde podrá ver todos los movimientos de consumos de su establecimiento.",
      ],
      en: [
        "Magypago works with an Ingenico and/or Ticket payment terminal that contains the supplier's identity, for the exclusive use of consumption in a specific establishment.",
        "Everything is managed through a web platform, where you can see all the consumption movements of your establishment.",
      ],
    },
    technologies: [<AspxIcon />, <CSharpIcon />, <SqlServerIcon />],
    more: [<EmptyIcon />],
  },
  {
    title: {
      es: "Pokemon Game",
      en: "Pokemon Game",
    },
    summary: {
      es: [
        'Inspirado en "Quien es este pokemon?", esta app te da una imagen de un pokemon y debes elegir su nombre correcto entre 4 opciones distintas.',
        "También tiene una pokédex para investigar los pokemon desconocidos.",
      ],
      en: [
        'Inspired by "Who is this pokemon?", this app gives you an image of a pokemon and you must choose its correct name among 4 different options.',
        "It also has a pokédex to research unknown pokemon.",
      ],
    },
    technologies: [<VueIcon />, <JavaScriptIcon />],
    more: [
      <GitHubIcon link="https://github.com/YsaacAndujar/pokemon-vue2" />,
      <YouTubeIcon link="https://www.youtube.com/embed/spfMqkFH6-g" />,
      <LiveIcon link="https://ypokemon.netlify.app/" />,
    ],
  },
  {
    title: {
      es: "Trailers (BackEnd - API)",
      en: "Trailers (BackEnd - API)",
    },
    summary: {
      es: [
        "Esta aplicación es un BackOffice para una aplicación web para ver trailers de peliculas.",
        "Aquí podrás crear nuevas categorías y películas. También tiene varias API que permiten obtener los datos de la base de datos para poder visualizarlas en la aplicación final que tendrá el usuario.",
      ],
      en: [
        "This application is a BackOffice for a web application to watch movie trailers.",
        "Here you can create new categories and movies. It also has several APIs that allow obtaining the data from the database to be able to visualize them in the final application that the user will have.",
      ],
    },
    technologies: [<PythonIcon />, <DjangoIcon />, <PostgreSQLIcon />],
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
        "Este es el FrontEnd de mi BackEnd de Trailers. Consta de un sistema de login de usuarios, una parte para explorar películas y home.",
        "También puedes ver los detalles de una película y ver su tráiler en la misma página.",
      ],
      en: [
        "This is the FrontEnd of my Trailers BackEnd. It consists of a user login system, a part to explore movies and home.",
        "You can also view the details of a movie and watch its trailer on the same page.",
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
        "You can Choose products and add them to the shopping cart and track your orders.",
        "Administrators can: Modify products, categories, see all orders on a map and see the details of each one. They can also modify the status of submissions and modify the home page carousel.",
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
        {proyects.map(({ title, technologies, summary, more }) => {
          return (
            <motion.div
            initial={initital}
                whileInView={inView}
              className="card"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <h2 className="title-card">{title[Language]}</h2>
              {summary[Language].map((text) => {
                return <p className="text">{text}</p>;
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
