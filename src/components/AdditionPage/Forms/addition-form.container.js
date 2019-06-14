import { connect } from 'react-redux';
import AdditionForm from './addition-form.form';
import Actions from '../../../actions/addition.actions';

const mapDispatchToProps = dispatch => {
  return {
    saveService: (name, price) => {
      dispatch(Actions.Creators.saveAdditionRequest(name, price));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AdditionForm);
