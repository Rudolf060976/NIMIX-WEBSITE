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
            <StyledListItem key={index}>{feature.reason}</StyledListItem>
        );
    });

};


function Whytobuy() {

    const data = useStaticQuery(graphql`
        query {
            allWhytobuyJson {
     	        nodes {
       	            title
                    whytobuy {
                        reason
                    }
                }      	
            }  
        }    
    `);

    const title = data.allWhytobuyJson.nodes[0].title;
    const offerList = data.allWhytobuyJson.nodes[0].whytobuy;


    return (
        <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledList>
                <FeaturesList featuresList={offerList} />
            </StyledList>
        </StyledContainer>
    );
}

export default Whytobuy;
