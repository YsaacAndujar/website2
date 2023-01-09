import { useProSidebar } from 'react-pro-sidebar';
import './TopNavbar.css';

type bodyProp = {
    component: React.ReactNode;
}
function TopNavbar( {component}: bodyProp) {
    const { toggleSidebar,collapseSidebar } = useProSidebar();
    return (
        <div className="container">
            <div className="topbar">
                <button onClick={() => toggleSidebar()}>toggle</button>
                <button onClick={() => collapseSidebar()}>Collapse</button>
            </div>
            <div className="componet-container">
                {component}
            </div>
        </div>
    );
}
export default TopNavbar;
