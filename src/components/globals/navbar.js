import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'gatsby';
import Logo from '../../images/bolderlogo.png';
import '../../scss/navbar.scss';

const NavBar = () => (
  <header className="container__navbar">
    <Link to="/">
      <img src={ Logo } alt="logo" className="logo"/>
    </Link>
    <Navbar className="navbar" collapseOnSelect expand="md" variant="light">
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto navbar__nav">
          <Link className to="/booking">
            <li className="navbar__link">BOOK A TABLE</li>
          </Link>
          <Link to="/online-menu">
            <li className="navbar__link">ORDER ONLINE</li>
          </Link>
          <NavDropdown title="menu" id="dropdown" className="navbar__link">
            <NavDropdown.Item className="nav-drop__link" href="#menu/3.1">
              Appetizers
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-drop__link" href="#menu/3.4">
              Dessert
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-drop__link" href="#menu/3.4">
              Kitchen
            </NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item className="nav-drop__link" href="#menu/3.3">
              Cocktails
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-drop__link" href="#menu/3.2">
              Brewery
            </NavDropdown.Item>
            <NavDropdown.Item className="nav-drop__link" href="#menu/3.4">
              Wine
            </NavDropdown.Item>
          </NavDropdown>
          <Link to="/info">
            <li className="navbar__link">INFO</li>
          </Link>
        </Nav>
        <Nav className="navbar__nav">
          <Link to="/faq">
            <li className="navbar--right">FAQS</li>
          </Link>
          <Link to="/contact">
            <li className="navbar--right">CONTACT US</li>
          </Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle" style={ { zIndex: '10' } }/>
    </Navbar>
  </header>
);

export default NavBar;