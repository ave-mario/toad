import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../elements/Title';

function LoginPage() {
  return (
    <div>
      <Title>Login Page</Title>
      <Title color="red">Login Page</Title>
      <span>Do not have account?</span>
      <Link to="register">Register here</Link>
    </div>
  );
}

export default LoginPage;
