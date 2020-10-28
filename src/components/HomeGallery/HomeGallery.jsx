import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import image1 from '../../images/RESTAURANTES.jpg';
import image2 from '../../images/FERRETERIAS.jpg';
import image3 from '../../images/BODEGONES.jpg';
import image4 from '../../images/TIENDAS.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rgba } from 'polished';
import backImage from '../../images/BACK1.jpg';

const StyledContainer = styled.section`

    width: 100%;    
    background-image: url(${backImage});
    background-color: ${props => rgba(props.theme.colorMainGreenDark,0.2)};
    background-attachment: fixed;
`;

const StyledCenter = styled.div`

    position: relative;

    width: 70%;

    height: 900px;

    margin: 0 auto;

     @media (max-width: 1800px) {

        height: 800px;

    }

     @media (max-width: 1600px) {

        width: 80%;

    }

    @media (max-width: 1300px) {

        height: 700px;
        width: 90%;

    }

    @media (max-width: 1000px) {

        height: 500px;

    }

      @media (max-width: 850px) {

        width: 100%;

    }

    @media (max-width: 700px) {

        height: 400px;
        

    }

     @media (max-width: 500px) {

        width: 100%;

    }


`;


const StyledButtonNext = styled.span`

    display: block;
    font-size: 2rem;

    color: ${rgba('black', 0.2)};

    position: absolute;
    top: 50%;
    right: 0;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    text-align: center;
    cursor: pointer;
    transition: all .3s linear;
    z-index: 2000;

    @media (max-width: 850px) {

        right: 30px;

    }

    @media (max-width: 500px) {

        right: 20px;

    }

    @media (max-width: 400px) {

        right: 10px;

    }
    
    &:hover {

        color: ${rgba('black', 0.4)};

    }

`;


const StyledButtonPrev = styled.span`

    display: block;
    font-size: 2rem;

    color: ${rgba('black', 0.2)};

    position: absolute;
    top: 50%;
    left: 0;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    text-align: center;
    cursor: pointer;
    transition: all .3s linear;
    z-index: 2000;

    @media (max-width: 850px) {

        left: 30px;

    }

    @media (max-width: 500px) {

        left: 20px;

    }

    @media (max-width: 400px) {

        left: 10px;

    }

    &:hover {

        color: ${rgba('black', 0.4)};

    }

`;

const StyledList = styled.ul`

    list-style-type: none;

    position: relative;

    width: 100%;
    height: 900px;

    margin: 0;
    padding: 0;

    @media (max-width: 1800px) {

        height: 800px;

    }

    @media (max-width: 1300px) {

        height: 700px;

    }

    @media (max-width: 1000px) {

        height: 500px;

    }

    @media (max-width: 700px) {

        height: 400px;

    }

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
    max-width: 800px;   

`;


function HomeGallery() {

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
            pos4: 3
        },
        {
            pos1: 1,
            pos2: 2,
            pos3: 3,
            pos4: 0
        },
        {
            pos1: 2,
            pos2: 3,
            pos3: 0,
            pos4: 1
        },
        {
            pos1: 3,
            pos2: 0,
            pos3: 1,
            pos4: 2
        }
    ];


    const positionsStylesArray = [
        {
            
            zIndex: 1000,
            top:'50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            filter: 'blur(0)',
            opacity: 1,
            boxShadow: '0px 0px 15px black'
            
        },
        {
            
            zIndex: 500,
            top: '45%',
            left: '40%',
            transform: 'translate(-50%,-50%) scale(0.8)',
            filter: 'blur(10px)',
            opacity: 0.6
            
        },
        {
            
            zIndex: 500,
            top: '40%',
            left: '50%',
            transform: 'translate(-50%,-50%) scale(0.8)',
            filter: 'blur(10px)',
            opacity: 0.6
            
        },
        {
            
            zIndex: 500,
            top: '45%',
            left: '60%',
            transform: 'translate(-50%,-50%) scale(1)',
            filter: 'blur(10px)',
            opacity: 0.6
            
        }
    ];


    const handleNextButton = (e) => {

        if (pos === 3) {
            setPos(0);
        } else {
            setPos(pos + 1);
        }

    };


    const handlePreviousButton = (e) => {

        if (pos === 0) {
            setPos(3);
        } else {
            setPos(pos - 1);
        }

    };

    
    const rotateFunction = () => {


        return (
            <>
                    <StyledListItem style={positionsStylesArray[positionsArray[pos].pos1]}>
                        <StyledImage src={image1} />
                    </StyledListItem>
                    <StyledListItem style={positionsStylesArray[positionsArray[pos].pos2]}>
                        <StyledImage src={image2} />
                    </StyledListItem>
                    <StyledListItem style={positionsStylesArray[positionsArray[pos].pos3]}>
                        <StyledImage src={image3} />
                    </StyledListItem>  
                    <StyledListItem style={positionsStylesArray[positionsArray[pos].pos4]}>
                        <StyledImage src={image4} />
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

export default HomeGallery;
