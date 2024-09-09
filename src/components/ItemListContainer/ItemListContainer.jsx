import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useProducts } from '../../context/ProductContext'

const ItemListContainer = ({ titulo }) => {
  const [productos, setProductos] = useState([])
  const { id: categoria } = useParams()
  const { products } = useProducts()

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      if (categoria) {
        const filteredProducts = products.filter(prod => prod.category === categoria)
        resolve(filteredProducts)
      } else {
        resolve(products)
      }
    })

    fetchProducts
      .then(filteredProducts => setProductos(filteredProducts))
      .catch(error => console.error('Error al obtener los productos:', error))
  }, [categoria, products])

  return (
    <Container className="p-3">
      <Row>
        <h1 className="my-4">{titulo}</h1>
        <ItemList productos={productos} />
      </Row>
    </Container>
  )
}

export default ItemListContainer