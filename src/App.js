import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import Booking from './pages/booking';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/confirmation' element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
