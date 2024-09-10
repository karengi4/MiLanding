import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleSumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const handleAgregar = () => {
        onAdd(cantidad);
    };

    return (
        <div className='d-flex flex-column align-items-center my-3'>
            <ButtonGroup aria-label="Contador de cantidad" className='mb-3'>
                <Button 
                    variant="outline-secondary" 
                    onClick={handleRestar} 
                    aria-label="Disminuir cantidad"
                >
                    -
                </Button>
                <Button 
                    variant="outline-primary" 
                    disabled
                    aria-label="Cantidad actual"
                >
                    {cantidad}
                </Button>
                <Button 
                    variant="outline-secondary" 
                    onClick={handleSumar} 
                    aria-label="Aumentar cantidad"
                    disabled={cantidad >= stock}
                >
                    +
                </Button>
            </ButtonGroup>
            <Button 
                variant="success" 
                onClick={handleAgregar} 
                aria-label="Agregar al carrito"
            >
                Agregar al carrito
            </Button>
        </div>
    );
};

export default ItemCount;