import { Auth0Provider }  from './src/auth/react-auth0-wrapper';
import config from './src/auth/config.json';

import React from 'react';
import { navigate } from 'gatsby';

const onRedirectCallback = appState => {
    navigate(appState && appState.targetUrl
        ? appState.targetUrl
        : null
    );
   /* history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    ); */
  };


export const wrapRootElement = ({ element }) => {

    return (
        <Auth0Provider
            domain={config.domain}
            client_id={config.clientId}               
            redirect_uri={} // ESTA ES LA UBICACION DONDE ME ENCUENTRO CADA VEZ QUE HAGO UNA LLAMADA A loginWithRedirect Y ASI AUTH0 SABE A DONDE REGRESAR AL TERMINAR DE AUTENTICAR
            onRedirectCallback={onRedirectCallback}      //  PERMITE REDIRECCIONAR DESPUES DE AUTENTICAR AL SITIO DONDE ME ENCONTRABA ANTES DE PASAR A AUTH0
        >
            {element}
        </Auth0Provider>
    );

};
