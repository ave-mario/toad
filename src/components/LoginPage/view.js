import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { Login } from './LoginForm';
import { dispatcher } from '../../config/redux.store';
import { Loader } from '../../elements';

class LoginPage extends Component {
  componentDidMount() {
    const { user, load } = this.props;
    if (user) dispatcher(push('/'));
    else load();
  }

  render() {
    const { isFailed, user } = this.props;
    console.log(user);
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        {!user && !isFailed ? <Loader /> : <Login isFailed={isFailed} />}
      </div>
    );
  }
}

LoginPage.propTypes = {
  isFailed: PropTypes.bool,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  load: PropTypes.func.isRequired
};
LoginPage.defaultProps = {
  isFailed: false,
  user: false
};
export default LoginPage;
