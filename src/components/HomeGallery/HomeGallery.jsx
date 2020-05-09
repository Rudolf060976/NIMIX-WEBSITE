import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/PLACEHOLDER_1920x1080.png';
import image2 from '../../images/PLACEHOLDER_1920x1080_BLUE.png';

const StyledContainer = styled.section`

    width: 100%;

    padding: 50px 0;
    
`;

const StyledImage = styled.img`

    width: 100%;
    max-width: 1980px;
    
`;

function HomeGallery() {

    const carouselContent = [];

    const imgArray =[image1, image2];

    for (let i=0; i < 2; i++) {

        const contentItem = (
            <Carousel.Item key={i} >                
                    <StyledImage src={imgArray[i]} />                              
            </Carousel.Item>
        );

        carouselContent.push(contentItem);
    }


    return (
        <StyledContainer>
            <Carousel indicators={false} interval={4000} slide={true} fade={true} pause={false}>
                {carouselContent}
            </Carousel>
        </StyledContainer>
    )
}

export default HomeGallery;
