import React from 'react';

type LoginDisplayProps = {
  isLoggedIn: boolean;
  username: string;
};

function LoginDisplay({ isLoggedIn, username }: LoginDisplayProps) {
  return <div>{isLoggedIn ? `Welcome ${username}!` : 'Please Login'}</div>;
}

export default LoginDisplay;
