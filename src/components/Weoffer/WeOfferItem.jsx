import React from 'react';
import styled, { keyframes } from 'styled-components';


const imageAnimation = keyframes`

    from {

        opacity: 0;

        filter: blur(10px);

    }

    to {

        opacity: 1;
        filter: blur(0px);

    }


`;


const titleAnimation = keyframes`

    from {

        opacity: 0;
        transform: translateY(-30px);

    }

    to {

        opacity: 1;
        transform: translateY(0);

    }


`;



const StyledContainer = styled.li`

    width: 100%;    
    max-width: 300px;   
    grid-row: auto;
    grid-column: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center; 
    justify-content: flex-start;   

    @media (max-width: 1400px) {
        
        max-width: 240px;        

    }

    @media (max-width: 1100px) {
        
        max-width: 210px;        

    }

`;

const StyledImage = styled.img`

    width: 100%;
    max-width: 200px;
    border-radius: 50%;
    
    box-shadow: 0px 0px 5px white;

    transition: all .5s linear;

    opacity: 0;

    animation-name: ${props => props.play ? imageAnimation : 'none'};

    animation-duration: 1s;

    animation-fill-mode: forwards;

    animation-delay: .4s;

    &:hover {
        transform: scale(1.1);

    }

    @media (max-width: 1400px) {
        
        max-width: 150px;        

    }

    @media (max-width: 1100px) {
        
        max-width: 120px;        

    }

`;


const StyledContent = styled.h6`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 24px;
    
    color: ${props => props.theme.colorMainWhite};

    margin-top: 20px;

    text-align: center;

    line-height: 30px;

    letter-spacing: 1.2px;

    word-spacing: 2px;

    opacity: 0;
    
    transform: translateY(-30px);

    animation-name: ${props => props.play ? titleAnimation : 'none'};

    animation-duration: 1s;

    animation-fill-mode: forwards;

    animation-delay: .4s;

    @media (max-width: 1400px) {
        
        font-size: 20px;

    }

    @media (max-width: 1100px) {
        
        font-size: 16px;

        line-height: 20px;

    }

    @media (max-width: 750px) {
        
        font-size: 14px;

    }


`;


function WeOfferItem({ itemData, play }) {
    return (
        <StyledContainer>
            <StyledImage src={itemData.image} play={play} />
            <StyledContent play={play}>{itemData.offer_name}</StyledContent>
        </StyledContainer>
    );
}

export default WeOfferItem;
