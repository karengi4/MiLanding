import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > initial) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrease}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;