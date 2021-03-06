import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

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

    @media (max-width: 850px) {

        flex-flow: column nowrap;

        justify-content: center;

        align-items: center;   
                   
        
    }

    @media (max-width: 500px) {

        position: relative;

        padding-top: 80px;

    }

`;

const StyledMobilMenuIcon = styled.span`

    position: absolute;
    left: 20px;
    top: 20px;
    display: none;
    
    box-shadow: 2px 2px 5px black;
   
    border-radius: 5px;
    transition: all .3s linear;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    cursor: pointer;    

    & > span {

        margin-left: 10px;

    }

    &:active {

        box-shadow: none;
        background-color: ${props => props.theme.colorMainWhite};
        color: ${props => props.theme.colorMainBlueDark};
        border: 1px solid ${props => props.theme.colorMainBlueDark};

    }
    

    @media (max-width: 500px) {

        display: inline-block;
        padding: 10px;        
        font-size: 2.2rem; 
        z-index: 1000;
        background-color: ${props => props.theme.colorMainBlueDark};
        color: ${props => props.theme.colorMainWhite};
        
     
    }

`;

const StyledLogoContainer = styled.div`

    flex: 1 2 10%;

    padding: 0 50px 0 30px;


    @media (max-width: 900px) {

        padding: 0 20px 0 20px;


    }

     @media (max-width: 850px) {

        width: 100%;
        
        display: flex;

        flex-flow: row nowrap;

        justify-content: center;

        align-items: center;

        padding-top: 30px;

    }

    

    @media (max-width: 500px) {

        position: absolute;

        width: 40%;

        min-width: 150px;

        justify-content: flex-end;

        padding: 0;

        right: 20px;
        top: 20px;

    }

    @media (max-width: 400px) {
        
        top: 100px;
        left: 0;
        width: 100%;  
        justify-content: center;  
        z-index: 500; 

    }
      
`;

const StyledLink = styled(Link)`

@media (max-width: 400px) {
    
    display: block;

    width: 200px;

}

`;


const StyledLogo = styled(Image)`

    width: 100%;

    max-width: 400px;
    
    transform: translateX(-2500px);

    animation-name: ${logoAnimation};

    animation-duration: 1s;

    animation-fill-mode: forwards;

     @media (max-width: 850px) {

        width: 200px;
        
    }
     

`;



function Header({ selectedIndex }) {

    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenuClick = (e) => {

        setOpenMenu(true);
    
      };
    
      const handleCloseMenuClick = () => {
    
    
        setOpenMenu(false);
    
      };

    
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

    const menuIcon = () => (
        <StyledMobilMenuIcon onClick={handleOpenMenuClick}>
            <FontAwesomeIcon icon="bars" size="lg"/><span>Menu</span>
        </StyledMobilMenuIcon> 
    );

    return (
        <StyledContainer>
            { openMenu ? null : menuIcon() }            
                <StyledLogoContainer>
                    <StyledLink to="/">
                        <StyledLogo fluid={imageData} />
                    </StyledLink>   
                </StyledLogoContainer>        
            <Menu openMenu={openMenu} handleCloseMenu={handleCloseMenuClick} selectedIndex={selectedIndex} />
        </StyledContainer>
    );
}

export default Header;
