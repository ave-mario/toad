import React from 'react';
import { Menu, Card } from 'elements/content';
import { Text } from 'elements';
import RoutesName from 'enums/routes-name.enums';
import ListLinks from '../List';
import Footer from './leftmenu.footer';

const LeftMenu = () => {
  return (
    <Card left>
      <Card blue height="150px">
        <Text color="white">Photo employee</Text>
      </Card>
      <Menu>
        <ListLinks list={RoutesName} />
        <Card dark absolute padding="0">
          <Footer />
        </Card>
      </Menu>
    </Card>
  );
};

export default LeftMenu;
