import { useState } from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > initial) setCount(count - 1);
  };

  return (
    <div className="d-flex align-items-center">
      <Button variant="secondary" onClick={handleDecrease}>-</Button>
      <span className="mx-2">{count}</span>
      <Button variant="secondary" onClick={handleIncrease}>+</Button>
      <Button variant="primary" onClick={() => onAdd(count)} className="ml-3">Agregar al carrito</Button>
    </div>
  );
};

export default ItemCount;