import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import colors from 'enums/colors.enums';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  ${({ relative }) =>
    relative &&
    `position: relative;
    top: 50px;`}
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  font-family: sans-serif;
  border-bottom: 1px solid rgb(109, 109, 109);
  padding: 8px;

  &.active {
    background: ${colors.blueGreen};
  }
`;
