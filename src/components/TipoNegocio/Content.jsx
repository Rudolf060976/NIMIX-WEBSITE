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


`;

const StyledTitle = styled.h5`

    width: 100%;

    text-align: center;

    padding: 0 0 30px 0;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma; 

    color: ${props => props.theme.colorMainBlueClear2};

    letter-spacing: 2px;

    line-height: 42px;

`;

const StyledList = styled.ul`

    width: 100%;

    list-style-type: none;
    

`;

const StyledListItem = styled.li`

    padding: 10px 0;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma; 

    color: ${props => props.theme.colorMainWhite};

    font-size: 20px;

`;

const StyledSpan = styled.span`


    color: ${props => props.theme.colorMainYellow};

    margin-right: 15px;

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
