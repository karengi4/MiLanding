import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => { 
    const existingProduct = cart.find(p => p.id === product.id);

    if (existingProduct) {
      setCart(cart.map(p => 
        p.id === product.id ? { ...p, quantity: (p.quantity || 0) + quantity } : p
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const sumatoriaCarrito = () => {
    return cart.reduce((acc, product) => {
      const price = Number(product.precio) || 0;
      const quantity = Number(product.quantity) || 1;
      return acc + (price * quantity);
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, sumatoriaCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);