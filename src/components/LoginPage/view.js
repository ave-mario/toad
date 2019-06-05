/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Login } from './LoginForm';

export const fakeValidEmail = 'vidgf@sdf.sfn';
export const fakeValidPassword = '12345QWE';

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
        <Login />
      </div>
    );
  }
}

// LoginPage.propTypes = {
//   login: PropTypes.func.isRequired
// };
export default LoginPage;
