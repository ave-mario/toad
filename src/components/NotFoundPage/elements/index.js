import styled from 'styled-components';
import { Button } from '../../../elements';

const darkGrey = '#4d4d4d';

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
`;
export const NotFoundButton = styled(Button)`
  border-radius: 2px;
  margin: 5px auto;
  max-width: 150px;
  max-height: 25px;
  background-color: ${darkGrey};
  transition: background-color 0.3s;
  :hover {
    background-color: #27ae60;
  }
`;
