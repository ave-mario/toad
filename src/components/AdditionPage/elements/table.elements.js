import styled from 'styled-components';
import { Close } from 'styled-icons/material/Close';

const tableBorder = '#c4c7ca';
const tableColor = '#81babd';

export const TableRow = styled.div`
  text-align: center;
  display: flex;
  ${({ mgHeight2 }) => mgHeight2 && `margin-bottom: 30px; margin-top: 20px;`}
`;

export const TableCell = styled.div`
  width: ${({ xs2, xs4 }) => (xs2 ? `30px` : xs4 && `calc(100% / 4)`)};
  padding: 0.8em 0.1em;
  border: solid 1px ${tableBorder};
  background: ${({ color }) => color || tableColor};
  ${({ mg4 }) => mg4 && `margin-left: 30px; margin-right: 30px;`}
`;

export const CloseIcon = styled(Close)`
  height: 20px;
`;
