import React from 'react';
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaTag,
  FaUserAlt,
} from 'react-icons/fa';

import '../../scss/contact.scss';

const MdContact = () => (
  <section className="section pb-5">
    <h2 className="section-heading h1 pt-4">Contact us</h2>
    <p className="section-description pb-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure
      provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur
      accusamus veniam.
    </p>
    <div className="row">
      <div className="col-lg-5 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="form-header blue accent-1">
              <h3>
                <FaRegEnvelope /> Write to us:
              </h3>
            </div>
            <p>We'll write rarely, but with only the best content.</p>
            <br />
            <div className="md-form">
              <FaUserAlt />
              <input type="text" id="form-name" className="form-control" />
              <label htmlFor="form-name">Your name</label>
            </div>
            <div className="md-form">
              <FaRegEnvelope />
              <input type="text" id="form-email" className="form-control" />
              <label htmlFor="form-email">Your email</label>
            </div>
            <div className="md-form">
              <FaTag />
              <input type="text" id="form-Subject" className="form-control" />
              <label htmlFor="form-Subject">Subject</label>
            </div>
            <div className="md-form">
              <FaPencilAlt />
              <textarea
                id="form-text"
                className="form-control md-textarea"
                rows={3}
                defaultValue={''}
              />
              <label htmlFor="form-text">Icon Prefix</label>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-light-blue">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div
          id="map-container-google-11"
          className="z-depth-1-half map-container-6"
          style={{ height: '400px' }}
        >
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=501%20pine%20street%20bolder%20co.+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
        <br />
        <div className="row text-center">
          <div className="col-md-4">
            <a className="btn-floating blue accent-1">
              <FaMapMarkerAlt />
            </a>
            <p>San Francisco, CA 94126</p>
            <p>United States</p>
          </div>
          <div className="col-md-4">
            <a className="btn-floating blue accent-1">
              <FaPhoneAlt />
            </a>
            <p>+ 01 234 567 89</p>
            <p>Mon - Fri, 8:00-22:00</p>
          </div>
          <div className="col-md-4">
            <a className="btn-floating blue accent-1">
              <FaRegEnvelope />
            </a>
            <p>info@gmail.com</p>
            <p>sale@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MdContact;
