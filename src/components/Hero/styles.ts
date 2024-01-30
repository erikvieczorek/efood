import styled from 'styled-components'
import { colors } from '../../styles '
import backgroundVector from '../../assets/images/Vector.png'

export const Container = styled.div`
  text-align: center;
  height: 384px;
  max-height: 100%;
  padding-top: 40px;
  background-color: ${colors.lightSalmon};
  background-image: url(${backgroundVector});
`

export const Title = styled.h2`
  width: 539px;
  margin: 138px auto 0;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
`
