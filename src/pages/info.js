import React from 'react';
import Map from '../components/info/map-box';
import Layout from '../components/layout';
import Hours from '../components/info/hours';
import Specials from '../components/info/specials';
import '../scss/info2.scss';
// import Subscribe from '../components/contact/subscribe';

const Info = () => {
  return (
    <Layout>
      <div className="info__main-container">
        <div className="info__top-container">
          <Hours />
          <Specials />
        </div>
        <div className="info__map-container">
          <Map />
        </div>
      </div>
    </Layout>
  );
};

export default Info;
