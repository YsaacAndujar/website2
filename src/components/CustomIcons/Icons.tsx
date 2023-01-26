import AProps from "./AProps";
import "./Styles.css";
export const GitHubIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon GitHub pointer `}>
      <img
        className={`GitHub ${size}`}
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="GitHub"
        title="GitHub"
      />
    </a>
  );
};
export const WhatsAppIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon WhatsApp pointer `}>
      <img
        className={`WhatsApp ${size}`}
        src="https://img.icons8.com/ios-glyphs/512/whatsapp.png"
        alt="WhatsApp"
        title="WhatsApp"
      />
    </a>
  );
};
export const TelegramIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Telegram pointer `}>
      <img
        className={`Telegram ${size}`}
        src="https://img.icons8.com/ios-filled/512/telegram-app.png"
        alt="Telegram"
        title="Telegram"
      />
    </a>
  );
};
export const LinkedinIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Linkedin pointer `}>
      <img
        className={`Linkedin ${size}`}
        src="https://img.icons8.com/ios-filled/512/linkedin-circled.png"
        alt="Linkedin"
        title="Linkedin"
      />
    </a>
  );
};
export const YouTubeIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon YouTube pointer `}>
      <img
        className={`YouTube ${size}`}
        src="https://img.icons8.com/color/512/youtube-play.png"
        alt="YouTube"
        title="YouTube"
      />
    </a>
  );
};
export const PythonIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Python `}>
      <img
        className={`Python ${size}`}
        src="https://img.icons8.com/color/512/python.png"
        alt="Python"
        title="Python"
      />
    </a>
  );
};
export const DjangoIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Django `}>
      <img
        className={`Django ${size}`}
        src="https://img.icons8.com/material-outlined/512/django.png"
        alt="Django"
        title="Django"
      />
    </a>
  );
};
export const PostgreSQLIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon PostgreSQL `}>
      <img
        className={`PostgreSQL ${size}`}
        src="https://img.icons8.com/color/512/postgreesql.png"
        alt="PostgreSQL"
        title="PostgreSQL"
      />
    </a>
  );
};
export const AngularIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Angular `}>
      <img
        className={`Angular ${size}`}
        src="https://img.icons8.com/color/512/angularjs.png"
        alt="Angular"
        title="Angular"
      />
    </a>
  );
};
export const TypeScriptIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon TypeScript `}>
      <img
        className={`TypeScript ${size}`}
        src="https://img.icons8.com/color/512/typescript.png"
        alt="TypeScript"
        title="TypeScript"
      />
    </a>
  );
};
export const CSharpIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon CSharp `}>
      <img
        className={`CSharp ${size}`}
        src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png?20180210215736"
        alt="CSharp"
        title="CSharp"
      />
    </a>
  );
};
export const BlazorIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Blazor `}>
      <img
        className={`Blazor ${size}`}
        src="https://seeklogo.com/images/B/blazor-logo-B6B0844B72-seeklogo.com.png"
        alt="Blazor"
        title="Blazor"
      />
    </a>
  );
};
export const LiveIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Live pointer `}>
      <img
        className={`Live ${size}`}
        src="https://img.icons8.com/ios-filled/512/youtube-live.png"
        alt="Live"
        title="Live"
      />
    </a>
  );
};
export const VueIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Vue `}>
      <img
        className={`Vue ${size}`}
        src="https://img.icons8.com/color/512/vue-js.png"
        alt="Vue"
        title="Vue"
      />
    </a>
  );
};
export const JavaScriptIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon JavaScript `}>
      <img
        className={`JavaScript ${size}`}
        src="https://img.icons8.com/color/512/javascript.png"
        alt="JavaScript"
        title="JavaScript"
      />
    </a>
  );
};
export const EmptyIcon = ({ link, size = "icon-sm" }: AProps) => {
  return <div className={`Empty ${size}`}></div>;
};
export const SqlServerIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon SqlServer `}>
      <img
        className={`SqlServer ${size}`}
        src="https://img.icons8.com/color/512/microsoft-sql-server.png"
        alt="SqlServer"
        title="SqlServer"
      />
    </a>
  );
};
export const AspxIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Aspx `}>
      <img
        className={`Aspx ${size}`}
        src="https://img.icons8.com/external-fauzidea-flat-fauzidea/512/external-aspx-file-file-extension-fauzidea-flat-fauzidea.png"
        alt="Aspx"
        title="Aspx"
      />
    </a>
  );
};
export const ReactIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon React `}>
      <img
        className={`React ${size}`}
        src="https://img.icons8.com/office/512/react.png"
        alt="React"
        title="React"
      />
    </a>
  );
};
export const JavaIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Java `}>
      <img
        className={`Java ${size}`}
        src="https://img.icons8.com/color/512/java-coffee-cup-logo.png"
        alt="Java"
        title="Java"
      />
    </a>
  );
};
export const KotlinIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Kotlin `}>
      <img
        className={`Kotlin ${size}`}
        src="https://img.icons8.com/color/512/kotlin.png"
        alt="Kotlin"
        title="Kotlin"
      />
    </a>
  );
};
export const DartIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Dart `}>
      <img
        className={`Dart ${size}`}
        src="https://img.icons8.com/color/512/dart.png"
        alt="Dart"
        title="Dart"
      />
    </a>
  );
};
export const CPlusPlusIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon CPlusPlus `}>
      <img
        className={`CPlusPlus ${size}`}
        src="https://img.icons8.com/color/512/c-plus-plus-logo.png"
        alt="CPlusPlus"
        title="CPlusPlus"
      />
    </a>
  );
};
export const FlutterIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Flutter `}>
      <img
        className={`Flutter ${size}`}
        src="https://img.icons8.com/fluency/512/flutter.png"
        alt="Flutter"
        title="Flutter"
      />
    </a>
  );
};
export const IonicIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Ionic `}>
      <img
        className={`Ionic ${size}`}
        src="https://img.icons8.com/color/512/ionic.png"
        alt="Ionic"
        title="Ionic"
      />
    </a>
  );
};
export const OracleIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon Oracle `}>
      <img
        className={`Oracle ${size}`}
        src="https://img.icons8.com/color/512/oracle-logo.png"
        alt="Oracle"
        title="Oracle"
      />
    </a>
  );
};
export const MySqlIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon MySql `}>
      <img
        className={`MySql ${size}`}
        src="https://img.icons8.com/color/512/mysql-logo.png"
        alt="MySql"
        title="MySql"
      />
    </a>
  );
};
export const MongoDbIcon = ({ link, size = "icon-sm" }: AProps) => {
  return (
    <a target="_blank" rel="noreferrer"  href={link} className={`link-icon MongoDb `}>
      <img
        className={`MongoDb ${size}`}
        src="https://img.icons8.com/color/512/mongodb.png"
        alt="MongoDb"
        title="MongoDb"
      />
    </a>
  );
};
