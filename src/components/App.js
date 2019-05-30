import React from 'react';
import Routes from '../routes';
import store from '../config/redux.store';
import Actions from '../actions/test.actions';

const { Creators } = Actions;
class App extends React.Component {
  componentDidMount() {
    store.dispatch(Creators.loadUserRequest('jhb'));
    // console.log(t);
    // store.dispatch({ type: Types.LOAD_USER_REQUEST });
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
