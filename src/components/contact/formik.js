import React from 'react';
import '../../scss/contact.scss';

const Formik = () => (
  <section className="formik__section py-5">
    <title className="formik__title">
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="...Enter a name"
                id="email"
              />
            </div>
            {/* description */}
            <div className="formik__form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols=""
                rows="5"
                className="formik__text-description"
                placeholder="Your description here..."
              />
            </div>
            {/* submit */}
            <button type="submit" className="formik__btn btn btn-block text-capitalize mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </title>
  </section>
);

export default Formik;
