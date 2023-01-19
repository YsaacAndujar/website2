import { useProSidebar } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import './TopNavbar.css';

type bodyProp = {
    component: React.ReactNode;
}
function TopNavbar({ component }: bodyProp) {
    const { toggleSidebar, collapseSidebar, collapsed } = useProSidebar();
    const [collapsedClassName, setCollapsedClassName] = useState<string>('collapse-btn')
    useEffect(() => {
        if (collapsed) { 
            setCollapsedClassName('collapse-btn active')
            return
        }
        setCollapsedClassName('collapse-btn')
    }, [collapsed])
    return (
        <div className="container-topbar">
            <div className="top-bar">
                <button className='toggle-btn' onClick={() => toggleSidebar()}><FontAwesomeIcon icon={faBars} /></button>
                <button className={collapsedClassName} onClick={() => collapseSidebar()}><FontAwesomeIcon icon={faChevronLeft} /></button>
            </div>
            <div className="componet-container">
                {component}
            </div>
        </div>
    );
}
export default TopNavbar;
