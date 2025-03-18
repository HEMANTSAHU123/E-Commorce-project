import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import NoteContext from '../context/Context';
import { useContext } from 'react';

const Cart = () => {

  const { cartItems, setCartItems ,setTotalPrice,items,setCount} = useContext(NoteContext);


const removeFromCart = (itemToRemove) => {
  const updatedCart = cartItems.filter((item) => item !== itemToRemove);
  setCartItems(updatedCart);
setTotalPrice((prev) => prev - itemToRemove.price); 
setCount((prev)=>prev-1)
};


  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container  style={{
      
position:"absolute",
top:"5vh",
right:"0",
width:"40%",
height:"88vh",
backgroundColor:"white"

    }}className="mt-4 ">
      <h1>Cart:</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item,index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <Button variant="danger" onClick={()=>removeFromCart(item)}>
                  REMOVE
                </Button>
              
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end">
      <h4 className="text-center mt-4">Total Price: ${totalPrice}</h4>
        <Button variant="success" className="mt-3">
          PURCHASE
        </Button>
      
      </div>
    </Container>
  );
};

export default Cart;