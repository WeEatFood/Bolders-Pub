import React from "react";
import PropTypes from "prop-types";
import Header from "./header";

import "normalize.css";
import "../scss/_config.scss";
import "./bootstrap.min.css";
// import "./layout.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{ children }</main>
    <footer style={ {
      marginTop: `2rem`
    } }>
      © { new Date().getFullYear() }, Built and designed by Matt and Khai
    </footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
