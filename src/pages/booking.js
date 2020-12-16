import React from 'react';
import { Image } from 'react-bootstrap';
import Layout from '../components/utils/layout';
import SEO from '../components/utils/seo';
import { Booking } from '../components/booking';
import '../components/booking/styles.scss';
import SpecialsImg from '../images/Nia-Sign-With-Weekly-Specials-1024x524.jpg';

export default () => (
  <Layout>
    <SEO title="Booking Page" />
    <Booking/>
  </Layout>
);

