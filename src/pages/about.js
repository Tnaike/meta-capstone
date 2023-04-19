import Nav from '../components/Nav';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Nav />
      <section className='about-section'>
        <section>
          <div className='page-header'>
            <h1 className='page-title'>About</h1>
          </div>
        </section>
        <div className='container'>
          <h2>Know more about Little Lemon Restuarant</h2>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
