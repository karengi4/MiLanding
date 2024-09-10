import Item from '../Item/Item';

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <h2 className="my-4">{titulo}</h2>
      <div className="row">
        {productos.length > 0 ? (
          productos.map((prod) => (
            <Item producto={prod} key={prod.id} />
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ItemList;