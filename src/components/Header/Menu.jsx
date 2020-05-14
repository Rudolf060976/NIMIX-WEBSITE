import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const animationOpen = keyframes`

    from {
        transform: translateX(-110%);

    }

    to {
        transform: translateX(-20%);
    }

`;

const animationClose = keyframes`

from {
        transform: translateX(-20%);

    }

    to {
        transform: translateX(-110%);
    }

`;


const StyledContainer = styled.nav`

    flex: 1 1 40%;

    @media (max-width: 700px) {

        width: 100%;


    }

    @media (max-width: 500px) {

        position: absolute;
        top: 0;
        left: 0;        
        z-index: 5000;
        background-color: ${props => props.theme.colorMainBlueDark};        
        height: 100vh; 
        width: 100vw;  
        transform: translateX(-110%);

        animation-name: ${props => props.openMenu ? animationOpen : ( props.closeMenu ? animationClose : null ) };
        animation-duration: .5s; 
        animation-fill-mode: forwards;  

        box-shadow: 3px 3px 5px black; 

    }

    
`;

const StyledCloseButton = styled.span`

    position: absolute;
    right: 10px;
    top: 10px;
    display: none;
    color: ${props => props.theme.colorMainWhite};  

    @media (max-width: 500px) {

        display: inline-block;
        padding: 15px 20px;        
        font-size: 2.4rem;        
        z-index: 6000;
    }

    &:active {

        border: ${props => props.theme.colorMainWhite} solid 1px;
        border-radius: 5px;

    }

`;



const StyledMenuList = styled.ul`

    display: flex;
    
    justify-content: space-around;

    list-style-type: none;

    background-color: ${props => props.theme.colorMainBlueDark};

    padding: 10px 0;

    border-radius: 10px;

    @media (max-width: 800px) {

        padding: 10px 10px;


    }

    @media (max-width: 500px) {

        flex-flow: column nowrap;

        padding-top: 70px;


    }



`;


const StyledMenuListItem = styled.li`

    
    
`;


const StyledMenuLink = styled.a`

    display: block;

    font-family: Montserrat, sans-serif, Verdana, Geneva, Tahoma, sans-serif;

    font-weight: 500;

    font-size: 1.6rem;
    
    text-decoration: none;

    color: ${props => props.theme.colorMainWhite};
    
    transition: all .3s linear;
    
    &:hover {

        cursor: pointer;

        text-decoration: none;

        color: ${props => props.theme.colorMainBlueClear1};

        @media (max-width: 500px) {

            color: ${props => props.theme.colorMainBlueDark};

            background-color: ${props => props.theme.colorMainBlueClear1};

        }       
    

    }


     @media (max-width: 500px) {

        padding: 20px 0 20px 150px;

        font-size: 2.4rem;

    }

     @media (max-width: 400px) {

        padding-left: 100px;

    }

     @media (max-width: 300px) {

        padding-left: 80px;

    }

    
    
`;


function Menu({ openMenu, handleCloseMenu }) {

    const [closeMenu, setCloseMenu] = useState(false);

    const handleCloseClick = () => {

        setCloseMenu(true);

        handleCloseMenu();

        setTimeout(() => {
            
            setCloseMenu(false);

        }, 1000);

    };


    return (
        <StyledContainer openMenu={openMenu} closeMenu={closeMenu}>
            <StyledCloseButton onClick={(e) => handleCloseClick()}>
                <FontAwesomeIcon icon="times" size="lg"/>
            </StyledCloseButton>
            <StyledMenuList>
                <StyledMenuListItem>
                    <StyledMenuLink href="#">
                        Tipos de Negocio
                    </StyledMenuLink>                    
                </StyledMenuListItem>
                <StyledMenuListItem>
                    <StyledMenuLink href="#">
                        Preguntas Frecuentes
                    </StyledMenuLink>                    
                </StyledMenuListItem>
                <StyledMenuListItem>
                    <StyledMenuLink href="#">
                        Contacto
                    </StyledMenuLink>                    
                </StyledMenuListItem>
                <StyledMenuListItem>
                    <StyledMenuLink href="#">
                        Tutoriales
                    </StyledMenuLink>                    
                </StyledMenuListItem>
            </StyledMenuList>
        </StyledContainer>
    );
}

export default Menu;
