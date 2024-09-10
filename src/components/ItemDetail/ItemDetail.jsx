import { useContext, useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const toCapital = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const ItemDetail = ({ item }) => {
    const { addToCart, message, setMessage } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        setMessage(''); 
    }, [item, setMessage]);

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleSumar = () => {
        if (cantidad < item.stock) {
            setCantidad(cantidad + 1);
        }
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={item.imagen || 'https://picsum.photos/200'} 
                        alt={item.titulo} 
                        className="img-fluid" 
                    />
                </div>
                <div className="col-md-6">
                    <h3 className="titulo">{item.titulo}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoría: {toCapital(item.category)}</p>
                    <p className="precio">${item.precio}</p>
                    <ItemCount
                        initial={1}
                        stock={item.stock}
                        onAdd={(cantidad) => {
                            addToCart(item, cantidad);
                            setMessage(`Añadido al carrito: ${item.titulo}`);
                        }} 
                    />
                    {message && <p>{message}</p>}
                    <Link to="/" className="btn btn-secondary mt-3">Volver al inicio</Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;