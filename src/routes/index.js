import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import MainPage from '../components/MainPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
}
export default Routes;
