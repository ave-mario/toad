import { connect } from 'react-redux';
import EditView from './edit-modal.formik';
import Actions from '../../../actions/addition.actions';

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
