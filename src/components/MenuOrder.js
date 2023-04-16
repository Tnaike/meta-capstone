import SpecialMenu from './SpecialMenu';
import lunchMenu from '../assets/lunch-menu.jpg';
import dinnerMenu from '../assets/dinner-menu.jpg';
import mainMenu from '../assets/brunch_menu.jpg';
import dessertMenu from '../assets/dessert-menu.jpg';

const MenuOrder = () => {
  return (
    <>
      <section className='order-section mt-2'>
        <div className='container'>
          <h1 className='section-title mb-3'>Order for Delivery!</h1>
          <div className='menu-display-wrap'>
            <div className='menu-list'>
              <img src={lunchMenu} alt='lunch menu' />
              <h4 className='menu-list-title'>Lunch Menu</h4>
            </div>
            <div className='menu-list'>
              <img src={dinnerMenu} alt='lunch menu' />
              <h4 className='menu-list-title'>Dinner Menu</h4>
            </div>
            <div className='menu-list'>
              <img src={mainMenu} alt='lunch menu' />
              <h4 className='menu-list-title'>Main Menu</h4>
            </div>
            <div className='menu-list'>
              <img src={dessertMenu} alt='lunch menu' />
              <h4 className='menu-list-title'>Dessert Menu</h4>
            </div>
          </div>
        </div>
      </section>
      <section className='special-menu'>
        <SpecialMenu />
      </section>
    </>
  );
};

export default MenuOrder;
