import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faGraduationCap, faBriefcase, faFolder, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { SidebarStyle, MenuStyle, MenuItemStyle } from './styles'
import { useEffect } from 'react';
const SideNavbar = () => {
    useEffect(() => {
        // Update the document title using the browser API
        const div = document.getElementById("App")
        div?.addEventListener("scroll", (event) => {
            console.log('d');
            
          });
        
    });

    const moveTo = (next: string) => {
        document.querySelector(next)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <Sidebar
            customBreakPoint="500px"
            transitionDuration={400}
            backgroundColor="var(--black-ww)"
            rootStyles={SidebarStyle}
        >
            <Menu
                rootStyles={MenuStyle}
                menuItemStyles={MenuItemStyle}
            >
                <MenuItem icon={<FontAwesomeIcon icon={faHouse} />} onClick={() => moveTo('#sect')}>Home</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faGraduationCap} />} onClick={() => moveTo('#sect2')}>Estudios</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faBriefcase} />}>Experiencia</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faFolder} />}>Proyectos</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faPhoneVolume} />}>Contactame</MenuItem>
            </Menu>
        </Sidebar>
    );
}
export default SideNavbar;
