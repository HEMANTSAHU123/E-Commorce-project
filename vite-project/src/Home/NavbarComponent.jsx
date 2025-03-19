import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Button, Row } from 'react-bootstrap';
import NoteContext from '../context/Context';
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Store/Cart';

const NavbarComponent = () => {
  const [toggle, setToggle] = useState(false);
  const context = useContext(NoteContext);

  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Nav style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
          
          
              <Nav.Link as={Link} to="/" style={{ color: 'white' }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/store" style={{ color: 'white' }}>
                Store
              </Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: 'white' }}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: 'white' }}>
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/product/movie1" style={{ color: 'white' }}>
                Product Page
              </Nav.Link>
              
           
              <div  style={{marginRight:"-20%"}}>
              <Button variant="outline-primary" onClick={() => setToggle(!toggle)}>
                Cart:{context.count}
              </Button>
              <NavLink as={Link} to="/ragister" style={{ color: "white" }}>
                signup
              </NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
      {toggle && <Cart />}
    </>
  );
};

export default NavbarComponent;