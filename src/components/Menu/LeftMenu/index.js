import React from 'react';
import { Menu, Card } from '../../../elements/content';
import { Text } from '../../../elements';
import ListLinks from '../List';
import RoutesName from '../../../enums/routes-name.enums';

const LeftMenu = () => {
  return (
    <Card left>
      <Card blue height="150px">
        <Text color="white">Photo employee</Text>
      </Card>
      <Menu>
        <ListLinks list={RoutesName} />
        <Card dark absolute padding="0" />
      </Menu>
    </Card>
  );
};

export default LeftMenu;
