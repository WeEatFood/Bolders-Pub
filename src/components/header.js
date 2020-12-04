import React from "react";
import * as ReactBootStrap from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap"
import { Link } from "gatsby";
import Logo from "../images/bolderlogo.png";
import "../scss/navbar.scss";

const Header = () => (
  <header className="container__navbar">
    <Link
      to="/">
      <img
        src={ Logo }
        alt="logo"
        className="logo" />
    </Link>
    <ReactBootStrap.Navbar
      className="navbar"
      collapseOnSelect
      expand="xl"
      variant="dark">
      <ReactBootStrap.Navbar.Toggle
        aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <Link className to="/booking">
            <ReactBootStrap.Nav.Link className="navbar__link"
                                     style={ { color: "black" } }>
              BOOK A TABLE
            </ReactBootStrap.Nav.Link>
          </Link>
          <Link to="/online">
            <ReactBootStrap.Nav.Link className="navbar__link">
              ORDER ONLINE
            </ReactBootStrap.Nav.Link>
          </Link>
          <Link to="/menu">
            <ReactBootStrap.Nav.Link className="navbar__link">
              MENU
            </ReactBootStrap.Nav.Link>
          </Link>
          <Link to="/info">
            <ReactBootStrap.Nav.Link className="navbar__link">
              INFO
            </ReactBootStrap.Nav.Link>
          </Link>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <Link to="/faq">
            <ReactBootStrap.Nav.Link className="navbar--right">
              FAQS
            </ReactBootStrap.Nav.Link>
          </Link>
          <Link to="/contact">
            <ReactBootStrap.Nav.Link eventKey={ 2 }
                                     className="navbar--right">
              CONTACT US
            </ReactBootStrap.Nav.Link>
          </Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  </header>
);

export default Header;

