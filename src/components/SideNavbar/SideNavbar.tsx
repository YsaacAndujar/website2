import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faGraduationCap, faBriefcase, faFolder, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { SidebarStyle } from './styles'


const SideNavbar = ()=> {
    return (
        <Sidebar
        customBreakPoint="500px"
        transitionDuration={400}
        backgroundColor="var(--black-ww)"
        // rootStyles={SidebarStyle}
        >
            <Menu rootStyles={SidebarStyle}>
                <MenuItem icon={<FontAwesomeIcon icon={faHouse}/>} href="#sect" >Home</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faGraduationCap} />}>Estudios</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faBriefcase} />}>Experiencia laboral</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faFolder} />}>Proyectos</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faPhoneVolume} />}>Contactame</MenuItem>
            </Menu>
        </Sidebar>
    );
  }
export default SideNavbar;
