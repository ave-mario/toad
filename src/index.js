import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ConnectedRouter as Router } from 'connected-react-router';
import axios from 'axios';
import store from './config/redux.store';
import api from './config/api';
import App from './components/App';
import i18next from './config/localize';
import history from './config/browser.history';

export default history;

axios.defaults.baseURL = `http://localhost:${api.port}/${api.route}/`;
axios.default.timeout = api.timeout;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
