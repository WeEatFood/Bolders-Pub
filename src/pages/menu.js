import React from 'react';
import { Router as MyRouter, Switch } from '@reach/router';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';
import Appetizers from './menu/appetizers';
import Brewery from './menu/brewery';
import Cocktails from './menu/cocktails';
import Dessert from './menu/dessert';
import Kitchen from './menu/kitchen';
import Wine from './menu/wine';
import Layout from '../components/layout';
import '../scss/menu.scss';

const Menu = () => (
  <Layout>
    <div className="menu__container">
      <h1 className="menu__header">Menus</h1>
      <p className="menu__header--view">Select a menu to view</p>
      <nav className="menu">
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
      </nav>
      <MyRouter>
        <Appetizers path="/menu/appetizers" />
        <Brewery path="/menu/brewery" />
        <Cocktails path="/menu/cocktails" />
        <Dessert path="/menu/dessert" />
        <Kitchen path="/menu/kitchen" />
        <Wine path="/menu/wine" />
      </MyRouter>
    </div>
  </Layout>
);

export default Menu;
