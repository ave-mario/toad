/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Menu from '../Menu/LeftMenu/left-menu.view';
import { Content } from '../../elements/content';
import Titles from '../../enums/routes-name.enums';

export const LayoutPage = Component => {
  const Layout = props => {
    const [title, setTitle] = useState('');

    useEffect(() => {
      const router = Titles.find(({ link }) => link === props.match.url);
      setTitle(router.name);
    });

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
  return Layout;
};

export default LayoutPage;
