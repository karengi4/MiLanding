import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, title, price, image, stock, description }) => {
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart({ id, title, price, quantity });
  };

  return (
    <div className="item-detail">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>${price}</h4>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;