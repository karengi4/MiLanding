import { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar"
import CartWidget from "../CartWidget/CartWidget"
import {getCategories} from '../../utils/getCategories.jsx'
import {Link} from 'react-router-dom'

function NavBar() {
    const [categories, setCategories] = useState([])
  
    useEffect(() => {
      getCategories()
        .then((data) => {
          console.log(data)
          setCategories(data)
        })
        .catch((error) => console.error("Error fetching categories:", error))
    }, [])
  
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Mi Kapital</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {categories.map((cat, index) => (
                <Nav.Link
                  as={Link}
                  to={`/category/${cat}`}
                  key={index}
                >
                  {cat}
                </Nav.Link>
              ))}
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar