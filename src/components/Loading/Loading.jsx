import React from 'react';
import styled, { keyframes } from 'styled-components';
import Backdrop from '../Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const rotation = keyframes`


    from {

        transform: rotate(0deg);

    } 

    to {

        transform: rotate(360deg);

    }


`;

const StyledSpan = styled.span`
    
    color:#005373;

    margin-right: 15px;

    opacity: 1;

    font-size: 5rem;

    animation-name: ${rotation};

    animation-duration: 1s;

    animation-timing-function: linear;
    
    animation-iteration-count: infinite;
    
    @media (max-width: 500px) {

        margin-right: 5px;

    }

`;


function Loading() {
    return (
        <Backdrop center >
            <StyledSpan>
                <FontAwesomeIcon icon={['fab', 'centercode']} size="lg" />
            </StyledSpan>            
        </Backdrop>
    );
}

export default Loading;
