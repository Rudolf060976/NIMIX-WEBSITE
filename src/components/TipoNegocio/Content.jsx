import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledContainer = styled.div`

    width: 100%;

    padding-bottom: 50px;

`;

const StyledCenter = styled.div`

    width: 75%;

    margin: 0 auto;

     @media (max-width: 1400px) {

        width: 80%;

    }


`;

const StyledTitle = styled.h5`

    width: 100%;

    text-align: center;

    padding: 0 0 30px 0;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma; 

    color: ${props => props.theme.colorMainBlueClear2};

    letter-spacing: 2px;

    line-height: 42px;

     @media (max-width: 1200px) {

        padding-top: 20px;

    }

     @media (max-width: 700px) {

        font-size: 2.8rem;

    }

     @media (max-width: 650px) {

        line-height: 30px;

    }

`;

const StyledList = styled.ul`

    width: 100%;

    list-style-type: none;
    

`;

const StyledListItem = styled.li`

    padding: 10px 0;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma; 

    color: ${props => props.theme.colorMainWhite};

    font-size: 1.6rem;

    line-height: 2.8rem;

    letter-spacing: 1px;

`;

const StyledSpan = styled.span`


    color: ${props => props.theme.colorMainYellow};

    margin-right: 15px;

    @media (max-width: 500px) {

        margin-right: 5px;

    }

`;



function Content({ title, functionsList }) {
    return (
        <StyledContainer>
            <StyledCenter>
                <StyledTitle>{title}</StyledTitle>
                    <StyledList>
                        { functionsList.map(item => {
                            return (
                                <StyledListItem key={item.function}>
                                    <StyledSpan><FontAwesomeIcon icon="angle-right" size="lg" /></StyledSpan>                                    
                                    {item.function}
                                </StyledListItem>
                            );
                        })}
                    </StyledList>
                </StyledCenter>            
        </StyledContainer>
    );
}

export default Content;
