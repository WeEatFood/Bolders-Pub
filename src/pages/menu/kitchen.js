import React from 'react';
import '../../scss/sub-menu.scss';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';

const Kitchen = props => {
  return (
    <Layout>
    <div className="sub__container">
      <h4 className="sub__header">KITCHEN</h4>
      <div className="menu-item">
        <h4 className="menu-item__header">KITCHEN MENU ITEM</h4>
        <p className="menu-item__details--description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p className="menu-item__details--price">7</p>
      </div>
      <div className="menu-item">
        <h4 className="menu-item__header">KITCHEN MENU ITEM</h4>
        <p className="menu-item__details--description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p className="menu-item__details--price">7</p>
      </div>
      <div className="menu-item">
        <h4 className="menu-item__header">KITCHEN MENU ITEM</h4>
        <p className="menu-item__details--description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p className="menu-item__details--price">7</p>
      </div>
      <div className="menu-item">
        <h4 className="menu-item__header">KITCHEN MENU ITEM</h4>
        <p className="menu-item__details--description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p className="menu-item__details--price">7</p>
      </div>
    </div>
    </Layout>
  );
};

Kitchen.propTypes = {};

export default Kitchen;
