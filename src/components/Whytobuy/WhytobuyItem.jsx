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

    width: 100%;

    grid-area: ${props => props.area};

    display: flex;

    justify-content: flex-start;

    align-items: flex-start;

    max-width: 700px;

     @media (max-width: 400px) {

        flex-flow: column nowrap;
        align-items: center;

    }

`;

const StyledImage = styled.img`

    width: 30%;

    max-width: 300px;     

    transform: translateX(170%);

    opacity: 0;

    animation-name: ${props=> props.play ? imageAnimation : 'none'};

    animation-duration: 1s;

    animation-fill-mode: forwards;

    animation-delay: .5s;

     @media (max-width: 900px) {

        width: 20%; 
        min-width: 120px;    

    }

    @media (max-width: 500px) {

        min-width: 90px;    

    }


`;

const StyledContentContainer = styled.div`

    width: 60%;
    
    display: flex;

    flex-flow: column nowrap;

    justify-content: center;

    margin-left: 30px;

    transform: translateY(30px);
    
    opacity: 0;

    padding-top: 30px;  

    animation-name: ${props => props.play ? textAnimation : 'none'};

    animation-duration: 1s;

    animation-fill-mode: forwards;

    animation-delay: 1s;

     @media (max-width: 1600px) {

        padding-top: 20px;  

    }

     @media (max-width: 1100px) {

        padding-top: 10px;  

    }

    @media (max-width: 900px) {

        padding-top: 20px;  

    }

    @media (max-width: 600px) {

        width: 80%;    

    }

     @media (max-width: 500px) {

        width: 100%;  
        padding-top: 10px;  
       

    }

      @media (max-width: 400px) {

        width: 80%;  
        margin-left: 0;       

    }


`;

const StyledTitle = styled.h6`

    width: 100%;

    padding-bottom: 20px;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 24px;

    color: ${props => props.theme.colorMainGreenDark};

    letter-spacing: 1.2px;

    word-spacing: 2px;

    
    @media (max-width: 1300px) {

        font-size: 20px;

        padding-bottom: 10px;

    }   

     @media (max-width: 500px) {

        font-size: 18px;

        padding-bottom: 5px;

    }   

     @media (max-width: 400px) {

        text-align: center;

    }


`;

const StyledComment = styled.p`

    width: 100%;   

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 20px;

    @media (max-width: 1300px) {

        font-size: 16px;

    }

     @media (max-width: 500px) {

        font-size: 14px;

    }     

     @media (max-width: 400px) {

        text-align: center;

    }


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
