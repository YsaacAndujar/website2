import { useProSidebar } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import "./TopNavbar.css";
import { motion } from "framer-motion";
import LanguageContext, { LangageType } from "context/LanguageContext";
type bodyProp = {
  component: React.ReactNode;
};
function TopNavbar({ component }: bodyProp) { 
  const { setLanguage } = useContext(LanguageContext) as LangageType;
  const { toggleSidebar, collapseSidebar, collapsed } = useProSidebar();

  const [collapsedClassName, setCollapsedClassName] = useState<string>("collapse-btn");
  useEffect(() => {
    if (collapsed) {
      setCollapsedClassName("collapse-btn active");
      return;
    }
    setCollapsedClassName("collapse-btn");
  }, [collapsed]);
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 20,
  };
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn)
    setLanguage(isOn ? 'es': 'en')
};
  return (
    <div className="container-topbar">
      <div className="top-bar">
        <button className="toggle-btn" onClick={() => toggleSidebar()}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button
          className={collapsedClassName}
          onClick={() => collapseSidebar()}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="language-container">
          <h3>Es</h3>
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
          <h3>En</h3>
        </div>
      </div>
      <div className="componet-container">{component}</div>
    </div>
  );
}
export default TopNavbar;
