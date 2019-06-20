import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from 'config/browser.history';

const HiddenRoute = ({ component, isAuthenticated, ...rest }) => {
  const ComponentToRender = component;

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? <ComponentToRender {...props} /> : history.goBack()
      }
    />
  );
};

HiddenRoute.propTypes = {
  component: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default withRouter(connect(mapStateToProps)(HiddenRoute));
