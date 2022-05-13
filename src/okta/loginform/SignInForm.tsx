import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const { oktaAuth } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    console.log("submit");
    e.preventDefault();
    oktaAuth
      .signInWithCredentials({ username, password })
      .then((res) => {
        const sessionToken: any = res.sessionToken;
        setSessionToken(sessionToken);
        // sessionToken is a one-use token, so make sure this is only called once
        oktaAuth.signInWithRedirect({ sessionToken });
      })
      .catch((err) => console.log("Found an error", err));
  };

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  if (sessionToken) {
    // Hide form while sessionToken is converted into id/access tokens
    return null;
  }

  const handleSocialLogin = (e: any) => {
    console.log("social login submitted");
    e.preventDefault();
    oktaAuth.token
      .parseFromUrl(
        // Use a custom IdP for social authentication

        `https://dev-65796340.okta.com/oauth2/v1/authorize?idp=0oa4zddpnd7m7Y7cI5d7&client_id=0oa4vwulamD8YMVbs5d7&response_type=id_token&response_mode=fragment&scope=openid%20email&redirect_uri=http://localhost:3000/login/callback&state=8rFzn3MH5q&nonce=51GePTswrm`
      )
      .then(function (res) {
        var state = res.state; // passed to getWithRedirect(), can be any string
        var tokens = res.tokens;
        oktaAuth.tokenManager.setTokens(tokens);
        const url: any = sessionStorage.getItem("url");
        sessionStorage.removeItem("url");

        // Restore URL
        window.location.assign(url);

        // Redirect to Okta
        oktaAuth.token.getWithRedirect({
          responseType: "id_token",
        });
      })
      .catch(function (err) {
        console.log("Found an error", err);
      });
  };

  const handleSignup = (e: any) => {
    console.log("signup");
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <div className="container" id="container">
      <div className="form-container log-in-container">
        <form action="#" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="social-container">
            <div>
              <a href="https://dev-65796340.okta.com/oauth2/v1/authorize?idp=0oa4zddpnd7m7Y7cI5d7&client_id=0oa4vwulamD8YMVbs5d7&response_type=id_token&response_mode=fragment&scope=openid%20email&redirect_uri=http://localhost:3000/login/callback&state=WM6D&nonce=YsG76jo">
                <FaFacebook />
              </a>
            </div>
            <div>
              <a href="https://dev-65796340.okta.com/oauth2/v1/authorize?idp=0oa4zcab8u9wsKzQT5d7&client_id=0oa4vwulamD8YMVbs5d7&response_type=id_token&response_mode=fragment&scope=openid%20email&redirect_uri=http://localhost:3000/login/callback&state=WM6D&nonce=YsG76jo">
              <FaGoogle  />
              </a>
            </div>
          </div>
          <span>or use your account</span>
          <input
            type="email"
            onChange={handleUsernameChange}
            placeholder="Email or Username"
            value={username}
            required
          />
          <input
            type="password"
            onChange={handlePasswordChange}
            placeholder="Password"
            value={password}
            required
          />
          <a href="#">Forgot your password?</a>
          <button>Log In</button>
          <h6>Dont have an account?</h6>
          <button onClick={handleSignup}>Sigup</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1>Zemoso Technologies</h1>
            <p>
              Zero to One Lean Acceleration <br></br>
              Helping you take ideas from Napkin to Product Market Fit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
