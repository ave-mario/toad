import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPage from '../components/RegisterPage';
import LoginPage from '../components/LoginPage/view';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  );
}
export default Routes;
