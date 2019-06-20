import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Title } from 'elements';
import { addResource } from 'config/localize';
import localization from './localization.main';

addResource('MainPage', localization);
function MainPage({ t }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <Title> {t('labels.title')}</Title>
    </div>
  );
}

MainPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('MainPage')(MainPage);
