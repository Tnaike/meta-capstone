import React from 'react';
import { Link } from 'react-router-dom';
import headerBanner from "../assets/bannerFood.jpg";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <section>
          <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediteraneean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <br />
            <Link to='/booking'>
              <button className='button'>Reserve a table</button>
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
