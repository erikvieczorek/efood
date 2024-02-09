import styled from 'styled-components'
import { breakpoints, colors } from '../../styles '
import backgroundVector from '../../assets/images/Vector.png'

export const Container = styled.div`
  text-align: center;
  height: 384px;
  max-height: 100%;
  padding-top: 40px;
  background-color: ${colors.lightSalmon};
  background-image: url(${backgroundVector});

  @media (max-width: ${breakpoints.tablet}) {
    height: 160px;

    img {
      width: 20%;
    }
  }
`

export const Title = styled.h2`
  width: 539px;
  margin: 138px auto 0;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    line-height: unset;
    margin: 16px auto;
    width: 90%;
  }
`
