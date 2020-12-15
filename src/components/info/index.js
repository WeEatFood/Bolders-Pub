import React from 'react';
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Jumbotron, Container } from 'react-bootstrap';
import { Clock } from 'react-feather';
import '../../scss/info.scss';
import Title from '../globals/title';
import Hours from './hours';

const Map = () => (
  <section className="section pb-5">
    <Jumbotron className="info__jumbo" fluid>
      <Container className="info__container">
        <Title title="information" />
        <figure className="figure text-start ml-5 mt-2">
          <p className="info__subtitle lead">Here is a little more info about us.</p>
        </figure>
      </Container>
    </Jumbotron>
    <p className="section-description pb-4 text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure
      provident voluptate esse quasi, <br />
      veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.
      <br />
    </p>
    <div className="row">
      <div className="col-lg-5 mb-4">
        <div className="card">
          <div className="card-body text-center">
            <Hours />
          </div>
        </div>
      </div>
      <div className="col-lg-7 ">
        <div
          id="map-container-google-11"
          className="z-depth-1-half map-container-6 mx-2"
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
            <p>Boulder, CO 84126</p>
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

export default Map;
