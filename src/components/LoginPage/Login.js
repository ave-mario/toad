/* eslint-disable react/prop-types */
import React from 'react';
import { Header, Main, Footer } from '../../elements';
import {
  SubmitButton,
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginSubTitle
} from './elements/login.form';

function Login(props) {
  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <LoginForm onSubmit={handleSubmit}>
      <Header>
        <LoginTitle>Welcome to hotel management</LoginTitle>
        <LoginSubTitle>Sign in</LoginSubTitle>
      </Header>
      <Main>
        <LoginInput
          className="emailInput"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          border={errors.email && touched.email && '1px solid red'}
          value={values.mail}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div style={{ color: 'red' }}>{errors.email}</div>
        )}
        <LoginInput
          className="passwordInput"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          border={errors.password && touched.password && '1px solid red'}
          value={values.password}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div style={{ color: 'red' }}>{errors.password}</div>
        )}
      </Main>
      <Footer>
        <SubmitButton className="submitButton" type="submit">
          SIGN IN
        </SubmitButton>
      </Footer>
    </LoginForm>
  );
}

export default Login;
