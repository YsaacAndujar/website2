import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faGraduationCap, faBriefcase, faFolder, faPhoneVolume, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { SidebarStyle, MenuStyle, MenuItemStyle } from './styles'
import { useEffect, useState } from 'react';

const SideNavbar = () => {
    
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
                <MenuItem title="Experiencia" icon={<FontAwesomeIcon icon={faBriefcase} />} onClick={() => moveTo('#experience')}>Experiencia</MenuItem>
                <MenuItem title="Educación" icon={<FontAwesomeIcon icon={faGraduationCap} />} onClick={() => moveTo('#education')}>Educación</MenuItem>
                <MenuItem title="Skills" icon={<FontAwesomeIcon icon={faCodeBranch} />} onClick={() => moveTo('#skills')}>Skills</MenuItem>
                <MenuItem title="Proyectos" icon={<FontAwesomeIcon icon={faFolder} />} onClick={() => moveTo('#proyects')}>Proyectos</MenuItem>
                <MenuItem title="Contactame" icon={<FontAwesomeIcon icon={faPhoneVolume} />} onClick={() => moveTo('#contactme')}>Contactame</MenuItem>
            </Menu>
        </Sidebar>
    );
}
export default SideNavbar;
