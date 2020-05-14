import React from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollAdvisor from '../ScrollAdvisor/ScrollAdvisor';


const imageAnimation = keyframes`

    from  {

        transform: translateX(170%);

        opacity: 0;

    }

    50%{

        opacity:1;

    }

    to {

        transform: translateX(0);

        opacity: 1;

    }

`;

const textAnimation = keyframes`

    from {
        transform: translateY(30px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
`;


const StyledContainer = styled.li`

    grid-area: ${props => props.area};

    display: flex;

    justify-content: flex-start;

    align-items: flex-start;

    max-width: 700px;

`;

const StyledImage = styled.img`

    width: 100%;
       
    flex: 0 3 300px;

    max-width: 300px;

    transform: translateX(170%);

    opacity: 0;

    animation-name: ${props=> props.play ? imageAnimation : 'none'};

    animation-duration: 1s;

    animation-fill-mode: forwards;

    animation-delay: .5s;

`;

const StyledContentContainer = styled.div`

    flex: 1 1 300px;

    height: 300px;

    display: flex;

    flex-flow: column nowrap;

    justify-content: center;

    margin-left: 30px;

    transform: translateY(30px);
    
    opacity: 0;

    animation-name: ${props => props.play ? textAnimation : 'none'};

    animation-duration: 1s;

    animation-fill-mode: forwards;

    animation-delay: 1s;


`;

const StyledTitle = styled.h6`

    padding-bottom: 20px;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 24px;

    color: ${props => props.theme.colorMainGreenDark};

    letter-spacing: 1.2px;

    word-spacing: 2px;

`;

const StyledComment = styled.p`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 20px;

`;





function WhytobuyItem({ data, area }) {
    return (
        <ScrollAdvisor offSet={300}>
            {(playAnimation, refElement) => {

                return (
                    <StyledContainer area={area} ref={refElement}>
                        <StyledImage src={data.image} play={playAnimation} />
                        <StyledContentContainer play={playAnimation}>
                            <StyledTitle>{data.reason}</StyledTitle>    
                            <StyledComment>{data.description}</StyledComment>
                        </StyledContentContainer>            
                    </StyledContainer>
                );
            }}
        </ScrollAdvisor>
        
    );
}

export default WhytobuyItem;
