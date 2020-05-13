import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.li`
   
    grid-row: auto;

    grid-column: auto;

    display: flex;
    flex-flow: column nowrap;
    align-items: center; 
    justify-content: flex-start;
    width: 100%;    
    max-width: 300px;

`;

const StyledImage = styled.img`

    width: 100%;
    max-width: 200px;
    border-radius: 50%;
    
    box-shadow: 0px 0px 5px white;

    transition: all .5s linear;

    &:hover {
        transform: scale(1.1);

    }

`;


const StyledContent = styled.h6`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 24px;

    font-weight: 700;

    color: ${props => props.theme.colorMainBlueClear2};

    margin-top: 20px;

    text-align: center;

    line-height: 30px;

`;


function WeOfferItem({ itemData }) {
    return (
        <StyledContainer>
            <StyledImage src={itemData.image} />
            <StyledContent>{itemData.offer_name}</StyledContent>
        </StyledContainer>
    );
}

export default WeOfferItem;
