import React from 'react';
import Portal from '../Portal/Portal';
import styled from 'styled-components';
import { rgba } from 'polished';


const StyledContainer = styled.div`
   

    width: 100vw;
    
    height: 100vh;

    background-color: ${rgba('#005373',0.2)};
    
    display: ${props => props.center ? 'flex' : 'block'};

    justify-content: center;

    align-items: center;
    
    
`;


function Backdrop({ center, children }) {
    return (
        <Portal>
            <StyledContainer center={center} >
                {children}
            </StyledContainer>
        </Portal>
    );
}

export default Backdrop;