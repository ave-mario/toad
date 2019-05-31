import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './auth.reducer';
import history from '../config/browser.history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer
});

export default rootReducer;
