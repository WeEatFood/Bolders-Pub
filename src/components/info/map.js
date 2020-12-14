import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaTag,
  FaUserAlt,
} from 'react-icons/fa';
import Hours from './hours';
import '../../scss/contact.scss';

const MdContact = () => (
  <section className="section pb-5">
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention
        to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
    <p className="section-description pb-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure
      provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur
      accusamus veniam.
    </p>
    <div className="row">
      <div className="col-lg-5 mb-4">
        <div className="card">
          <div className="card-body">
            <Hours />
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
