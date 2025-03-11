import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import FrontPage from './FrontPage';

import CartItem from '../Store/CartItem';
import About from '../About/About';

const NavbarComponent = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
       
          <Nav  className="mx-auto">
            <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="/store" style={{ color: 'white' }}>Store</Nav.Link>
            <Nav.Link href="/about" style={{ color: 'white' }}>About</Nav.Link>
            <Nav.Link href='/cart' style={{color:'white'}}>CART</Nav.Link>
          </Nav>
      
     
      </Container>
    </Navbar>
    <FrontPage/>
    <CartItem/>
    <About/>
    </>
  );
};

export default NavbarComponent;