import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { getCategories } from '../../utils/getCategories';
import { Link } from 'react-router-dom';

function NavBar() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        setError('Error al obtener las categorías');
      }
    };

    fetchCategories();
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi Kapital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {error ? (
              <Nav.Link disabled>Error cargando categorías</Nav.Link>
            ) : (
              categories.map((category) => (
                <Nav.Link as={Link} to={`/category/${category.name}`} key={category.id}>
                  {category.name}
                </Nav.Link>
              ))
            )}
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;