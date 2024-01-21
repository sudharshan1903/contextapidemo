import { GlobalContext } from '../services/GlobalContext';
import { Rating } from '@mui/material';

const CartDetails = () => {
  const { cartItem, directPage, quantity, totalQuantity, totalAmount,handleStockChange } = GlobalContext();

  return (
    <>
      <div className='navbar'>
        <button className='cart' onClick={() => directPage("")}>Shopping Product</button>
      </div>
      <div>
        {cartItem && cartItem.length > 0 ? (
          <>
          {/* total list */}
            <div className='total'>
              <p>Total Quantity: {totalQuantity}</p>
              <p>Total Amount: ${totalAmount}</p>
            </div>
            {/* cart item list */}
            <div className='cartHeader'>
              {cartItem.map((item) => (
                <div key={item.id} className='cartItem'>
                  <img src={item.thumbnail} alt=''/>
                  <h3>{item.title}</h3>
                  <p>Description: {item.description}</p>
                  <Rating name="read-only" value={item.rating} readOnly />
                  <p>Price: ${item.price}</p>
                  <p>
                    Quantity:
                    {/* stock filters */}
                    <select
                      value={quantity[item.id] || ''}
                      onChange={(e) => handleStockChange(item.id, parseInt(e.target.value))}
                    >
                      <option value='' disabled>Please select</option>
                      {[...Array(item.stock).keys()].map((index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h2>No Product Found</h2>
        )}
      </div>
    </>
  );
};

export default CartDetails;
