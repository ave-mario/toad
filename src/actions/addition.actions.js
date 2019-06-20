import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  saveAdditionRequest: ['name', 'price'],
  saveAdditionSuccess: ['payload'],
  saveAdditionFailure: ['error'],
  loadAdditionListRequest: [null],
  loadAdditionListSuccess: ['payload'],
  loadAdditionListFailure: ['error'],
  changeAdditionRequest: ['id', 'data'],
  changeAdditionSuccess: ['id', 'name', 'price'],
  changeAdditionFailure: ['error']
});
const additionActions = { Types, Creators };

export default additionActions;
