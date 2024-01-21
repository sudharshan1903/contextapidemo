import React, { createContext, useContext, useState } from 'react';
import { ProductDb } from '../db/ProductDb';
import Navigation from './useNavigation';

const WrappingChildren = createContext();

export const WrapperData = ({ children }) => {
  const { directPage } = Navigation();
  const [productItem, setProductItem] = useState(ProductDb);
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isCart, setIsCart] = useState(true);
  const [quantity, setQuantity] = useState({});

  // add cart
  const addToCart = (data) => {
    setCartItem((prevCart) => [...prevCart, data]);
    setCartCount((prevCount) => prevCount + 1);
    setIsCart(!isCart);
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [data.id]: prevQuantity[data.id] ? prevQuantity[data.id] + 1 : 1,
    }));
  };
  // stock item 
  const handleStockChange = (itemId, selectedQuantity) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [itemId]: selectedQuantity,
    }));
  };
  // total
  const totalQuantity = cartItem.reduce((total, item) => total + (quantity[item.id] || 0), 0);
  const totalAmount = cartItem.reduce((total, item) => total + (quantity[item.id] || 0) * item.price, 0);

  return (
    <WrappingChildren.Provider
      value={{
        productItem,
        setProductItem,
        addToCart,
        cartItem,
        setCartItem,
        cartCount,
        setCartCount,
        isCart,
        directPage,
        quantity,
        setQuantity,
        totalQuantity,
        totalAmount,
        handleStockChange
      }}
    >
      {children}
    </WrappingChildren.Provider>
  );
};

export const GlobalContext = () => {
  return useContext(WrappingChildren);
};



