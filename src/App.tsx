import "./App.css"
import Home from "./components/Home/Home";
import Contactme from "components/Contactme/Contactme";
import Education from "components/Education/Education";
import Experience from "components/Experience/Experience";
import Proyects from "components/Proyects/Proyects";
import Skills from "components/Skills/Skills";

function App() {
  return (
    <div className="App" >
      <section id="home">
      <br />
      <br />
      <br />
      <br />
        <Home/>
      </section>
      <section id="experience">
        <Experience/>
      </section>
      <section id="education">
        <Education/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="proyects">
        <Proyects/>
      </section>
      <section id="contactme">
        <Contactme/>
      </section>
    </div>
  );
}

export default App;
