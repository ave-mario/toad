import { connect } from 'react-redux';
import Actions from 'actions/addition.actions';
import EditView from './edit-modal.formik';

const mapDispatchToProps = dispatch => {
  return {
    update: (id, { name, price }) => {
      dispatch(Actions.Creators.changeAdditionRequest(id, { name, price }));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditView);
