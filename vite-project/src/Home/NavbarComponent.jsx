import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavbarComponent = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
       
          <Nav  className="mx-auto">
          <Nav.Link as={Link} to="/" style={{ color: 'white' }}>
              Home
            </Nav.Link>
          
            <Nav.Link as={Link} to="/store" style={{ color: 'white' }}>
              Store
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'white' }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{ color: 'white' }}>
              CART
            </Nav.Link>
          </Nav>
      
     
      </Container>
    </Navbar>
   
    </>
  );
};

export default NavbarComponent;