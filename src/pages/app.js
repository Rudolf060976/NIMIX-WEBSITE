import React from 'react';
import { Router } from '@reach/router';
import Login from '../components/Login/Login';
import SignIn from '../components/SignIn/SignIn';
import Tutoriales from '../components/Tutoriales/Tutoriales';
import NotFound from '../components/NotFound/NotFound';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Redirecting from '../components/Redirecting/Redirecting';



function app() {
    return (
        <Router basepath="/app">  
            <Redirecting path="/" />            
            <PrivateRoute path="/tutoriales" component={Tutoriales} />            
            <SignIn path="/signin" />
            <Login path="/login" />  
            <NotFound path="/:route" />                  
        </Router>
    );
}

export default app;
