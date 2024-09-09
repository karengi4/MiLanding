import {useState} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap'

const ItemCount = ({initial, stock, onAdd}) => {
    const [cantidad, setCantidad] = useState (initial)

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad -1)
        }
    }

    const handleSumar = () => {
        if (cantidad < stock){
            setCantidad(cantidad +1)
        }
    }

    const handleAgregar = () => {
        onAdd(cantidad)
    }

    return (
        <div className='d-flex flex-column align-items-center my-3'>
            <ButtonGroup aria-label="Contador de servicios" className='mb-3'>
                <Button variant="outline-secondary" onClick={handleRestar}>
                -
                </Button>
                <Button variant="outline-primary" disabled >
                {cantidad}
                </Button>
                <Button variant="outline-secondary" onClick={handleSumar}>
                +
                </Button>
            </ButtonGroup>
            <Button variant="success" onClick={handleAgregar}>
                Agregar al carrito
            </Button>
        </div>
    )
}

export default ItemCount