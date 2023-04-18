import Nav from '../components/Nav';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Nav />
      <h1>Your Booking Reservation is Confirmed!</h1>

      <h4>A confirmation message has been sent to your email.</h4>
      <h4>Thanks for dining with us!</h4>

      <section className='redirect-buttons'>
        <Link to='/booking'>
          <button className='button'>Back</button>
        </Link>
        <Link className='redirect-button' to='/'>
          Home Page
        </Link>
      </section>
    </div>
  );
};

export default ConfirmedBooking;
