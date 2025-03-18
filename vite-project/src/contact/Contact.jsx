
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

import { db } from '../firebase/firebase';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileno: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const { name, email, mobileno } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (!name || !email || !mobileno) {
      setError('Please fill in all the fields.');
      setLoading(false);
      return;
    }

    try {
       
      const contactsCollectionRef = collection(db, 'contacts');
      await addDoc(contactsCollectionRef, formData);

      setSuccess('Contact information submitted successfully!');
      setFormData({ name: '', email: '', mobileno: '' }); 
    } catch (error) {
      console.error('Error submitting contact information:', error);
      setError('Failed to submit contact information.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2>Contact Us</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}" 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="tel" 
            name="mobileno"
            value={mobileno}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            required
           
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;