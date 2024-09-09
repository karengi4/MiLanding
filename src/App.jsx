import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import {CartProvider} from './context/CartContext'
import { ProductProvider } from './context/ProductContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <ProductProvider>  
            <CartProvider>
              <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Gran variedad de servicios'}/>} />
                <Route path='/category/:id' element={<ItemListContainer greeting={'Servicios según categoría'}/>} />
                <Route path='/products/:id' element={<ItemDetailContainer/>} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
              </Routes>
            </CartProvider>
          </ProductProvider>
      </BrowserRouter>     
    </div>
  );
}

export default App;
