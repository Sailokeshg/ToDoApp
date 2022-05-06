import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const history = useNavigate();

  if (!authState) {
    return <div>Loading...</div>;
  }

  const button = authState.isAuthenticated ? (
    <button
      onClick={() => {
        oktaAuth.signOut();
      }}
    >
      Logout
    </button>
  ) : (
    <button
      onClick={() => {
        history("/login");
      }}
    >
      Login
    </button>
  );

  return (
    <div style={{justifyContent:"space-between"}}>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/protected">Protected</Link>
      <br />
      {button}
    </div>
  );
};
export default Home;
