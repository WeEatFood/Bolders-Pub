import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './styles.scss';

const MyVerticallyCenteredModal = props => (
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

export default MyVerticallyCenteredModal;
