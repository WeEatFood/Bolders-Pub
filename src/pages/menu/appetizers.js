import React from 'react';
import { Layout, MenuBar } from '../../components';

import PropTypes from 'prop-types';
import '../../scss/appetizer.scss';


const Appetizers = props => {
  return (
    <Layout>
      <MenuBar />
      <div className="sub__container">
        <h4 className="app__header">Appetizers</h4>

        <div className="app-item">
          <h4 className="app-item__header">CRACKLIN' BISCUITS</h4>
          <div className="app-item__details">
            <p className="app-item__details--description">
              Buttermilk biscuits, pork cracklin, smoked cream</p>
            <p className="app-item__details--price">8</p>
          </div>
        </div>

        <div className="app-item">
          <h4 className="app-item__header">CORNBREAD</h4>
          <div className="app-item__details">
            <p className="app-item__details--description">
              Yellow corn, honey, smoked sorghum butter</p>
            <p className="app-item__details--price">5</p>
          </div>
        </div>

        <div className="app-item">
          <h4 className="app-item__header">FRIED BRUSSELS</h4>
          <div className="app-item__details">
            <p className="app-item__details--description">
              Sprouts, pickled red onion, radish, soda-pop glaze</p>
            <p className="app-item__details--price">11</p>
          </div>
        </div>

        <div className="app-item">
          <h4 className="app-item__header">FRIED PICKLES</h4>
          <div className="app-item__details">
            <p className="app-item__details--description">
              Tempura kosher dills, spicy remoulade</p>
            <p className="app-item__details--price">7</p>
          </div>
        </div>

        <div className="app-item">
          <h4 className="app-item__header">SPICY ASIAN WINGS</h4>
          <div className="app-item__details">
            <p className="app-item__details--description">
              Chinese five spice hoisin glaze, gorgonzola dressing
          </p>
            <p className="app-item__details--price">12</p>
          </div>
        </div>

        <div className="app-item">
          <h4 className="app-item__header">HAZELNUT DUSTED CALAMARI</h4>
          <div className="app-item__details">
            <p className="app-item__details--description">
              Chipotle aioli, bloody mary cocktail sauce
          </p>
            <p className="app-item__details--price">12</p>
          </div>
        </div>

        <div className="app-item">
          <h4 className="app-item__header">PARMESAN TRUFFLE FRIES</h4>
          <div className="app-item__details">
            <p className="app-item__details--description">
              Shoestring potatoes, pecorino, white truffle oil and house smoked tomato ketchup
          </p>
            <p className="app-item__details--price">12</p>
          </div>
        </div>

        <div className="app-item">
          <h4 className="app-item__header">PORK BELLY LETTUCE WRAPS</h4>
          <div className="app-item__details">
            <p className="app-item__details--description">
              Braised pork belly, bourbon-soy glaze, peanuts kimchi
          </p>
            <p className="app-item__details--price">14</p>
          </div>
        </div>




      </div>
    </Layout>
  );
};

Appetizers.propTypes = {};

export default Appetizers;
