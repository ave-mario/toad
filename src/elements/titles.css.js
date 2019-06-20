import styled from 'styled-components';
import colors from '../enums/colors.enums';

export const Title = styled.h1`
  font-weight: ${({ fontWeight }) => fontWeight || '600px'};
  color: ${({ color }) => color || `${colors.darkGrey}`};
  font-size: ${({ fontSize }) => fontSize || '2.2em'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  margin: ${({ margin }) => margin || '5px auto'};
`;

export const Title2 = styled.h2`
  font-weight: ${({ fontWeight }) => fontWeight || '300px'}
  color: ${props => props.color || `${colors.darkGrey}`};
  font-size: ${({ fontSize }) => fontSize || '1.2em'};
  text-align: ${({ textAlign }) => textAlign || 'center'};s
  margin: ${({ margin }) => margin || '1px auto'};
`;

export const Title3 = styled.h3`
  font-weight: ${({ fontWeight }) => fontWeight || '300px'}
  color: ${props => props.color || `${colors.darkGrey}`};
  font-size: ${({ fontSize }) => fontSize || '0.8em'};
  margin: ${({ margin }) => margin || '1px auto'};
`;

export const Text = styled.p`
  color: ${props => props.color || `${colors.darkGrey}`};
  margin: ${props => props.margin || '0'};
`;
