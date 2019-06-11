import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Title, Button } from '../../elements';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const { load, user } = this.props;
    if (!user) load();
  }

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
  logout: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};
MainPage.defaultProps = {
  user: false
};

export default MainPage;
