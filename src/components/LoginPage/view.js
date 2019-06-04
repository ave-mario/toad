/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { string, object } from 'yup';
import Login from './Login';

export const fakeValidEmail = 'vidgf@sdf.sfn';
export const fakeValidPassword = '12345QWE';

const validationSchema = object().shape({
  email: string()
    .email()
    .required('email is required'),
  password: string()
    .required('password is required')
    .matches(/^[\S]{5,18}$/, 'The password cannot contain spaces')
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLogged: false
    };
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={values => {
            const { login } = this.props;
            if (
              values.email === fakeValidEmail &&
              values.password === fakeValidPassword
            ) {
              this.setState({ isLogged: true });
            }
            login(values.email, values.password);
            this.setState({ email: '', password: '' });
          }}
          render={props => <Login {...props} />}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired
};
export default LoginPage;
