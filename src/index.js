import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import store from './store';
import routes from './routes';
import './index.css';
import App from './containers/App';
import history from './history';

export default history;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
