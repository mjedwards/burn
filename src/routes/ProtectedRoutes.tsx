import * as React from 'react';
import {Redirect, Route} from 'react-router';
import { RouteProps } from 'react-router-dom';


interface ProtectedRouteProps extends RouteProps {
  isUserAuth: boolean;
}

const ProtectedRoute = ({ isUserAuth, ...rest}: ProtectedRouteProps) => {
  if (isUserAuth) {
    return <Route {...rest} />
  }
  return <Redirect to="/login" /> 
}

export default ProtectedRoute