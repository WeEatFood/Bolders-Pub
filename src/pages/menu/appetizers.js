import React from 'react';
import Layout from '../../components/Layout'
import '../../scss/sub-menu.scss'
import PropTypes from 'prop-types';

const Appetizers = props => {
  return (
    <Layout>
    <div className="sub__container">
      <h4 className="sub__header">Appetizers</h4>
      <div className="menu-item">
        <h4 className="menu-item__header">CRACKLIN' BISCUITS</h4>
        <p className="menu-item__details--description">Buttermilk biscuits, pork cracklin, smoked cream</p>
        <p className="menu-item__details--price">8</p>
      </div>
      <div className="menu-item">
        <h4 className="menu-item__header">CORNBREAD</h4>
        <p className="menu-item__details--description">Yellow corn, honey, smoked sorghum butter</p>
        <p className="menu-item__details--price">5</p>
      </div>
      <div className="menu-item">
        <h4 className="menu-item__header">FRIED BRUSSELS</h4>
        <p className="menu-item__details--description">Sprouts, pickled red onion, radish, soda-pop glaze</p>
        <p className="menu-item__details--price">11</p>
      </div>
      <div className="logo__container">
        {/* <img src={Logo} alt="logo" className="logo"/> */}
      </div>
    </div>
    </Layout>
  );
};

Appetizers.propTypes = {
  
};

export default Appetizers;
