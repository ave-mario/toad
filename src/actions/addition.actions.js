import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  saveAdditionRequest: ['name', 'price'],
  saveAdditionSuccess: ['user', 'tokens'],
  saveAdditionFailure: ['error'],
  loadAdditionListRequest: [null],
  loadAdditionListSuccess: ['payload'],
  loadAdditionListFailure: ['error']
});
const additionActions = { Types, Creators };

export default additionActions;
