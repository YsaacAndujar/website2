import './Home.css'
import { IAm } from './TypicalConst'
import Typed from 'react-typed';
import { useState, useEffect } from 'react';
const Home = () => {
  const [isMobile, setIsMobile] = useState(false)
  const handleResize = () => {
    if (window.innerWidth < 1062) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  return (
    <div className="container">
      <div className='text-container'>
        <div>
          <div>
            <div className='text-group'>
              <span>
                <span className='sm'>Hola, mi nombre es</span><span className='md'> Ysaac Andujar Binet</span>
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
        <img className="me" src="/assets/img/me.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home;
