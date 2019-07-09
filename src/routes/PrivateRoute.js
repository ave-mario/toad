import { push } from 'connected-react-router';
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { dispatcher } from 'config/redux.store';

const PrivateRoute = ({ component, tokenData, ...rest }) => {
  const ComponentToRender = component;

  return (
    <Route
      {...rest}
      render={props =>
        tokenData ? (
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
  tokenData: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  tokenData: state.auth.tokenData
});
export default withRouter(connect(mapStateToProps)(PrivateRoute));
