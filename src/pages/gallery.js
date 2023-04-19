import Nav from '../components/Nav';
import Footer from '../components/Footer';
import interior from '../assets/restaurant-interior.jpg';
import lunchTable from '../assets/book_table.jpg';
import reservedTable from '../assets/framed-reserved-sign-table.jpg';

const Gallery = () => {
  return (
    <>
      <Nav />
      <div>
        <section>
          <div className='page-header'>
            <h1 className='page-title'>Gallery</h1>
          </div>
        </section>
        <section className='about-section'>
          <div className='container'>
            <div className='menu-display-wrap'>
              <div className='menu-list'>
                <img src={interior} alt='gallery' />
              </div>
              <div className='menu-list'>
                <img src={lunchTable} alt='gallery' />
              </div>
              <div className='menu-list'>
                <img src={reservedTable} alt='gallery' />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
