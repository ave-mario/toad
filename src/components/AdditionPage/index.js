/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Content, ContentTitle as Title } from 'elements/content';
import { withTranslation } from 'react-i18next';
import { addResource } from 'config/localize';
import AdditionForm from './Forms';
import Table from './Content';
import localization from './localization.addition';

addResource('Addition', localization);
const AdditionView = ({ t }) => {
  return (
    <>
      <Title margin>{t('labels.titleHeader')}</Title>
      <Content white>
        <Card border>
          <AdditionForm />
        </Card>
      </Content>
      <Title margin>{t('labels.titleMain')}</Title>
      <Content white padding>
        <Table />
      </Content>
    </>
  );
};
AdditionView.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('Addition')(AdditionView);
