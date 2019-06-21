import { connect } from 'react-redux';
import ErrorBar from './view';

const mapStateToProps = state => ({
  error: state.error.message
});

export default connect(mapStateToProps)(ErrorBar);
