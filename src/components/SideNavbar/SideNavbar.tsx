import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faGraduationCap, faBriefcase, faFolder, faPhoneVolume, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { SidebarStyle, MenuStyle, MenuItemStyle } from './styles'
import { useEffect, useState, useContext } from 'react';
import LanguageContext, { LangageType } from 'context/LanguageContext';

interface KeyStr {
    [key: string]: string;
}
const experience: KeyStr = {
    'es': 'Experiencia',
    'en': 'Experience'
}
const education: KeyStr = {
    'es': 'Educación',
    'en': 'Education'
}
const proyects: KeyStr = {
    'es': 'Proyectos',
    'en': 'Proyects'
}
const skills: KeyStr = {
    'es': 'Hablidades',
    'en': 'Skills'
}
const contactme: KeyStr = {
    'es': 'Contáctame',
    'en': 'Contact'
}
const SideNavbar = () => {
  const { Language } = useContext(LanguageContext) as LangageType;
    
    const { broken, toggleSidebar, toggled,collapsed,collapseSidebar } = useProSidebar();

    const moveTo = (next: string) => {
        document.querySelector(next)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        if(toggled){toggleSidebar()}
    }

    useEffect(() => {
        if(collapsed){collapseSidebar(false)}
        if(!broken){
            setSidebarBackgroundColor("var(--black-w)")
            return
        }
        setSidebarBackgroundColor("#242424")
    },[broken,toggled]);

    const [SidebarBackgroundColor, setSidebarBackgroundColor] = useState<string>("var(--black-w)")

    return (
        <Sidebar
            customBreakPoint="900px"
            transitionDuration={400}
            backgroundColor={SidebarBackgroundColor}
            rootStyles={SidebarStyle}
        >
            <Menu
                rootStyles={MenuStyle}
                menuItemStyles={MenuItemStyle}
            >
                <MenuItem title="Home" icon={<FontAwesomeIcon icon={faHouse} />} onClick={() => moveTo('#home')}>Home</MenuItem>
                <MenuItem title="Experiencia" icon={<FontAwesomeIcon icon={faBriefcase} />} onClick={() => moveTo('#experience')}>{experience[Language]}</MenuItem>
                <MenuItem title="Educación" icon={<FontAwesomeIcon icon={faGraduationCap} />} onClick={() => moveTo('#education')}>{education[Language]}</MenuItem>
                <MenuItem title="Skills" icon={<FontAwesomeIcon icon={faCodeBranch} />} onClick={() => moveTo('#skills')}>{skills[Language]}</MenuItem>
                <MenuItem title="Proyectos" icon={<FontAwesomeIcon icon={faFolder} />} onClick={() => moveTo('#proyects')}>{proyects[Language]}</MenuItem>
                <MenuItem title="Contactame" icon={<FontAwesomeIcon icon={faPhoneVolume} />} onClick={() => moveTo('#contactme')}>{contactme[Language]}</MenuItem>
            </Menu>
        </Sidebar>
    );
}
export default SideNavbar;
