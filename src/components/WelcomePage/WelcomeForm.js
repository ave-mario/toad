import React from 'react';
import { withFormik } from 'formik';
import { string, object } from 'yup';
import PropTypes from 'prop-types';
import { Header, Main, Footer, ErrorText } from '../../elements';
import { dispatcher } from '../../config/redux.store';
import authActions from '../../actions/auth.actions';
import reg from '../../config/regex';
import {
  SubmitButton,
  WelcomeForm,
  WelcomeInput,
  WelcomeTitle,
  WelcomeSubTitle
} from './elements/welcome.form';

const { Creators } = authActions;

export const validationSchema = object().shape({
  password: string()
    .required('password is required')
    .matches(reg.password, 'The password cannot contain spaces')
});

export const handleSubmit = (values, { props }) => {
  const { token } = props;
  dispatcher(Creators.createPasswordRequest(values.password, token));
};

export const mapPropsToValues = () => ({
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
    isFailed,
    name
  } = props;
  return (
    <WelcomeForm onSubmit={submit}>
      <Header>
        <WelcomeTitle>Welcome{name && `, ${name}`}</WelcomeTitle>
        <WelcomeSubTitle>Please, create a password</WelcomeSubTitle>
      </Header>
      <Main>
        <WelcomeInput
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
          CREATE
        </SubmitButton>
      </Footer>
    </WelcomeForm>
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
  isFailed: PropTypes.bool,
  name: PropTypes.string
};
MyFormInner.defaultProps = {
  isFailed: false,
  name: ''
};

export const Welcome = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit
})(MyFormInner);
