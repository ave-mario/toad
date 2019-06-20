/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Card, Content, ContentTitle as Title } from 'elements/content';
import { addResource } from 'config/localize';
import AdditionForm from './Forms';
import Table from './Content';
import localization from './localization.addition';

addResource('Addition', localization);
const AdditionView = () => {
  return (
    <>
      <Title margin>Add new service of room</Title>
      <Content white>
        <Card border>
          <AdditionForm />
        </Card>
      </Content>
      <Title margin>Services of room</Title>
      <Content white padding>
        <Table />
      </Content>
    </>
  );
};

export default AdditionView;
