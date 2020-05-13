import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.li`

    grid-area: ${props => props.area};

`;

const StyledImage = styled.img`


`;

const StyledContentContainer = styled.div`




`;

const StyledTitle = styled.h6`




`;

const StyledComment = styled.p`




`;





function WhytobuyItem({ data, area }) {
    return (
        <StyledContainer area={area}>
            <StyledImage src={data.image} />
            <StyledContentContainer>
                <StyledTitle>{data.reason}</StyledTitle>    
                <StyledComment>{data.description}</StyledComment>
            </StyledContentContainer>            
        </StyledContainer>
    );
}

export default WhytobuyItem;
