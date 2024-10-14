// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Assuming you store the cart items here
  const [cartSummary, setCartSummary] = useState({
    totalAmount: 0,
    totalItems: 0,
    items: [], // Initialize items array
  });

  return (
    <CartContext.Provider
      value={{ cart, setCart, cartSummary, setCartSummary }}
    >
      {children}
    </CartContext.Provider>
  );
};
