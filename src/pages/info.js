import React from 'react';
import Map from '../components/info/map-box';
import Layout from '../components/layout';
// import Subscribe from '../components/contact/subscribe';
import '../scss/info2.scss';

const Info = () => {
  return (
    <Layout>
      <Map />
      {/*<Subscribe className="info__sub-container" />*/}
    </Layout>
  );
};

export default Info;
