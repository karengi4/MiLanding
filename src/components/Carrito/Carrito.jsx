import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const Carrito = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false); 
  const [isFinalized, setIsFinalized] = useState(false); 
  const [customerData, setCustomerData] = useState({
    nombre: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      setIsCheckout(true);  
    } else {
      alert('Tu carrito está vacío. Por favor, agrega productos antes de finalizar la compra.');
    }
  };

  const handleConfirmData = () => {
    if (customerData.nombre && customerData.email) {
      setIsFinalized(true); 
      clearCart(); 
    } else {
      alert('Por favor, completa todos los campos antes de confirmar los datos.');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 mb-3">
          <h1>Tu Carrito</h1>
          {cart.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : isFinalized ? (
            <div>
              <h3 className="text-success">Gracias por tu compra</h3>
              <p>A la brevedad te contactaremos para confirmar la modalidad de pago.</p>
            </div>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-2 border p-2 rounded">
                  <p>{item.titulo}</p>
                  <p className="text-end">Precio: ${item.precio}</p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              ))}
              <h3>Total: ${totalPrice()}</h3>
              <button className="btn btn-primary me-2" onClick={handleCheckout}>
                Finalizar Compra
              </button>
              <button className="btn btn-secondary" onClick={clearCart}>
                Vaciar Carrito
              </button>
            </div>
          )}
        </div>

        <div className="col-md-4">
          {isCheckout && !isFinalized ? (
            <div>
              <h2>Completa tus datos personales</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
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
                  <label htmlFor="email" className="form-label">Email</label>
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
                <button type="submit" className="btn btn-success" onClick={handleConfirmData}>
                  Confirmar datos
                </button>
              </form>
            </div>
          ) : (
            !isFinalized && <p>Para finalizar, completa tus datos personales después de presionar "Finalizar Compra".</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrito;