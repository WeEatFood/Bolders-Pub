import React from 'react';
import Layout from '../components/utils/layout';
import SEO from '../components/utils/seo';
// import ContactForm from '../components/contact/formik';
import ContactPage from '../components/contact/Contact';
import '../components/contact/styles.scss';

const Contact = () => (
  <Layout>
    <SEO title="contact-page" />
    <ContactPage />
  </Layout>
);

export default Contact;
