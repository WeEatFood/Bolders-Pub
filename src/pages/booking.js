import React, { useState, Fragment } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
// import Map from './info/Map';
import Layout from '../components/layout';
import SEO from '../components/seo';
import 'react-datepicker/dist/react-datepicker.css';
import '../scss/booking.scss';

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [modalShow, setModalShow] = useState(false);
  return (
    <Layout>
      <SEO title="Page two" />
      <div className="booking__container">
        <div className="booking__inner-container">
          <Fragment>
            <BookingForm />
          </Fragment>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <div>
            <Button
              variant="outline"
              className="booking__button"
              size="sm"
              onClick={() => setModalShow(true)}
            >
              Book Now
            </Button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      variant="outlined"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Thank You</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>You reservation has been sent</h4>
        <p>
          Thank you, for choosing Bolder's. We can not wait for you dine with us soon! Ask about our
          daily specials and do not forget happy hour from 4 to 6 Monday through Thursday.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function BookingForm() {
  return (
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
}
