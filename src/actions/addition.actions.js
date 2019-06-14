import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  saveAdditionRequest: ['name', 'price'],
  saveAdditionSuccess: ['user', 'tokens'],
  saveAdditionFailure: ['error']
});
const additionActions = { Types, Creators };

export default additionActions;
