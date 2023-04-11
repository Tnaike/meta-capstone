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
            <h1 className='header-title mb-1'>Little Lemon</h1>
            <h3 className='sub-title mb-3'>Chicago</h3>
            <p className='welcome-msg'>
              We are a family owned Mediteraneean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <br />
            <Link to='/booking'>
              <Button label='Reserve a table' />
            </Link>
          </div>
          <div className="header-banner">
            <img src={headerBanner} alt='little-lemon banner' />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
