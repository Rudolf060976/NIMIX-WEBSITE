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

    padding: 50px 0 20px 0;

    letter-spacing: 3px;

    font-family: Roboto, sans-serif, Verdana, Geneva, Tahoma; 

    font-size: 3.4rem;

`;



function TipoNegocio({ type }) {

   
    const data = useStaticQuery(mainQuery);

    let imagesList = null;

    let title = null;

    let functionsList = null;

    let mainTitle = null;

    switch (type) {
        case "restaurant":
            mainTitle= "Restaurantes"
            imagesList = data.allRestaurantJson.nodes[0].imageslist;
            title = data.allRestaurantJson.nodes[0].title;
            functionsList = data.allRestaurantJson.nodes[0].functions;
        
            break;
        case "hardwarestore":
            mainTitle= "Ferreterías"
            imagesList = data.allHardwarestoreJson.nodes[0].imageslist;
            title = data.allHardwarestoreJson.nodes[0].title;
            functionsList = data.allHardwarestoreJson.nodes[0].functions;
        
            break;
        
        case "liquorstore":
            mainTitle= "Licorerías y Bodegones"
            imagesList = data.allLiquorstoreJson.nodes[0].imageslist;
            title = data.allLiquorstoreJson.nodes[0].title;
            functionsList = data.allLiquorstoreJson.nodes[0].functions;
        
            break;

        case "shops":
            mainTitle= "Tiendas y Franquicias"
            imagesList = data.allShopsJson.nodes[0].imageslist;
            title = data.allShopsJson.nodes[0].title;
            functionsList = data.allShopsJson.nodes[0].functions;

            break;
        default:
            mainTitle= "Tiendas y Franquicias"
            imagesList = data.allRestaurantJson.nodes[0].imageslist;
            title = data.allRestaurantJson.nodes[0].title;
            functionsList = data.allRestaurantJson.nodes[0].functions;

            break;
    }    


    return (
        <StyledContainer>
            <StyledTitle>{mainTitle}</StyledTitle>
            <SmallGallery imagesArray={imagesList} />
            <Content title={title} functionsList={functionsList} />   
        </StyledContainer>
    );
}

export default TipoNegocio;
