import { connect } from 'react-redux';
import history from '../../config/browser.history';
import NotFoundPage from './view';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => {
      dispatch(history.goBack());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFoundPage);
