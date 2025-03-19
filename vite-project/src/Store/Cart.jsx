import React, { useContext } from 'react';
import { Table, Button, Container, Card } from 'react-bootstrap';
import NoteContext from '../context/Context';

const Cart = () => {
  const { cartItems, setCartItems, setTotalPrice, setCount } = useContext(NoteContext);

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item !== itemToRemove);
    setCartItems(updatedCart);
    setTotalPrice((prev) => prev - itemToRemove.price);
    setCount((prev) => prev - 1);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container
      style={{
        position: 'absolute',
        top: '5vh',
        right: '0',
        width: '40%',
        height: '88vh',
        backgroundColor: '#f8f9fa', // Light background
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
        borderRadius: '8px', // Rounded corners
        padding: '20px',
        overflowY: 'auto', // Enable scrolling if needed
      }}
      className="mt-4"
    >
      <h1 className="mb-4 text-center">Your Cart</h1>
      <Card className="mb-4">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button variant="danger" onClick={() => removeFromCart(item)} size="sm">
                    REMOVE
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <div className="text-end">
        <h4 className="text-center mt-4">Total Price: ${totalPrice.toFixed(2)}</h4>
        <Button variant="success" className="mt-3" size="lg">
          PURCHASE
        </Button>
      </div>
    </Container>
  );
};

export default Cart;