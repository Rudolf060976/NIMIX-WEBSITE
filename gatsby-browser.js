
// You can delete this file if you're not using it
import './src/globalStyles/normalize.scss';

import './src/globalStyles/bootstrapStyles.scss';

import { Auth0Provider } from "@auth0/auth0-react";

import React from 'react';

import config from './src/auth/config';




export const wrapRootElement = ({ element }) => {

   
    return (
        <Auth0Provider
            domain={config.domain}
            clientId={config.clientId}               
            redirectUri={window.location.origin + '/app/clientes'} // ESTA ES LA UBICACION DONDE ME ENCUENTRO CADA VEZ QUE HAGO UNA LLAMADA A loginWithRedirect Y ASI AUTH0 SABE A DONDE REGRESAR AL TERMINAR DE AUTENTICAR
            
        >
            {element}
        </Auth0Provider>
    );

};