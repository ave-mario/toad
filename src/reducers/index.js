import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import testReducer from './test.reducer';
import history from '../config/browser.history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  test: testReducer
});

export default rootReducer;
