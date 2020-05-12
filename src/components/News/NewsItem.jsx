import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.li`

    max-width: 450px;

`;

const StyledImage = styled.img`



`;

const StyledContentContainer = styled.div`

    padding: 10px 10px;


`;

const StyledTitle = styled.h4`

   padding: 10px 0;


`;

const StyledContent = styled.p`

    font-size: 18px;

`;


function NewsItem({ data }) {
    return (
        <StyledContainer>
            <StyledImage src={data.frontmatter.image} />
            <StyledContentContainer>
                <StyledTitle>{data.frontmatter.title}</StyledTitle>  
                <StyledContent>{data.frontmatter.description}</StyledContent>
            </StyledContentContainer>            
        </StyledContainer>
    );
}

export default NewsItem;
