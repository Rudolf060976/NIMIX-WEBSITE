import React, { Component } from "react";
import { navigate } from "gatsby";
import { useAuth0 } from '../../auth/react-auth0-wrapper';



const PrivateRoute = ({ component: Component, location, ...rest }) => {
  /* if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }  */

  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();

  if (loading) return <div>Loading...</div>; //IMPORTANTE!!!!! PORQUE SI SE HACE CLICK AL BACK BUTTON DEL NAVEGADOR O SI SE REFRESCA LA PAGINA, SE TIENE QUE VOLVER A CARGAR EL COMPONENTE AUTH0 WRAPPER

  if (!isAuthenticated) {

    loginWithRedirect({});

    return null;
  } 

  return (<Component {...rest} />);
  
}
export default PrivateRoute;