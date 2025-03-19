import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { auth,db } from '../firebase/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Ragister = () => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { firstname, lastname, email, password } = data;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        await setDoc(doc(db, 'Users', user.uid), {
        
          firstname: firstname,
          lastname: lastname,
          email: user.email,
        });
      }
      console.log('User registered successfully');
      setData({ firstname: '', lastname: '', email: '', password: '' });
      setLoading(false);
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error.message);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="6">
          <Form onSubmit={handleRegister}>
            <h1 className="text-center mb-4">Signup Form</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                placeholder="Enter first name"
                value={firstname}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Enter last name"
                value={lastname}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </Button>
            <p className="text-center mt-3">
              Already registered? <a href="/login">Login here</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Ragister;