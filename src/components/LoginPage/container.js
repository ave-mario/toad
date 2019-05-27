import { connect } from 'react-redux';
import login from '../../actions/auth.actions';
import LoginPage from './view';
import store from '../../store';

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { login, store }
)(LoginPage);
