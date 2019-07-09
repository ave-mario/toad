import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import NotFoundPage from './view';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    goBack: () => {
      dispatch(push('/login'));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFoundPage);
