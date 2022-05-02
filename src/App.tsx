import React from "react";
import "./App.css";
import config from "./okta/config";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./okta/Home";
import Protected from "./okta/Protected";
import Login from "./okta/Login";
import {  Route, Routes } from "react-router-dom";
import TodoApp from "./components/pages/MainPage";
import ArchivesPage from "./components/pages/archives";
import { useNavigate } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security, LoginCallback } from "@okta/okta-react";

const oktaAuth = new OktaAuth(config.oidc);

function App() {
  const navigate = useNavigate();

  const customAuthHandler = () => {
    navigate("/login");
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    navigate(toRelativeUrl(originalUri || "", window.location.origin), {
      replace: true,
    });
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/callback" element={LoginCallback} />

        <Route path="/home" element={<TodoApp/>}></Route>
        <Route path="/archive" element={<ArchivesPage />}></Route>
      </Routes>
    </Security>
  );
}

export default App;
