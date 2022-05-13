import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "../loginform/styles.css";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log("submitted");
    const thisForm: any = document.getElementById("signup-form");
    thisForm.addEventListener("submit", async function (e: any) {
      e.preventDefault();
      const formData = new FormData(thisForm).entries();
      const response = await fetch(
        "https://dev-65796340.okta.com/api/v1/users?limit=3",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "SSWS 00Xa3d_i5JP1Bd2vw4pp1mzifHKnKhTKLv_BxI9tR7",
          },
        }
      );
      const result = await response.json();
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      console.log(result);
    });
  };
  return (
    <div className="container" id="container">
      <div className="form-container log-in-container">
        <form action="#" id="signup-form" onSubmit={handleSubmit} method="GET">
          <h1>Sign up</h1>
          <div className="social-container">
            <div>
              <a href="https://dev-65796340.okta.com/oauth2/v1/authorize?idp=0oa4zddpnd7m7Y7cI5d7&client_id=0oa4vwulamD8YMVbs5d7&response_type=id_token&response_mode=fragment&scope=openid%20email&redirect_uri=http://localhost:3000/login/callback&state=WM6D&nonce=YsG76jo">
                <FaFacebook />
              </a>
            </div>
            <div>
              <a href="https://dev-65796340.okta.com/oauth2/v1/authorize?idp=0oa4zcab8u9wsKzQT5d7&client_id=0oa4vwulamD8YMVbs5d7&response_type=id_token&response_mode=fragment&scope=openid%20email&redirect_uri=http://localhost:3000/login/callback&state=WM6D&nonce=YsG76jo">
                <FaGoogle />
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
            type="text"
            onChange={handlePasswordChange}
            placeholder="firstname"
            value={password}
            required
          />

          <button type="submit">Sign up</button>
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

export default SignUpForm;
