import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledContainer = styled.section`

    width: 100%;

`;

const StyledTitle = styled.h3`

    width: 100%;

    text-align: center;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    color: ${props => props.theme.colorMainWhite};

    background-color: ${props => props.theme.colorMainGreenDark};

    padding: 25px 0;

    letter-spacing: 2px;
        

`;


const StyledList = styled.ul`

    width: 60%;
    margin: 0 auto;
    list-style-type: none;

    padding: 100px 0;

    display: grid;

    grid-template-areas:
    "area1 area2 area3";

    grid-template-columns: 1fr 1fr 1fr;

    grid-template-rows: repeat(1, auto);

    grid-auto-flow: row;

    gap: 50px 20px;

`;



const StyledListItem = styled.li`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 24px;

    font-weight: 700;

    color: ${props => props.theme.colorMainBlueDark};

    grid-row: auto;

    grid-column: auto;

`;

const StyledIcon = styled.span`


    color: ${props => props.theme.colorMainYellow};

    margin-right: 15px;

    transition: all .3s linear;

    & svg {

        transition: all .3s linear;

    }


    &:hover svg {

        transform: translateX(5px) scale(1.1);   

        color: ${props => props.theme.colorMainBlueClear1};           
    }

`;



const FeaturesList = ({ featuresList }) => {

    return featuresList.map((feature, index) => {
        return(
            <StyledListItem key={index}><StyledIcon><FontAwesomeIcon icon="hand-point-right" size="lg" /></StyledIcon>{feature.feature_name}</StyledListItem>
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

}

export default Features;
