/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';
import { string, object } from 'yup';
import { Header, Main, Footer } from '../../elements';
import store from '../../config/redux.store';
import authActions from '../../actions/auth.actions';
import {
  SubmitButton,
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginSubTitle
} from './elements/login.form';

const { Creators } = authActions;

export const validationSchema = object().shape({
  email: string()
    .email()
    .required('email is required'),
  password: string()
    .required('password is required')
    .matches(/^[\S]{5,18}$/, 'The password cannot contain spaces')
});

export const handleSubmit = values => {
  store.dispatch(Creators.loginRequest(values.email, values.password));
};
export const mapPropsToValues = () => ({ email: '', password: '' });

export const MyFormInner = props => {
  const {
    login,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
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
          id="emailInput"
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
};

export const Login = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit
})(MyFormInner);
