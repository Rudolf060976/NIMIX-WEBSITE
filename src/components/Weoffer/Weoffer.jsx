import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';



const StyledContainer = styled.section`

    width: 100%;

    padding: 50px 0;

    background-color: ${props => props.theme.colorMainBlueDark};

`;

const StyledTitle = styled.h3`

    width: 100%;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    color: ${props => props.theme.colorMainWhite};

    padding-left: 40px;

`;

const StyledList = styled.ul`

    width: 80%;
    margin: 0 auto;
    list-style-type: none;
`;

const StyledListItem = styled.li`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 24px;

    font-weight: 700;

    color: ${props => props.theme.colorMainBlueClear2};

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
