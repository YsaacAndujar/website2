import "assets/css/timeline.css";
import "./Experience.css";
const Experience = () => {
  return (
    <>
      <h1 className="title">Experiencia</h1>
      <hr className="separator" />
      <div className="timeline-container">
        <section className="timeline-section">
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">10/2022 - Actualidad</div>
              <div className="timeline-content">
                <h3>Tennos Business</h3>
                <p>Desarrollador FullStack</p>
                <p>Aquí realicé un BackOffice y API's para una aplicación móvil sobre recargas telefónicas, transferencia de dinero y compra y venta de tickets de lotería.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">02/2022 - 06/2022</div>
              <div className="timeline-content">
                <h3>Seguridad Residencial y Comercial</h3>
                <p>Desarrollador FullStack</p>
                <p>Aquí realicé un BackOffice y API's para una aplicación móvil sobre recargas telefónicas, transferencia de dinero y compra y venta de tickets de lotería.</p>
              </div>
            </div> 
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">06/2019 - 08/2019</div>
              <div className="timeline-content">
                <h3>Gadget Gallery</h3>
                <p>Técnico en Computación</p>
                <p>Aquí trabajé como técnico en computación e informática dando soporte al cliente, reparando computadoras y vendiendolas.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr className="final-separator" />
    </>
  );
};

export default Experience;
