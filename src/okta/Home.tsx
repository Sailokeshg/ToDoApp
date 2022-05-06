import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { Grid } from "@mui/material";

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
    <Grid container   rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
      <Link to="/home">Home</Link>
      </Grid>
      <Grid item xs={6}>
      <Link to="/protected">Protected</Link>
      </Grid>
      <Grid container item xs={12}>
      {button}
      </Grid>
    </Grid>
  );
};
export default Home;
