import Item from '../Item/Item';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;