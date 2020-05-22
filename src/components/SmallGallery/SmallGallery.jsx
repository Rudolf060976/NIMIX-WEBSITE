import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rgba } from 'polished';


const StyledContainer = styled.section`

    width: 100%;        
`;

const StyledCenter = styled.div`

    position: relative;

    width: 100%;

    height: 600px;

    margin: 0 auto;
  
`;


const StyledButtonNext = styled.span`

    display: block;
    font-size: 2rem;

    color: ${rgba('white', 0.2)};

    position: absolute;
    top: 50%;
    right: 10%;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    text-align: center;
    cursor: pointer;
    transition: all .3s linear;
    z-index: 2000;
    
    &:hover {

        color: ${rgba('black', 0.4)};

    }

`;


const StyledButtonPrev = styled.span`

    display: block;
    font-size: 2rem;

    color: ${rgba('white', 0.2)};

    position: absolute;
    top: 50%;
    left: 10%;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    text-align: center;
    cursor: pointer;
    transition: all .3s linear;
    z-index: 2000;

    &:hover {

        color: ${rgba('black', 0.4)};

    }

`;

const StyledList = styled.ul`

    list-style-type: none;

    position: relative;

    width: 100%;
    height: 600px;

    margin: 0;
    padding: 0;

  

`;

const StyledListItem = styled.li`

    overflow: hidden;
    position: absolute;
    z-index: 0;
    
    margin: 0;   
    padding: 0;    

    cursor: pointer;

    transition: all .5s linear;    

    border-radius: 10px;

`;

const StyledImage = styled.img`

    width: 100%;
    max-width: 600px;   

`;


function SmallGallery({ imagesArray }) {

    const [pos, setPos] = useState(0);

    let int = 0;
    
    useEffect(() => {
                
        int = setInterval(() => {
            
            handleNextButton();

        }, 2000);

        return () => {

            clearInterval(int);

        }
    }, [pos])

    
    const positionsArray = [
        {
            pos1: 0,
            pos2: 1,
            pos3: 2,
            pos4: 3,
            pos5: 4
        },
        {
            pos1: 1,
            pos2: 2,
            pos3: 3,
            pos4: 4,
            pos5: 0
        },
        {
            pos1: 2,
            pos2: 3,
            pos3: 4,
            pos4: 0,
            pos5: 1
        },
        {
            pos1: 3,
            pos2: 4,
            pos3: 0,
            pos4: 1,
            pos5: 2
        },
        {
            pos1: 4,
            pos2: 0,
            pos3: 1,
            pos4: 2,
            pos5: 3
        }
    ];


    const positionsStylesArray = [
        {
            
            zIndex: 1000,
            top:'50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',            
            opacity: 1,
            boxShadow: '0px 0px 10px #FFF'
            
        },
        {
            
            zIndex: 500,
            top:'50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',       
            opacity: 0,
            filter: 'blur(5px)'
            
        },
        {
            
            zIndex: 500,
            top:'50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',              
            opacity: 0,
            filter: 'blur(5px)'
            
        },
        {
            
            zIndex: 500,
            top:'50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',       
            opacity: 0,
            filter: 'blur(5px)'
            
        },
        {
            
            zIndex: 500,
            top:'50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',       
            opacity: 0,
            filter: 'blur(5px)'            
        }

    ];


    const handleNextButton = (e) => {

        if (pos === 4) {
            setPos(0);
        } else {
            setPos(pos + 1);
        }

    };


    const handlePreviousButton = (e) => {

        if (pos === 0) {
            setPos(4);
        } else {
            setPos(pos - 1);
        }

    };

    
    const rotateFunction = () => {


        return (
            <>
                    <StyledListItem style={positionsStylesArray[positionsArray[pos].pos1]}>
                        <StyledImage src={imagesArray[0] ? imagesArray[0].image : null} />
                    </StyledListItem>
                    <StyledListItem style={positionsStylesArray[positionsArray[pos].pos2]}>
                        <StyledImage src={imagesArray[1] ? imagesArray[1].image : null} />
                    </StyledListItem>
                    <StyledListItem style={positionsStylesArray[positionsArray[pos].pos3]}>
                        <StyledImage src={imagesArray[2] ? imagesArray[2].image : null} />
                    </StyledListItem>  
                    <StyledListItem style={positionsStylesArray[positionsArray[pos].pos4]}>
                        <StyledImage src={imagesArray[3] ? imagesArray[3].image : null} />
                    </StyledListItem> 
                    <StyledListItem style={positionsStylesArray[positionsArray[pos].pos5]}>
                        <StyledImage src={imagesArray[4] ? imagesArray[4].image : null} />
                    </StyledListItem>                    
            </>
        );
    };

    

    return (
        <StyledContainer>
            <StyledCenter>
                <StyledButtonNext onClick={handleNextButton}><FontAwesomeIcon icon="arrow-circle-right" size="lg" /></StyledButtonNext>
                <StyledButtonPrev onClick={handlePreviousButton}><FontAwesomeIcon icon="arrow-circle-left" size="lg" /></StyledButtonPrev>
                <StyledList>
                    {rotateFunction()}
                </StyledList>
            </StyledCenter>            
        </StyledContainer>
    )
}

export default SmallGallery;
