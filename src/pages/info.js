import React from 'react';
import Map from '../components/info/map';
import Layout from '../components/layout';
import Hours from '../components/info/hours';
import Subscribe from '../components/contact/subscribe';
import '../scss/info.scss';
import Spec from '../images/Nia-Sign-With-Weekly-Specials-1024x524.jpg';
// import Subscribe from '../components/contact/subscribe';

const Info = () => {
  return (
    <Layout>
      <div className="info__container">
        <Map />
      </div>
    </Layout>
  );
};

export default Info;
