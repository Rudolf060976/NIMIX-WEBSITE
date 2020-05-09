import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.nav`

    flex: 1 1 40%;


`;


const StyledMenuList = styled.ul`

    display: flex;
    
    justify-content: space-around;

    list-style-type: none;

`;


const StyledMenuListItem = styled.li`




`;


const StyledMenuLink = styled.a`

    display: block;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma, sans-serif;

    font-weight: 500;

    font-size: 1.8rem;

`;


function Menu() {
    return (
        <StyledContainer>
            <StyledMenuList>
                <StyledMenuListItem>
                    <StyledMenuLink>
                        Tipos de Negocio
                    </StyledMenuLink>                    
                </StyledMenuListItem>
                <StyledMenuListItem>
                    <StyledMenuLink>
                        Preguntas Frecuentes
                    </StyledMenuLink>                    
                </StyledMenuListItem>
                <StyledMenuListItem>
                    <StyledMenuLink>
                        Contacto
                    </StyledMenuLink>                    
                </StyledMenuListItem>
                <StyledMenuListItem>
                    <StyledMenuLink>
                        Tutoriales
                    </StyledMenuLink>                    
                </StyledMenuListItem>
            </StyledMenuList>
        </StyledContainer>
    );
}

export default Menu;
