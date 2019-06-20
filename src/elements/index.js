import styled from 'styled-components';
import { Close } from 'styled-icons/material/Close';
import colors from 'enums/colors.enums';

export const Form = styled.form`
  width: ${({ width }) => width || '400px'};
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  margin: ${({ margin }) => margin || '0 auto'};
`;

export const Input = styled.input`
  height: ${({ height }) => height || '35px'};
  border: ${({ border }) => border || `1px solid ${colors.grey}`};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || `${colors.white}`};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  margin: ${({ margin }) => margin || '3px 15px'};

  ${({ number }) =>
    number ? 'width: 80px; padding-right: 10px;' : 'width: 280px;'}

  padding-left: 13px;
  font-size: 1em;
  :focus {
    outline: none;
    border: 1px solid #ccc;
  }
`;

export const Button = styled.button`
  height: 35px;
  border-width: 0;
  outline: none;
  ${({ xs }) =>
    xs &&
    `
    border-radius: 10px;
    width: 50px;
    height: 20px;
  `}
  ${({ lg }) =>
    lg &&
    `
    border-radius: 10px;
    width: 100px;
  `}
  ${({ ms }) =>
    ms &&
    `
    border-radius: 15px;
    width: 300px;
  `}

   ${({ white }) =>
     white &&
     `
    background: ${colors.white};
    color: ${colors.darkGrey};
  `}

  ${({ blue }) =>
    blue &&
    `
    border: 1.5px solid ${colors.borderGrey};
    background: ${colors.blueGreen};
    color: ${colors.black};
    font-weight: bold;
  `}
`;

export const ButtonText = styled.span`
  display: ${({ display }) => display || 'block'};
  padding: ${({ margin }) => margin || '12px 24px'};
  font-size: ${({ fontSize }) => fontSize || '1em'};
  color: ${({ color }) => color || `${colors.white}`};
`;

export const Title = styled.h1`
  font-weight: ${({ fontWeight }) => fontWeight || '600px'};
  color: ${({ color }) => color || `${colors.darkGrey}`};
  font-size: ${({ fontSize }) => fontSize || '2.2em'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  margin: ${({ margin }) => margin || '5px auto'};
`;

export const Title2 = styled.h2`
  font-weight: ${({ fontWeight }) => fontWeight || '300px'};
  color: ${props => props.color || `${colors.darkGrey}`};
  font-size: ${({ fontSize }) => fontSize || '1.2em'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  margin: ${({ margin }) => margin || '1px auto'};
`;

export const Title3 = styled.h3`
  font-weight: ${({ fontWeight }) => fontWeight || '300px'};
  color: ${props => props.color || `${colors.darkGrey}`};
  font-size: ${({ fontSize }) => fontSize || '0.8em'};
  margin: ${({ margin }) => margin || '1px auto'};
`;

export const Text = styled.p`
  color: ${props => props.color || `${colors.darkGrey}`};
  margin: ${props => props.margin || '0'};
`;

export const Nav = styled.nav`
  margin: ${({ margin }) => margin || '5px auto'};
  padding: ${({ margin }) => margin || '5px'};
`;

export const Section = styled.section`
  margin: ${({ margin }) => margin || '5px auto'};
  padding: ${({ margin }) => margin || '5px'};
`;

export const Article = styled.article`
  margin: ${({ margin }) => margin || '5px auto'};
  padding: ${({ margin }) => margin || '5px'};
`;

export const Aside = styled.aside`
  margin: ${({ margin }) => margin || '5px auto'};
  padding: ${({ margin }) => margin || '5px'};
`;

export const Header = styled.header`
  margin: ${({ margin }) => margin || '5px auto'};
  padding: ${({ padding }) => padding || '5px'};
`;

export const Footer = styled.footer`
  margin: ${({ margin }) => margin || '1px auto'};
  padding: ${({ margin }) => margin || '0'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '50px'};
  ${({ background }) => background && ` background:${colors.whiteDark}`};
  ${({ absolute, fix }) =>
    absolute
      ? ` position: absolute;
      bottom: 0;`
      : fix &&
        ` bottom: 0;
    position: fixed;`};
`;
export const Main = styled.main`
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ margin }) => margin || '0'};
  width: ${({ width }) => width || '100%'};
  text-align: center;
`;
export const ErrorText = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'center'};
  color: ${({ color }) => color || 'red'};
  font-size: ${({ fontSize }) => fontSize || `13px`};
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || '2px'};
`;
export const ServerError = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  color: ${({ color }) => color || 'white'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#ed1e3a'};
  font-size: ${({ fontSize }) => fontSize || `13px`};
  width: ${({ width }) => width || '80%'};
  height: ${({ height }) => height || '25px'};
  padding: ${({ padding }) => padding || '5px'};
  padding-left: ${({ padding }) => padding || '12px'};
  margin: ${({ margin }) => margin || '0 auto'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  display: ${({ display }) => display || 'flex'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'no-wrap'};
`;
export const ServerErrorText = styled.span`
  color: ${({ color }) => color || 'white'};
  font-size: ${({ fontSize }) => fontSize || `13px`};
  max-width: ${({ maxWidth }) => maxWidth || `80%`};
  overflow: ${({ overflow }) => overflow || 'hidden'};
`;
export const CloseButton = styled.button`
  cursor: pointer;
  width: 50px;
  padding: 0;
  margin: 0;
  height: 50px;
  border: none;
  background: none;
  vertical-align: bottom;
  :focus {
    outline: none;
  }
`;
export const CloseIcon = styled(Close)`
  color: ${colors.red};
  ${({ small }) => small && `width: 20px;height: 20px; `};
`;
export const Loader = styled.div`
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #a4a6a8;
  border-bottom: 10px solid #a4a6a8;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
