import { connect } from 'react-redux';
import authActions from 'actions/auth.actions';
import MainPage from './view';

const { Creators } = authActions;

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(Creators.logout());
    },
    load: () => {
      dispatch(Creators.loadRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
