import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import "./index.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { LanguageContextProvider } from "context/LanguageContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ProSidebarProvider>
        <div className="main">
          <SideNavbar />
          <TopNavbar component={App()} />
          {/* <App /> */}
        </div>
      </ProSidebarProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
