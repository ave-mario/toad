import React from 'react';
import Routes from '../routes';
import store from '../config/redux.store';
import authActions from '../actions/auth.actions';

const { Creators } = authActions;
class App extends React.Component {
  componentDidMount() {
    store.dispatch(Creators.loadRequest());
  }

  render() {
    return (
      <>
        <Routes />
      </>
    );
  }
}
export default App;
