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
import { Layout } from '../components/utils';
import Layout from '../components/layout';
import MenuBar from '../components/globals/MenuBar';
import '../scss/menu.scss';

const Menu = () => (
  <Layout>
    <div className="menu__container">
      <h1 className="menu__header">Menus</h1>
      <p className="menu__header--view">Select a menu to view</p>
      <MenuBar />
    </div>
  </Layout>
);

export default Menu;
