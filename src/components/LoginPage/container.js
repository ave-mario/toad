import { connect } from 'react-redux';
import LoginPage from './view';
import authActions from '../../actions/auth.actions';

const { Creators } = authActions;

const mapStateToProps = state => ({
  isFailed: state.auth.isFailed,
  user: state.auth.user,
  error: state.auth.error,
  tokens: state.auth.tokens
});

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(Creators.loadRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
