import React from 'react';
import { GlobalContext } from '../services/GlobalContext';
import TopNavigation from '../header/TopNavigation';
import { Rating } from '@mui/material';

const ProductDetails = () => {
  const { productItem, addToCart } = GlobalContext();
  const productDetailsData = productItem.products;

  return (
    <>
      <TopNavigation />
      <div className="box">
        {productDetailsData.map((val, index) => (
          <div className="card" key={index}>
            <img src={val.thumbnail} alt=''/>
            <p>{val.title}</p>
            <p>{val.description}</p>
            <p>{val.price}</p>
            <Rating name="read-only" value={val.rating} readOnly/>
              <button className="btnAdd" onClick={() => addToCart(val)}>
                Add to Cart
              </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;