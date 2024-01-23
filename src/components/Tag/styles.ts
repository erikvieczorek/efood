import styled from 'styled-components'
import { colors } from '../../styles '
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.salmon};
  color: ${colors.white};
  display: inline-block;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
  margin-right: 8px;
  font-weight: bold;
  margin-right: 8px;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
`
