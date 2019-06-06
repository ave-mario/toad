import React from 'react';
import { withFormik } from 'formik';
import { string, object } from 'yup';
import PropTypes from 'prop-types';
import { Header, Main, Footer, ErrorText } from '../../elements';
import store from '../../config/redux.store';
import authActions from '../../actions/auth.actions';
import reg from '../../config/regex';
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
    .matches(reg.password, 'The password cannot contain spaces')
});

export const handleSubmit = values => {
  store.dispatch(Creators.loginRequest(values.email, values.password));
};

export const mapPropsToValues = () => ({
  email: '',
  password: ''
});

export const MyFormInner = props => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit: submit,
    isSubmitting,
    isFailed
  } = props;
  return (
    <LoginForm onSubmit={submit}>
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
        {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
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
          <ErrorText>{errors.password}</ErrorText>
        )}
      </Main>
      <Footer>
        <SubmitButton
          className="submitButton"
          type="submit"
          disabled={isSubmitting && !isFailed}
        >
          SIGN IN
        </SubmitButton>
      </Footer>
    </LoginForm>
  );
};

MyFormInner.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isFailed: PropTypes.bool
};
MyFormInner.defaultProps = {
  isFailed: false
};

export const Login = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit
})(MyFormInner);
