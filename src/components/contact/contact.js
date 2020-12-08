import React from 'react';
import Title from '../globals/title';
import PropTypes from 'prop-types';

const Contact = props => {
  return (
    <section className="contact__section pb-5">
      <Title className="contact__section-heading h1 pt-4" title="Contact Us" />
    </section>
  );
};

Contact.propTypes = {};

export default Contact;
