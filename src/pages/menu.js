import React from 'react';
import { Router } from '@reach/router';
import { Link as MyLink } from 'gatsby';
import { Button } from 'react-bootstrap';
import Appetizers from './menu/appetizers';
import Brewery from './menu/brewery';
import Cocktails from './menu/cocktails';
import Dessert from './menu/dessert';
import Kitchen from './menu/kitchen';
import Wine from './menu/wine';
import Layout from '../components/utils/layout';
import '../scss/menu.scss';

const Menu = props => (
  // <Layout>
  <div className="menu__container">
    <h1 className="menu__header">Menus</h1>
    <p className="menu__header--view">Select a menu to view</p>
    <nav className="menu">
      <MyLink to="appetizers">
        <Button className="menu__btn" variant="" size="sm">
          Appetizers
        </Button>
      </MyLink>
      <MyLink to="/menu/kitchen">
        <Button className="menu__btn" variant="" size="sm">
          Kitchen
        </Button>
      </MyLink>
      <MyLink to="/menu/dessert">
        <Button className="menu__btn" variant="" size="sm">
          Dessert
        </Button>
      </MyLink>
      <MyLink to="/menu/cocktails">
        <Button className="menu__btn" variant="" size="sm">
          Cocktails
        </Button>
      </MyLink>
      <MyLink to="/menu/brewery">
        <Button className="menu__btn" variant="" size="sm">
          Brewery
        </Button>
      </MyLink>
      <MyLink to="/menu/wine">
        <Button className="menu__btn" variant="" size="sm">
          Wine
        </Button>
      </MyLink>
    </nav>
    <Router>
      <Appetizers path="menu/:appetizers" />
      <Brewery path="/menu/brewery" />
      <Cocktails path="/menu/cocktails" />
      <Dessert path="/menu/dessert" />
      <Kitchen path="/menu/kitchen" />
      <Wine path="/menu/wine" />
    </Router>
    {/*</Layout>*/}
  </div>
);

export default Menu;
