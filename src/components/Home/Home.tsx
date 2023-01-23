import './Home.css'
import { IAm } from './TypicalConst'
import Typed from 'react-typed';
import me from 'assets/img/me.jpg'
const Home = () => {
  return (
    <>
      <div className="front-container">
        <div className='text-container'>
          <div>
            <div>
              <div className='text-group'>
                <span>
                  <span className='sm'>Hola, mi nombre es</span><span className='md'><br className='br-mobile'/> Ysaac Andujar Binet</span>
                  <br />
                  <span className='sm'>Y soy un</span> 
                </span>
              </div>
              <Typed
                strings={IAm}
                typeSpeed={40}
                backSpeed={50}
                loop
                className='bg' 
              />

            </div>
          </div>
        </div>
        <div className='img-container'>
          <img className="me" src={me} alt="" />
        </div>
      </div>
      <div className='summary-container default-padding'>
        <p className='text'>Soy un programador y desarrollador FullStack con experiencia en FrontEnd, BackEnd y Base de datos.</p>
        <p className='text'> Dominio varios lenguajes como JavaScript, C# y Python; Algunos frameworks como Vue, React, Angular y Django. Tambien manejo Base de datos como SqlServer, MySql y PostgreSQL.</p>
        <p className='text'>De igual manera siempre estoy dispuesto a aprender nuevos lenguajes y  tecnologías. Trabajo con responsabilidad, creatividad, y dedicación.</p>
      </div>
      <hr className="final-separator"/>

    </>
  );
}

export default Home;
