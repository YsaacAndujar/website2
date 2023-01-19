import './Home.css'
import { iAm } from './TypicalConst'
import Typical from 'react-typical'
const Home = () => {
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
            <span className='bg'>
              <Typical
                steps={iAm}
                loop={Infinity}
                wrapper="p"
              />
            </span>
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
