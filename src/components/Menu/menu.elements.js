import styled from 'styled-components';
import Logout from 'static/logout.png';

export const Icon = styled.svg`
  background: url(${Logout}) no-repeat 25px 10px;
  background-size: 35px;
  height: 50px;
  width: 60px;
`;

export const Card = styled.div`
  /* margin: 5px 0; */
  height: 100%;
  width: 50%;
  border-right: 2px solid #fff;
`;
