import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom';

const Carrito = () => {
    
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className='container'>
            <h1 className='main-title'>Carrito de compras</h1>
        
            {
                carrito.map((prod) =>(
                    <div key={prod.id}>
                        <h3>{prod.enunciado}</h3>
                        <p>Precio: ${prod.precio}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                    </div>
                ))
            }

            {
                carrito.lenght>0?
                <>
                    <h2>Precio total: ${precioTotal()}</h2>
                    <button onClick={handleVaciar}>Vaciar carrito</button>
                    <Link to="/checkout">Terminar compra</Link>
                </> :
                <h2>Carrito vacío</h2>
            }

        </div>
    )
}

export default Carrito