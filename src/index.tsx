import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import "./index.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { LanguageContextProvider } from "context/LanguageContext";
import { MotionContextProvider } from "context/MotionContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MotionContextProvider>
      <LanguageContextProvider>
        <ProSidebarProvider>
          <div className="main">
            <SideNavbar />
            <TopNavbar component={App()} />
            {/* <App /> */}
          </div>
        </ProSidebarProvider>
      </LanguageContextProvider>
    </MotionContextProvider>
  </React.StrictMode>
);
