import React from "react";
import { Navigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const PrivateRoute = ({ children }:any) => {
    const { authState } :any = useOktaAuth();
    
    return authState.isAuthenticated  ? children : <Navigate to="/" />;
  }

export default PrivateRoute;