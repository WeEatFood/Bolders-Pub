import React from 'react';
import '../../scss/sub-menu.scss';
import '../../scss/kitchen.scss'
import PropTypes from 'prop-types';
import Layout from '../../components/layout';

const Kitchen = props => {
  return (
    <Layout>

      <h4 className="kitchen__header">KITCHEN</h4>

      <div className="mainColumn">
        <div className="columnOne">

          <div className="kitchen__column--box">

            <div className="menu-item">
              <h4 className="kitchen-item__header">FIVE CHEESE BOARD</h4>
              <section className="kitchen-item_details">
                <span className="kitchen-item__details--description">
                  marinated olives, pickled vegetables, crostini, and assorted cheeses</span>
                <span className="kitchen-item__details--price">15</span>

              </section>
            </div>

            <div className="menu-item">
              <h4 className="kitchen-item__header">BRICK CHICKEN</h4>
              <p className="kitchen-item__details--description">
                pan-roasted crispy airline chicken breast with olive & apricot pan sauce, roasted carrots, & basmati rice</p>
              <p className="kitchen-item__details--price">17</p>
            </div>

            <div className="menu-item">
              <h4 className="kitchen-item__header">BTG STEAK</h4>
              <p className="kitchen-item__details--description">
                10 oz. grilled New York Steak wild mushroom Bordelaise</p>
              <p className="kitchen-item__details--price">24</p>
            </div>

            <div className="menu-item">
              <h4 className="kitchen-item__header">ROSEMARY LAMBCHOPS</h4>
              <p className="kitchen-item__details--description">
                Roasted fingerlings, creamed spinach, charred rosemary demi, mint pesto</p>
              <p className="kitchen-item__details--price">26</p>
            </div>

            <div className="menu-item">
              <h4 className="kitchen-item__header">GRILLED VEGETABLE NEOPOLITAN</h4>
              <p className="kitchen-item__details--description">
                Portobello mushroom, grilled asparagus, bourbon caramelized onions, zucchini, yellow squash, fresh mozzarella, roasted garlic smashed, balsamic reduction</p>
              <p className="kitchen-item__details--price">18</p>
            </div>

            <div className="menu-item">
              <h4 className="kitchen-item__header">CAJUN SHRIMP PASTA</h4>
              <p className="kitchen-item__details--description">
                House fettuccini, shrimp, Tasso ham, andouille, peppers, red onion, basil, pecorino, creole cream</p>
              <p className="kitchen-item__details--price">18</p>
            </div>


          </div>
        </div>
        <div className="columnTwo">
          <div className="kitchen__column">
            <div className="kitchen__column--box">

              <div className="menu-item">
                <h4 className="kitchen-item__header">MEAT & CHEESE BOARD</h4>
                <p className="kitchen-item__details--description">
                  cured Creminelli meats & featured cheeses, pickled vegetables, shallot relish, house mustard, & crostini</p>
                <p className="kitchen-item__details--price">24</p>
              </div>

              <div className="menu-item">
                <h4 className="kitchen-item__header">HONEY BOURBON CHICKEN</h4>
                <p className="kitchen-item__details--description">
                  Half chicken, honey bourbon mustard sauce, smashed Yukon gold, roasted root vegetable</p>
                <p className="kitchen-item__details--price">22</p>
              </div>

              <div className="menu-item">
                <h4 className="kitchen-item__header">SEARED HALIBUT</h4>
                <p className="kitchen-item__details--description">
                  Pesto-bacon smashed, butter braised leeks, tomato confit, Tasso ham jus</p>
                <p className="kitchen-item__details--price">23</p>
              </div>

              <div className="menu-item">
                <h4 className="kitchen-item__header">KENTUCKY BOURBON SALMON</h4>
                <p className="kitchen-item__details--description">
                  Kentucky bourbon soy glaze, warm wasabi-bacon potato salad, green beans</p>
                <p className="kitchen-item__details--price">24</p>
              </div>

              <div className="menu-item">
                <h4 className="kitchen-item__header">SMOKED BRISKET GNOCCHI</h4>
                <p className="kitchen-item__details--description">
                  House smoked brisket, ricotta gnocchi, wild mushrooms, cognac cream</p>
                <p className="kitchen-item__details--price">22</p>
              </div>

              <div className="menu-item">
                <h4 className="kitchen-item__header">NEW YORK STEAK AU POIVRE</h4>
                <p className="kitchen-item__details--description">
                  Black truffle smashed Yukon golds, roasted brussel sprouts, bacon, cabernet demi</p>
                <p className="kitchen-item__details--price">32</p>
              </div>



            </div>

          </div>

        </div>



      </div>
    </Layout>

  );
};

Kitchen.propTypes = {};

export default Kitchen;
