import React from 'react';
import PropTypes from 'prop-types';
import { Header, Navbar } from './elements';
import { Text } from '../../elements';

const HeaderLayout = ({ title }) => {
  return (
    <Header>
      <Text color="white">{title}</Text>
      <Navbar>
        <Text color="white">Logout</Text>
      </Navbar>
    </Header>
  );
};

HeaderLayout.propTypes = {
  title: PropTypes.string.isRequired
};
export default HeaderLayout;
