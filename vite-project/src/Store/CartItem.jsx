import React from "react";
import {
  Card,
  ListGroup,
  Row,
  Col,
  Image,
  Container,
  Button,
} from "react-bootstrap";

const CartItem = () => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

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
            <h1>The Generic</h1>
          </Container>
        </div>
        <h2 className="text-center">Music</h2>
        <Row>
          <Col>
            <ListGroup>
              {cartElements.map((item, index) => (
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
