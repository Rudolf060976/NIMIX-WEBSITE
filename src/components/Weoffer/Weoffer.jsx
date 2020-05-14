import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import WeOfferItem from './WeOfferItem';
import ScrollAdvisor from '../ScrollAdvisor/ScrollAdvisor';


const StyledContainer = styled.section`

    width: 100%;

    padding: 50px 0;

    background-color: ${props => props.theme.colorMainBlueDark};

    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);

     @media (max-width: 750px) {

        clip-path: polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%);

    }

     @media (max-width: 450px) {

        clip-path: polygon(0% 0%, 100% 0%, 100% 97%, 0% 100%);

    }

`;

const StyledTitle = styled.h3`

    width: 100%;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    color: ${props => props.theme.colorMainWhite};

    padding: 20px 0;

    text-align: center;

    letter-spacing: 2px;

`;

const StyledList = styled.ul`

    width: 80%;
    margin: 0 auto;
    list-style-type: none;
    display: grid;
    grid-template-areas:
    "area1 area2 area3 area4";

    grid-template-columns: 1fr 1fr 1fr 1fr;

    grid-template-rows: repeat(1, auto);

    grid-auto-flow: row;

    gap: 60px 30px;

    padding: 40px 0;

    @media (max-width: 1800px) {
        
        width: 90%;
        

    }

    @media (max-width: 900px) {
        
        grid-template-areas:
        "area1 area2 area3";

        grid-template-columns: 1fr 1fr 1fr;

        grid-template-rows: repeat(1, auto);

        width: 90%;

        padding-bottom: 100px;

    }

    @media (max-width: 750px) {
        
        grid-template-areas:
        "area1 area2";

        grid-template-columns: 1fr 1fr;

        grid-template-rows: repeat(1, auto);

        justify-items: center;
    }

    @media (max-width: 450px) {
        
        grid-template-areas:
        "area1";

        grid-template-columns: 1fr;

        grid-template-rows: repeat(1, auto);

        justify-items: center;

        gap: 40px 0;

        
    }

`;



const FeaturesList = ({ featuresList, play }) => {

    return featuresList.map((feature, index) => {
        return(
            <WeOfferItem key={index} itemData={feature} play={play} />
        );
    });

};


function Weoffer() {

    
    const data = useStaticQuery(graphql`
        query {
            allWeofferJson {
     	        nodes {
       	            title
                    we_offer {
                        offer_name
                        image
                    }
                }      	
            }
        }    
    `);

    const title = data.allWeofferJson.nodes[0].title;
    const offerList = data.allWeofferJson.nodes[0].we_offer;


    return (
        <ScrollAdvisor>
            {(playAnimation, refElement) => {

                return (
                    <StyledContainer>
                        <StyledTitle>{title}</StyledTitle>
                        <StyledList ref={refElement}>
                        <FeaturesList featuresList={offerList} play={playAnimation} />
                        </StyledList>
                    </StyledContainer>
                );

            }}
        </ScrollAdvisor>        
    );
}

export default Weoffer;
