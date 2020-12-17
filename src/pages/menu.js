import React from 'react';
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
