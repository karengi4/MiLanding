import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useProducts } from '../../context/ProductContext'
import { Container, Spinner } from 'react-bootstrap'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const { id } = useParams()
  const { products } = useProducts()

  useEffect(() => {
    const product = products.find((p) => p.id === id)
    if (product) {
      setItem(product)
    }
  }, [id, products]);

  return (
    <Container className="my-5">
      {item ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={item.imagen}
              alt={item.titulo}
              className="img-fluid rounded mb-4"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">{item.titulo}</h2>
            <p className="text-muted mb-4">{item.description}</p>
            <p className="h4 mb-4">${item.precio}</p>
            <p className="text-muted mb-4">Stock: {item.stock}</p>
            <ItemDetail item={item} />
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </Container>
  );
};

export default ItemDetailContainer