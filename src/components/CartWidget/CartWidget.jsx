import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Link to="/carrito">
        <span>🛒</span>
        {itemCount > 0 && <span>({itemCount})</span>}
      </Link>
    </div>
  );
}

export default CartWidget;