import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import services from '../../services';
import { Welcome } from './WelcomeForm';
import { dispatcher } from '../../config/redux.store';

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      token: null
    };
  }

  componentDidMount() {
    const { search } = this.props;
    const { name, token } = services.queryStringService(search);
    if (!name || !token) dispatcher(push('/login'));
    this.setState({ name, token });
  }

  render() {
    const { isFailed, error } = this.props;
    const { name, token } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <Welcome isFailed={isFailed} name={name} token={token} error={error} />
      </div>
    );
  }
}

WelcomePage.propTypes = {
  search: PropTypes.string.isRequired,
  isFailed: PropTypes.bool,
  error: PropTypes.string
};
WelcomePage.defaultProps = {
  isFailed: false,
  error: 'false'
};
export default WelcomePage;
