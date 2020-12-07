import React from 'react';
import Title from '../globals/title';
import '../../scss/contact.scss';

const Formik = () => (
  <section className="contact py-5">
    <Title title="contact us" />
    <div className="row">
      <div className="col-10 col-sm-8 col-md-6 mx-auto">
        <form action="https://formspree.io/f/xdopwozq" method="POST">
          {/* name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="john smith"
            />
          </div>
          {/* name */}
          {/* email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="email@email.com"
            />
          </div>
          {/* email */}
          {/* description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              rows="5"
              placeholder="your description here....."
            />
          </div>
          {/* email */}
          <button type="submit" className="formik__btn    ">
            submit
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Formik;
