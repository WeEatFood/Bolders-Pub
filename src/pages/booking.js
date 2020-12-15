import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Index from '../components/booking/index';
import '../scss/booking.scss';

const Contact = () => (
  <Layout>
    <SEO title="Booking Page" />
    <Index />
  </Layout>
);

export default Contact;
