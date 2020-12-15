import React from 'react';
import { Form } from 'react-bootstrap';
import '../../scss/booking.scss';

const BookingForm = () => (
  <Form>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
      <Form.Label>First Name</Form.Label>
      <Form.Control type="Name" placeholder="First Name" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>Example select</Form.Label>
      <Form.Control as="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
  </Form>
);

export default BookingForm;
