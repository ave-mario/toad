import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from 'config/browser.history';
import services from 'services';

const WelcomeRoute = ({ component, isAuthenticated, search, ...rest }) => {
  const ComponentToRender = component;
  const { name, token } = services.queryStringService(search);
  return (
    <Route
      {...rest}
      render={props =>
        name || token ? <ComponentToRender {...props} /> : history.goBack()
      }
    />
  );
};

WelcomeRoute.propTypes = {
  search: PropTypes.string.isRequired,
  component: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  search: state.router.location.search,
  isAuthenticated: state.auth.isAuthenticated
});
export default withRouter(connect(mapStateToProps)(WelcomeRoute));
