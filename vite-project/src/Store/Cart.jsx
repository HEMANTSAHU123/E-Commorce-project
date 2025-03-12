import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import NoteContext from '../context/Context';
import { useContext } from 'react';

const Cart = () => {

const context=useContext(NoteContext)

function removeyourItem(){
  context.removeItem();
}

  const totalPrice = context.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container className="mt-4">
      <h1>CART:</h1>
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
          {context.cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>
                <Button variant="danger" onClick={() => removeyourItem()}>
                  REMOVE
                </Button>
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