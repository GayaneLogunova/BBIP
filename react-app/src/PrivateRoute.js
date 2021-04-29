import React from 'react';
import { Route, Redirect } from 'react-router';

export const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("authToken") == "true" ? (
              console.log("print component"),
                <Component {...props}/>
            ) : ( 
              console.log("redirect"),
                <Redirect to='/registration'/> 
            )}
    />
  ); 
