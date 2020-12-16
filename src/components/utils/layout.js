import React from 'react';
import PropTypes from 'prop-types';
import Header from '../globals/Navbar';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaYelp } from 'react-icons/fa';
import '../../../node_modules/normalize.css/normalize.css';
import '../../../dist/bootstrap.min.css';
import '../../scss/_config.scss';
import './styles.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer
      style={{
        marginTop: `2em`,
      }}
    >
      <div className="main-footer">
        <div className="container">
          <div className="icons">
            <FaFacebookSquare className="icon" />
            <FaYelp className="icon" />
            <FaInstagramSquare className="icon" />
            <FaGithubSquare className="icon" />
          </div>
          <div className="row">
            <div className="col">
              <ui className="list-unstyled">
                <li id="title">Bolders Pub</li>
                <li>1-800-000-000</li>
                <li>Bolder, CO</li>
                <li>123 Street South North</li>
              </ui>
            </div>
            <div className="col">
              <h4>Products</h4>
              <ui className="list-unstyled">
                <li>About Us</li>
                <li>Menu</li>
                <li>Alcoholic Beverages</li>
              </ui>
            </div>
            <div className="col">
              <h4>Information</h4>
              <ui className="list-unstyled">
                <li>Hours</li>
                <li>Booking</li>
                <li>Location</li>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()}, Built and designed by Matt and Khai | All rights
              reserved | Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
