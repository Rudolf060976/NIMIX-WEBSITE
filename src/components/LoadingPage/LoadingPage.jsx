import React from 'react';
import Portal from '../Portal/Portal';
import styled, { keyframes } from 'styled-components';
import loadingImage from '../../images/Loading.svg';

const rotation = keyframes`


    from {

        transform: rotate(0deg);

    } 

    to {

        transform: rotate(360deg);

    }


`;

const StyledContainer = styled.div`
   
   display: flex;

   justify-content: center;

   align-items: center;

   width: 100%;
    
   height: 60vh;

   background-color: white;
     
    
`;

const StyledImage = styled.img`
    
    width: 100%;

    height: 100%;

    max-width: 100px;

    animation-name: ${rotation};

    animation-duration: 1s;

    animation-timing-function: linear;
    
    animation-iteration-count: infinite;
    

`;


function LoadingPage() {
    return (
        <Portal>
            <StyledContainer >
                <StyledImage src={loadingImage} alt="loading" />       
            </StyledContainer>
        </Portal>
    );
}

export default LoadingPage;