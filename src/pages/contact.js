import React from 'react';
import Layout from '../components/layout';
<<<<<<< HEAD
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
=======
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
>>>>>>> 20e8c06d1ae7779422e6b792ba22889b1da91cb4

export default Contact;
