import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
  const [orderID, setOrderID] = useState(null);

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    clearCart();
    setOrderID('12345ABC'); 
  };

  return (
    <div>
      <h1>Checkout</h1>
      {orderID ? (
        <p>Gracias por tu compra. Tu número de orden es: {orderID}</p>
      ) : (
        <form onSubmit={handleCheckout}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={buyer.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={buyer.email}
            onChange={handleInputChange}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Teléfono"
            value={buyer.phone}
            onChange={handleInputChange}
          />
          <button type="submit">Finalizar Compra</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;