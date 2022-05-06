/* eslint-disable import/no-anonymous-default-export */
export default {
  oidc: {
    issuer: "https://dev-65796340.okta.com/oauth2/default",
    clientId: "0oa4vwulamD8YMVbs5d7",
    scopes: ["openid", "profile", "email"],
    redirectUri: `http://localhost:3000/login/callback`,
    pkce: true,
    disableHttpsCheck: true,
  },
  widget: {
    issuer: "https://dev-65796340.okta.com/oauth2/default",
    clientId: "0oa4vwulamD8YMVbs5d7",
    redirectUri: `http://localhost:3000/login/callback`,
    scopes: ["openid", "profile", "email"],
    useInteractionCodeFlow: true,
    logo: "https://assets.website-files.com/5e700f53a406cc1c7cd6a814/5e700f53a406cc2ae8d6a892_zemoso_logo.png",
    logoText: "Zemoso",
    brandName: "Zemoso",
    i18n: {
      en: {
        "primaryauth.title": "Sign in to Zemoso",
        "primaryauth.submit": "Sign In",
        "primaryauth.username.placeholder": "Email",
        "password.reset.title.generic": "Reset your zemoso password",
      },
    },
    features: {
      showPasswordToggleOnSignInPage: true,
      hideSignOutLinkInMFA: false,
      rememberMe: true,
      autoFocus: true,
    },

    helpLinks: {
      custom: [
        {
          text: "About us",
          href: "https://www.zemosolabs.com/",
          target: "_blank",
        },
      ],
    },
  },
};
