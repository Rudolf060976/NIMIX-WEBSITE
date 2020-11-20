import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const animation = keyframes`

    from {

        transform: scaleX(0); 

    }

    to {

        transform: scaleX(1); 

    }


`;

const textAnimation = keyframes`

    from {

        color: #005373;

    }

    to {

        color: #FFF;

    }

`;


const StyledContainer = styled.div`

    position: absolute;

    left: 0;

    top: 100px;

    @media(max-width: 1300px) {

        width: 100%;

        top: 50px;

        display: flex;

        justify-content: center;

        align-items: center;

    }

    @media(max-width: 400px) {
       
        top: 90px;
        
    }

`;

const StyledList = styled.ul`

    list-style-type: none;

    @media(max-width: 1300px) {

        width: 80%;

        margin: 0 auto;
        
        display: flex;

        justify-content: space-between;

        align-items: center;
        

    }

     @media(max-width: 1000px) {

        width: 70%;

        display: grid;

        grid-template-areas:
        "area1  area2"
        "area3  area4";

        grid-template-columns: 1fr 1fr;

        grid-auto-rows: repeat(2, auto);

        gap: 5px 0px;        

    }

     @media (max-width: 800px) {

        width: 80%;

    }

     @media (max-width: 700px) {

        width: 90%;

    }

     @media (max-width: 600px) {

        width: 100%;

        padding: 0 15px;

    }

     @media (max-width: 500px) {

        width: 100%;

        display: flex;

        justify-content: space-between;

        align-items: center;

        padding: 0 5px;
        

    }

`;


const StyledListItem = styled.li`

    padding: 20px 20px 20px 0;

    font-family: 'Bree Serif', sans-serif, Verdana, Geneva, Tahoma; 

    font-size: 20px;

    position: relative;  
    
    cursor: pointer;

    color: ${props => props.theme.colorMainBlueDark};

    animation-name: ${props => props.isSelected ? textAnimation : 'none'};
    animation-duration: 1s;
    animation-fill-mode: forwards;

    transition: all .3s linear;

    &:hover {

        color: ${props => !props.isSelected ? props.theme.colorMainYellow : props.theme.colorMainBlueDark};


    }


    &::before {

        content: '';
        
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colorMainBlueClear1};
        transform-origin: left;
        transform: scaleX(0);        
        z-index: -1;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;

        box-shadow: 2px 2px 5px gray;
       

        animation-name: ${props => props.isSelected ? animation : 'none'};
        animation-duration: 1s;
        animation-fill-mode: forwards;


        @media (max-width: 500px) {

            border-radius: 5px;

        }

        
    }


    @media (max-width: 1920px) {

        font-size: 18px;

        padding: 15px 20px 15px 0;


    }

     @media (max-width: 1500px) {

        font-size: 16px;

    }

     @media (max-width: 1300px) {

        padding: 15px 15px 15px 0;

    }

     @media (max-width: 1000px) {

        width: 80%;

    }

     @media (max-width: 900px) {

        width: 90%;

    }

    @media (max-width: 700px) {

        width: 100%;

    }
    
    @media (max-width: 600px) {

        font-size: 14px;

    }

    @media (max-width: 500px) {

        display: flex;

        justify-content: center;

        align-items: center;
        
        position: relative;

        padding-left: 13px;

        color: ${props => props.theme.colorMainGreenDark};
    }

    
`;


const StyledIconSpan = styled.span`

    display: inline-block;

    width: 40px;

    margin-right: 25px;

    margin-left: 25px;

    font-size: 22px;  


    @media (max-width: 1920px) {

        font-size: 20px; 
        
        margin-right: 20px;

        width: 35px;
        
    }
    
     @media (max-width: 1500px) {

        font-size: 18px;  
        margin-right: 15px;
        width: 30px;

    }

      @media (max-width: 1300px) {

        font-size: 16px; 
        margin-right: 10px; 
        width: 20px;

    }

     @media (max-width: 1000px) {
       
        margin-right: 15px; 
        width: 25px;
        
    }

    @media (max-width: 600px) {
        font-size: 16px;  
       margin-right: 20px; 
       width: 10px;

    }

    @media (max-width: 500px) {
       font-size: 20px;  
       margin-right: 0; 
       margin-left: 0;
       width: auto;
       
    }
    
`;


const StyledTextSpan = styled.span`

    @media (max-width: 500px) {

        display: none;

        position: absolute;

    }

`;

function Selector({ handleSelectedItem }) {

   const [selectedIndex,setSelectedIndex] = useState(0);
   

    const handleItemClick = (index) => {

        if (index !== selectedIndex) {

            setSelectedIndex(index);

            handleSelectedItem(index);

        }

    };


    return (
        <StyledContainer>
            <StyledList>
                <StyledListItem isSelected={selectedIndex === 0 ? true : false}  onClick={(e) => handleItemClick(0)}>
                    <StyledIconSpan><FontAwesomeIcon icon="utensils" size="lg" /></StyledIconSpan>
                    <StyledTextSpan>Video Tutoriales</StyledTextSpan>
                </StyledListItem>   
                <StyledListItem isSelected={selectedIndex === 1 ? true : false}  onClick={(e) => handleItemClick(1)}>
                    <StyledIconSpan><FontAwesomeIcon icon="tools" size="lg" /></StyledIconSpan>
                    <StyledTextSpan>Solicitud de Servicios</StyledTextSpan>
                </StyledListItem>                
            </StyledList>            
        </StyledContainer>
    );
}

export default Selector;
