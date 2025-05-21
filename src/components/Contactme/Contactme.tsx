import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contactme.css";
import {
  faEnvelope,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  GitHubIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "components/CustomIcons/Icons";
import LanguageContext, { LangageType } from "context/LanguageContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import MotionContext, { MotionType } from "context/MotionContext";

interface KeyStr {
  [key: string]: string;
}
const title: KeyStr = {
  es: "Contáctame",
  en: "Contact",
};
const Contactme = () => {
  const { initital, inView } = useContext(MotionContext) as MotionType;
  const { Language } = useContext(LanguageContext) as LangageType;
  const clipboardText: KeyStr = {
    mobile: "18492819395",
    mail: "ysaacandujar@gmail.com",
    telephone: "18095933180",
  };
  const clicked = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as Element;
    element.classList.add("active");
    navigator.clipboard.writeText(clipboardText[element.id]);
    setTimeout(function () {
      element.classList.remove("active");
    }, 300);
  };

  return (
    <>
      <h1 className="title">{title[Language]}</h1>
      <hr className="separator" />
      <div className="contactme-container">
        <div className="contact-card" title="Celular">
          <motion.p
            initial={initital}
            whileInView={inView}
            onClick={clicked}
            id="mobile"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
              transition: { duration: 0.3 },
            }}
          >
            <FontAwesomeIcon icon={faMobile} />
            +1-(849)-281-8385
          </motion.p>
        </div>
        <div className="contact-card" title="Correo">
          <motion.p
            initial={initital}
            whileInView={inView}
            onClick={clicked}
            id="mail"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
              transition: { duration: 0.3 },
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            ysaacandujar@gmail.com
          </motion.p>
        </div>
        <div className="contact-card" title="Teléfono">
          <motion.p
            initial={initital}
            whileInView={inView}
            onClick={clicked}
            id="telephone"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.8,
              transition: { duration: 0.3 },
            }}
          >
            <FontAwesomeIcon icon={faPhone} />
            +1-(809)-593-3180
          </motion.p>
        </div>
      </div>
      <div className="footer-container">
        <motion.div initial={initital} whileInView={inView}>
          <WhatsAppIcon size="icon-bg" link="https://wa.me/18492818385" />
        </motion.div>
        <motion.div initial={initital} whileInView={inView}>
          <TelegramIcon size="icon-bg" link="https://t.me/tyrone09876543" />
        </motion.div>
        <motion.div initial={initital} whileInView={inView}>
          <LinkedinIcon
            size="icon-bg"
            link="https://www.linkedin.com/in/ysaac"
          />
        </motion.div>
        <motion.div initial={initital} whileInView={inView}>
          <GitHubIcon size="icon-bg" link="https://github.com/YsaacAndujar" />
        </motion.div>
      </div>
      <hr className="final-separator" />
    </>
  );
};

export default Contactme;
