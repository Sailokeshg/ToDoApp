import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './loginform/SignInForm';
import { useOktaAuth } from '@okta/okta-react';

const SignIn = () => {
  const { authState } = useOktaAuth();

  if (!authState) {
    return <div>Loading...</div>;
  }
  return authState.isAuthenticated ?
    <Link to={{ pathname: '/' }}/> :
    <SignInForm />;
};

export default SignIn;
