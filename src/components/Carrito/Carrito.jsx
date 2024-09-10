import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Carrito() {
  const { cart, sumatoriaCarrito, message, setMessage, clearCart } = useContext(CartContext);

  const handleFinalizePurchase = () => {
    if (cart.length === 0) {
      setMessage('No hay items en el carrito.');
    } else {
      setMessage('¡Gracias por tu compra!');
      clearCart();
    }
  };

  return (
    <div>
      {message && <p>{message}</p>}
      {cart.length > 0 ? (
        <>
          <ul className="list-unstyled">
            {cart.map((item) => (
              <li key={item.id}>
                {item.titulo} - ${item.precio} x {item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${sumatoriaCarrito()}</h3>
          <button onClick={handleFinalizePurchase} className="btn btn-success">
            Finalizar Compra
          </button>
        </>
      ) : (
        !message && <p>No hay items en el carrito.</p>
      )}
    </div>
  );
}

export default Carrito;