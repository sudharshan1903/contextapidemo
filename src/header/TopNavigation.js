import React from 'react';
import { GlobalContext } from '../services/GlobalContext';

const TopNavigation = () => {
  const { cartCount, directPage } = GlobalContext();
  return (
    <div className='navbar'>
      {cartCount===0 ?
       <button className='cart' disabled>
       Cart {cartCount}
    </button>
      :
      <button className='cart' onClick={() => directPage("cartDetails")}>
         Cart {cartCount}
      </button>
       }
    </div>
  );
};

export default TopNavigation;