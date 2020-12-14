import React from 'react';
import { Button } from 'react-bootstrap';
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaTag,
  FaUserAlt,
} from 'react-icons/fa';
import '../../scss/contact.scss';

const Formik = () => (
  <section className="contact py-5">
    <h3 className="text-center">
      <FaRegEnvelope /> Write to us:
    </h3>
    <div className="row">
      <form action="https://formspree.io/f/xdopwozq" className="info__form" method="POST">
        <div className="form-group">
          <label htmlFor="name">
            <FaUserAlt className="mr-3" />
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="john smith"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <FaRegEnvelope className="mr-3" />
            Email
          </label>
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            placeholder="email@email.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="d-flex">
            <FaPencilAlt className="mr-3" />
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            rows="5"
            placeholder="your description here....."
          />
        </div>
        <Button type="submit" className="formik__btn" variant="">
          submit
        </Button>
      </form>
    </div>
  </section>
  // <p>We'll write rarely, but with only the best content.</p>
  // <br />
  // <div className="md-form">
  //   <FaUserAlt />
  //   <input type="text" id="form-name" className="form-control" />
  //   <label htmlFor="form-name">Your name</label>
  // </div>
  // <div className="md-form">
  //   <FaRegEnvelope />
  //   <input type="text" id="form-email" className="form-control" />
  //   <label htmlFor="form-email">Your email</label>
  // </div>
  // <div className="md-form">
  //   <FaTag />
  //   <input type="text" id="form-Subject" className="form-control" />
  //   <label htmlFor="form-Subject">Subject</label>
  // </div>
  // <div className="md-form">
  //   <FaPencilAlt />
  //   <textarea
  //     id="form-text"
  //     className="form-control md-textarea"
  //     rows={3}
  //     defaultValue={''}
  //   />
  //   <label htmlFor="form-text">Icon Prefix</label>
  // </div>
  // <div className="text-center mt-4">
  //   <button className="btn btn-light-blue">Submit</button>
);

export default Formik;
