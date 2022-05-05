import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Home from "./okta/Home";
import SignIn from "./okta/SignIn";
import Protected from "./okta/Protected";

const AppWithRouterAccess = () => {
  const navigate = useNavigate();
  const onAuthRequired = () => {
    navigate("/login");
  };

  const oktaAuth = new OktaAuth({
    issuer: "https://dev-65796340.okta.com",
    clientId: "0oa4vwulamD8YMVbs5d7",
    redirectUri: `http://localhost:3000/home`,
    
    pkce: true,
  });

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: string | undefined) => {
    navigate(toRelativeUrl(originalUri, window.location.origin), {
      replace: true,
    });
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/protected"  element={<Protected/>} />
        <Route path="/login"  element={() => <SignIn />} />
        <Route path="/login/callback" element={LoginCallback} />
      </Routes>
    </Security>
  );
};
export default AppWithRouterAccess;
