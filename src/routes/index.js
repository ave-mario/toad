import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import HiddenRoute from './HiddenRoute';
import LoginPage from '../components/LoginPage';
import MainPage from '../components/MainPage';
import WelcomeRoute from './WelcomeRoute';
import HiddenRoute from './HiddenRoute';
import PrivateRoute from './PrivateRoute';

const { Creators } = authActions;
class Routes extends Component {
  componentDidMount() {
    const { load } = this.props;
    load();
  }

  render() {
    const { isRequesting } = this.props;
    return (
      <>
        {!isRequesting && (
          <Switch>
            <PrivateRoute exact path="/" component={Layout(MainPage)} />
            <HiddenRoute exact path="/login" component={LoginPage} />
            <WelcomeRoute exact path="/welcome" component={WelcomePage} />
            <PrivateRoute
              exact
              path="/rooms-services"
              component={Layout(AdditionPage)}
            />
          </Switch>
        )}
      </>
    );
  }
}

Routes.propTypes = {
  load: PropTypes.func.isRequired,
  isRequesting: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isRequesting: state.auth.isRequesting,
  isAuth: state.auth.isAuthenticated
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
