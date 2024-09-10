import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Checkout() {
  const { cart, sumatoriaCarrito } = useContext(CartContext);

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id}>{item.titulo} - ${item.precio} x {item.quantity}</li>
            ))}
          </ul>
          <h3>Total: ${sumatoriaCarrito()}</h3>
        </div>
      ) : (
        <p>No hay items en el carrito.</p>
      )}
    </div>
  );
}

export default Checkout;