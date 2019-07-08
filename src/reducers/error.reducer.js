const INITIAL_STATE = {
  message: '',
  success: ''
};

const errorReducer = (state = INITIAL_STATE, { type, message = '' }) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return INITIAL_STATE;

  if (matches[2] === 'FAILURE') {
    return {
      ...state,
      message
    };
  }
  if (matches[2] === 'SUCCESS') {
    return {
      ...state,
      success: message
    };
  }
  return INITIAL_STATE;
};

export default errorReducer;
