import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import NoteContext from '../context/Context';
import { useContext } from 'react';

const Cart = () => {

const context=useContext(NoteContext)

const handleRemove=(id)=>{
  context.removeItem(id);
}
const handleAddItem=()=>{
  context.addItem(item)
  
}

   const totalPrice = context.items.reduce((total, item) => total + item.price * item.quantity, 0);

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
          {context.items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>
                <Button variant="danger" onClick={handleRemove(item.id)}>
                  REMOVE
                </Button>
                <Button onClick={()=>handleAddItem(item)}>add item</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-end">
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
        <Button variant="success" className="mt-3">
          PURCHASE
        </Button>
        
      </div>
    </Container>
  );
};

export default Cart;