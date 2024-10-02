import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link 
      to="/carrito" 
      className="d-flex justify-content-center align-items-center position-relative" 
      aria-label="Ir al carrito"
      style={{ width: '100%' }}  // Asegura que ocupe el ancho completo en pantallas pequeñas
    >
      <span style={{ fontSize: '30px' }}>🛒</span>
      {cart.length > 0 && (
        <span 
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: 1 }}
        >
          {cart.length}
          <span className="visually-hidden">artículos en el carrito</span>
        </span>
      )}
    </Link>
  );
};

export default CartWidget;