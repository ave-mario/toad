import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import postReducer from './posts.reducer';
import authReducer from './auth.reducer';
import history from '../history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  posts: postReducer,
  auth: authReducer
});

export default rootReducer;
