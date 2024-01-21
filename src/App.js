import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './shopping/ProductDetails';
import { WrapperData } from './services/GlobalContext';
import './App.css'
import CartDetails from './shopping/CartDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WrapperData>
          <Routes>
            <Route path="/" element={<ProductDetails />} />
            <Route path="/cartDetails" element={<CartDetails />} />
          </Routes>
        </WrapperData>
      </BrowserRouter>
    </div>
  );
}

export default App;
