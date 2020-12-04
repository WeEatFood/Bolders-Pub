import React from "react";
import PropTypes from "prop-types";
import Header from "./navbar";

import "normalize.css";
import "../../dist/bootstrap.min.css";
import "../scss/_config.scss";

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
