import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import Header from '../Header';
import Menu from '../Menu/LeftMenu/left-menu.view';
import { Content } from '../../elements/content';
import Titles from '../../enums/routes-name.enums';

export const LayoutPage = Component => {
  const Layout = props => {
    const [title, setTitle] = useState('');
    const {
      match: { url }
    } = props;

    useEffect(() => {
      const router = Titles.find(({ link }) => link === url);
      setTitle(router.name);
    }, [url]);

    return (
      <>
        <Content flex>
          <Menu />
          <Content>
            <Header title={title} />
            <Component {...props} />
            <Footer />
          </Content>
        </Content>
      </>
    );
  };

  Layout.propTypes = {
    match: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    ).isRequired
  };

  return Layout;
};

export default LayoutPage;
