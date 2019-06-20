import { createReducer } from 'reduxsauce';
import Actions from 'actions/addition.actions';

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

const changeSuccess = (state = INITIAL_STATE, { id, name, price }) => {
  const docs = state.docs.map(doc => {
    const { _id } = doc;
    if (_id === id) return { ...doc, name, price };
    return doc;
  });
  return {
    ...state,
    docs
  };
};

const addSuccess = (state = INITIAL_STATE, { payload }) => {
  const docs = state.docs.concat({ ...payload });
  return {
    ...state,
    docs
  };
};

export const HANDLERS = {
  [Types.LOAD_ADDITION_LIST_SUCCESS]: loadSuccess,
  [Types.CHANGE_ADDITION_SUCCESS]: changeSuccess,
  [Types.SAVE_ADDITION_SUCCESS]: addSuccess
};

const additionReducer = createReducer(INITIAL_STATE, HANDLERS);

export default additionReducer;
