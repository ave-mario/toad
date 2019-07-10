import reducer from '../additions.reducer';
import Actions from 'actions/addition.actions';
import data from 'components/AdditionPage/Content/tests/mock-store';

const { Types } = Actions;
describe('Addition room reducer test', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      docs: [],
      total: 5,
      limit: 10,
      page: 1,
      pages: 1
    });
  });

  test('should handle LOAD_ADDITION_LIST_SUCCESS', () => {
    const action = {
      type: Types.LOAD_ADDITION_LIST_SUCCESS,
      payload: data
    };
    expect(reducer({}, action)).toEqual({
      ...data
    });
  });

  test('should handle CHANGE_ADDITION_SUCCESS', () => {
    const addition = {
      id: '5d024a6ced7a017a7c437b44',
      name: 'Service',
      price: 2.3
    };
    const action = {
      type: Types.CHANGE_ADDITION_SUCCESS,
      ...addition
    };
    const docsNew = data.docs.map(doc =>
      doc._id === action.id
        ? (doc = {
            _id: addition.id,
            name: addition.name,
            price: addition.price
          })
        : doc
    );
    const { docs, ...other } = data;
    expect(reducer({ ...data }, action)).toEqual({
      docs: docsNew,
      ...other
    });
  });
  test('should handle SAVE_ADDITION_SUCCESS', () => {
    const action = {
      type: Types.SAVE_ADDITION_SUCCESS,
      payload: {
        _id: '5d08bc215fed4735253489175546',
        name: 'Rooms services second',
        price: 0.5
      }
    };
    const oldData = data;
    const { docs, ...other } = data;
    const docsNew = docs.concat({ ...action.payload });
    expect(reducer({ ...oldData }, action)).toEqual({
      docs: docsNew,
      ...other
    });
  });
});
