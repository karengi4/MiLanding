import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  const addToCart = (item, quantity) => {
    setMessage(`Añadido al carrito: ${item.titulo}`);

    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const sumatoriaCarrito = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
    setMessage('');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, sumatoriaCarrito, message, setMessage, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);