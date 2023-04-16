import logo from '../assets/logo192.png';
import { NavLink } from 'react-router-dom';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-wrap container'>
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
          </ul>
        </section>
        <section>
          <h3>Contact Us</h3>
          <ul>
            <li>Address</li>
            <li>+234 8023031668</li>
            <li>timmynaike@gmail.com</li>
          </ul>
        </section>
        <section>
          <h3>Social Media</h3>
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
      <div className='site-info'>
        <div className='container'>
          <div>
            <div>
              Copyright © {year} Little Lemon Resturant All rights reserved.
            </div>
            <div>
              Develop &amp; design by <span>Tnaike</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
