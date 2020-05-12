import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import moment from 'moment';
import NewsItem from './NewsItem';


const StyledContainer = styled.section`

    width: 100%;

    padding: 30px 0;

`;

const StyledTitle = styled.h1`

    width: 100%;
    text-align: center;

`;


const StyledNewsList = styled.ul`

    display: flex;

    justify-content: space-around;

    align-items: flex-start;

    padding: 30px 0;

    list-style-type: none;

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
    
            return (postDate.add(7,"days").format("X") >= today.format("X"));  // SOLO SELECCIONA LOS POSTS DE LOS ULTIMOS 7 DIAS
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
