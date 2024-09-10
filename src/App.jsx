import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from './components/Carrito/Carrito';
import Checkout from './components/Checkout/Checkout'; 
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer titulo='Gran variedad de servicios' />} />
              <Route path='/category/:id' element={<ItemListContainer titulo='Servicios según categoría' />} />
              <Route path='/products/:id' element={<ItemDetailContainer />} />
              <Route path='/carrito' element={<Carrito />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;