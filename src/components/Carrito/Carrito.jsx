import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Carrito = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li className="list-group-item" key={item.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p>{item.titulo}</p>
                    <p>Precio: ${item.precio}</p>
                  </div>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice()}</h3>
          <button className="btn btn-warning" onClick={clearCart}>Vaciar Carrito</button>
          <p className="mt-3">¡Gracias por tu compra!</p>
        </div>
      )}
    </div>
  );
};

export default Carrito;