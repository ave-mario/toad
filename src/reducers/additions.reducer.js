import { createReducer } from 'reduxsauce';
import Actions from '../actions/addition.actions';

const { Types } = Actions;
const INITIAL_STATE = {
  docs: [],
  total: 5,
  limit: 10,
  page: 1,
  pages: 1
};

const loadSuccess = (state = INITIAL_STATE, { payload }) => {
  return {
    ...state,
    ...payload
  };
};

export const HANDLERS = {
  [Types.LOAD_ADDITION_LIST_SUCCESS]: loadSuccess
};

const additionReducer = createReducer(INITIAL_STATE, HANDLERS);

export default additionReducer;
