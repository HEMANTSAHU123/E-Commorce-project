import React from "react";
import NoteContext from "../context/Context";
import {
  Card,
  ListGroup,
  Row,
  Col,
  Image,
  Container,
  Button,
} from "react-bootstrap";
import { useContext } from "react";

const CartItem = (data) => {
 const{cartItems,setCartItems,items}=useContext(NoteContext);
 function addToCart(){
  setCartItems([...cartItems,data])
 }
  return (
    <>
      <div>
        <div
          style={{
            background: "rgb(84, 84, 84)",
            padding: "80px 0",
            gridArea: "initial",
          }}
        >
          <Container className="text-center">
            <h1 style={{
              color:"white"
            }}>The Generic</h1>
          </Container>
        </div>
        <h2 className="text-center">Music</h2>
        <Row>
          <Col>
            <ListGroup>
              {items.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col md={3}>
                          <Image src={item.imageUrl} alt={item.title}  className="image-hover" 
  />
                        </Col>
                        <Col md={9}>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                            Price: ${item.price} <br />
                            Quantity: {item.quantity}
                          </Card.Text>
                          <Button
                            variant="success"
                            size="small"
                            className="w-10"
                            onClick={addToCart()}
                          >
                            Add to Cart 
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CartItem;
