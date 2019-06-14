import { connect } from 'react-redux';
import ErrorBar from './view';

const mapStateToProps = state => ({
  error: state.auth.error
});

export default connect(mapStateToProps)(ErrorBar);
