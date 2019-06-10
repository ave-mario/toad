import { connect } from 'react-redux';
import MainPage from './view';
import authActions from '../../actions/auth.actions';

const { Creators } = authActions;

const mapStateToProps = () => ({});

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
