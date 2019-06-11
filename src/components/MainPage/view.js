import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Title, Button } from '../../elements';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { logout } = this.props;
    logout();
  }

  render() {
    const { t } = this.props;
    return (
      <>
        <Title>Main Page</Title>
        <Button type="button" onClick={this.handleLogout}>
          {t('LogoutButton')}
        </Button>
      </>
    );
  }
}

MainPage.propTypes = {
  logout: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation('common')(MainPage);
