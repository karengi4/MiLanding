import { Link } from 'react-router-dom';

const Item = ({ id, title, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Precio: ${price}</p>
        <Link to={`/servicios/${id}`} className="btn btn-primary">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
