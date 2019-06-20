import styled from 'styled-components';
import { Button, Input as InputCommon } from 'elements';

const tableBorder = '#c4c7ca';
const tableColor = '#fff';

export const TableRow = styled.div`
  display: flex;
  ${({ mgHeight2 }) => mgHeight2 && `margin-bottom: 20px; margin-top: 20px;`}
`;

export const TableCell = styled.div`
  width: ${({ xs2, xs4 }) =>
    xs2 ? `80px` : (xs4 && `calc(100% / 4)`) || '30px'};
  border: solid 1px ${tableBorder};
  font-weight: 700;
  background: ${({ yellow }) => (yellow ? '#E9F0CA' : tableColor)};
  ${({ yellow }) => yellow && `color: #0000007d;`}
  ${({ padding }) =>
    padding
      ? `padding: 8px 0 0 15px;`
      : 'padding: 0.4em 0.1em; text-align: center;'}
`;

export const TableButton = styled(Button)`
  margin: 0 8px;

  width: 60px;
  border-radius: 5px;
  ${({ red }) =>
    red
      ? `
    background: #98261a;
    color: white;
  `
      : ` background: #258086;
          color: white;`}
`;

export const Content = styled.div`
  margin-left: 14%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-right: 14%;
`;

export const Input = styled(InputCommon)`
  margin: 0 15px 0 0;
`;
