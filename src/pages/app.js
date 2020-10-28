import React from 'react';
import { Router } from '@reach/router';
import Clientes from '../components/Clientes/Clientes';
import NotFound from '../components/NotFound/NotFound';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Loading from '../components/Loading/Loading.jsx';


function app() {
    return (
        <Router basepath="/app">  
            <Loading path="/" />
            <PrivateRoute path="/clientes" component={Clientes} />                        
            <NotFound path="/:route" />                  
        </Router>
    );
}

export default app;
