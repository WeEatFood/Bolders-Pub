import React from 'react';
import { Button } from 'react-bootstrap';
import { FaRegEnvelope, FaPencilAlt, FaUserAlt } from 'react-icons/fa';
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
);

export default Formik;
