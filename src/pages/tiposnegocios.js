import React,{ useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Selector from '../components/TipoNegocio/Selector';
import TipoNegocio from '../components/TipoNegocio/TipoNegocio';
import Gototop from '../components/Gototop/Gototop';


const StyledContainer = styled.section`

    width: 100%;

    display: flex;

    justify-content: center;

    padding: 80px 0 100px 0;

    position: relative;

`;



function Tiposnegocios() {

    const [selectedItem, setSelectedItem] = useState('restaurant');


    const handleSelected = index => {

        switch (index) {
            case 0:
                
                setSelectedItem('restaurant');

                break;
        
            case 1:
                
                setSelectedItem('hardwarestore');
                    
                break;

            case 2:
                
                setSelectedItem('liquorstore');
                    
                break;
            case 3:
                
                setSelectedItem('shops');
                        
                break;            
                
            default:

                setSelectedItem('restaurant');
                break;
        }
    };
    

    return (
        <Layout selectedIndex={0}>
            <StyledContainer>
                <Selector handleSelectedItem={handleSelected} />
                <TipoNegocio type={selectedItem} />                
            </StyledContainer>
            <Gototop scrollPointId="home-scroll-point" />            
        </Layout>
    );
}

export default Tiposnegocios;
