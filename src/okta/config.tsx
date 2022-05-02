export default {
    oidc: {
      issuer: "https://dev-65796340.okta.com",
      clientId: "0oa4vwulamD8YMVbs5d7",
      scopes: ["openid", "profile", "email"],
      redirectUri: `http://localhost:3000/login/callback`,
      pkce: true,
      disableHttpsCheck: true,
    },
    widget: {
      issuer: "https://dev-65796340.okta.com",
      clientId: "0oa4vwulamD8YMVbs5d7",
      redirectUri: `http://localhost:3000/login/callback`,
      scopes: ["openid", "profile", "email"],
      useInteractionCodeFlow: true,
    },
  };
  