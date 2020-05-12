import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Menu from './Menu';


const logoAnimation = keyframes`

    from {

        transform: translateX(-2500px);

       

    }

    75% {

        transform: translateX(0) skewX(-25deg);

        

    }

    to {

        transform: translateX(0) skewX(0deg);

       

    }


`;



const StyledContainer = styled.header`

    width: 100%;

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 30px 20px 10px 20px;

`;

const StyledLogoContainer = styled.div`

    flex: 1 1 20%;

    padding-left: 30px;

   
    
`;


const StyledLogo = styled(Image)`

    width: 100%;

    max-width: 400px;
    
    transform: translateX(-2500px);

    animation-name: ${logoAnimation};

    animation-duration: 1s;

    animation-fill-mode: forwards;

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
