import React from 'react';
import { Layout, SEO, Booking } from '../components';
import '../components/booking/styles.scss';

export default () => (
  <Layout>
    <SEO title="Booking Page" />
    <Booking />
  </Layout>
);
