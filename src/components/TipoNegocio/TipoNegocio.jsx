import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import SmallGallery from '../SmallGallery/SmallGallery';
import Content from './Content';
import { rgba } from 'polished';


const mainQuery = graphql`
    query {
        allRestaurantJson {
   	        nodes {
                title
                imageslist {
                    image
                }
                functions {
                    function
                }
            }  
        }
        allHardwarestoreJson {
   	        nodes {
                title
                imageslist {
                    image
                }
                functions {
                    function
                }
            }  
        }
        allLiquorstoreJson {
   	        nodes {
                title
                imageslist {
                    image
                }
                functions {
                    function
                }
            }  
        }
        allShopsJson {
   	        nodes {
                title
                imageslist {
                    image
                }
                functions {
                    function
                }
            }  
        }
    }
`;



const StyledContainer = styled.div`


    width: 50%;

    background-color: ${props => rgba(props.theme.colorMainBlueDark,1)};

    box-shadow: 0px 0px 10px black;

    border-radius: 20px;

`;

function TipoNegocio({ type }) {

   
    const data = useStaticQuery(mainQuery);

    let imagesList = null;

    let title = null;

    let functionsList = null;

    switch (type) {
        case "restaurant":
            
            imagesList = data.allRestaurantJson.nodes[0].imageslist;
            title = data.allRestaurantJson.nodes[0].title;
            functionsList = data.allRestaurantJson.nodes[0].functions;
        
            break;
        case "hardwarestore":

            imagesList = data.allHardwarestoreJson.nodes[0].imageslist;
            title = data.allHardwarestoreJson.nodes[0].title;
            functionsList = data.allHardwarestoreJson.nodes[0].functions;
        
            break;
        
        case "liquorstore":

            imagesList = data.allLiquorstoreJson.nodes[0].imageslist;
            title = data.allLiquorstoreJson.nodes[0].title;
            functionsList = data.allLiquorstoreJson.nodes[0].functions;
        
            break;

        case "shops":

            imagesList = data.allShopsJson.nodes[0].imageslist;
            title = data.allShopsJson.nodes[0].title;
            functionsList = data.allShopsJson.nodes[0].functions;

            break;
        default:

            imagesList = data.allRestaurantJson.nodes[0].imageslist;
            title = data.allRestaurantJson.nodes[0].title;
            functionsList = data.allRestaurantJson.nodes[0].functions;

            break;
    }    


    return (
        <StyledContainer>
            <SmallGallery imagesArray={imagesList} />
            <Content title={title} functionsList={functionsList} />   
        </StyledContainer>
    );
}

export default TipoNegocio;
