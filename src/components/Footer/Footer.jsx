import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`

    height: 300px;

    background-color: ${props => props.theme.colorMainBlueDark};

    display: flex;

    flex-flow: column nowrap;

    justify-content: space-between;

`;

const StyledList = styled.ul`

    width: 80%;
    margin: 0 auto;
    padding: 70px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;

     @media (max-width: 600px) {

        flex-flow: column nowrap;

    }

      @media (max-width: 600px) {

        padding: 30px 0;

    }


`;

const StyledListItem = styled.li`



`;

const StyledLink = styled.a`

    color: white;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    transition: all .3s linear;

    cursor: pointer;

    &:hover {

        color: ${props => props.theme.colorMainBlueClear1};

        text-decoration: underline;


    }

     @media (max-width: 1200px) {

        font-size: 2rem;

    }

      @media (max-width: 600px) {

       display: block;
       padding: 10px 0;

    }



`;

const StyledBuildBy = styled.p`

    padding: 10px;

    color: white;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 1.2rem;

     @media (max-width: 1200px) {

        font-size: 1.6rem;

    }

`;


function Footer() {
    return (
        <StyledContainer>
            <StyledList>
                <StyledListItem>
                    <StyledLink>
                        Tipos de Negocio
                    </StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink>
                        Preguntas Frecuentes
                    </StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink>
                        Contacto
                    </StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink>
                        Tutoriales
                    </StyledLink>
                </StyledListItem>
            </StyledList>
            <StyledBuildBy>Diseñado y Desarrollado por: Rafael E. Urbina N. -  email: rafaelurbinan@hotmail.com</StyledBuildBy>
        </StyledContainer>
    );
}

export default Footer;
