import { connect } from 'react-redux';
import Actions from 'actions/addition.actions';
import AdditionView from './addition-content.view';

const mapStateToProps = state => ({
  ...state.additions
});

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(Actions.Creators.loadAdditionListRequest());
    },
    change: (id, { name, price }) => {
      dispatch(Actions.Creators.changeAdditionRequest(id, { name, price }));
    },
    update: (id, { name, price }) => {
      dispatch(Actions.Creators.changeAdditionRequest(id, { name, price }));
    },
    remove: id => {
      dispatch(Actions.Creators.removeAdditionRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdditionView);
