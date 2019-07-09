import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from 'components/HOC';
import WelcomePage from 'components/WelcomePage';
import AdditionPage from 'components/AdditionPage';
import PrivateRoute from './PrivateRoute';
import HiddenRoute from './HiddenRoute';
import LoginPage from '../components/LoginPage';
import MainPage from '../components/MainPage';
import authActions from '../actions/auth.actions';

const { Creators } = authActions;
class Routes extends Component {
  componentDidMount() {
    const { load } = this.props;
    load();
  }

  render() {
    return (
      <>
        <Switch>
          <PrivateRoute exact path="/" component={Layout(MainPage)} />
          <HiddenRoute exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/welcome" component={WelcomePage} />
          <PrivateRoute
            exact
            path="/rooms-services"
            component={Layout(AdditionPage)}
          />
        </Switch>
      </>
    );
  }
}

Routes.propTypes = {
  load: PropTypes.func.isRequired
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
