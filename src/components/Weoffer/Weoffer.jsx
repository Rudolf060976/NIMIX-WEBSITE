import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import WeOfferItem from './WeOfferItem';


const StyledContainer = styled.section`

    width: 100%;

    padding: 50px 0;

    background-color: ${props => props.theme.colorMainBlueDark};

`;

const StyledTitle = styled.h3`

    width: 100%;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    color: ${props => props.theme.colorMainWhite};

    padding: 20px 0;

    text-align: center;

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

    gap: 60px 20px;

    padding: 40px 0;

`;



const FeaturesList = ({ featuresList }) => {

    return featuresList.map((feature, index) => {
        return(
            <WeOfferItem key={index} itemData={feature} />
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
        <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledList>
                <FeaturesList featuresList={offerList} />
            </StyledList>
        </StyledContainer>
    );
}

export default Weoffer;
