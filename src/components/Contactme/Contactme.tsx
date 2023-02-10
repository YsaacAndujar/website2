import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contactme.css";
import {
  faEnvelope,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { GitHubIcon, LinkedinIcon, TelegramIcon, WhatsAppIcon } from "components/CustomIcons/Icons";
import LanguageContext, { LangageType } from "context/LanguageContext";
import { useContext } from "react";
interface KeyStr {
  [key: string]: string;
}
const title: KeyStr = {
  es: "Contáctame",
  en: "Contact",
};
const Contactme = () => {
  const { Language } = useContext(LanguageContext) as LangageType;
  const clipboardText: KeyStr = {
    mobile: '18492819395',
    mail: 'ysaacandujar@gmail.com',
    telephone: '18095933180'
  }
  const clicked = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as Element;
    element.classList.add("active");
    navigator.clipboard.writeText(clipboardText[element.id])
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
          <p onClick={clicked} id="mobile">
            <FontAwesomeIcon icon={faMobile} />
            +1-(849)-281-8385
          </p>
        </div>
        <div className="contact-card" title="Correo">
          <p onClick={clicked} id="mail">
            <FontAwesomeIcon icon={faEnvelope} />
            ysaacandujar@gmail.com
          </p>
        </div>
        <div className="contact-card" title="Teléfono">
          <p onClick={clicked} id="telephone">
            <FontAwesomeIcon icon={faPhone} />
            +1-(809)-593-3180
          </p>
        </div>
      </div>
      <div className="footer-container">
      <WhatsAppIcon size="icon-bg" link="https://wa.me/18492818385"/>
      <TelegramIcon size="icon-bg" link="https://t.me/tyrone09876543" />
      <LinkedinIcon size="icon-bg" link="https://www.linkedin.com/in/ysaac-andujar-binet-982517232/"/>
      <GitHubIcon size="icon-bg" link="https://github.com/YsaacAndujar"/>
      </div>
      <hr className="final-separator"/>
    </>
  );
};

export default Contactme;
