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
    <div className="container mt-4">
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
            <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
              <p>{item.titulo}</p>
              <p className="text-end">Precio: ${item.precio}</p>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <h3>Total: ${totalPrice()}</h3>
          <button className="btn btn-primary me-2" onClick={handleCheckout}>Finalizar Compra</button>
          <button className="btn btn-secondary" onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Carrito;