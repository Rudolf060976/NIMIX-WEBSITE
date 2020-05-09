import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Menu from './Menu';


const StyledContainer = styled.header`

    width: 100%;

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 30px 20px 10px 20px;

`;

const StyledLogoContainer = styled.div`

    flex: 1 1 20%;

`;


const StyledLogo = styled(Image)`

    width: 100%;
    max-width: 400px;

`;

function Header() {

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "LOGO_NIMIX1.png"}) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }     
    `);

    const imageData = data.logo.childImageSharp.fluid;

    return (
        <StyledContainer>
            <StyledLogoContainer>
                <StyledLogo fluid={imageData} />
            </StyledLogoContainer>
            <Menu />
        </StyledContainer>
    );
}

export default Header;
