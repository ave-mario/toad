import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'elements';
import i18n from 'config/localize';
import { Header, Navbar, NavButton } from './elements';

const HeaderLayout = ({ title }) => {
  const handleClick = lang => {
    i18n.changeLanguage(lang);
  };

  return (
    <Header>
      <Text color="white">{title}</Text>
      <Navbar>
        <NavButton xs white color="white" onClick={() => handleClick('ru')}>
          RU
        </NavButton>
        <NavButton xs white onClick={() => handleClick('en')}>
          EN
        </NavButton>
      </Navbar>
    </Header>
  );
};

HeaderLayout.propTypes = {
  title: PropTypes.string.isRequired
};
export default HeaderLayout;
