import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from '../routes';
import authActions from '../actions/auth.actions';

const { Creators } = authActions;
class App extends React.Component {
  componentDidMount() {
    const { load } = this.props;
    load();
  }

  render() {
    return (
      <>
        <Routes />
      </>
    );
  }
}

App.propTypes = {
  load: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(Creators.loadRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
