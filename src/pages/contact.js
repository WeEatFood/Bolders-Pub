import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import Formik from '../components/contact/formik';
import ContactPage from '../components/contact/contact-page';
import '../scss/contact.scss';

const Contact = () => (
  <Layout>
    <SEO title="contact-page" />
    <ContactPage />
  </Layout>
);

export default Contact;
