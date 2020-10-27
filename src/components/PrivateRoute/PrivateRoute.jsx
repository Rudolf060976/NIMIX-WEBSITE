import React from "react";

import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../Loading/Loading';


const PrivateRoute = ({ component: Component, location, ...rest }) => {
  

  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
   

  if (isLoading) return <Loading />; //IMPORTANTE!!!!! PORQUE SI SE HACE CLICK AL BACK BUTTON DEL NAVEGADOR O SI SE REFRESCA LA PAGINA, SE TIENE QUE VOLVER A CARGAR EL COMPONENTE AUTH0 WRAPPER

  if (!isAuthenticated) {
    
      
      loginWithRedirect();
            
      return null;
      
  } 

  return (<Component {...rest} />);
  
}
export default PrivateRoute;