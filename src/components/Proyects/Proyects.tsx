import "./Proyects.css";
import {
  GitHub,
  YouTube,
  Python,
  Django,
  PostgreSQL,
  Angular,
  TypeScript
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
              <Python />
              <Django />
              <PostgreSQL />
            </div>
            <hr className="c-separator" />

            <div className="icon-group center">
              <GitHub />
              <YouTube />
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
              <Python />
              <Django />
            </div>
            <hr className="c-separator" />

            <div className="icon-group center">
              <GitHub />
              <YouTube />
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="title-card">Trailers (FrontEnd)</h2>
          <p className="text">
            Este es el FrontEnd de mi BackEnd de Trailers. Consta de un sistema de login de usuarios, una parte para explorar películas y home.
          </p>
          <p className="text">
            También puedes ver los detalles de una película y ver su tráiler en
            la misma página.
          </p>
          <div className="icons-container">
            <div className="icon-group right">
              <Angular />
              <TypeScript />
            </div>
            <hr className="c-separator" />

            <div className="icon-group center">
              <GitHub />
              <YouTube />
            </div>
          </div>
        </div>
      </div>
      <hr className="final-separator" />
    </>
  );
};

export default Proyects;
