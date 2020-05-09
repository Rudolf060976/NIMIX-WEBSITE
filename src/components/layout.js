/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from 'styled-components';
import theme from '../StyledComponents/theme';
import "./layout.scss";
import Header from "./Header/Header";


const Layout = ({ children }) => {

  


  return (
    <ThemeProvider theme={theme}>      
        <Header />
        <main>{children}</main>             
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
