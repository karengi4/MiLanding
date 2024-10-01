import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const Carrito = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false); 

  const handleCheckout = () => {
    setIsCheckout(true); 
    clearCart();
  };

  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : isCheckout ? ( 
        <div>
          <h3>Gracias por tu compra</h3>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.titulo}</p>
              <p>Precio: ${item.precio}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <h3>Total: ${totalPrice()}</h3>
          <button onClick={handleCheckout}>Finalizar Compra</button>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Carrito;