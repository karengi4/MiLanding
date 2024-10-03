import { Link } from 'react-router-dom';

const Item = ({ id, titulo, precio, imagen }) => {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">Precio: ${precio}</p>
        <Link to={`/servicios/${id}`} className="btn btn-primary">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;