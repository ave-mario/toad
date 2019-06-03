import { connect } from 'react-redux';
import LoginPage from './view';
import authActions from '../../actions/auth.actions';

const { Creators } = authActions;
const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => {
      dispatch(Creators.loginRequest(email, password));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
