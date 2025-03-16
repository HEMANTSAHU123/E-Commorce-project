import React, {useState, useEffect } from 'react';
import { Form, Button, Container,Alert } from 'react-bootstrap';
import axios from 'axios'
const Contact = () => {
  const[list,setList]=useState([])
  const [message, setMessage] = useState('');
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('contactList')) || [];
    setList(storedData);
  }, []);
  const handleFormSubmit=async(event)=>{
    event.preventDefault();
    const form=new FormData(event.target);
const name=form.get('name');
const email=form.get('email');
const mobileno=form.get('mobileno');
const contactlist={
  name,email,mobileno
};
try {

  const response = await axios.post(
    'https://crudcrud.com/api/428dcc2d8a7f4ddebfc25cecbf117270', 
    contactlist,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

 
  setMessage('Contact saved successfully!');


  const updatedList = [...list, contactlist];
  setList(updatedList);
  localStorage.setItem('contactList', JSON.stringify(updatedList));


  event.target.reset();
} catch (error) {

  setMessage('Error saving contact. Please try again.');
  console.error(error);
}
};

  return (
    <Container className="mt-5">
       {message && <Alert variant={message.includes('Error') ? 'danger' : 'success'}>{message}</Alert>}
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group controlId="formMobile" className="mb-3">
          <Form.Label>Mobile No.</Form.Label>
          <Form.Control type="number" name="mobileno" placeholder="Enter your mobile number" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;