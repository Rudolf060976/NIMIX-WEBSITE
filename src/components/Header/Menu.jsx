import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';

const StyledContainer = styled.nav`

    flex: 1 1 40%;


`;


const StyledMenuList = styled.ul`

    display: flex;
    
    justify-content: space-around;

    list-style-type: none;

    background-color: ${props => props.theme.colorMainBlueDark};

    padding: 10px 0;

    border-radius: 10px;

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
    

    }

    
    
`;


function Menu() {
    return (
        <StyledContainer>
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
