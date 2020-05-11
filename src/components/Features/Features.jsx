import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';


const StyledContainer = styled.section`

    width: 100%;


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
            <StyledListItem key={index}>{feature.feature_name}</StyledListItem>
        );
    });

};

function Features() {

    const data = useStaticQuery(graphql`
        query {
            allFeaturesJson {
     	        nodes {
       	            title
                    features {
                        feature_name
                    }
                }      	
            }  
        }
    `);

    const title = data.allFeaturesJson.nodes[0].title;
    const features = data.allFeaturesJson.nodes[0].features;


    return (
        <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledList>
                <FeaturesList featuresList={features} />
            </StyledList>
        </StyledContainer>
    );  

    return (<></>);

}

export default Features;
