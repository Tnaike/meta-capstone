import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const ConfirmedBooking = () => {
  return (
    <>
      <Nav />
      <div className='confirmation-wrapper'>
        <h1 className='mb-2'>Your Booking Reservation is Confirmed!</h1>

        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>

        <section className='btn-wrap mt-3'>
          <Link to='/booking' className='redirect-button'>
              Back
          </Link>
          <Link to='/' className='redirect-button'>
            Home Page
          </Link>
        </section>
      </div>
    </>
  );
};

export default ConfirmedBooking;
