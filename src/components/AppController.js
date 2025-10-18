import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './cart/CartContext';

import HomePage from './home/HomePage';
import CollectionPage from './collection/CollectionPage';

const AppController = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/purrlescentcollections' element={<CollectionPage />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
};

export default AppController;