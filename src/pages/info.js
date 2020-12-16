import React from 'react';
import Index from '../components/info/index';
import Layout from '../components/utils/layout';
import '../scss/info.scss';
import Spec from '../images/Nia-Sign-With-Weekly-Specials-1024x524.jpg';
// import Subscribe from '../components/contact/subscribe';

const Info = () => {
  return (
    <Layout>
      <div className="info__container">
        <Index />
      </div>
    </Layout>
  );
};

export default Info;
