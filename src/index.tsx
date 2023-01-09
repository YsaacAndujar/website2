import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SideNavbar from './components/SideNavbar/SideNavbar';
import TopNavbar from './components/TopNavbar/TopNavbar';
import './index.css';
import { ProSidebarProvider } from 'react-pro-sidebar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <div className="main">
        <SideNavbar/>
        <TopNavbar component={App()}/>
        {/* <App /> */}
      </div>
    </ProSidebarProvider>
  </React.StrictMode>
);


