/* eslint-disable no-underscore-dangle */
import React from 'react';
import AdditionForm from './Forms';
import Table from './Content';
import { Card, Content } from '../../elements/content';
import { addResource } from '../../config/localize';
import localization from './localization.addition';

addResource('Addition', localization);
const AdditionView = () => {
  return (
    <Card padding="50px">
      <Card border padding="0  0 20px 0">
        <AdditionForm />
      </Card>
      <Content relative>
        <Table />
      </Content>
    </Card>
  );
};

export default AdditionView;
