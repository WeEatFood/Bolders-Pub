import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Subscribe from '../components/contact/subscribe';
import Formik from '../components/contact/formik';
import '../scss/contact.scss';

const Contact = () => (
  <Layout>
    <SEO title="contact-page" />
    <div className="contact__container">
      <Formik />
    </div>
    <Subscribe />
  </Layout>
);

export default Contact;
