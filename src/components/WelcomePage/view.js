import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { addResource } from 'config/localize';
import services from 'services';
import { Welcome } from './WelcomeForm';
import localization from './localization.welcome';

addResource('Welcome', localization);

function WelcomePage(props) {
  const { isFailed, error, search } = props;
  const { name, token } = services.queryStringService(search);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <Welcome name={name} token={token} isFailed={isFailed} error={error} />
    </div>
  );
}

WelcomePage.propTypes = {
  isFailed: PropTypes.bool,
  error: PropTypes.string,
  search: PropTypes.string.isRequired
};
WelcomePage.defaultProps = {
  isFailed: false,
  error: 'false'
};
export default withTranslation('Welcome')(WelcomePage);
