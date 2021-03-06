import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Content, MainContent } from 'elements/content';
import Titles from 'enums/routes-name.enums';
import Header from '../Header';
import Menu from '../Menu/LeftMenu';
import ErrorBar from '../ErrorBar';

const Wrapper = styled(MainContent)``;

export const LayoutPage = Component => {
  const Layout = props => {
    const [title, setTitle] = useState('');
    const {
      match: { url }
    } = props;

    useEffect(() => {
      const router = Titles.find(({ link }) => link === url);
      setTitle(router.name);
      document.title = router.name;
    }, [url]);

    return (
      <>
        <Content flex>
          <Menu />
          <Content full main>
            <Header title={title} />
            <Wrapper>
              <Component {...props} />
              <ErrorBar />
            </Wrapper>
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
