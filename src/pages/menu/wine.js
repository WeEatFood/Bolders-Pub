import React from 'react';
import '../../scss/wine.scss';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';

const Wine = props => {
  return (
    <Layout>
      <div className="sub__container">
        <h4 className="wine__header">Wine</h4>
        <div className="mainColumn">
          <div className="columnOne">
            <h4 className="sub__list--header">SPARKLING</h4>
            <h5 className="wine-item__header">LOS MONTEROS</h5>
            <p className="wine-item__details--description">SPAIN</p>
            <p className="wine-item__details--price">6 PER GLASS</p>
            <p className="wine-item__details--price">21 PER BOTTLE</p>

            <h5 className="wine-item__header">VENTURI LAMBRUSCO ROSE</h5>
            <p className="wine-item__details--description">ITALY</p>
            <p className="wine-item__details--price">8 PER GLASS</p>
            <p className="wine-item__details--price">28 PER BOTTLE</p>

            <h5 className="wine-item__header">ZONIN</h5>
            <p className="wine-item__details--description">PROSECCO</p>
            <p className="wine-item__details--price">10 PER GLASS</p>
            <p className="wine-item__details--price">35 PER BOTTLE</p>

            <h5 className="wine-item__header">MUMM BRUT</h5>
            <p className="wine-item__details--description">SPARKLING ROSE</p>
            <p className="wine-item__details--price">50 PER BOTTLE</p>

            <h5 className="wine-item__header">POMMERY BRUT ROYAL CHAMPAGNE</h5>
            <p className="wine-item__details--description">FRANCE</p>
            <p className="wine-item__details--price">95 PER BOTTLE</p>

            <h5 className="wine-item__header">VEUVE CLICQUOT CHAMPAGNE</h5>
            <p className="wine-item__details--description">FRANCE</p>
            <p className="wine-item__details--price">113 PER BOTTLE</p>

            <h5 className="wine-item__header">DOM PERIGNON 2006 CHAMPAGNE</h5>
            <p className="wine-item__details--description">FRANCE</p>
            <p className="wine-item__details--price">200 PER BOTTLE</p>

            <h4 className="sub__list--header">WHITE</h4>
            <h5 className="wine-item__header">GIOCATO PINOT GRIGIO</h5>
            <p className="wine-item__details--description">CALIFORNIA</p>
            <p className="wine-item__details--price">7 PER GLASS</p>
            <p className="wine-item__details--price">24 PER BOTTLE</p>

            <h5 className="wine-item__header">BARONE FINI</h5>
            <p className="wine-item__details--description">PINOT GRIGIO</p>
            <p className="wine-item__details--price">8 PER GLASS</p>
            <p className="wine-item__details--price">28 PER BOTTLE</p>

            <h5 className="wine-item__header">BROADSIDE CHARDONNAY</h5>
            <p className="wine-item__details--description">WASHINGTON</p>
            <p className="wine-item__details--price">9 PER GLASS</p>
            <p className="wine-item__details--price">32 PER BOTTLE</p>

            <h5 className="wine-item__header">LA PETITE SAUVIGNON BLANC</h5>
            <p className="wine-item__details--description">FRANCE</p>
            <p className="wine-item__details--price">7 PER GLASS</p>
            <p className="wine-item__details--price">24 PER BOTTLE</p>

            <h5 className="wine-item__header">HUNKY DORY SAUVIGNON BLANC</h5>
            <p className="wine-item__details--description">NEW ZEALAND</p>
            <p className="wine-item__details--price">10 PER GLASS</p>
            <p className="wine-item__details--price">35 PER BOTTLE</p>

            <h5 className="wine-item__header">WILLAMETTE VALLEY RIESLING</h5>
            <p className="wine-item__details--description">OREGON</p>
            <p className="wine-item__details--price">9 PER GLASS</p>
            <p className="wine-item__details--price">32 PER BOTTLE</p>
          </div>

          <div className="columnTwo">
            <h4 className="sub__list--header">RED</h4>
            <h5 className="wine-item__header">SANTA RITA PINOT NOIR</h5>
            <p className="wine-item__details--description">CHILE</p>
            <p className="wine-item__details--price">7 PER GLASS</p>
            <p className="wine-item__details--price">24 PER BOTTLE</p>

            <h5 className="wine-item__header">PADRILLOS MALBEC</h5>
            <p className="wine-item__details--description">ARGENTINA</p>
            <p className="wine-item__details--price">8 PER GLASS</p>
            <p className="wine-item__details--price">28 PER BOTTLE</p>

            <h5 className="wine-item__header">JAMES MICHAEL CABERNET</h5>
            <p className="wine-item__details--description">CALIFORNIA</p>
            <p className="wine-item__details--price">9 PER GLASS</p>
            <p className="wine-item__details--price">28 PER BOTTLE</p>

            <h5 className="wine-item__header">MARQUES DE CACERES</h5>
            <p className="wine-item__details--description">SPAIN</p>
            <p className="wine-item__details--price">13 PER GLASS</p>
            <p className="wine-item__details--price">52 PER BOTTLE</p>

            <h5 className="wine-item__header">CASTELLO DI VOLPAIA</h5>
            <p className="wine-item__details--description">TUSCANY</p>
            <p className="wine-item__details--price">15 PER GLASS</p>
            <p className="wine-item__details--price">28 PER BOTTLE</p>

            <h5 className="wine-item__header">CATENA</h5>
            <p className="wine-item__details--description">ARGENTINA</p>
            <p className="wine-item__details--price">14 PER GLASS</p>
            <p className="wine-item__details--price">56 PER BOTTLE</p>

            <h5 className="wine-item__header">CHATEAU DE BEAUCASTEL</h5>
            <p className="wine-item__details--description">FRANCE</p>
            <p className="wine-item__details--price">160 PER BOTTLE</p>

            <h5 className="wine-item__header">HIGH HEAVEN VINTNERS</h5>
            <p className="wine-item__details--description">WASHINGTON</p>
            <p className="wine-item__details--price">14 PER GLASS</p>
            <p className="wine-item__details--price">52 PER BOTTLE</p>

            <h4 className="sub__list--header">ROSE</h4>
            <h5 className="wine-item__header">BIELER PERE ET FILS</h5>
            <p className="wine-item__details--description">FRANCE</p>
            <p className="wine-item__details--price">7 PER GLASS</p>
            <p className="wine-item__details--price">24 PER BOTTLE</p>

            <h5 className="wine-item__header">VENTURINI LAMBRUSCO ROSE</h5>
            <p className="wine-item__details--description">SPARKLING ROSE</p>
            <p className="wine-item__details--price">8 PER GLASS</p>
            <p className="wine-item__details--price">28 PER BOTTLE</p>

            <h5 className="wine-item__header">MASSERIA LI VELI</h5>
            <p className="wine-item__details--description">SALENTO</p>
            <p className="wine-item__details--price">14 PER GLASS</p>
            <p className="wine-item__details--price">45 PER BOTTLE</p>

            <h5 className="wine-item__header">DOLFO</h5>
            <p className="wine-item__details--description">SLOVENIA</p>
            <p className="wine-item__details--price">15 PER GLASS</p>
            <p className="wine-item__details--price">60 PER BOTTLE</p>

            <h5 className="wine-item__header">LA SPINETTA SANGIOVESE</h5>
            <p className="wine-item__details--description">TUSCANY</p>
            <p className="wine-item__details--price">13 PER GLASS</p>
            <p className="wine-item__details--price">60 PER BOTTLE</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Wine.propTypes = {};

export default Wine;
