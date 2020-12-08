import React from 'react';
import Map from '../components/info/map-box';
import Hours from '../components/info/hours';
import Layout from '../components/layout';
import Subscribe from '../components/contact/subscribe';
import '../scss/info.scss';

function Info() {
  return (
    <Layout>
      <div className="info__container">
        <Map />
        <Hours />
        <Subscribe />
      </div>
    </Layout>
  );
}

export default Info;
