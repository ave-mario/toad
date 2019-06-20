import styled, { css } from 'styled-components';
import colors from 'enums/colors.enums';
import { Text } from './index';

export const Content = styled.div`
  ${({ flex }) => (flex ? `display: flex; ` : 'display: block;   ')};
  background: ${({ white }) => (white ? `#fff` : '#f7f7f7')};
  width: 100%;
  ${({ padding }) => padding && `padding-bottom: 50px;`}
  ${({ full }) =>
    full &&
    `margin-left: 200px; 
    height: fit-content;
    min-height: 100vh;`}
`;

export const MainContent = styled.div`
  height: 100%;
  padding: 30px 80px;
  top: 0;
  position: relative;
`;

export const ContentTitle = styled(Text)`
  color: rgb(0, 0, 0, 0.6);
  font-size: 1.25em;
  ${({ margin }) => margin && `margin: 8px 50px;`}
`;

export const Menu = styled.nav`
  background: ${({ background }) => background || `${colors.whiteDark}`};
  min-height: 350px;
  width: 100%;
  min-height: calc(100vh - 166px);
  height: 100vh;

  @media (max-height: 500px) {
    height: fit-content;
  }
`;

export const Card = styled.section`
  margin: 0;
  ${({ left, padding, height }) =>
    left
      ? `
    padding: 0;
    position: relative;
    width: 200px;
    height: fit-content;
    min-height: 500px;
    max-height: 100vh;
    position: fixed;

    @media (max-height: 500px) {
    overflow-y: scroll;
    min-height: unset;
  }
  `
      : `padding: ${padding || '16px 16px 0'};
         height: ${height || `60px`};`}

  ${({ dark }) => dark && `background:  ${colors.black}`};
  ${({ blue }) => blue && `background:  ${colors.blueGreen}`};
  ${({ color }) => color && `background  ${colors.color}`};

  ${({ absolute }) =>
    absolute &&
    css`
      position: absolute;
      bottom: 0;
      width: 100%;

      @media (max-height: 500px) {
        position: initial;
        margin: 150px 0 0;
      }
    `}

  ${({ border }) => border && 'border-bottom: 1px solid'}
`;

export const Image = styled.div`
  background: ${({ image }) =>
    image ? `url(${image}) no-repeat` : `${colors.whiteYellow}`};
  width: ${({ width }) => width || '80px'};
  height: ${({ height }) => height || '80px'};
`;
