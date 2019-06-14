import { connect } from 'react-redux';
import WelcomePage from './view';

const mapStateToProps = state => ({
  search: state.router.location.search,
  isFailed: state.auth.isFailed
});

export default connect(mapStateToProps)(WelcomePage);
