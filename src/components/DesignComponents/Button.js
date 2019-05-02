import styled, { css } from 'styled-components'
import { color, fontSizing, breakpoints } from './theme'

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 25px;
  font-size: ${fontSizing.s};
  font-weight: bold;
  cursor: pointer;

  @media ${breakpoints[0]} {
    font-size: ${fontSizing.xs}
  }

  ${props =>
    props.primary &&
    css`
      background: ${color.primaryColor}; 
  `}

  ${props =>
    props.add &&
    css`
      color: white;
      background: ${color.secondaryColor}; 
  `}

  ${props =>
    props.update &&
    css`
      color: white;
      background: coral; 
  `}

  ${props =>
    props.delete &&
    css`
      color: white;
      background: ${color.danger}; 
  `}


`

export default Button