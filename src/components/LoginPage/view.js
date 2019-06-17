import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { Login } from './LoginForm';
import { dispatcher } from '../../config/redux.store';

class LoginPage extends Component {
  componentDidMount() {
    const { user } = this.props;
    if (user) dispatcher(push('/'));
  }

  render() {
    const { isFailed } = this.props;
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
}

LoginPage.propTypes = {
  isFailed: PropTypes.bool,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};
LoginPage.defaultProps = {
  isFailed: false,
  user: false
};
export default LoginPage;
