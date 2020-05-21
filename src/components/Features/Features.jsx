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

    padding: 25px 20px;

    letter-spacing: 2px;

    line-height: 42px;

    box-shadow: 0px 5px 5px gray;

    @media (max-width: 500px) {

        line-height: 30px;
        

    }
        

`;


const StyledList = styled.ul`

    width: 60%;

    margin: 0 auto;

    list-style-type: none;

    padding: 100px 0;

    display: grid;

    grid-template-areas:
    "area1 area2 area3";

    grid-template-columns: .8fr 1fr 1fr;

    grid-template-rows: repeat(1, auto);

    grid-auto-flow: row;

    
    gap: 50px 20px;

    @media (max-width: 2000px) {

        width: 80%;
        padding-left: 100px;

    }

    @media (max-width: 1700px) {

        width: 90%;
        

    }

     @media (max-width: 1400px) {

        width: 100%;

        padding-left: 150px;
        

    }

    

    @media (max-width: 1050px) {
        
        padding-left: 100px;
        

    }

    @media (max-width: 900px) {
        
        padding-left: 70px;
        

    }

    @media (max-width: 800px) {
        
        grid-template-areas:
        "area1 area2";

        grid-template-columns: 1fr 1fr;

        grid-template-rows: repeat(1, auto);
        
        padding: 80px 20px 80px 120px;

    }

    @media (max-width: 750px) {
        
        padding-left: 100px;
        

    }

    @media (max-width: 650px) {
        
        padding-left: 60px;
        

    }

    @media (max-width: 550px) {
        
        padding-left: 50px;
        

    }

    @media (max-width: 500px) {
        
        grid-template-areas:
        "area1";

        grid-template-columns: 1fr;

        grid-template-rows: repeat(1, auto);
        
        padding: 50px 20px 50px 100px;

        gap: 20px 20px;

    }

    @media (max-width: 400px) {
               
       padding-left: 50px;
     

    }

   

`;



const StyledListItem = styled.li`

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    font-size: 24px;

    font-weight: 700;

    color: ${props => props.theme.colorMainBlueDark};

    grid-row: auto;

    grid-column: auto;

     @media (max-width: 1400px) {

        font-size: 20px;
        

    }

     @media (max-width: 550px) {

        font-size: 16px;
        

    }

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
