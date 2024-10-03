import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (itemToAdd) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(item => item.id === itemToAdd.id);
  
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += itemToAdd.quantity; 
        return updatedCart;
      }
  
      return [...prevCart, { ...itemToAdd, quantity: itemToAdd.quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + (item.precio * item.quantity || 0), 0); 
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};