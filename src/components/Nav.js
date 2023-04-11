import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Nav = () => {
  return (
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
          <NavLink to='/booking'>Reservations</NavLink>
        </li>
        <li>
          <NavLink to='/order-online'>Order Online</NavLink>
        </li>
        <li className='login'>Login</li>
      </ul>
    </nav>
  );
};

export default Nav;
