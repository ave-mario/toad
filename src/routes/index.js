import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../components/LoginPage';
import MainPage from '../components/MainPage';
import WelcomePage from '../components/WelcomePage';
import authActions from '../actions/auth.actions';
import { Loader } from '../elements';

const { Creators } = authActions;
class Routes extends Component {
  componentDidMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { isRequesting } = this.props;
    return (
      <Switch>
        {isRequesting ? (
          <Loader />
        ) : (
          <>
            <Route exact path="/welcome" component={WelcomePage} />
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/" component={MainPage} />
          </>
        )}
      </Switch>
    );
  }
}

Routes.propTypes = {
  load: PropTypes.func.isRequired,
  isRequesting: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isRequesting: state.auth.isRequesting
});
const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(Creators.loadRequest());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
