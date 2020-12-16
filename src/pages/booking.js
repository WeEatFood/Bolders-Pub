import React from 'react';
import { Image } from 'react-bootstrap';
import Layout from '../components/utils/layout';
import SEO from '../components/utils/seo';
import Index from '../components/booking/index';
import '../scss/booking.scss';
import SpecialsImg from '../images/Nia-Sign-With-Weekly-Specials-1024x524.jpg';

const Contact = () => (
  <Layout>
    <SEO title="Booking Page" />
    <Index />
  </Layout>
);

export default Contact;
