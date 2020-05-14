import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import WhytobuyItem from './WhytobuyItem';



const StyledContainer = styled.section`

    width: 100%;

    padding: 50px 20px;

    @media (max-width: 500px) {

        padding: 20px 0;

    }
    
`;

const StyledTitle = styled.h3`

    width: 100%;

    text-align: center;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    color: ${props => props.theme.colorMainBlueDark};

    padding: 10px 20px;

    line-height: 42px;

    @media (max-width: 500px) {

        line-height: 30px;
        

    }
    
`;

const StyledList = styled.ul`

    width: 80%;
    margin: 0 auto;
    list-style-type: none;
    
    
    padding: 100px 20px;
    
    display: grid;
    grid-template-areas:
    "area1 ..."
    "...   area2"
    "area3 ..."
    "...   area4"
    "area5 ...";

    grid-template-columns: 1fr 1fr;

    grid-template-rows: repeat(5, auto);    

    gap: 20px 20px;

    justify-items: center;

     @media (max-width: 1850px) {

        width: 90%;

    }

     @media (max-width: 1000px) {

        width: 100%;

    }

     @media (max-width: 950px) {

        width: 100%;

        gap: 30px 0;

    }

     @media (max-width: 900px) {

        grid-template-areas:
        "area1"
        "area2"
        "area3"
        "area4"
        "area5";

        grid-template-columns: 1fr;

        grid-template-rows: repeat(5, auto);  

        padding: 50px 20px;  

    }

    @media (max-width: 500px) {

        padding: 50px 15px 50px 10px;

    }

    

`;



const FeaturesList = ({ featuresList }) => {

    return featuresList.map((feature, index) => {
        return(
            <WhytobuyItem key={index} data={feature} area={`area${index+1}`} />
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
                        description
                        image
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
