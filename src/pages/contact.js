import React from 'react';
import Layout from '../components/layout';
import Subscribe from '../components/contact/subscribe';
import Formik from '../components/contact/formik';

function Contact() {
  return (
    <Layout>
      <div>contact</div>
      <br />
      <br />
      <Formik />
      <Subscribe />
    </Layout>
  );
}

export default Contact;
