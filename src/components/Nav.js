import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/index.css';

const Nav = () => {
  return (
    <div className='nav-wrap'>
      <nav className='nav container'>
        <div className='logo'>
          <img src={logo} alt='Little Lemon logo' />
        </div>
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
            <NavLink to='/booking'>Reservations</NavLink>
          </li>
        </ul>
        <div className="login-wrap">
          <div className='signUp'>Signup</div>
          <div className='login'>Login</div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
