import React, { useState } from 'react';
import Layout from "../layout";
import styled from 'styled-components';
import Selector from './Selector';

const StyledContainer = styled.section`

    width: 100%;

    display: flex;

    justify-content: center;

    padding: 80px 0 100px 0;

    position: relative;

    height: 500px;

    @media(max-width: 1300px) {

       padding-top: 150px;

    }

    @media(max-width: 1000px) {

       padding-top: 190px;

    }

     @media(max-width: 700px) {

       padding-bottom: 0;

    }

    @media(max-width: 500px) {

       padding-top: 140px;

    }

     @media(max-width: 400px) {

       padding-top: 170px;

    }
    

`;



function Clientes() {
   
    
    const [selectedItem, setSelectedItem] = useState('tutoriales');


    const handleSelected = index => {

        switch (index) {
            case 0:
                
                setSelectedItem('tutoriales');

                break;
        
            case 1:
                
                setSelectedItem('servicios');
                    
                break;
                
            default:

                setSelectedItem('tutoriales');
                break;
        }
    };
    

    return (
        <Layout selectedIndex={4} >     
            <StyledContainer>
                <Selector handleSelectedItem={handleSelected} />

            </StyledContainer>                   
        </Layout>
    );
}

export default Clientes;