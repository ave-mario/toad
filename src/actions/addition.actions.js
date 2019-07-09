import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  saveAdditionRequest: ['name', 'price'],
  saveAdditionSuccess: ['payload', 'message'],
  saveAdditionFailure: ['message'],
  loadAdditionListRequest: [null],
  loadAdditionListSuccess: ['payload'],
  loadAdditionListFailure: ['message'],
  changeAdditionRequest: ['id', 'data'],
  changeAdditionSuccess: ['id', 'name', 'price', 'message'],
  changeAdditionFailure: ['message']
});
const additionActions = { Types, Creators };

export default additionActions;
