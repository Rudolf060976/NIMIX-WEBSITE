import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, Events, scrollSpy } from 'react-scroll';

const StyledContainer = styled.div`

    width: 100;

    padding: 20px 0;

    background-color: ${props => props.theme.colorMainYellow};

    color: ${props => props.theme.colorMainBlueDark};

    text-align: center;

    font-size: 2.6rem;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-weight: 700;

    display: flex;

    align-items: center;

    justify-content: center;

`;

const StyledLink = styled(Link)`

    display: block;        
    cursor: pointer;

`;




function Gototop({ scrollPointId }) {

    useEffect(() => {
        
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
          });
       
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
          });
       
        scrollSpy.update();


        return () => {
            
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');

        }
    },[]);


    return (
        <StyledContainer>
            <StyledLink to={scrollPointId} smooth={true} duration={700}>Ir al Principio</StyledLink>
        </StyledContainer>
    );
}

export default Gototop;
