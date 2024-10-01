import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './context/CartContext';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <CartProvider>
      <NavBar />
      <AppRoutes />
    </CartProvider>
  );
};

export default App;