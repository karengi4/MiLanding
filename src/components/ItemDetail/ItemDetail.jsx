import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, imagen, titulo, descripcion, precio, stock }) => {
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState(''); 
  
  const handleAddToCart = (quantity) => {
    addToCart({ id, imagen, titulo, descripcion, precio, stock, quantity });
    setMessage('Se ha agregado al carrito'); 
    setTimeout(() => {
      setMessage(''); 
    }, 2000);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={imagen} alt={titulo} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          <h4>${precio}</h4>
          <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} /> 
          
          {message && <p className="text-success mt-3">{message}</p>}
          
          <Link to="/servicios" className="btn btn-primary mt-3">Seguir comprando</Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;