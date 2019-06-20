import styled, { css } from 'styled-components';
import colors from '../enums/colors.enums';
import { Text } from './index';

export const Content = styled.div`
  ${({ flex }) => (flex ? `display: flex; ` : 'display: block;   ')};
  background: ${({ white }) => (white ? `#fff` : '#f7f7f7')};
  width: 100%;
  ${({ padding }) => padding && `padding-bottom: 50px;`}
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
  min-height: 100vh;
  width: 100%;
`;

export const Card = styled.section`
  margin: 0;
  ${({ left, padding, height }) =>
    left
      ? `
    padding: 0;
    position: relative;
    max-height: 100vh;
    min-height: 100vh;
    width: 250px;
    background: ${colors.white}
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
    `}
  ${({ border }) => border && 'border-bottom: 1px solid'}
`;

export const Image = styled.div`
  background: ${({ image }) =>
    image ? `url(${image}) no-repeat` : `${colors.whiteYellow}`};
  width: ${({ width }) => width || '80px'};
  height: ${({ height }) => height || '80px'};
`;
