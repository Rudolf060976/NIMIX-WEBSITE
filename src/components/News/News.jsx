import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import moment from 'moment';
import NewsItem from './NewsItem';



const StyledContainer = styled.section`

    width: 100%;

    padding: 60px 0;

    background-color: ${props => props.theme.colorMainGreenDark};

    clip-path: polygon(0% 0%, 100% 5%, 100% 100%, 0% 100%);

    @media (max-width: 750px) {

        padding-top: 100px;
        clip-path: polygon(0% 0%, 100% 2%, 100% 100%, 0% 100%);

    }

`;

const StyledTitle = styled.h3`

    width: 100%;
    text-align: center;
    color: white;
    padding: 30px 0;
    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    letter-spacing: 2px;
`;


const StyledNewsList = styled.ul`

    width: 100%;

    margin: 0 auto;

    display: grid;

    grid-template-areas:
    "area1 area2 area3 area4";
    
    grid-template-columns: 1fr 1fr 1fr 1fr;

    grid-template-rows: repeat(1, auto);    

    grid-auto-flow: row;

    gap: 20px 30px;

    padding: 30px 20px;

    list-style-type: none; 

    justify-items: center;  

    @media (max-width: 1500px) {

        grid-template-areas:
        "area1 area2";
    
        grid-template-columns: 1fr 1fr;

        grid-template-rows: repeat(1, auto);         

    }

    @media (max-width: 750px) {

        grid-template-areas:
        "area1";
    
        grid-template-columns: 1fr;

        grid-template-rows: repeat(1, auto);         
   

    }      

`;

function News() {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                nodes {
                    id
                    frontmatter {
                        title
                        date (formatString: "DD-MM-YYYY")
                        description
                        image:header_image        
                    }     
                }
            }    
        }        
    `);

        const newsArray = data.allMarkdownRemark.nodes;

        const recentNewsArray = newsArray.filter(item => {

            const postDate = moment(item.frontmatter.date,"DD-MM-YYYY");
    
            const today = moment();
    
            return (postDate.add(30,"days").format("X") >= today.format("X"));  // SOLO SELECCIONA LOS POSTS DE LOS ULTIMOS 7 DIAS
        });

        const outputArray = [];

        let count = 0;

        if (recentNewsArray.length > 4) count = 4; else count = recentNewsArray.length;


        for(let i=0; i < count; i++) {

            outputArray.push(<NewsItem key={recentNewsArray[i].id} data={recentNewsArray[i]} />);

        }
    

    return (
        <StyledContainer>
            <StyledTitle>Noticias</StyledTitle>
            <StyledNewsList>
                {outputArray}
            </StyledNewsList>
        </StyledContainer>
    );
}

export default News;
