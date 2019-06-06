import styled from 'styled-components';

const white = '#fff';
const grey = '#ccc';
const darkGrey = '#4d4d4d';
const blue = '#5995ef';

export const Form = styled.form`
  width: ${({ width }) => width || '400px'};
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  margin: ${({ margin }) => margin || '0 auto'};
`;

export const Input = styled.input`
  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height || '35px'};
  border: ${({ border }) => border || `1px solid ${grey}`};
  background-color: ${({ backgroundColor }) => backgroundColor || `${white}`};
  border-radius: ${({ borderRadius }) => borderRadius || '20px'};
  margin: ${({ margin }) => margin || '3px auto'};
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
  padding: ${({ margin }) => margin || '5px'};
`;

export const Footer = styled.footer`
  margin: ${({ margin }) => margin || '1px auto'};
  padding: ${({ margin }) => margin || '0'};
  width: ${({ width }) => width || '100%'};
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
  padding: ${({ margin }) => margin || '2px'};
`;
