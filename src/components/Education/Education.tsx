import "assets/css/timeline.css";
import './Education.css'
const Education = () => {
  return (
    <>
      <h1 className="title">Education</h1>
      <hr className="separator" />
      <div className="timeline-container">
        <section className="timeline-section">
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">4/2023 - Actualidad</div>
              <div className="timeline-content">
                <h3>Ingieneria de Software</h3>
                <p>
                  Universidad del Caribe (UNICARIBE)
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">01/2020 - 04/2022</div>
              <div className="timeline-content">
                <h3>Tecnólogo En Desarrollo de Software</h3>
                <p>
                Instituto Tecnológico de Las Américas
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">08/2015 - 05/2019</div>
              <div className="timeline-content">
                <h3>Bachiller Técnico en Electrónica y Telecomunicaciones</h3>
                <p>
                  Instituto Politécnico Pilar Constanzo
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr className="final-separator" />
    </>
  );
};

export default Education;
