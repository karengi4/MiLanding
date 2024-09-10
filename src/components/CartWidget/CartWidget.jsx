import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    const { sumatoriaCarrito } = useCart();

    return (
        <div>
            <Link className="menu-link" to="/carrito">
                Carrito de compras
                <span className="numero">${sumatoriaCarrito()}</span>
            </Link>
        </div>
    );
};

export default CartWidget;