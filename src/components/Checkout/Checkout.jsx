import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {useForm} from "react-hook-form"
import {collection, addDoc} from "firebase/firestone"

const checkout =() =>{
    
    const [compraId, setCompraId] = useState("")

    const {carrito, precioTotal, vaciarCarrito} = useContext (CartContext)

    const {register, handleSubmit} = useForm()

    const comprar = (info) => {
        const compra ={
            cliente: info,
            servicios: carrito,
            total: precioTotal()
        }

        console.log(compra)

        const compraRef = collection (db, "pedidos");

        addDoc (compraRef, compra)
        .then((doc) =>{
            setCompraId(doc.id)
            vaciarCarrito();
        })
    }

    if (compraId) {
        return(
            <div className="container">
                <h1 className="main-title">¡Gracias por tu compra!</h1>
                <p>Tu pedido es el número {compraId}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="main-title">Terminar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingrese su nombre" {...register("nombre")}/>
                <input type="email" placeholder="Ingrese su email" {...register("email")}/>
                <input type="phone" placeholder="Ingrese su teléfono" {...register("telefono")}/>
                <button className="enviar" type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default checkout