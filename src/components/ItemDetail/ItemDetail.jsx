import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'

const toCapital = (str) => {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
  
  const ItemDetail = ({ item }) => {
    const { carrito, agregarAlCarrito } = useContext(CartContext)
    console.log(carrito)

    const [cantidad, setCantidad] = useState(1)
  
    const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
    }
  
    const handleSumar = () => {
      cantidad < item.stock && setCantidad(cantidad + 1)
    }
  
    return (
      <div className="container">
        <div className="servicio-detalle">
          <img src={item.imagen} alt={item.titulo} className="img-fluid" />
          <div>
            <h3 className="titulo">{item.titulo}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="categoria">Categoría: {toCapital(item.categoria)}</p>
            <p className="precio">${item.precio}</p>
            <ItemCount
              cantidad={cantidad}
              handleSumar={handleSumar}
              handleRestar={handleRestar}
              handleAgregar={() => { agregarAlCarrito(item, cantidad); }}
            />
            <Link to="/">Volver al inicio</Link>
          </div>
        </div>
      </div>
    )
  }
  
  export default ItemDetail