import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import BookingForm from './booking-form';
import MyVerticallyCenteredModal from './modal';
import 'react-datepicker/dist/react-datepicker.css';
import '../../scss/booking.scss';

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="booking__container">
      <h3>Make a Reservation</h3>
      <div className="booking__inner-container">
        <BookingForm />
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
  );
};

export default Booking;
