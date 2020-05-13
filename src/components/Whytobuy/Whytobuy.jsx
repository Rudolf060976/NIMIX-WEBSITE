import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import WhytobuyItem from './WhytobuyItem';



const StyledContainer = styled.section`

    width: 100%;

    padding: 50px 0;


`;

const StyledTitle = styled.h3`

    width: 100%;

    text-align: center;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    color: ${props => props.theme.colorMainBlueDark};



`;

const StyledList = styled.ul`

    width: 80%;
    margin: 0 auto;
    list-style-type: none;

    display: grid;

    grid-template-areas:
    "area1 ..."
    "...   area2"
    "area3 ..."
    "...   area4"
    "area5 ...";

    grid-template-columns: 1fr 1fr;

    grid-template-rows: repeat(5, auto);    

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
