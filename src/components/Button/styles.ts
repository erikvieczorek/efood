import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles '
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  display: block;
  text-align: center;
  padding: 4px;
  width: ${(props) => (props.variant === 'secondary' ? '100%' : 'unset')};
  margin-bottom: ${(props) => (props.variant === 'secondary' ? '8px' : '0')};
  background-color: ${colors.lightSalmon};
  color: ${colors.salmon};
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid ${colors.white};
  border-radius: 8px;
  color: ${colors.white};
  background-color: transparent;
`
