import React from 'react';
import { Layout, SEO, Contact } from '../components';
import '../components/contact/styles.scss';

export default () => (
  <Layout>
    <SEO title="contact-page" />
    <Contact />
  </Layout>
);
