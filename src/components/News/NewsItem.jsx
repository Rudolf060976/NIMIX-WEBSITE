import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const StyledContainer = styled.li`

    position: relative;

    max-width: 450px;

    border-radius: 10px;

    background-color: white;

    height: 620px;

    box-shadow: 5px 5px 10px black;

    border: 1px solid white;

`;

const StyledLink = styled.a`

    position: absolute;
    bottom: 5%;
    right: 5%;
    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;
    font-size: 16px;

    color: ${props => props.theme.colorMainBlueDark};
    text-decoration: none;

    &:hover {

        cursor: pointer;
        color: ${props => props.theme.colorMainBlueClear1};
        
        text-decoration: underline;

    }
    
`;

const StyledImage = styled.img`

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`;

const StyledContentContainer = styled.div`

    padding: 10px 20px;


`;

const StyledTitle = styled.h6`

   padding: 20px 0;

   font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

   color: ${props => props.theme.colorMainBlueDark};

   transition: all .3s linear;

   cursor: pointer;

   &:hover {

        color: ${props => props.theme.colorMainBlueClear1};

        
   }

`;

const StyledContent = styled.p`

    font-size: 18px;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    padding: 10px 0 20px;

    line-height: 24px;

`;


function NewsItem({ data }) {
    return (
        <StyledContainer>
            <StyledLink>Leer más...</StyledLink>
            <StyledImage src={data.frontmatter.image} />
            <StyledContentContainer>
                <StyledTitle>{data.frontmatter.title}</StyledTitle>  
                <StyledContent>{data.frontmatter.description}</StyledContent>
            </StyledContentContainer>            
        </StyledContainer>
    );
}

export default NewsItem;
