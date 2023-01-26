import "./Skills.css";
import {
  GitHubIcon,
  YouTubeIcon,
  PythonIcon,
  DjangoIcon,
  PostgreSQLIcon,
  AngularIcon,
  TypeScriptIcon,
  CSharpIcon,
  BlazorIcon,
  LiveIcon,
  VueIcon,
  JavaScriptIcon,
  EmptyIcon,
  SqlServerIcon,
  AspxIcon,
  ReactIcon,
  JavaIcon,
  KotlinIcon,
  DartIcon,
  CPlusPlusIcon,
  FlutterIcon,
  IonicIcon,
  OracleIcon,
  MySqlIcon,
  MongoDbIcon,
} from "components/CustomIcons/Icons";
const Skills = () => {
  return (
    <>
      <h1 className="title">Skills</h1>
      <hr className="separator" />
      <div className="skill-container">
        <h1 className="sub-title">Lenguages</h1>
        <div className="skill-cards-container">
          <div className="skill-card">
            <JavaScriptIcon size="icon-bg" />
            <p className="text">JavaScript</p>
          </div>
          <div className="skill-card">
            <CSharpIcon size="icon-bg" />
            <p className="text">C#</p>
          </div>
          <div className="skill-card">
            <CPlusPlusIcon size="icon-bg" />
            <p className="text">C++</p>
          </div>
          <div className="skill-card">
            <PythonIcon size="icon-bg" />
            <p className="text">Python</p>
          </div>
          <div className="skill-card">
            <TypeScriptIcon size="icon-bg" />
            <p className="text">TypeScript</p>
          </div>
          <div className="skill-card">
            <JavaIcon size="icon-bg" />
            <p className="text">Java</p>
          </div>
          <div className="skill-card">
            <KotlinIcon size="icon-bg" />
            <p className="text">Kotlin</p>
          </div>
          <div className="skill-card">
            <DartIcon size="icon-bg" />
            <p className="text">Dart</p>
          </div>
        </div>
      </div>
      <div className="skill-container">
        <h1 className="sub-title">Frameworks</h1>
        <div className="skill-cards-container">
          <div className="skill-card">
            <DjangoIcon size="icon-bg" />
            <p className="text">Django</p>
          </div>
          <div className="skill-card">
            <AngularIcon size="icon-bg" />
            <p className="text">Angular</p>
          </div>
          <div className="skill-card">
            <ReactIcon size="icon-bg" />
            <p className="text">React</p>
          </div>
          <div className="skill-card">
            <VueIcon size="icon-bg" />
            <p className="text">Vue</p>
          </div>
          <div className="skill-card">
            <BlazorIcon size="icon-bg" />
            <p className="text">Blazor</p>
          </div>
          <div className="skill-card">
            <AspxIcon size="icon-bg" />
            <p className="text">Asp</p>
          </div>
          <div className="skill-card">
            <FlutterIcon size="icon-bg" />
            <p className="text">Flutter</p>
          </div>
          <div className="skill-card">
            <IonicIcon size="icon-bg" />
            <p className="text">Ionic</p>
          </div>
        </div>
      </div>
      <div className="skill-container">
        <h1 className="sub-title">Base de datos</h1>
        <div className="skill-cards-container">
          <div className="skill-card">
            <SqlServerIcon size="icon-bg" />
            <p className="text">SqlServer</p>
          </div>
          <div className="skill-card">
            <OracleIcon size="icon-bg" />
            <p className="text">Oracle</p>
          </div>
          <div className="skill-card">
            <MySqlIcon size="icon-bg" />
            <p className="text">MySql</p>
          </div>
          <div className="skill-card">
            <MongoDbIcon size="icon-bg" />
            <p className="text">MongoDb</p>
          </div>
          <div className="skill-card">
            <PostgreSQLIcon size="icon-bg" />
            <p className="text">Postgre</p>
          </div>
        </div>
      </div>
      <hr className="final-separator" />
    </>
  );
};

export default Skills;
