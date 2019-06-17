import styled, { css } from 'styled-components';
import colors from '../enums/colors.enums';

export const Content = styled.div`
  ${({ flex }) =>
    flex
      ? `display: flex;`
      : 'display: block;  width: -webkit-fill-available; '};
`;

export const Menu = styled.nav`
  background: ${({ background }) => background || `${colors.whiteYellow}`};
  min-height: 100vh;
  ${({ absolute }) =>
    absolute &&
    css`
      position: absolute;
    `}
`;

export const Card = styled.section`
  padding: ${({ padding }) => padding || '16px 16px 0'};
  margin: 0;
  background: ${({ background }) => background || `${colors.white}`};
  ${({ relative }) =>
    relative &&
    css`
      position: relative;
    `}
  ${({ lgW }) => lgW && 'width: 250px;'}
  ${({ lgH }) => lgH && 'height: 80px'}
`;

export const Image = styled.div`
  background: ${({ image }) =>
    image ? `url(${image}) no-repeat` : `${colors.whiteYellow}`};
  width: ${({ width }) => width || '80px'};
  height: ${({ height }) => height || '80px'};
`;
