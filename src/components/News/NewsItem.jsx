import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const StyledContainer = styled.li`

    position: relative;

    max-width: 450px;

    border-radius: 10px;

    background-color: white;

    height: 640px;

    

    border: 1px solid white;

    grid-row: auto;

    grid-column: auto;


    &:hover {

        box-shadow: 5px 5px 10px black;


    }

     @media (max-width: 1650px) {

        height: 600px;        

    }    

    @media (max-width: 750px) {

        height: 580px;        

    }    

    @media (max-width: 400px) {

        height: 560px;        

    }    

     @media (max-width: 300px) {

        height: 620px;        

    }    

    

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

      @media (max-width: 1650px) {

        font-size: 14px;

    }

    @media (max-width: 950px) {

        font-size: 12px;

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

   font-size: 2rem;

   font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

   color: ${props => props.theme.colorMainBlueDark};

   transition: all .3s linear;

   cursor: pointer;

   line-height: 30px;

   &:hover {

        color: ${props => props.theme.colorMainBlueClear1};

        
   }

    @media (max-width: 1500px) {

        font-size: 2.4rem;
        line-height: 26px;

    }

     @media (max-width: 1000px) {

        font-size: 2.8rem;

    }

     @media (max-width: 400px) {

        padding: 10px 0;

    }

`;

const StyledContent = styled.p`

    font-size: 16px;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma;

    padding: 10px 0 20px;

    line-height: 24px;

    @media (max-width: 1650px) {

        font-size: 14px;

    }

     @media (max-width: 400px) {

        font-size: 12px;

    }
    
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
