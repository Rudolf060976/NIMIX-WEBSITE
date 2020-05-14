/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";
import { ThemeProvider } from 'styled-components';
import theme from '../StyledComponents/theme';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const StyledContainer = styled.div`

    width: 100%;

    background-image: url(${props => props.backImage || 'none'});

    background-repeat: no-repeat;
    
`;

const Layout = ({ children, backImage }) => {

  return (
    <ThemeProvider theme={theme}> 
        <StyledContainer backImage={backImage} id="home-scroll-point">
          <Header />
          <main>{children}</main>             
          <Footer />
        </StyledContainer>        
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
