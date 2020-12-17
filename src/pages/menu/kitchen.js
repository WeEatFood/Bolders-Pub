import React from 'react';
import '../../scss/kitchen.scss'
import PropTypes from 'prop-types';
import {Layout, MenuBar} from '../../components'

const Kitchen = props => {
  return (
    <Layout>
      <MenuBar/>
      <h4 className="kitchen__header">Kitchen</h4>
      <div className="mainColumn">

        <div className="columnOne">
          <div className="kitchen-item">
            <h4 className="kitchen-item__header">FIVE CHEESE BOARD</h4>
            <section className="kitchen-item__details">
              <span className="kitchen-item__details--description">
                marinated olives, pickled vegetables, crostini, and assorted cheeses</span>
              <span className="kitchen-item__details--price">15</span>
            </section>
          </div>

          <div className="kitchen-item">
            <h4 className="kitchen-item__header">BRICK CHICKEN</h4>
            <section className="kitchen-item__details">
              <span className="kitchen-item__details--description">
                pan-roasted crispy airline chicken breast with olive & apricot pan sauce, roasted carrots, & basmati rice</span>
              <span className="kitchen-item__details--price">17</span>
            </section>
          </div>

          <div className="kitchen-item">
            <h4 className="kitchen-item__header">BTG STEAK</h4>
            <section className="kitchen-item__details">
              <span className="kitchen-item__details--description">
                10 oz. grilled New York Steak wild mushroom Bordelaise</span>
              <span className="kitchen-item__details--price">24</span>
            </section>
          </div>

          <div className="kitchen-item">
            <h4 className="kitchen-item__header">ROSEMARY LAMBCHOPS</h4>
            <section className="kitchen-item__details">
              <span className="kitchen-item__details--description">
                roasted fingerlings, creamed spinach, charred rosemary demi, mint pesto</span>
              <span className="kitchen-item__details--price">26</span>
            </section>
          </div>

          <div className="kitchen-item">
            <h4 className="kitchen-item__header">GRILLED VEGETABLE NEOPOLITAN</h4>
            <section className="kitchen-item__details">
              <span className="kitchen-item__details--description">
                portobello mushroom, grilled asparagus, bourbon caramelized onions, zucchini, yellow squash, fresh mozzarella, roasted garlic smashed, balsamic reduction</span>
              <span className="kitchen-item__details--price">18</span>
            </section>
          </div>

          <div className="kitchen-item">
            <h4 className="kitchen-item__header">CAJUN SHRIMP PASTA</h4>
            <section className="kitchen-item__details">
              <span className="kitchen-item__details--description">
                house fettuccini, shrimp, Tasso ham, andouille, peppers, red onion, basil, pecorino, creole cream</span>
              <span className="kitchen-item__details--price">18</span>
            </section>
          </div>
        </div>



        <div className="columnTwo">
          <div className="kitchen__column">

            <div className="kitchen-item">
              <h4 className="kitchen-item__header">MEAT & CHEESE BOARD</h4>
              <section className="kitchen-item__details">
                <span className="kitchen-item__details--description">
                  cured Creminelli meats & featured cheeses, pickled vegetables, shallot relish, house mustard, & crostini</span>
                <span className="kitchen-item__details--price">24</span>
              </section>
            </div>

            <div className="kitchen-item">
              <h4 className="kitchen-item__header">HONEY BOURBON CHICKEN</h4>
              <section className="kitchen-item__details">
                <span className="kitchen-item__details--description">
                  half chicken, honey bourbon mustard sauce, smashed Yukon gold, roasted root vegetable</span>
                <span className="kitchen-item__details--price">22</span>
              </section>
            </div>

            <div className="kitchen-item">
              <h4 className="kitchen-item__header">SEARED HALIBUT</h4>
              <section className="kitchen-item__details">
                <span className="kitchen-item__details--description">
                  pesto-bacon smashed, butter braised leeks, tomato confit, Tasso ham jus</span>
                <span className="kitchen-item__details--price">23</span>
              </section>
            </div>

            <div className="kitchen-item">
              <h4 className="kitchen-item__header">KENTUCKY BOURBON SALMON</h4>
              <section className="kitchen-item__details">
                <span className="kitchen-item__details--description">
                  kentucky bourbon soy glaze, warm wasabi-bacon potato salad, green beans</span>
                <span className="kitchen-item__details--price">24</span>
              </section>
            </div>

            <div className="kitchen-item">
              <h4 className="kitchen-item__header">SMOKED BRISKET GNOCCHI</h4>
              <section className="kitchen-item__details">
                <span className="kitchen-item__details--description">
                  house smoked brisket, ricotta gnocchi, wild mushrooms, cognac cream</span>
                <span className="kitchen-item__details--price">22</span>
              </section>
            </div>

            <div className="kitchen-item">
              <h4 className="kitchen-item__header">NEW YORK STEAK AU POIVRE</h4>
              <section className="kitchen-item__details">
                <span className="kitchen-item__details--description">
                  black truffle smashed Yukon golds, roasted brussel sprouts, bacon, cabernet demi</span>
                <span className="kitchen-item__details--price">32</span>
              </section>
            </div>

          </div>
        </div>
      </div>
    </Layout>

  );
};

Kitchen.propTypes = {};

export default Kitchen;
