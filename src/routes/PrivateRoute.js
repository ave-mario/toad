import { push } from 'connected-react-router';
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { dispatcher } from '../config/redux.store';

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const ComponentToRender = component;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <ComponentToRender {...props} />
        ) : (
          dispatcher(push('/login'))
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default withRouter(connect(mapStateToProps)(PrivateRoute));
