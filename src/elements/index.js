import styled from 'styled-components';

export const Form = styled.form`
  width: ${({ width }) => width || '300px'};
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  margin: ${({ margin }) => margin || '0 auto'};
`;

export const Input = styled.input`
  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height || '35px'};
  border: ${({ border }) => border || '1px solid #ccc'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  border-radius: ${({ borderRadius }) => borderRadius || '3px'};
  margin: ${({ margin }) => margin || '1px auto'};
`;

export const Button = styled.button`
  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height || '35px'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#5995ef'};
  color: ${({ color }) => color || '#fff'};
  border-radius: ${({ borderRadius }) => borderRadius || '3px'};
`;

export const Title = styled.h1`
  font-family: ${({ fontFamily }) => fontFamily || `'Raleway', sans-serif`};
  font-weight: ${({ fontWeight }) => fontWeight || '600px'};
  color: ${({ color }) => color || '#4d4d4d'};
  font-size: ${({ fontSize }) => fontSize || '2.2em'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  margin: ${({ margin }) => margin || '5px auto'};
`;

export const Title2 = styled.h2`
  font-family: ${({ fontFamily }) => fontFamily || `'Raleway', sans-serif`};
  font-weight: ${({ fontWeight }) => fontWeight || '300px'}
  color: ${props => props.color || '#4d4d4d'};
  font-size: ${({ fontSize }) => fontSize || '1.2em'};
  margin: ${({ margin }) => margin || '1px auto'};
`;

export const Text = styled.p`
  font-family: ${({ fontFamily }) => fontFamily || `'Raleway', sans-serif`};
  color: ${props => props.color || '#4d4d4d'};
`;
