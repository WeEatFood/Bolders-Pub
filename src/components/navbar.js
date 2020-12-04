import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "gatsby";
import Logo from "../images/bolderlogo.png";
import "../scss/navbar.scss";

const Navbar = () => (
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
      expand="md"
      variant="light">
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
          <ReactBootStrap.NavDropdown title="menu" id="dropdown"
                                      className="navbar__link">
            <ReactBootStrap.NavDropdown.Item
              href="#action/3.1">Appetizers</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item
              href="#action/3.4">Dessert</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item
              href="#action/3.4">Kitchen</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item
              href="#action/3.3">Cocktails</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item
              href="#action/3.2">Brewery</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item
              href="#action/3.4">Wine</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
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
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle"
      style={{zIndex: "10"}}/>
    </ReactBootStrap.Navbar>
  </header>
);

export default Navbar;

