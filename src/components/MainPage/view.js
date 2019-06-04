import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Title, Button } from '../../elements';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleLogout() {
    const { logout } = this.props;
    logout();
  }

  render() {
    return (
      <>
        <Title>Main Page</Title>
        <Button type="button" onClick={this.handleLogout}>
          LOGOUT
        </Button>
      </>
    );
  }
}

MainPage.propTypes = {
  logout: PropTypes.func.isRequired
};

export default MainPage;
