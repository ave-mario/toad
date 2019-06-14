/* eslint-disable import/prefer-default-export */
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Menu from '../Menu/LeftMenu/left-menu.view';
import { Content } from '../../elements/content';

export const LayoutPage = Component => props => (
  <>
    <Content flex>
      <Menu />
      <Content>
        <Header />
        <Component {...props} />
      </Content>
    </Content>
    <Footer />
  </>
);
