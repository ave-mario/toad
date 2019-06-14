import styled from 'styled-components';
import { Close } from 'styled-icons/material/Close';
import colors from '../enums/colors.enums';

const { white, grey, darkGrey, blue } = colors;

export const Form = styled.form`
  width: ${({ width }) => width || '400px'};
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  margin: ${({ margin }) => margin || '0 auto'};
`;

export const Input = styled.input`
  width: ${({ width }) => width || '276px'};
  height: ${({ height }) => height || '35px'};
  border: ${({ border }) => border || `1px solid ${grey}`};
  background-color: ${({ backgroundColor }) => backgroundColor || `${white}`};
  border-radius: ${({ borderRadius }) => borderRadius || '20px'};
  margin: ${({ margin }) => margin || '3px auto'};
  padding: 0 13px;

  :focus {
    outline: none;
    border: 1px solid #ccc;
  }
`;

export const Button = styled.button`
  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height || '35px'};
  background-color: ${({ backgroundColor }) => backgroundColor || `${blue}`};
  color: ${({ color }) => color || `${white}`};
  border-radius: ${({ borderRadius }) => borderRadius || '15px'};
  border: ${({ border }) => border || `none`};
`;
export const ButtonText = styled.span`
  display: ${({ display }) => display || 'block'};
  padding: ${({ margin }) => margin || '12px 24px'};
  font-size: ${({ fontSize }) => fontSize || '1em'};
  color: ${({ color }) => color || `${white}`};
`;

export const Title = styled.h1`
  font-family: ${({ fontFamily }) => fontFamily || `'Raleway', sans-serif`};
  font-weight: ${({ fontWeight }) => fontWeight || '600px'};
  color: ${({ color }) => color || `${darkGrey}`};
  font-size: ${({ fontSize }) => fontSize || '2.2em'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  margin: ${({ margin }) => margin || '5px auto'};
`;

export const Title2 = styled.h2`
  font-family: ${({ fontFamily }) => fontFamily || `'Raleway', sans-serif`};
  font-weight: ${({ fontWeight }) => fontWeight || '300px'}
  color: ${props => props.color || `${darkGrey}`};
  font-size: ${({ fontSize }) => fontSize || '1.2em'};
  text-align: ${({ textAlign }) => textAlign || 'center'};s
  margin: ${({ margin }) => margin || '1px auto'};
`;

export const Title3 = styled.h3`
  font-family: ${({ fontFamily }) => fontFamily || `'Raleway', sans-serif`};
  font-weight: ${({ fontWeight }) => fontWeight || '300px'}
  color: ${props => props.color || `${darkGrey}`};
  font-size: ${({ fontSize }) => fontSize || '0.8em'};
  margin: ${({ margin }) => margin || '1px auto'};
`;

export const Text = styled.p`
  font-family: ${({ fontFamily }) => fontFamily || `'Raleway', sans-serif`};
  color: ${props => props.color || `${darkGrey}`};
  padding: 8px 0;
  margin: 0;
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
  padding: ${({ margin }) => margin || '5px'};
`;

export const Footer = styled.footer`
  margin: ${({ margin }) => margin || '1px auto'};
  padding: ${({ margin }) => margin || '0'};
  width: ${({ width }) => width || '100%'};
  ${({ background }) => `background: ${background};`}
  height:  ${props => (props.small ? `30px` : `50px`)}
  ${({ absolute }) =>
    absolute &&
    `position: absolute;
    bottom: 0;`}
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
  font-family: ${({ fontFamily }) => fontFamily || `'Raleway', sans-serif`};
  font-size: ${({ fontSize }) => fontSize || `13px`};
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || '2px'};
`;
export const ServerError = styled.div`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  color: ${({ color }) => color || 'white'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#ed1e3a'};
  font-family: ${({ fontFamily }) => fontFamily || `'Raleway', sans-serif`};
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
  font-family: ${({ fontFamily }) => fontFamily || `'Raleway', sans-serif`};
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
export const CloseIcon = styled(Close)``;
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
