import greekSalad from '../assets/greek_salad.jpg';
import bruschetta from '../assets/dinner-menu.jpg';
import grilledFish from '../assets/greek-salad.jpg';

const SpecialMenu = () => {
  return (
    <main className='specialMenu-wrap'>
      <div className='container'>
        <div className='specialMenu-header'>
          <h1 className='section-title mb-3'>Weekly specials menu</h1>
        </div>
        <div className='specialMenu-body'>
          <div className='card'>
            <div className='card-body'>
              <img
                src={greekSalad}
                alt='greek-salad'
                height='150px'
                width='150px'
              />
              <h4>
                Greek salad <span>$12.99</span>
              </h4>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <h6>
                Order a delivery <i class='fa-solid fa-truck'></i>
              </h6>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <img src={bruschetta} alt='beef' height='150px' width='150px' />
              <h4>
                Bruschetta <span>$7.99</span>
              </h4>
              <p>
                Our Bruschetta is made from grilled bread that has beed smeared
                with garlic and seasoned with salt and olive oil.
              </p>

              <h6>
                Order a delivery <i class='fa-solid fa-truck'></i>
              </h6>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <img
                src={grilledFish}
                alt='seafood'
                height='150px'
                width='150px'
              />
              <h4>
                Grilled Fish <span>$5.00</span>
              </h4>
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <br />
              <h6>
                Order a delivery <i class='fa-solid fa-truck'></i>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpecialMenu;
