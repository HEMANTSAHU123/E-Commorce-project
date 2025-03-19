import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { auth } from '../firebase/firebase';
import { toast } from 'react-toastify';
const Login = () => {
  const [list, setList] = useState({
    email: "",
    password: ""
  });

  const handleForm = (event) => {
    const { name, value } = event.target;
    setList({ ...list, [name]: value });
  };
  const handlesubmit=async(event)=>{
    event.preventDefault();
    try{
        await signInWithEmailAndPassword(auth,list.email,list.password)
        console.log("user logged successfully")
        window.location.href="/profile"
        toast.success('user logged succesfully');

    }catch(error){
console.log(error);
    }

  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <Form onSubmit={handlesubmit}>
            <h3 className="text-center">Login Form</h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={list.email}
                onChange={handleForm}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={list.password}
                onChange={handleForm}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <p className="mt-3 text-center">
                  New user? <a href="/ragister">sign up</a>
                </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
