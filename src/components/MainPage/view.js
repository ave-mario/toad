import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Title, Button, Loader } from '../../elements';

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
    const { user, t } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        {!user ? (
          <Loader />
        ) : (
          <>
            <Title>Main Page</Title>
            <Button type="button" onClick={this.handleLogout}>
              {t('button.Logout')}
            </Button>
          </>
        )}
      </div>
    );
  }
}

MainPage.propTypes = {
  logout: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};
MainPage.defaultProps = {
  user: false
};

export default withTranslation()(MainPage);
