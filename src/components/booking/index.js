import React from 'react';
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Jumbotron, Container, Image } from 'react-bootstrap';
import BookingMain from './booking-main';
import Burger from './burger';
import Title from '../globals/Title';
import SpecialsImg from '../../images/Nia-Sign-With-Weekly-Specials-1024x524.jpg';
import '../../../dist/bootstrap.min.css';
import '../../scss/booking.scss';

const Index = () => (
  <section className="section pb-5">
    <Jumbotron className="info__jumbo" fluid>
      <Container className="info__container">
        <Title title="booking" />
        <figure className="figure text-start ml-5 mt-2">
          <p className="info__subtitle lead">
            Come make your reservation here with us! Can't wait to have you!
          </p>
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
      <div className="col-lg-7 d-flex justify-content-center ">
        <Burger />
      </div>
      <div className="col-lg-5 mb-4">
        <div className="card">
          <div className="card-body">
            <BookingMain />
          </div>
        </div>
      </div>
      <div className="booking__iCard col-lg-2 d-flex justify-content-center">
        <Image src={SpecialsImg} alt="specials" fluid className="booking__specials" />
      </div>
    </div>
  </section>
);

export default Index;
