import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import axios from 'axios';
import store from './config/redux.store';
import App from './components/App';
import history from './config/browser.history';

export default history;
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
