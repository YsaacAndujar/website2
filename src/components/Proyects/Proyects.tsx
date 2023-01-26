import "./Proyects.css";
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
} from "components/CustomIcons/Icons";
const Proyects = () => {
  return (
    <>
      <h1 className="title">Proyectos</h1>
      <hr className="separator" />
      <div className="container default-padding">
        <div className="card">
          <h2 className="title-card">Recarga365</h2>
          <p className="text">
            Este fue un proyecto en el que trabajé para la empresa "Seguridad
            Residencial y Comercial".
          </p>
          <p className="text">
            Aquí realicé un BackOffice y API's para una aplicación móvil sobre
            recargas telefónicas, transferencia de dinero y compra y venta de
            tickets de lotería.
          </p>
          <div className="icons-container">
            <div className="icon-group right">
              <PythonIcon />
              <DjangoIcon />
              <PostgreSQLIcon />
            </div>
            <hr className="c-separator" />

            <div className="icon-group center">
              <YouTubeIcon link='https://www.youtube.com/embed/Od5LRsEUXOI'/>
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="title-card">Trailers (BackEnd - API)</h2>
          <p className="text">
            Esta aplicación es un BackOffice para una aplicación web para ver
            trailers de peliculas.
          </p>
          <p className="text">
            Aquí podrás crear nuevas categorías y películas. También tiene
            varias API que permiten obtener los datos de la base de datos para
            poder visualizarlas en la aplicación final que tendrá el usuario.
          </p>

          <div className="icons-container">
            <div className="icon-group right">
              <PythonIcon />
              <DjangoIcon />
              <PostgreSQLIcon />
            </div>
            <hr className="c-separator" />

            <div className="icon-group center">
              <GitHubIcon link='https://github.com/YsaacAndujar/Trailers_API_Django_Rest_Framework' />
              <YouTubeIcon link='https://www.youtube.com/embed/QSVky1ARCss'/>
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="title-card">Trailers (FrontEnd)</h2>
          <p className="text">
            Este es el FrontEnd de mi BackEnd de Trailers. Consta de un sistema
            de login de usuarios, una parte para explorar películas y home.
          </p>
          <p className="text">
            También puedes ver los detalles de una película y ver su tráiler en
            la misma página.
          </p>
          <div className="icons-container">
            <div className="icon-group right">
              <AngularIcon />
              <TypeScriptIcon />
            </div>
            <hr className="c-separator" />

            <div className="icon-group center">
              <GitHubIcon link='https://github.com/YsaacAndujar/Trailers_Angular' />
              <YouTubeIcon link='https://www.youtube.com/embed/A618vRaX_w4' />
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="title-card">Super Market Web</h2>
          <p className="text">
            Puedes Elegir productos y agregarlos al carrito de la compra y
            rastrear sus pedidos.
          </p>
          <p className="text">
            Los administradores pueden: Modificar los productos, categorias, ver
            todos los pedidos en un mapa y ver los detalles de cada uno. También
            pueden modificar el estado de los envíos y modificar el carrousel de
            la página de inicio.
          </p>
          <div className="icons-container">
            <div className="icon-group right">
              <CSharpIcon />
              <BlazorIcon />
            </div>
            <hr className="c-separator" />

            <div className="icon-group center">
              <GitHubIcon link='https://github.com/YsaacAndujar/SuperMarketWeb' />
              <YouTubeIcon link='https://www.youtube.com/embed/spfMqkFH6-g' />
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="title-card">Pokemon Game</h2>
          <p className="text">
            Inspirado en "Quien es este pokemon?", esta app te da una imagen de
            un pokemon y debes elegir su nombre correcto entre 4 opciones
            distintas.
          </p>
          <p className="text">
            También tiene una pokédex para investigar los pokemon desconocidos.
          </p>
          <div className="icons-container">
            <div className="icon-group right">
              <VueIcon />
              <JavaScriptIcon />
            </div>
            <hr className="c-separator" />

            <div className="icon-group center">
              <GitHubIcon link='https://github.com/YsaacAndujar/pokemon-vue2' />
              <YouTubeIcon link='https://www.youtube.com/embed/spfMqkFH6-g' />
              <LiveIcon link="https://ypokemon.netlify.app/"/>
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="title-card">MagyNet</h2>
          <p className="text">CRM de la empresa "Tennos Business"</p>
          <p className="text">
            Aquí se administra todos los usuarios y empleados. También se
            manejan las solicitudes y se puede ver los KPI, gráficos, entre
            otras cosas. Básicamente todo lo que necesita un CRM.
          </p>
          <div className="icons-container">
            <div className="icon-group right">
              <VueIcon />
              <JavaScriptIcon />
              <CSharpIcon />
              <SqlServerIcon />
            </div>
            <hr className="c-separator" />

            <div className="icon-group center">
              <EmptyIcon />
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="title-card">MagyPago</h2>
          <p className="text">Producto de la empresa "Tennos Business"</p>
          <p className="text">Este producto ayuda a</p>
          <p className="text">Gestión de facturas con comprobante fiscal.</p>
          <p className="text">Gestión de linea de crédito.</p>
          <p className="text">Administrar consumos prepagados</p>
          <div className="icons-container">
            <div className="icon-group right">
              <AspxIcon />
              <CSharpIcon />
              <SqlServerIcon />
            </div>
            <hr className="c-separator" />

            <div className="icon-group center">
              <EmptyIcon />
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="title-card">Este portafolio</h2>
          <p className="text">Versión 2 de mi portafolio.</p>
          <p className="text">
            Creado para que puedan conocer un poco más sobre mis capacidades
          </p>
          <div className="icons-container">
            <div className="icon-group right">
              <ReactIcon />
              <TypeScriptIcon />
            </div>
            <hr className="c-separator" />

            <div className="icon-group center">
              <EmptyIcon />
            </div>
          </div>
        </div>
      </div>
      <hr className="final-separator" />
    </>
  );
};

export default Proyects;
