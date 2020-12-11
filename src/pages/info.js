import React from 'react';
import Map from '../components/info/map-box';
import Layout from '../components/layout';
import Hours from '../components/info/hours';
import Subscribe from '../components/contact/subscribe';
import '../scss/info2.scss';
import Spec from '../images/Nia-Sign-With-Weekly-Specials-1024x524.jpg';
// import Subscribe from '../components/contact/subscribe';

const Info = () => {
  return (
    <Layout>
      <div className="info__main-container">
        <div className="info__top-container">
          <h1 id="info__title">Info</h1>
        </div>
        <div className="info__bottom-container">
          <Hours />
          <img src={Spec} alt="nothing" id="info__img" />
        </div>
        <Subscribe />
        <div className="info__map-container">
          <Map />
        </div>
      </div>
    </Layout>
  );
};

export default Info;
