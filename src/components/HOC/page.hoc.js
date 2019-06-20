import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Content, MainContent } from 'elements/content';
import Titles from 'enums/routes-name.enums';
import Header from '../Header';
import Menu from '../Menu/LeftMenu';

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
          <Content full main>
            <Header title={title} />
            <MainContent>
              <Component {...props} />
            </MainContent>
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
