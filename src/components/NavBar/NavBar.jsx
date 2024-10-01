import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ width: '60px', height: '60px', marginRight: '8px' }} /> 
          Mi E-commerce
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-primary mx-2" to="/">Inicio</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-primary mx-2" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-primary mx-2" to="/servicios">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-primary mx-2" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <CartWidget style={{ width: '50px', height: '50px' }} /> 
        </div>
      </div>
    </nav>
  );
};

export default NavBar;