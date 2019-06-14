import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import MainPage from '../components/MainPage';
import WelcomePage from '../components/WelcomePage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/welcome" component={WelcomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
}
export default Routes;
