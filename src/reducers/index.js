import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'config/browser.history';
import authReducer from './auth.reducer';
import additions from './additions.reducer';

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  additions
});

export default rootReducer;
