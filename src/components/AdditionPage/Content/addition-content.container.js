import { connect } from 'react-redux';
import AdditionView from './addition-content.view';
import Actions from '../../../actions/addition.actions';

const mapStateToProps = state => ({
  data: state.additions.docs,
  total: state.additions.total,
  page: state.additions.page,
  limit: state.additions.limit,
  pages: state.additions.pages
});

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(Actions.Creators.loadAdditionListRequest());
    },
    change: (id, { name, price }) => {
      dispatch(Actions.Creators.changeAdditionRequest(id, { name, price }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdditionView);
