import Nav from '../components/Nav';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Nav />
      <div>
        <section>
          <div className='page-header'>
            <h1 className='page-title'>About</h1>
          </div>
        </section>
        <section className='about-section'>
          <div className='container'>
            <h3>Know more about Little Lemon Restuarant</h3>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
