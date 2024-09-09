import Item from '../Item/Item';

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <h2 className="my-4">{titulo}</h2>
      <div className="row">
        {productos.map((prod) => (
          <div className="col-md-4 mb-4" key={prod.id}>
            <Item producto={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList