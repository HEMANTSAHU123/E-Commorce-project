import React, { useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';

const Cart = () => {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Album 3',
      price: 9.99,
      quantity: 1,
    },
  ]);


  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container className="mt-4">
      <h1>CART</h1>
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
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>
                <Button variant="danger" onClick={() => removeItem(item.id)}>
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