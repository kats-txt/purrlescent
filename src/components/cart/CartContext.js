import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const existingIndex = cartItems.findIndex(
            (i) => i.name === item.name
        );

        if (existingIndex >= 0) {
            const updatedCart = [...cartItems];
            updatedCart[existingIndex].quantity += item.quantity;
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, item]);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};