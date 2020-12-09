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
        <Hours className="info__hours-container" />
        <Map className="info__map-container" />
        {/*<Subscribe className="info__sub-container" />*/}
      </div>
    </Layout>
  );
}

export default Info;
