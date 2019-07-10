import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'config/browser.history';
import authReducer from './auth.reducer';
import additions from './additions.reducer';
import error from './error.reducer';

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  additions,
  error
});

export default rootReducer;
