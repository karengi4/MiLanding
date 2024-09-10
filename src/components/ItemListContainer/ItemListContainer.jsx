import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useProducts } from '../../context/ProductContext'

const ItemListContainer = ({ titulo }) => {
  const [productos, setProductos] = useState([]);
  const { id: categoria } = useParams();
  const { products } = useProducts();

  useEffect(() => {
    const fetchProducts = () => {
      if (categoria) {
        return products.filter(prod => prod.category.toLowerCase() === categoria.toLowerCase());
      }
      return products;
    };

    const filteredProducts = fetchProducts();
    setProductos(filteredProducts);
  }, [categoria, products]);

  const categoryTitle = categoria ? categoria : titulo;
    return (
      <Container className="p-3">
        <Row>
          <h1 className="my-4">{categoryTitle}</h1>
          {/* Mostrar los productos filtrados */}
          {productos.length > 0 ? (
            <ItemList productos={productos} />
          ) : (
            <p>No hay productos disponibles en esta categoría.</p>
          )}
        </Row>
      </Container>
    );
  };

export default ItemListContainer