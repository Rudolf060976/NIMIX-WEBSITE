import React from 'react';
import { Router } from '@reach/router';
import Clientes from '../components/Clientes/Clientes';
import NotFound from '../components/NotFound/NotFound';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import LoadingPage from '../components/LoadingPage/LoadingPage';


function app() {
    return (
        <Router basepath="/app">  
            <LoadingPage path="/" />
            <PrivateRoute path="/clientes" component={Clientes} />                        
            <NotFound path="/:route" />                  
        </Router>
    );
}

export default app;
