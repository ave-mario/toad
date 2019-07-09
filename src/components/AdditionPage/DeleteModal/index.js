import { connect } from 'react-redux';
import Actions from 'actions/addition.actions';
import DeleteView from './delete-modal.view';

const mapDispatchToProps = dispatch => {
  return {
    remove: id => {
      dispatch(Actions.Creators.removeAdditionRequest(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteView);
