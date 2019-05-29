import React from 'react';
import Routes from '../routes';
import store from '../config/redux.store';
import * as Types from '../actions/types';

class App extends React.Component {
  componentDidMount() {
    store.dispatch({ type: Types.LOAD_USER_REQUEST });
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
