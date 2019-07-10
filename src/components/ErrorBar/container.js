import { connect } from 'react-redux';
import ErrorBar from './view';

const mapStateToProps = state => ({
  message: state.error.message || state.error.success,
  isError: Boolean(state.error.message)
});

export default connect(mapStateToProps)(ErrorBar);
