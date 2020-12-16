import React from 'react';
import Layout from '../components/utils/layout';
import SEO from '../components/utils/seo';
import {Home} from '../components/home'
import '../components/booking/styles.scss';

export default () => (
  <Layout>
    <SEO title="Booking Page" />
    <Home />
  </Layout>
);

