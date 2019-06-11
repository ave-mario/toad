import styled from 'styled-components';
import { Button, Form, Input, Title, Title2 } from '../../../elements';

export const SubmitButton = styled(Button)`
  position: relative;
  display: block;
  margin: 10px auto 10px 10%;
  padding: 0px;
  width: 100px;
  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #2ecc71;
  color: #ecf0f1;

  transition: background-color 0.3s;
  :hover {
    background-color: #27ae60;
  }
`;

export const WelcomeForm = styled(Form)`
  min-width: 200px;
  max-width: 600px;
  border-width: 0;
  border-radius: 20px;
  background-color: #f7f8f9;
  box-shadow: 0px 0px 30px -12px rgba(0, 0, 0, 0.75);
  margin: 8px;
`;

export const WelcomeInput = styled(Input)`
  width: 80%;
  padding-left: 13px;
  font-size: 1em;
  :focus {
    outline: none;
    border: 1px solid #ccc;
  }
`;
export const WelcomeTitle = styled(Title)`
  font-size: 1.75em;
`;
export const WelcomeSubTitle = styled(Title2)`
  margin: 0;
`;
