import logo from '../assets/logo192.png';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <img src={logo} alt='logo' />
        <section>
          <h3>Quick link</h3>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/menu'>Menu</NavLink>
            </li>
            <li>
              <NavLink to='/gallery'>Gallery</NavLink>
            </li>
            <li>
              <NavLink to='/order-online'>Order Online</NavLink>
            </li>
            <li>
              <NavLink to='booking'>Reservations</NavLink>
            </li>
            <li>Login</li>
          </ul>
        </section>
        <section>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </section>
        <section>
          <h3>Social </h3>
          <ul>
            <li>
              <a
                href='http://'
                title='Facebook'
                target='_blank'
                rel='noreferrer'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/Timmynaike'
                title='Twitter'
                target='_blank'
                rel='noreferrer'
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href='https://github.com/Tnaike'
                title='GitHub'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/timilehin-adenaike'
                title='Linkedin'
                target='_blank'
                rel='noreferrer'
              >
                Linkedin
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
