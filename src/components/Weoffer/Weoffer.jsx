import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';



const StyledContainer = styled.section`




`;

const StyledTitle = styled.h4`

    width: 100%;

    text-align: center;


`;

const StyledList = styled.ul`

    width: 80%;
    margin: 0 auto;
    list-style-type: none;
`;

const StyledListItem = styled.li`



`;

const FeaturesList = ({ featuresList }) => {

    return featuresList.map((feature, index) => {
        return(
            <StyledListItem key={index}>{feature.offer_name}</StyledListItem>
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
