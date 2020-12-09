import React from 'react';
import '../../scss/sub-menu.scss';
import '../../scss/kitchen.scss'
import PropTypes from 'prop-types';
import Layout from '../../components/layout';

const Kitchen = props => {
  return (
    <Layout>
      <div className="sub__container">
        <h4 className="kitchen__header">KITCHEN</h4>

        <div className="kitchen__column">
          <div className="kitchen__column--box">
            <div className="menu-item">
              <h4 className="menu-item__header">FIVE CHEESE BOARD</h4>
              <p className="menu-item__details--description">
                marinated olives, pickled vegetables, crostini, and assorted cheeses</p>
              <p className="menu-item__details--price">15</p>
            </div>

            <div className="menu-item">
              <h4 className="menu-item__header">KITCHEN MENU ITEM</h4>
              <p className="menu-item__details--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
              <p className="menu-item__details--price">7</p>


            </div>
          </div>

        </div>
        <div className="kitchen__column">
          <div className="kitchen__column--box">
            <div className="menu-item">
              <h4 className="menu-item__header">MEAT & CHEESE BOARD</h4>
              <p className="menu-item__details--description">
                cured Creminelli meats & featured cheeses, pickled vegetables, shallot relish, house mustard, & crostini
        </p>
              <p className="menu-item__details--price">24</p>
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
        </div>

      </div>
    </Layout>
  );
};

Kitchen.propTypes = {};

export default Kitchen;
