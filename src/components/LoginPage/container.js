import { connect } from 'react-redux';
import authActions from 'actions/auth.actions';
import LoginPage from './view';

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
