import React from 'react';
import '../../scss/dessert.scss';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';

const Dessert = props => {
  return (
    <Layout>
      <h4 className="dessert__header">Dessert</h4>

      <div className="dessert-item">
        <h4 className="dessert-item__header">DARK CHOCOLATE CAKE</h4>
        <section className="dessert-item__details">
          <p className="dessert-item__details--description">
            Decadent dark chocolate cake baked with a touch of cinnamon</p>
          <p className="dessert-item__details--price">8</p>
        </section>
      </div>

      <div className="dessert-item">
        <h4 className="dessert-item__header">CHEESECAKE</h4>
        <section className="dessert-item__details">
          <p className="dessert-item__details--description">
            Traditional New York style cheesecake with berry sauce</p>
          <p className="dessert-item__details--price">6</p>
        </section>
      </div>

      <div className="dessert-item">
        <h4 className="dessert-item__header">CARAMEL BREAD PUDDING</h4>
        <section className="dessert-item__details">
          <p className="dessert-item__details--description">
            House-made seasonal bread pudding with caramel sauce</p>
          <p className="dessert-item__details--price">6</p>
        </section>
      </div>

      <div className="dessert-item">
        <h4 className="dessert-item__header">TIRAMISU</h4>
        <section className="dessert-item__details">
          <p className="dessert-item__details--description">
            Lady fingers flavored with espresso, layered with sweetened Italian cream cheese</p>
          <p className="dessert-item__details--price">8</p>
        </section>
      </div>

      <div className="dessert-item">
        <h4 className="dessert-item__header">CHOCOLATE HAZELNUT MOUSSE CAKE</h4>
        <section className="dessert-item__details">
          <p className="dessert-item__details--description">
            Chocolate hazelnut mousse layered between a shortbread crust and dark chocolate ganache
          topping</p>
          <p className="dessert-item__details--price">8</p>
        </section>
      </div>

      <div className="dessert-item">
        <h4 className="dessert-item__header">CREME BRULEE</h4>
        <section className="dessert-item__details">
          <p className="dessert-item__details--description">
            Traditional creamy vanilla bean custard with a caramelized sugar topping</p>
          <p className="dessert-item__details--price">11</p>
        </section>
      </div>

      <div className="dessert-item">
        <h4 className="dessert-item__header">GELATO & SORBET</h4>
        <section className="dessert-item__details">
          <p className="dessert-item__details--description">Ask your server for today's selections</p>
          <p className="dessert-item__details--price">7</p>
        </section>
      </div>

    </Layout>
  );
};

Dessert.propTypes = {};

export default Dessert;
