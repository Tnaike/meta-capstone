import greekSalad from '../assets/greek_salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import grilledFish from '../assets/grilled-fish.jpg';

const SpecialMenu = () => {
  return (
    <section className='specialMenu-wrap'>
      <div className='container'>
        <div className='specialMenu-header'>
          <h1 className='section-title mb-3'>Weekly specials menu</h1>
        </div>
        <div className='specialMenu-body'>
          <div className='card'>
            <div className='card-body'>
              <img src={greekSalad} alt='greek-salad' />
              <div className='card-details'>
                <h4>
                  Greek salad <span className='price-tag'>$12.99</span>
                </h4>
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <div className='order-btn mt-2'>
                  <button type='button' className=''>
                    Order a delivery <i class='fa-solid fa-truck'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <img src={bruschetta} alt='beef' />
              <div className='card-details'>
                <h4>
                  Bruschetta <span className='price-tag'>$7.99</span>
                </h4>
                <p>
                  Our delicious bruschetta recipe with fresh burrata, seared
                  cherry tomatoes and roasted garlic is the most decadent
                  appetizer. With kalamata olives, basil and prosciutto.
                </p>
                <div className='order-btn mt-2'>
                  <button type='button' className=''>
                    Order a delivery <i class='fa-solid fa-truck'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <img src={grilledFish} alt='seafood' />
              <div className='card-details'>
                <h4>
                  Grilled Fish <span className='price-tag'>$5.00</span>
                </h4>
                <p>
                  Our grilled fish is a delicious option for seafood lovers. The
                  fish is cooked to perfection, with a nice smokey flavor and
                  crispy skin. It's served with a slice of lemon.
                </p>
                <div className='order-btn mt-2'>
                  <button type='button' className=''>
                    Order a delivery <i class='fa-solid fa-truck'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
