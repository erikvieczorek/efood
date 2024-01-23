import styled from 'styled-components'
import { colors } from '../../styles '
import backgroundVector from '../../assets/images/Vector.png'

export const Container = styled.div`
  background-color: ${colors.lightSalmon};
  height: 384px;
  top: -24px;
  max-height: 100%;
  text-align: center;
  padding-top: 40px;
  background-image: url(${backgroundVector});
`

export const Title = styled.h2`
  font-size: 36px;
  width: 539px;
  margin: 138px auto 0;
  font-weight: 900;
  line-height: 42px;
`
