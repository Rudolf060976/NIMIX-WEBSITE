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


`;

const StyledList = styled.ul`

    list-style-type: none;

`;


const StyledListItem = styled.li`

    padding: 20px 20px 20px 0;

    font-family: Montserrat, sans-serif, Verdana, Geneva, Tahoma; 

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

        
    }

    
`;


const StyledIconSpan = styled.span`

    display: inline-block;

    width: 40px;

    margin-right: 25px;

    margin-left: 25px;

    font-size: 22px;    
    
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
                    Restaurantes
                </StyledListItem>   
                <StyledListItem isSelected={selectedIndex === 1 ? true : false}  onClick={(e) => handleItemClick(1)}>
                    <StyledIconSpan><FontAwesomeIcon icon="tools" size="lg" /></StyledIconSpan>
                    Ferreterías
                </StyledListItem>   
                <StyledListItem isSelected={selectedIndex === 2 ? true : false}  onClick={(e) => handleItemClick(2)}>
                    <StyledIconSpan><FontAwesomeIcon icon="wine-bottle" size="lg" /></StyledIconSpan>
                    Licorerías y Bodegones
                </StyledListItem>   
                <StyledListItem isSelected={selectedIndex === 3 ? true : false}  onClick={(e) => handleItemClick(3)}>
                    <StyledIconSpan><FontAwesomeIcon icon="store" size="lg" /></StyledIconSpan>
                    Tiendas y Franquicias
                </StyledListItem>   
            </StyledList>            
        </StyledContainer>
    );
}

export default Selector;
