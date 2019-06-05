import { connect } from 'react-redux';
import LoginPage from './view';

const mapStateToProps = state => ({
  isFailed: state.auth.isFailed
});

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
