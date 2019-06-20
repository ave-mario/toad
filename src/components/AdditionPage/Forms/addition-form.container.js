import { connect } from 'react-redux';
import Actions from 'actions/addition.actions';
import AdditionForm from './addition-form.form';

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
