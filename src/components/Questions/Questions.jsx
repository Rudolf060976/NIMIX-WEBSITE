import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledContainer = styled.div`

    width: 100%;

    padding-bottom: 50px;

`;

const StyledCenter = styled.div`

    width: 75%;

    margin: 0 auto;

     @media (max-width: 1400px) {

        width: 80%;

    }


`;

const StyledList = styled.ul`

    width: 100%;

    list-style-type: none;
    

`;


const StyledListItem = styled.li`

    padding: 30px 0;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma; 

    color: ${props => props.theme.colorMainWhite};

    font-size: 1.4rem;

    line-height: 2.8rem;

    letter-spacing: 1px;

    @media (max-width: 1300px) {

        font-size: 1.8rem;

    }

`;

const StyledQuestionTitle = styled.p`

    padding-bottom: 10px;


`;

const StyledQuestionAnswer = styled.p`




`;


const StyledSpan = styled.span`


    color: ${props => props.theme.colorMainYellow};

    margin-right: 15px;

    @media (max-width: 500px) {

        margin-right: 5px;

    }

`;



function Questions({ questionsList }) {

    const dataList = questionsList.map(item => {

        return (
            <StyledListItem key={item.question} >                        
                <StyledQuestionTitle><StyledSpan><FontAwesomeIcon icon="angle-right" size="lg" /></StyledSpan>{item.question}</StyledQuestionTitle>
                <StyledQuestionAnswer>{item.answer}</StyledQuestionAnswer>
            </StyledListItem>
        );

    });


    return (
        <StyledContainer>
            <StyledCenter>
                <StyledList>
                    {dataList}
                </StyledList>
            </StyledCenter>
        </StyledContainer>
    );
}

export default Questions;
