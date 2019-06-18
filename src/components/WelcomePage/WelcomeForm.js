import React from 'react';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Header, Main, Footer, ErrorText } from '../../elements';
import { dispatcher } from '../../config/redux.store';
import authActions from '../../actions/auth.actions';
import { passwordValidationSchema } from '../../config/validation.schemas';
import ErrorBar from '../ErrorBar';
import {
  SubmitButton,
  WelcomeForm,
  WelcomeInput,
  WelcomeTitle,
  WelcomeSubTitle
} from './elements/welcome.form';
import localization from './localization.welcome';
import { addResource } from '../../config/localize';

addResource('WelcomeForm', localization);
const { Creators } = authActions;

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
    name,
    t
  } = props;
  return (
    <WelcomeForm onSubmit={submit}>
      <Header>
        <WelcomeTitle>
          {t('labels.title')}
          {name && `, ${name}`}
        </WelcomeTitle>
        <WelcomeSubTitle>{t('labels.subTitle')}</WelcomeSubTitle>
      </Header>
      <Main>
        <WelcomeInput
          className="passwordInput"
          type="password"
          name="password"
          placeholder={t('placeholders.password')}
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
  t: PropTypes.func.isRequired,
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
  validationSchema: passwordValidationSchema,
  handleSubmit
})(withTranslation('WelcomeForm')(MyFormInner));
