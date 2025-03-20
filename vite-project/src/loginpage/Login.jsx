import { signInWithEmailAndPassword, updatePassword, updateEmail,  EmailAuthProvider, reauthenticateWithCredential,sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { auth } from '../firebase/firebase';
import { toast } from 'react-toastify';

const Login = () => {
  const [list, setList] = useState({
    email: '',
    password: '',
  });
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [updateType, setUpdateType] = useState('password'); 

  const handleForm = (event) => {
    const { name, value } = event.target;
    setList({ ...list, [name]: value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, list.email, list.password);
      console.log('user logged successfully');
      window.location.href = '/profile';
      toast.success('user logged successfully');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleUpdate = async () => {
    try {
      if (auth.currentUser) {
        const credential = EmailAuthProvider.credential(
          auth.currentUser.email,
          list.password
        );
        await reauthenticateWithCredential(auth.currentUser, credential);

        if (updateType === 'password') {
          await updatePassword(auth.currentUser, newPassword);
          toast.success('Password updated successfully');
        } else if (updateType === 'email') {
          await updateEmail(auth.currentUser, newEmail);
          await sendEmailVerification(auth.currentUser);
          toast.success(
            'Email update requested. Please verify your new email address.'
          );
         
        }
        setShowUpdateModal(false);
        setNewPassword('');
        setNewEmail('');
      } else {
        toast.error('User not logged in');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  
  };

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
            <Button
              variant="link"
              onClick={() => {
                setShowUpdateModal(true);
                setUpdateType('password');
              }}
              className="mt-2"
            >
              Update Password
            </Button>
            <Button
              variant="link"
              onClick={() => {
                setShowUpdateModal(true);
                setUpdateType('email');
              }}
              className="mt-2"
            >
              Update Email
            </Button>
          </Form>
        </Col>
      </Row>

      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update {updateType === 'password' ? 'Password' : 'Email'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {updateType === 'password' ? (
            <Form.Group>
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>
          ) : (
            <Form.Group>
              <Form.Label>New Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter new email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Login;