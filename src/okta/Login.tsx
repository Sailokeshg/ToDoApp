import React from "react";
import { Link } from "react-router-dom";
import OktaSignInWidget from "./OKtaSignInWidget";
import { useOktaAuth } from "@okta/okta-react";

const Login = ({ config }: any) => {
  const { oktaAuth, authState } = useOktaAuth();
  const onSuccess = (tokens: any) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err: any) => {
    console.log("Sign in error:", err);
  };

  if (!authState) {
    return <div>Loading ... </div>;
  }

  return authState.isAuthenticated ? (
    <Link to={{ pathname: "/home" }} />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};

export default Login;
