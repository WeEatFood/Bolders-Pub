import React from 'react';
import { Info } from '../components/info/';
import { Layout } from '../components/utils';
import '../components/info/styles.scss';

export default () => {
  return (
    <Layout>
      <div className="info__container">
        <Info />
      </div>
    </Layout>
  );
};

