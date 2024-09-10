import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Carrito() {
  const { cart } = useContext(CartContext);

  if (!cart) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.titulo} - ${item.precio} x {item.quantity}</li>
          ))}
        </ul>
      ) : (
        <p>No hay items en el carrito.</p>
      )}
    </div>
  );
}

export default Carrito;