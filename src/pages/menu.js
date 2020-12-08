import React from 'react';
import { Router} from '@reach/router';
import { Link } from 'gatsby';
import { Button} from 'react-bootstrap';
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
      <Router>
        <Appetizers path="/menu/appetizers" component={Appetizers} />
        <Brewery path="/menu/brewery" component={Brewery} />
        <Cocktails path="/menu/cocktails" component={Cocktails} />
        <Dessert path="/menu/dessert" component={Dessert} />
        <Kitchen path="/menu/kitchen" component={Kitchen} />
        <Wine path="/menu/wine" component={Wine} />
      </Router>
    </div>
  </Layout>
);

export default Menu;
