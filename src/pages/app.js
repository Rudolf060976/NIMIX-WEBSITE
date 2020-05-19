import React from 'react';
import { Router } from '@reach/router';
import Login from '../components/Login/Login';
import SignIn from '../components/SignIn/SignIn';
import Tutoriales from '../components/Tutoriales/Tutoriales';
import NotFound from '../components/NotFound/NotFound';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';



function app() {
    return (
        <Router basepath="/app">            
            <PrivateRoute path="/tutoriales" component={Tutoriales} />            
            <SignIn path="/signin" />
            <Login path="/login" /> 
            <NotFound default />       
        </Router>
    );
}

export default app;
