import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './cart/CartContext';

import HomePage from './home/HomePage';
import ItemPage from './collection/ItemPage';
import CartPage from './cart/CartPage';

const AppController = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/collections/item' element={<ItemPage />} />
                    <Route path='/shoppingcart' element={<CartPage />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
};

export default AppController;