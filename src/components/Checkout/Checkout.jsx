import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Checkout = () => {
    const [compraId, setCompraId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = async (info) => {
        const compra = {
            cliente: info,
            servicios: carrito,
            total: precioTotal()
        };

        try {
            const compraRef = collection(db, "pedidos");
            const docRef = await addDoc(compraRef, compra);
            setCompraId(docRef.id);
            vaciarCarrito();
        } catch (error) {
            console.error("Error al realizar la compra:", error);
        }
    };

    if (compraId) {
        return (
            <div className="container">
                <h1 className="main-title">¡Gracias por tu compra!</h1>
                <p>Tu pedido es el número {compraId}</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="main-title">Terminar compra</h1>
            <Form className="formulario" onSubmit={handleSubmit(comprar)}>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Ingrese su nombre" 
                        {...register("nombre", { required: true })} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="email" 
                        placeholder="Ingrese su email" 
                        {...register("email", { required: true })} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="tel" 
                        placeholder="Ingrese su teléfono" 
                        {...register("telefono", { required: true })} 
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Comprar
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;