import React from 'react';
import { withFormik } from 'formik';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Header, Main, Footer, ErrorText } from 'elements';
import { dispatcher } from 'config/redux.store';
import authActions from 'actions/auth.actions';
import { addResource } from 'config/localize';
import { loginValidationSchema } from 'validation/auth.validation';
import ErrorBar from '../ErrorBar';
import { dispatcher } from '../../config/redux.store';
import authActions from '../../actions/auth.actions';
import { addResource } from '../../config/localize';
import { loginValidationSchema } from '../../config/validation.schemas';
import {
  SubmitButton,
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginSubTitle
} from './elements/login.form';
import localization from './localize.login';

addResource('LoginForm', localization);

const { Creators } = authActions;

export const handleSubmit = values => {
  dispatcher(Creators.loginRequest(values.email, values.password));
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
    isFailed,
    t
  } = props;
  return (
    <LoginForm onSubmit={submit}>
      <Header>
        <LoginTitle>{t('labels.title')}</LoginTitle>
        <LoginSubTitle>{t('labels.signIn')}</LoginSubTitle>
      </Header>
      <Main>
        <LoginInput
          id="emailInput"
          className="emailInput"
          type="text"
          name="email"
          placeholder={t('labels.email')}
          onChange={handleChange}
          border={errors.email && touched.email && '1px solid red'}
          value={values.email}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
        <LoginInput
          className="passwordInput"
          type="password"
          name="password"
          placeholder={t('labels.password')}
          onChange={handleChange}
          border={errors.password && touched.password && '1px solid red'}
          value={values.password}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <ErrorText>{errors.password}</ErrorText>
        )}
        <ErrorBar />
      </Main>
      <Footer>
        <SubmitButton
          className="submitButton"
          type="submit"
          disabled={isSubmitting && !isFailed}
        >
          {t('buttons.submit')}
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
  isFailed: PropTypes.bool,
  t: PropTypes.func.isRequired
};
MyFormInner.defaultProps = {
  isFailed: false
};

export const Login = withFormik({
  mapPropsToValues,
  validationSchema: loginValidationSchema,
  handleSubmit
})(withTranslation('LoginForm')(MyFormInner));
