import React from 'react';
import { Router } from '@reach/router';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';
import Appetizers from './menu/appetizers';
import Brewery from './menu/brewery';
import Cocktails from './menu/cocktails';
import Dessert from './menu/dessert';
import Kitchen from './menu/kitchen';
import Wine from './menu/wine';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../scss/menu.scss';

const Menu = () => (
  <Layout>
    <SEO title="menu" />
    <div className="menu__container">
      <h1 className="menu__header">Menus</h1>
      <p className="menu__header--view">Select a menu to view</p>
      <div className="menu">
        <Link to="/menu/appetizers">
          <Button className="menu__btn" variant="" size="sm">
            Appetizers
          </Button>
        </Link>
        <Link to="/menu/kitchen">
          <Button className="menu__btn" variant="" size="sm">
            Kitchen
          </Button>
        </Link>
        <Link to="/menu/dessert">
          <Button className="menu__btn" variant="" size="sm">
            Dessert
          </Button>
        </Link>
        <Link to="/menu/cocktails">
          <Button className="menu__btn" variant="" size="sm">
            Cocktails
          </Button>
        </Link>
        <Link to="/menu/brewery">
          <Button className="menu__btn" variant="" size="sm">
            Brewery
          </Button>
        </Link>
        <Link to="/menu/wine">
          <Button className="menu__btn" variant="" size="sm">
            Wine
          </Button>
        </Link>
        <div className="menu__items">
          <Router basepath="/menu">
            <Appetizers path="/appetizers" component={Appetizers} />
            <Brewery path="/brewery" component={Brewery} />
            <Cocktails path="/cocktails" component={Cocktails} />
            <Dessert path="/dessert" component={Dessert} />
            <Kitchen path="/kitchen" component={Kitchen} />
            <Wine path="/wine" component={Wine} />
          </Router>
        </div>
      </div>
    </div>
  </Layout>
);

export default Menu;
