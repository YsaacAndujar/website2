import "./Skills.css";
import {
  PythonIcon,
  DjangoIcon,
  PostgreSQLIcon,
  AngularIcon,
  TypeScriptIcon,
  CSharpIcon,
  VueIcon,
  SqlServerIcon,
  AspxIcon,
  ReactIcon,
  MySqlIcon,
  MongoDbIcon,
  NodeJsIcon,
} from "components/CustomIcons/Icons";
import LanguageContext, { LangageType } from "context/LanguageContext";
import { ReactNode, useContext } from "react";
import { motion } from "framer-motion";
import MotionContext, { MotionType } from "context/MotionContext";

interface KeyStr {
  [key: string]: string;
}

const title: KeyStr = {
  es: "Habilidades",
  en: "Skills",
};
const programmingLanguages: KeyStr = {
  es: "Lenguajes",
  en: "Languages",
};
const database: KeyStr = {
  es: "Base de datos",
  en: "Data Bases",
};
interface skill {
  icon: ReactNode;
  name: string;
}
const languagesSkills: Array<skill> = [
  {
    icon: <TypeScriptIcon size="icon-bg" />,
    name: "TypeScript",
  },
  {
    icon: <CSharpIcon size="icon-bg" />,
    name: "C#",
  },
  {
    icon: <PythonIcon size="icon-bg" />,
    name: "Python",
  },
];
const frameworksSkill: Array<skill> = [
  {
    icon: <ReactIcon size="icon-bg" />,
    name: "React",
  },
  {
    icon: <NodeJsIcon size="icon-bg" />,
    name: "NodeJs",
  },
  {
    icon: <VueIcon size="icon-bg" />,
    name: "Vue",
  },
  {
    icon: <AngularIcon size="icon-bg" />,
    name: "Angular",
  },
  {
    icon: <AspxIcon size="icon-bg" />,
    name: "Asp.Net",
  },
  {
    icon: <DjangoIcon size="icon-bg" />,
    name: "Django",
  },
];
const databasesSkill: Array<skill> = [
  {
    icon: <SqlServerIcon size="icon-bg" />,
    name: "SqlServer",
  },
  {
    icon: <MySqlIcon size="icon-bg" />,
    name: "MySql",
  },
  {
    icon: <MongoDbIcon size="icon-bg" />,
    name: "MongoDb",
  },
  {
    icon: <PostgreSQLIcon size="icon-bg" />,
    name: "PostgreSQL",
  },
];
const Skills = () => {
  const { initital, inView } = useContext(MotionContext) as MotionType;
  const { Language } = useContext(LanguageContext) as LangageType;
   const whileTap = {
    scale: 0.8,

    transition:{ type: "spring", stiffness: 400, damping: 10, }

  }
  const whileHover = {
    scale: 1,
    rotate: 10,
    transition: { duration: 0.05 },
  }
  return (
    <>
      <h1 className="title">{title[Language]}</h1>
      <hr className="separator" />
      <div className="skill-container">
        <h1 className="sub-title">{programmingLanguages[Language]}</h1>
        <div className="skill-cards-container">
          {languagesSkills.map(({ icon, name }, index) => {
            return (
              <motion.div
              key={index}
              initial={initital}
                whileInView={inView}
                className="skill-card"
                whileHover={whileHover}
                whileTap={whileTap}
              >
                {icon}
                <p className="text">{name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="skill-container">
        <h1 className="sub-title">Frameworks</h1>
        <div className="skill-cards-container">
          {frameworksSkill.map(({ icon, name }, index) => {
            return (
              <motion.div
              key={index*-1}
              initial={initital}
                whileInView={inView}
                className="skill-card"
                whileHover={whileHover}
                whileTap={whileTap}
              >
                {icon}
                <p className="text">{name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="skill-container">
        <h1 className="sub-title">{database[Language]}</h1>
        <div className="skill-cards-container">
          {databasesSkill.map(({ icon, name },index) => {
            return (
              <motion.div
                className="skill-card"
                key={`${index}A`}
                initial={initital}
                whileInView={inView}
                whileHover={whileHover}
                whileTap={whileTap}
              >
                {icon}
                <p className="text">{name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <hr className="final-separator" />
    </>
  );
};

export default Skills;
