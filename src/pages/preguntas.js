import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { rgba } from 'polished';
import Questions from '../components/Questions/Questions';

const StyledContainer = styled.section`

    width: 100%;

    display: flex;

    justify-content: center;

    padding: 80px 0 100px 0;


`;

const InnerContainer = styled.div`

    width: 50%;

    background-color: ${props => rgba(props.theme.colorMainBlueDark,1)};

    box-shadow: 0px 0px 5px black;
    
    border-radius: 20px;

    @media(max-width: 1300px) {

        width: 80%;

    }

    @media(max-width: 1000px) {

        width: 90%;

    }

    @media(max-width: 700px) {

        width: 100%;

        border-radius: 0;

    }   


`;


const StyledTitle = styled.h5`

    width: 100%;

    color: ${props => props.theme.colorMainYellow};

    text-align: center;

    padding: 50px 0 30px 0;

    letter-spacing: 3px;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma; 

    font-size: 3.4rem;



`;



function preguntas({ data }) {

    const title = data.allQuestionsJson.nodes[0].title;

    const questionsList = data.allQuestionsJson.nodes[0].questionsList;



    return (
        <Layout selectedIndex={2}>
            <StyledContainer>
                <InnerContainer>
                    <StyledTitle>
                        {title}
                    </StyledTitle> 
                    <Questions questionsList={questionsList} />
                </InnerContainer>
            </StyledContainer>
        </Layout>
    );
}

export const query = graphql`
    query {
        allQuestionsJson {
            nodes {     
                title
                questionsList {
                    question
                    answer
                }
            }
        }
    }
`;

export default preguntas;
