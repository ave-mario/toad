import React from 'react';
import { Menu, Card } from '../../../elements/content';
import { Text } from '../../../elements';
import List from '../../List/list.menu';
import RoutesName from '../../../enums/routes-name.enums';

const LeftMenu = () => {
  return (
    <Card padding="0" lgW>
      <Card background="#0d9198" lgH>
        <Text color="white">Photo employee</Text>
      </Card>
      <Menu>
        <List list={RoutesName} />
      </Menu>
    </Card>
  );
};

export default LeftMenu;
