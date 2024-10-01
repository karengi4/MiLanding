import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/carrito">
      <div>
        <span>🛒</span>
        {cart.length > 0 && <span>{cart.length}</span>}
      </div>
    </Link>
  );
};

export default CartWidget;