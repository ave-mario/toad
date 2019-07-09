import styled from 'styled-components';
import colors from 'enums/colors.enums';

const Wrapper = styled.div`
  background: white;
  position: fixed;
  border: 1px solid #d0cccc;
  border-radius: 20px;
  top: 20%;
  margin: 20px auto 0;
  transition: all 0.8s;
  ${({ editAdd }) => editAdd && 'width:500px;'};
  left: calc(50% - 200px);
  box-shadow: 0 0 0 1000px ${colors.shadowModal};
`;

const Header = styled.div`
  background: #e9f0ca;
  border-radius: 20px 20px 0 0;
  height: 40px;
  line-height: 40px;
  padding: 5px 30px;
  text-align: right;
  border-bottom: 1px solid;
`;

const HeaderLabel = styled.h3`
  color: #707070;
  float: left;
  margin: 0;
  padding: 0;
`;

const Main = styled.main`
  min-height: 50px;
  padding: 10px 30px;
`;

const Form = styled.form`
  padding: 30px 15px;

  ${({ flex }) => (flex ? `display: flex` : `text-align: center;`)}
`;

const Input = styled.input`
  padding: 8px 16px;
  margin: 2px 15px;
  outline: none;
  width: 80%;
  border-radius: 12px;
  border-color: #707070;
`;

const Footer = styled.div`
  border-radius: 0 0 20px 20px;
  height: 35px;
  padding: 0 30px 10px;
`;

export { Wrapper, Header, Form, Footer, HeaderLabel, Input, Main };
