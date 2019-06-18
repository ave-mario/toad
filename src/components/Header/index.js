import React from 'react';
import PropTypes from 'prop-types';
import { Header, Navbar } from './elements';
import { Text, Button } from '../../elements';
import i18n from '../../config/localize';

const HeaderLayout = ({ title }) => {
  const handleClick = lang => {
    i18n.changeLanguage(lang);
  };

  return (
    <Header>
      <Text color="white">{title}</Text>
      <Navbar>
        <Button
          width="50px"
          height="20px"
          background="white"
          color="#111"
          onClick={() => handleClick('ru')}
        >
          RU
        </Button>
        <Button
          width="50px"
          height="20px"
          background="white"
          color="#111"
          onClick={() => handleClick('en')}
        >
          EN
        </Button>
      </Navbar>
    </Header>
  );
};

HeaderLayout.propTypes = {
  title: PropTypes.string.isRequired
};
export default HeaderLayout;
