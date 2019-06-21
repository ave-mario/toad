const INITIAL_STATE = {
  message: ''
};

const errorReducer = (state = INITIAL_STATE, { type, error }) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return INITIAL_STATE;

  if (matches[2] === 'FAILURE') {
    return {
      ...state,
      message: error
    };
  }
  return INITIAL_STATE;
};

export default errorReducer;
