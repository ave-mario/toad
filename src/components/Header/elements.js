import styled from 'styled-components';

const blackColor = '#111';

export const Header = styled.div`
  height: ${({ height }) => height || '50px'};
  background: ${({ background }) => background || `${blackColor}`};
  display: flex;
  justify-content: ${({ justify }) => justify || 'space-between'};
  padding: 0 20px;
`;

export const Navbar = styled.nav`
  width: ${({ width }) => width || 'fit-content'};
  display: flex;
  justify-content: ${({ justify }) => justify || 'space-between'};
`;
