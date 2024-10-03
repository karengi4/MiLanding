import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Modal, Button } from 'react-bootstrap';

const Carrito = () => {
  const { cart, removeFromCart, clearCart, totalPrice, addToCart } = useContext(CartContext);
  const [showConfirmPurchase, setShowConfirmPurchase] = useState(false);
  const [showConfirmClearCart, setShowConfirmClearCart] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [customerData, setCustomerData] = useState({
    nombre: '',
    telefono: '',
    email: '',
  });
  const [isFinalized, setIsFinalized] = useState(false);
  const [message, setMessage] = useState(''); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  const handleConfirmPurchase = () => {
    if (customerData.nombre && customerData.telefono && customerData.email) {
      const generatedOrderNumber = Math.floor(10000 + Math.random() * 90000);
      setOrderNumber(generatedOrderNumber);
      setIsFinalized(true);
      setShowConfirmPurchase(false);
      clearCart();
    } else {
      alert('Por favor, completa todos los campos antes de confirmar la compra.');
    }
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setMessage('Se ha agregado a tu carrito de compras'); 
    setTimeout(() => {
      setMessage(''); 
    }, 3000);
  };

  const ConfirmPurchaseModal = () => (
    <Modal show={showConfirmPurchase} onHide={() => setShowConfirmPurchase(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar Compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Estás seguro que deseas confirmar la compra?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowConfirmPurchase(false)}>
          No
        </Button>
        <Button variant="primary" onClick={handleConfirmPurchase}>
          Sí
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const ConfirmClearCartModal = () => (
    <Modal show={showConfirmClearCart} onHide={() => setShowConfirmClearCart(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Vaciar Carrito</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Estás seguro que deseas vaciar el carrito?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowConfirmClearCart(false)}>
          No
        </Button>
        <Button variant="danger" onClick={() => { clearCart(); setShowConfirmClearCart(false); }}>
          Sí
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center">Carrito de Compras</h1>

      {isFinalized ? (
        <div className="text-center mt-5">
          <h3 className="text-success">¡Gracias por tu compra!</h3>
          <p>Tu número de orden es: {orderNumber}</p>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-8">
            {cart.length === 0 ? (
              <p className="text-center">No hay productos en el carrito.</p>
            ) : (
              <div>
                <h3 className="text-center">Resumen del Pedido</h3>
                {cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="d-flex justify-content-between align-items-center mb-2 border p-2 rounded">
                    <p>{item.titulo} (x{item.quantity})</p> 
                    <p>Precio: ${item.precio * item.quantity}</p>
                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </button>
                  </div>
                ))}

                <h4 className="text-center mt-3">Total: ${totalPrice()}</h4>

                <h5 className="text-center mt-4">Datos Personales</h5>
                <form className="mt-3">
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={customerData.nombre}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefono"
                      name="telefono"
                      value={customerData.telefono}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={customerData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </form>

                <div className="d-flex justify-content-between">
                  <Button variant="danger" onClick={() => setShowConfirmClearCart(true)}>
                    Vaciar Carrito
                  </Button>
                  <Button variant="primary" onClick={() => setShowConfirmPurchase(true)}>
                    Confirmar Compra
                  </Button>
                </div>

                {message && <p className="text-center mt-3 text-success">{message}</p>}
              </div>
            )}
          </div>
        </div>
      )}

      <ConfirmPurchaseModal />
      <ConfirmClearCartModal />
    </div>
  );
};

export default Carrito;