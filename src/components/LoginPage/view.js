/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { Login } from './LoginForm';

function LoginPage(props) {
  const { isFailed } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <Login isFailed={isFailed} />
    </div>
  );
}

LoginPage.propTypes = {
  isFailed: PropTypes.bool
};
LoginPage.defaultProps = {
  isFailed: false
};
export default LoginPage;
