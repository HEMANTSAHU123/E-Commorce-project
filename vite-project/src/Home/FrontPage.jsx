import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const FrontPage = () => {
  const events = [
    {
      date: "JUL 16",
      location: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 19",
      location: "TORONTO, ON",
      venue: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      location: "BRISTOW, VA",
      venue: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      location: "PHOENIX, AZ",
      venue: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      location: "LAS VEGAS, NV",
      venue: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      location: "CONCORD, CA",
      venue: "CONCORD PAVILION",
    },
  ];
  return (
    <div>
      
      <div style={{ 
        background: "rgb(84, 84, 84)",
         padding: "80px 0",gridArea:"initial" }}>
        <Container className="text-center">
          <h1 style={{color:'white'}}>The Generics</h1>
          <Button variant="primary" className="mb-4">
            Get Our Latest Album
          </Button>
        </Container>
      </div>

      <Container>
        <h1 className="text-center mb-4">Tourse</h1>
        {events.map((event, index) => (
          <React.Fragment key={index}>
            <Row key={index} className="mb-3 align-items-center">
              <Col>
              <div style={{ display: 'flex',  gap: 'px' }}>
                <strong>{event.date}</strong> - {event.location}
                <small className="text-muted">{event.venue}</small>
                </div>
              </Col>
              <Col className="text-end">
                <Button variant="outline-primary">BUY TICKETS</Button>
              </Col>
            </Row>
            {index !== events.length - 1 && <hr className="mt-2 mb-3" />}
          </React.Fragment>
        ))}
      </Container>

      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          background: "rgb(184, 236, 250)",
          alignItems:"center",
          display:"flex",
          justifyContent:"center"
        }}
      >
        the Generics
      </h1>
    </div>
  );
};

export default FrontPage;
