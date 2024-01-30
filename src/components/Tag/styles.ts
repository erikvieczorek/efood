import styled from 'styled-components'
import { colors } from '../../styles '
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: inline-block;
  margin-right: 8px;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  background-color: ${colors.salmon};
  color: ${colors.white};
`
