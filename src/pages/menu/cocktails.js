import React from 'react';
import '../../scss/cocktails.scss'
import PropTypes from 'prop-types';
import Layout from '../../components/utils/layout';

const Cocktails = props => {
  return (
    <Layout>
      <div className="sub__container">
        <h4 className="cocktail__header">Cocktails</h4>
        <div className="cocktail__container">

          <div className="columnOne">
            <h4 className="sub__header">Classics</h4>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">OLD FASHIONED</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">Bourbon whiskey, citrus, bitters</p>
                <p className="cocktail-item__details--price">10</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">MANHATTAN</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">Rye whiskey, sweet vermouth, bitters</p>
                <p className="cocktail-item__details--price">8</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">WHISKEY SOUR</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">Bourbon, egg white, citrus, sugar</p>
                <p className="cocktail-item__details--price">10</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">NEGRONI</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">Gin, vermouth, campari, orange</p>
                <p className="cocktail-item__details--price">11</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">MARGARITA</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">Tequila blanco, lime juice, simple syrup</p>
                <p className="cocktail-item__details--price">8</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">SIDECAR</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">Brandy, triple sec, lemon juice</p>
                <p className="cocktail-item__details--price">8</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">BOULEVARDIER</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">Bourbon, campari, sweet vermouth</p>
                <p className="cocktail-item__details--price">8</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">GIN AND TONIC</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">Tanqueray gin, tonic water</p>
                <p className="cocktail-item__details--price">8</p>
              </section>
            </div>
          </div>

          <div className="columnTwo">
            <h4 className="sub__header">Specialties</h4>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">BOURBON FRUIT TEA PUNCH</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">
                  Orange juice, pineapple juice, lemon juice, loose tea, bourbon</p>
                <p className="cocktail-item__details--price">12</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">CITRUS SHANDY</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">
                  Campari, orange juice, lime juice, alepp-style pepper, light beer</p>
                <p className="cocktail-item__details--price">12</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">APPLEJACK SOUR </h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">
                  Laird's applejack, lemon juice, orange juice, maple syrup, angostura bitters, hint of
                nutmeg</p>
                <p className="cocktail-item__details--price">14</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">BASIL BELLINI</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">Vodka, peach schnapps, basil, lemon</p>
                <p className="cocktail-item__details--price">12</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">MAKER'S MULE</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">
                  Maker's mark, bourbon, lime juice, ginger beer</p>
                <p className="cocktail-item__details--price">11</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">FROZEN PINA COLADA</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">Rum, myers dark rum, coconut flakes</p>
                <p className="cocktail-item__details--price">10</p>
              </section>
            </div>

            <div className="cocktail-item">
              <h4 className="cocktail-item__header">ST. GERMAIN</h4>
              <section className="cocktail-item__details">
                <p className="cocktail-item__details--description">
                  Vodka, st.germain, lemon, lime, grapefruit</p>
                <p className="cocktail-item__details--price">15</p>
              </section>
            </div>

          </div>


        </div>
      </div>
    </Layout>
  );
};

Cocktails.propTypes = {};

export default Cocktails;
