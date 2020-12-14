import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import Formik from '../components/contact/formik';
import MdContact from '../components/contact/mdcontact';
import '../scss/contact.scss';

const Contact = () => (
  <Layout>
    <SEO title="contact-page" />
    <div className="contact__container">
      <MdContact />
    </div>
  </Layout>
);

export default Contact;
