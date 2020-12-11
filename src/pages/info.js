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
          <h1>Info</h1>
        </div>
        <img src="https://images.unsplash.com/photo-1578723786984-c5281f7322e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        <Hours />
        <img src={Spec} alt="nothing" />
        <Subscribe />
        <div className="info__map-container">
          <Map />
        </div>
      </div>
    </Layout>
  );
};

export default Info;
