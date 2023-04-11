import React from 'react';
import { Link } from 'react-router-dom';

import Button from './button';
import headerBanner from "../assets/bannerFood.jpg";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-wrap container'>
        <section>
          <div>
            <h1 className='header-title'>Little Lemon</h1>
            <h3 className='sub-title'>Chicago</h3>
            <p className='welcome-msg'>
              We are a family owned Mediteraneean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <br />
            <Link to='/booking'>
              <Button label='Reserve a table' />
            </Link>
          </div>
          <div>
            <img src={headerBanner} alt='header' height='250px' width='250px' />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
