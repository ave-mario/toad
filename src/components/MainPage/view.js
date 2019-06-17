import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Title, Button } from '../../elements';
import { addResource } from '../../config/localize';
import localization from './localization.main';

addResource('Login', localization);
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <Title>Main Page</Title>
        <Button type="button" onClick={this.handleLogout}>
          {t('buttons.Logout')}
        </Button>
      </div>
    );
  }
}

MainPage.propTypes = {
  logout: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation('Login')(MainPage);
