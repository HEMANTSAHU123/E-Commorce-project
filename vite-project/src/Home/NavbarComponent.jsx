import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container,Button} from 'react-bootstrap';
import NoteContext from '../context/Context';
import { Link } from 'react-router-dom';
import Cart from '../Store/Cart';
const NavbarComponent = () => {
  const[toggle,setToggle]=useState(false);
  const context=useContext(NoteContext);


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
            <Nav.Link as={Link} to='/contact' style={{color:'white'}}>Contact Us</Nav.Link> 
          <Button 
          variant="outline-primary" onClick={()=>setToggle(!toggle)}  style={{marginLeft:'auto',
            color:'red'
          }}>Cart:{context.count}</Button>
           </Nav>
       
     
      </Container>
    </Navbar>
   { toggle && <Cart/>}
    </>
  );
};

export default NavbarComponent;
