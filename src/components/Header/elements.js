import styled from 'styled-components';
import colors from 'enums/colors.enums';
import { Button } from 'elements';

export const Header = styled.div`
  height: ${({ height }) => height || '30px'};
  background: ${({ background }) => background || `${colors.whiteDark}`};
  display: flex;
  justify-content: ${({ justify }) => justify || 'space-between'};
  padding: 20px 30px 10px;
`;

export const Navbar = styled.nav`
  width: ${({ width }) => width || 'fit-content'};
  display: flex;
  justify-content: ${({ justify }) => justify || 'space-between'};
`;

export const NavButton = styled(Button)`
  margin: 0 5px;
`;
