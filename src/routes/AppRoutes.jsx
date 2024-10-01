import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Contacto from '../pages/Contacto';
import Servicios from '../pages/Servicios';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Busquedas from '../pages/Busquedas';
import Carrito from '../components/Carrito/Carrito';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/servicios/:id" element={<ItemDetailContainer />} />
      <Route path="/busquedas" element={<Busquedas />} />
      <Route path="/carrito" element={<Carrito />} />
    </Routes>
  );
};

export default AppRoutes;